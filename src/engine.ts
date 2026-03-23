import type {
  CoverResult,
  FrequencyBand,
  SearchResults,
  SortMethod,
  SpanCandidate,
  WordOption,
} from "./types";
import rawDictionaryData from "../cmudict.json";

type RawDictionary = Record<string, Array<{ word: string; freq: number }>>;

type FrequencyStats = {
  p50: number;
  p75: number;
  p90: number;
  p99: number;
  logFloor: number;
  logCeiling: number;
};

type CleanWord = WordOption & {
  rawWord: string;
  weirdness: number;
};

type InternalSpan = SpanCandidate & {
  pathContribution: number;
};

type PathSeed = {
  key: string;
  spans: InternalSpan[];
  additiveScore: number;
  partCount: number;
  totalFreq: number;
  totalWordScore: number;
  minSpanLength: number;
  maxSpanLength: number;
};

type SearchGraph = {
  numStr: string;
  byStart: InternalSpan[][];
  byKey: Map<string, InternalSpan>;
  allSpans: InternalSpan[];
};

type CoverAnalysis = {
  cover: CoverResult;
  nonJunky: boolean;
  nonJunkyScore: number;
};

const MAX_PATHS_PER_RANGE = 320;
const MAX_RETURNED_COVERS = 180;
const MAX_ANCHOR_COMBINATIONS = 84;
const MAX_COUNT = 1_000_000;
const EXACT_RANGE_LIMIT = 4_096;
const MAX_BROWSE_SPANS = 96;
const MAX_WORDS_PER_SPAN = 40;
const MIN_WORDS_AFTER_PRUNE = 8;

let dictionaryPromise: Promise<Record<string, CleanWord[]>> | null = null;
let dictionaryCache: Record<string, CleanWord[]> | null = null;
let frequencyStats: FrequencyStats | null = null;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function round1(value: number) {
  return Math.round(value * 10) / 10;
}

function roundWhole(value: number) {
  return Math.round(value);
}

function atPercentile(sorted: number[], percentile: number) {
  if (sorted.length === 0) {
    return 0;
  }

  const index = Math.floor((sorted.length - 1) * percentile);
  return sorted[index] ?? sorted[sorted.length - 1] ?? 0;
}

function computeFrequencyStats(rawDict: RawDictionary): FrequencyStats {
  const values: number[] = [];

  for (const entries of Object.values(rawDict)) {
    for (const entry of entries) {
      values.push(Math.max(0, entry.freq));
    }
  }

  values.sort((left, right) => left - right);

  const p25 = atPercentile(values, 0.25);
  const p50 = atPercentile(values, 0.5);
  const p75 = atPercentile(values, 0.75);
  const p90 = atPercentile(values, 0.9);
  const p99 = atPercentile(values, 0.99);

  return {
    p50,
    p75,
    p90,
    p99,
    logFloor: Math.log10(p25 + 10),
    logCeiling: Math.log10(p99 + 10),
  };
}

function cleanWordLabel(rawWord: string) {
  return rawWord.replace(/\(\d+\)$/u, "");
}

function wordWeirdness(rawWord: string, cleanedWord: string) {
  let penalty = 0;

  if (/\(\d+\)$/u.test(rawWord)) {
    penalty += 0.22;
  }

  if (/['’]/u.test(cleanedWord)) {
    penalty += 0.08;
  }

  if (/[^a-z'-]/iu.test(cleanedWord)) {
    penalty += 0.16;
  }

  if (cleanedWord.length < 2) {
    penalty += 0.14;
  }

  return clamp(penalty, 0, 0.55);
}

function bandForFrequency(freq: number, stats: FrequencyStats): FrequencyBand {
  if (freq >= stats.p90) {
    return "frequent";
  }

  if (freq >= stats.p75) {
    return "common";
  }

  if (freq >= stats.p50) {
    return "uncommon";
  }

  return "rare";
}

function normalizedFrequency(freq: number, stats: FrequencyStats) {
  const ceiling = Math.max(stats.logCeiling, stats.logFloor + 0.001);
  const numerator = Math.log10(Math.max(0, freq) + 10) - stats.logFloor;
  const denominator = ceiling - stats.logFloor;
  return clamp(numerator / denominator, 0, 1);
}

function wordScore(freq: number, weirdness: number, stats: FrequencyStats) {
  const base = normalizedFrequency(freq, stats);
  const cleanliness = 1 - weirdness;
  return clamp(base * 0.88 + cleanliness * 0.12, 0, 1);
}

function compareWords(left: CleanWord, right: CleanWord) {
  return right.score - left.score || right.freq - left.freq || left.word.localeCompare(right.word);
}

function pruneEntries(entries: CleanWord[], stats: FrequencyStats) {
  if (entries.length <= MIN_WORDS_AFTER_PRUNE) {
    return entries;
  }

  const best = entries[0];

  if (!best) {
    return entries;
  }

  const deepBucket = entries.length >= 24;
  const minScore = deepBucket ? Math.max(best.score - 24, 68) : Math.max(best.score - 30, 60);
  const minRareScore = deepBucket ? Math.max(best.score - 14, 78) : Math.max(best.score - 18, 72);
  const uncommonFreqFloor = deepBucket ? stats.p50 : Math.floor(stats.p50 * 0.15);
  const rareFreqFloor = deepBucket ? Math.floor(stats.p50 * 0.35) : Math.floor(stats.p50 * 0.12);

  const pruned = entries.filter((entry, index) => {
    if (index < 8) {
      return true;
    }

    if (entry.weirdness >= 0.18 && entry.score < best.score - 8) {
      return false;
    }

    if (entry.band === "rare") {
      return entry.score >= minRareScore && entry.freq >= rareFreqFloor;
    }

    if (entry.band === "uncommon") {
      return entry.score >= minScore && entry.freq >= uncommonFreqFloor;
    }

    return entry.score >= minScore;
  });

  if (pruned.length < MIN_WORDS_AFTER_PRUNE) {
    return entries.slice(0, Math.min(MAX_WORDS_PER_SPAN, Math.max(MIN_WORDS_AFTER_PRUNE, entries.length)));
  }

  return pruned.slice(0, MAX_WORDS_PER_SPAN);
}

async function ensureDictionary() {
  if (!dictionaryPromise) {
    dictionaryPromise = (async () => {
      const rawDict = rawDictionaryData as RawDictionary;
      const stats = computeFrequencyStats(rawDict);
      frequencyStats = stats;

      const cleanedDict: Record<string, CleanWord[]> = {};

      for (const [digits, entries] of Object.entries(rawDict)) {
        const deduped = new Map<string, CleanWord>();

        for (const entry of entries) {
          const word = cleanWordLabel(entry.word).trim();

          if (!word) {
            continue;
          }

          const weirdness = wordWeirdness(entry.word, word);
          const cleanEntry: CleanWord = {
            rawWord: entry.word,
            word,
            freq: Math.max(0, entry.freq),
            weirdness,
            score: round1(wordScore(entry.freq, weirdness, stats) * 100),
            band: bandForFrequency(entry.freq, stats),
          };

          const normalized = word.toLowerCase();
          const existing = deduped.get(normalized);

          if (!existing || compareWords(cleanEntry, existing) < 0) {
            deduped.set(normalized, cleanEntry);
          }
        }

        const ranked = pruneEntries(Array.from(deduped.values()).sort(compareWords), stats);

        if (ranked.length > 0) {
          cleanedDict[digits] = ranked;
        }
      }

      dictionaryCache = cleanedDict;
      return cleanedDict;
    })();
  }

  return dictionaryPromise;
}

function spanLengthFit(spanLength: number) {
  switch (spanLength) {
    case 1:
      return 0.18;
    case 2:
      return 0.62;
    case 3:
      return 0.86;
    case 4:
      return 1;
    case 5:
      return 1.08;
    case 6:
      return 0.96;
    default:
      return Math.max(0.32, 0.96 - (spanLength - 6) * 0.08);
  }
}

function varietyScore(entryCount: number) {
  if (entryCount <= 1) {
    return 0;
  }

  return clamp(Math.log2(entryCount) / 4, 0, 1);
}

function buildSpan(
  start: number,
  end: number,
  digits: string,
  entries: CleanWord[],
  totalDigits: number,
) {
  const bestWord = entries[0];
  const words = entries;
  const coverageRatio = digits.length / Math.max(totalDigits, 1);
  const candidateVariety = varietyScore(entries.length);
  const localScore =
    100 *
    clamp(
      (bestWord.score / 100) * 0.66 +
        spanLengthFit(digits.length) * 0.22 +
        candidateVariety * 0.04 +
        coverageRatio * 0.12,
      0,
      1,
    );

  const pathContribution =
    (bestWord.score / 100) * 1.25 +
    spanLengthFit(digits.length) * 0.85 +
    candidateVariety * 0.18 +
    coverageRatio * 0.45;

  return {
    key: `${start}:${end}:${digits}`,
    start,
    end,
    digits,
    spanLength: digits.length,
    words,
    bestWord,
    wordCount: entries.length,
    localScore: round1(localScore),
    pathContribution,
  } satisfies InternalSpan;
}

function buildGraph(numStr: string, dict: Record<string, CleanWord[]>) {
  const byStart: InternalSpan[][] = Array.from({ length: numStr.length }, () => []);
  const byKey = new Map<string, InternalSpan>();
  const allSpans: InternalSpan[] = [];

  for (let start = 0; start < numStr.length; start += 1) {
    for (let end = start + 1; end <= numStr.length; end += 1) {
      const digits = numStr.slice(start, end);
      const entries = dict[digits];

      if (!entries || entries.length === 0) {
        continue;
      }

      const span = buildSpan(start, end, digits, entries, numStr.length);
      byStart[start].push(span);
      byKey.set(span.key, span);
      allSpans.push(span);
    }

    byStart[start].sort(
      (left, right) =>
        right.pathContribution - left.pathContribution || right.localScore - left.localScore,
    );
  }

  return {
    numStr,
    byStart,
    byKey,
    allSpans,
  } satisfies SearchGraph;
}

function spanCanComplete(span: InternalSpan, graph: SearchGraph, countMemo: Map<string, number>) {
  return (
    countWays(0, span.start, graph, countMemo) > 0 &&
    countWays(span.end, graph.numStr.length, graph, countMemo) > 0
  );
}

function bestAnchorCover(
  anchor: InternalSpan,
  graph: SearchGraph,
  countMemo: Map<string, number>,
  exactMemo: Map<string, PathSeed[]>,
  trimMemo: Map<string, PathSeed[]>,
) {
  const analyses = analyzeAnchorCovers(anchor, graph, countMemo, exactMemo, trimMemo);
  return analyses[0] ?? null;
}

function analyzeAnchorCovers(
  anchor: InternalSpan,
  graph: SearchGraph,
  countMemo: Map<string, number>,
  exactMemo: Map<string, PathSeed[]>,
  trimMemo: Map<string, PathSeed[]>,
) {
  const leftPaths =
    anchor.start === 0
      ? [emptyPath()]
      : solveRangeAdaptive(0, anchor.start, graph, countMemo, exactMemo, trimMemo);
  const rightPaths =
    anchor.end === graph.numStr.length
      ? [emptyPath()]
      : solveRangeAdaptive(anchor.end, graph.numStr.length, graph, countMemo, exactMemo, trimMemo);
  const merged: PathSeed[] = [];

  for (const left of leftPaths.slice(0, MAX_ANCHOR_COMBINATIONS)) {
    for (const right of rightPaths.slice(0, MAX_ANCHOR_COMBINATIONS)) {
      merged.push(mergeAroundAnchor(left, anchor, right));
    }
  }

  return sortCovers(trimPaths(merged).map((path) => analyzeCover(path, graph.numStr.length)), "quality")
    .filter((entry) => entry.nonJunky)
    .slice(0, MAX_RETURNED_COVERS);
}

function anchorPriority(span: InternalSpan, totalDigits: number) {
  const coverageRatio = span.spanLength / Math.max(totalDigits, 1);
  return span.localScore + span.spanLength * 6 + coverageRatio * 10;
}

function browsePriority(span: InternalSpan, totalDigits: number, fitScore: number) {
  const coverageRatio = span.spanLength / Math.max(totalDigits, 1);
  return span.localScore + span.spanLength * 4 + coverageRatio * 8 + fitScore * 2.8;
}

function browseFitScore(span: InternalSpan, graph: SearchGraph, countMemo: Map<string, number>) {
  const leftWays = span.start === 0 ? 1 : countWays(0, span.start, graph, countMemo);
  const rightWays =
    span.end === graph.numStr.length ? 1 : countWays(span.end, graph.numStr.length, graph, countMemo);

  if (leftWays === 0 || rightWays === 0) {
    return 0;
  }

  return Math.log2(Math.min(MAX_COUNT, leftWays) + 1) + Math.log2(Math.min(MAX_COUNT, rightWays) + 1);
}

function pickBrowseSpans(
  spans: InternalSpan[],
  graph: SearchGraph,
  countMemo: Map<string, number>,
) {
  const ranked = spans.map((span) => ({
    span,
    fitScore: browseFitScore(span, graph, countMemo),
  }));
  const selected: SpanCandidate[] = [];
  const perStart = new Map<number, number>();
  const perEnd = new Map<number, number>();
  const digitCoverage = new Array<number>(graph.numStr.length).fill(0);

  while (ranked.length > 0 && selected.length < MAX_BROWSE_SPANS) {
    let bestIndex = -1;
    let bestScore = -Infinity;

    for (let index = 0; index < ranked.length; index += 1) {
      const entry = ranked[index];

      if (!entry) {
        continue;
      }

      const { span, fitScore } = entry;
      const startCount = perStart.get(span.start) ?? 0;
      const endCount = perEnd.get(span.end) ?? 0;

      if (startCount >= 8 || endCount >= 8) {
        continue;
      }

      let coverageBonus = 0;

      for (let digitIndex = span.start; digitIndex < span.end; digitIndex += 1) {
        const coverage = digitCoverage[digitIndex] ?? 0;
        coverageBonus += coverage === 0 ? 18 : coverage === 1 ? 10 : coverage === 2 ? 5 : coverage === 3 ? 2 : 0;
      }

      const boundaryBonus = Math.max(0, 8 - startCount * 2) + Math.max(0, 8 - endCount * 2);
      const score =
        browsePriority(span, graph.numStr.length, fitScore) +
        coverageBonus +
        boundaryBonus +
        fitScore;

      if (
        score > bestScore ||
        (score === bestScore &&
          (fitScore > (ranked[bestIndex]?.fitScore ?? -Infinity) ||
            span.localScore > (ranked[bestIndex]?.span.localScore ?? -Infinity)))
      ) {
        bestIndex = index;
        bestScore = score;
      }
    }

    if (bestIndex < 0) {
      break;
    }

    const chosen = ranked.splice(bestIndex, 1)[0];

    if (!chosen) {
      break;
    }

    selected.push(stripInternalSpan(chosen.span));
    perStart.set(chosen.span.start, (perStart.get(chosen.span.start) ?? 0) + 1);
    perEnd.set(chosen.span.end, (perEnd.get(chosen.span.end) ?? 0) + 1);

    for (let digitIndex = chosen.span.start; digitIndex < chosen.span.end; digitIndex += 1) {
      digitCoverage[digitIndex] = (digitCoverage[digitIndex] ?? 0) + 1;
    }
  }

  return selected;
}

function pickAnchors(spans: InternalSpan[], graph: SearchGraph, countMemo: Map<string, number>) {
  const exactMemo = new Map<string, PathSeed[]>();
  const trimMemo = new Map<string, PathSeed[]>();
  const completable = spans
    .filter((span) => spanCanComplete(span, graph, countMemo))
    .map((span) => ({
      span,
      bestCover: bestAnchorCover(span, graph, countMemo, exactMemo, trimMemo),
      priority: anchorPriority(span, graph.numStr.length),
    }))
    .filter(
      (
        entry,
      ): entry is { span: InternalSpan; bestCover: CoverAnalysis; priority: number } =>
        entry.bestCover !== null,
    );
  const ranked = [...completable].sort(
    (left, right) =>
      right.priority - left.priority ||
      right.bestCover.nonJunkyScore - left.bestCover.nonJunkyScore ||
      right.bestCover.cover.quality - left.bestCover.cover.quality ||
      right.span.localScore - left.span.localScore ||
      right.span.spanLength - left.span.spanLength ||
      right.span.bestWord.score - left.span.bestWord.score,
  );

  const selected: SpanCandidate[] = [];
  const perStart = new Map<number, number>();
  const perEnd = new Map<number, number>();

  for (const entry of ranked) {
    const { span } = entry;

    if ((perStart.get(span.start) ?? 0) >= 4 || (perEnd.get(span.end) ?? 0) >= 4) {
      continue;
    }

    selected.push(stripInternalSpan(span));
    perStart.set(span.start, (perStart.get(span.start) ?? 0) + 1);
    perEnd.set(span.end, (perEnd.get(span.end) ?? 0) + 1);

    if (selected.length >= 18) {
      break;
    }
  }

  return selected;
}

function emptyPath(): PathSeed {
  return {
    key: "",
    spans: [],
    additiveScore: 0,
    partCount: 0,
    totalFreq: 0,
    totalWordScore: 0,
    minSpanLength: Number.POSITIVE_INFINITY,
    maxSpanLength: 0,
  };
}

function comparePaths(left: PathSeed, right: PathSeed) {
  return (
    right.additiveScore - left.additiveScore ||
    left.partCount - right.partCount ||
    right.maxSpanLength - left.maxSpanLength
  );
}

function trimPaths(paths: PathSeed[]) {
  const unique = new Map<string, PathSeed>();

  for (const path of paths.sort(comparePaths)) {
    if (!unique.has(path.key)) {
      unique.set(path.key, path);
    }

    if (unique.size >= MAX_PATHS_PER_RANGE) {
      break;
    }
  }

  return Array.from(unique.values());
}

function appendSpan(span: InternalSpan, suffix: PathSeed) {
  const partCount = suffix.partCount + 1;
  const additiveScore =
    suffix.additiveScore + span.pathContribution - (suffix.partCount > 0 ? 0.34 : 0);

  return {
    key: suffix.key ? `${span.key}|${suffix.key}` : span.key,
    spans: [span, ...suffix.spans],
    additiveScore,
    partCount,
    totalFreq: suffix.totalFreq + span.bestWord.freq,
    totalWordScore: suffix.totalWordScore + span.bestWord.score / 100,
    minSpanLength:
      suffix.partCount > 0 ? Math.min(span.spanLength, suffix.minSpanLength) : span.spanLength,
    maxSpanLength:
      suffix.partCount > 0 ? Math.max(span.spanLength, suffix.maxSpanLength) : span.spanLength,
  } satisfies PathSeed;
}

function mergeAroundAnchor(left: PathSeed, anchor: InternalSpan, right: PathSeed) {
  const boundaryPenalty = (left.partCount > 0 ? 0.34 : 0) + (right.partCount > 0 ? 0.34 : 0);
  const spans = [...left.spans, anchor, ...right.spans];
  const partCount = left.partCount + 1 + right.partCount;
  const minSpanLength = Math.min(
    left.partCount > 0 ? left.minSpanLength : anchor.spanLength,
    anchor.spanLength,
    right.partCount > 0 ? right.minSpanLength : anchor.spanLength,
  );
  const maxSpanLength = Math.max(
    left.partCount > 0 ? left.maxSpanLength : anchor.spanLength,
    anchor.spanLength,
    right.partCount > 0 ? right.maxSpanLength : anchor.spanLength,
  );

  return {
    key: spans.map((span) => span.key).join("|"),
    spans,
    additiveScore: left.additiveScore + anchor.pathContribution + right.additiveScore - boundaryPenalty,
    partCount,
    totalFreq: left.totalFreq + anchor.bestWord.freq + right.totalFreq,
    totalWordScore: left.totalWordScore + anchor.bestWord.score / 100 + right.totalWordScore,
    minSpanLength,
    maxSpanLength,
  } satisfies PathSeed;
}

function solveRange(
  start: number,
  end: number,
  graph: SearchGraph,
  memo: Map<string, PathSeed[]>,
) {
  const key = `${start}:${end}`;
  const cached = memo.get(key);

  if (cached) {
    return cached;
  }

  if (start === end) {
    const single = [emptyPath()];
    memo.set(key, single);
    return single;
  }

  const spans = graph.byStart[start] ?? [];
  const candidates: PathSeed[] = [];

  for (const span of spans) {
    if (span.end > end) {
      continue;
    }

    const suffixes = solveRange(span.end, end, graph, memo);

    for (const suffix of suffixes) {
      candidates.push(appendSpan(span, suffix));
    }
  }

  const trimmed = trimPaths(candidates);
  memo.set(key, trimmed);
  return trimmed;
}

function solveRangeExact(
  start: number,
  end: number,
  graph: SearchGraph,
  memo: Map<string, PathSeed[]>,
) {
  const key = `${start}:${end}`;
  const cached = memo.get(key);

  if (cached) {
    return cached;
  }

  if (start === end) {
    const single = [emptyPath()];
    memo.set(key, single);
    return single;
  }

  const spans = graph.byStart[start] ?? [];
  const candidates: PathSeed[] = [];

  for (const span of spans) {
    if (span.end > end) {
      continue;
    }

    const suffixes = solveRangeExact(span.end, end, graph, memo);

    for (const suffix of suffixes) {
      candidates.push(appendSpan(span, suffix));
    }
  }

  const unique = new Map<string, PathSeed>();

  for (const path of candidates.sort(comparePaths)) {
    if (!unique.has(path.key)) {
      unique.set(path.key, path);
    }
  }

  const exact = Array.from(unique.values());
  memo.set(key, exact);
  return exact;
}

function solveRangeAdaptive(
  start: number,
  end: number,
  graph: SearchGraph,
  countMemo: Map<string, number>,
  exactMemo: Map<string, PathSeed[]>,
  trimMemo: Map<string, PathSeed[]>,
) {
  if (countWays(start, end, graph, countMemo) <= EXACT_RANGE_LIMIT) {
    return solveRangeExact(start, end, graph, exactMemo);
  }

  return solveRange(start, end, graph, trimMemo);
}

function countWays(
  start: number,
  end: number,
  graph: SearchGraph,
  memo: Map<string, number>,
): number {
  const key = `${start}:${end}`;
  const cached = memo.get(key);

  if (cached !== undefined) {
    return cached;
  }

  if (start === end) {
    memo.set(key, 1);
    return 1;
  }

  let total = 0;

  for (const span of graph.byStart[start] ?? []) {
    if (span.end > end) {
      continue;
    }

    total += countWays(span.end, end, graph, memo);

    if (total >= MAX_COUNT) {
      memo.set(key, MAX_COUNT);
      return MAX_COUNT;
    }
  }

  memo.set(key, total);
  return total;
}

function stripInternalSpan(span: InternalSpan): SpanCandidate {
  return {
    key: span.key,
    start: span.start,
    end: span.end,
    digits: span.digits,
    spanLength: span.spanLength,
    words: span.words,
    bestWord: span.bestWord,
    wordCount: span.wordCount,
    localScore: span.localScore,
  };
}

function nonJunkyCoverScore(
  quality: number,
  partCount: number,
  singleDigitCount: number,
  shortChunkCount: number,
  maxSpanLength: number,
) {
  return (
    quality -
    Math.max(partCount - 3, 0) * 8 -
    singleDigitCount * 12 -
    Math.max(shortChunkCount - 2, 0) * 5 +
    Math.max(maxSpanLength - 4, 0) * 4
  );
}

function analyzeCover(path: PathSeed, totalDigits: number): CoverAnalysis {
  const balance =
    path.partCount <= 1
      ? 100
      : clamp(100 * (1 - (path.maxSpanLength - path.minSpanLength) / totalDigits), 0, 100);
  const partPenalty = Math.pow(0.77, Math.max(path.partCount - 1, 0));
  const additiveNorm = clamp(path.additiveScore / Math.max(path.partCount * 2.1, 1.2), 0, 1);
  const quality = 100 * (additiveNorm * 0.72 + partPenalty * 0.16 + (balance / 100) * 0.12);
  const spans = path.spans.map(stripInternalSpan);
  const roundedQuality = round1(quality);
  const roundedBalance = round1(balance);
  const singleDigitCount = spans.filter((span) => span.spanLength === 1).length;
  const shortChunkCount = spans.filter((span) => span.spanLength <= 2).length;
  const score = nonJunkyCoverScore(
    roundedQuality,
    path.partCount,
    singleDigitCount,
    shortChunkCount,
    path.maxSpanLength,
  );
  const cover = {
    key: path.key,
    spans,
    quality: roundedQuality,
    balance: roundedBalance,
    partCount: path.partCount,
    averageFreq: roundWhole(path.totalFreq / Math.max(path.partCount, 1)),
    copyText: path.spans.map((span) => `${span.digits}: ${span.bestWord.word}`).join(" + "),
  } satisfies CoverResult;

  return {
    cover,
    nonJunky: score >= 70,
    nonJunkyScore: round1(score),
  };
}

function sortCovers(covers: CoverAnalysis[], method: SortMethod) {
  const sorted = [...covers];

  switch (method) {
    case "length":
      return sorted.sort(
        (left, right) =>
          Number(right.nonJunky) - Number(left.nonJunky) ||
          left.cover.partCount - right.cover.partCount ||
          right.nonJunkyScore - left.nonJunkyScore ||
          right.cover.quality - left.cover.quality ||
          right.cover.balance - left.cover.balance,
      );
    case "balanced":
      return sorted.sort(
        (left, right) =>
          Number(right.nonJunky) - Number(left.nonJunky) ||
          right.cover.balance - left.cover.balance ||
          right.nonJunkyScore - left.nonJunkyScore ||
          right.cover.quality - left.cover.quality ||
          left.cover.partCount - right.cover.partCount,
      );
    case "quality":
    default:
      return sorted.sort(
        (left, right) =>
          Number(right.nonJunky) - Number(left.nonJunky) ||
          right.nonJunkyScore - left.nonJunkyScore ||
          right.cover.quality - left.cover.quality ||
          left.cover.partCount - right.cover.partCount ||
          right.cover.balance - left.cover.balance,
      );
  }
}

function sortReturnedCovers(covers: CoverResult[], method: SortMethod) {
  const sorted = [...covers];

  switch (method) {
    case "length":
      return sorted.sort(
        (left, right) =>
          left.partCount - right.partCount ||
          right.quality - left.quality ||
          right.balance - left.balance,
      );
    case "balanced":
      return sorted.sort(
        (left, right) =>
          right.balance - left.balance ||
          right.quality - left.quality ||
          left.partCount - right.partCount,
      );
    case "quality":
    default:
      return sorted.sort(
        (left, right) =>
          right.quality - left.quality ||
          left.partCount - right.partCount ||
          right.balance - left.balance,
      );
  }
}

function overallCovers(graph: SearchGraph, sortMethod: SortMethod) {
  const countMemo = new Map<string, number>();
  const exactMemo = new Map<string, PathSeed[]>();
  const trimMemo = new Map<string, PathSeed[]>();
  const paths = solveRangeAdaptive(
    0,
    graph.numStr.length,
    graph,
    countMemo,
    exactMemo,
    trimMemo,
  );
  return sortCovers(paths.map((path) => analyzeCover(path, graph.numStr.length)), sortMethod)
    .filter((entry) => entry.nonJunky)
    .slice(0, MAX_RETURNED_COVERS)
    .map((entry) => entry.cover);
}

function anchorCovers(graph: SearchGraph, anchor: InternalSpan, sortMethod: SortMethod) {
  const countMemo = new Map<string, number>();
  const exactMemo = new Map<string, PathSeed[]>();
  const trimMemo = new Map<string, PathSeed[]>();
  return sortCovers(
    analyzeAnchorCovers(anchor, graph, countMemo, exactMemo, trimMemo),
    sortMethod,
  )
    .filter((entry) => entry.nonJunky)
    .slice(0, MAX_RETURNED_COVERS)
    .map((entry) => entry.cover);
}

function fallbackCoversFromChunks(
  graph: SearchGraph,
  anchors: SpanCandidate[],
  sortMethod: SortMethod,
) {
  const deduped = new Map<string, CoverResult>();

  for (const anchorCandidate of anchors) {
    const anchor = graph.byKey.get(anchorCandidate.key);

    if (!anchor) {
      continue;
    }

    for (const cover of anchorCovers(graph, anchor, sortMethod)) {
      if (!deduped.has(cover.key)) {
        deduped.set(cover.key, cover);
      }
    }
  }

  return sortReturnedCovers(Array.from(deduped.values()), sortMethod).slice(0, MAX_RETURNED_COVERS);
}

function runSearch(numStr: string, sortMethod: SortMethod, anchorKey: string | null, dict: Record<string, CleanWord[]>) {
  const graph = buildGraph(numStr, dict);
  const countMemo = new Map<string, number>();
  const fullCoverCount = countWays(0, numStr.length, graph, countMemo);
  const anchors = pickAnchors(graph.allSpans, graph, countMemo);
  const browseSpans = pickBrowseSpans(graph.allSpans, graph, countMemo);
  const anchor = anchorKey ? graph.byKey.get(anchorKey) ?? null : null;
  const covers = anchor
    ? anchorCovers(graph, anchor, sortMethod)
    : (() => {
        const direct = overallCovers(graph, sortMethod);
        return direct.length > 0 ? direct : fallbackCoversFromChunks(graph, anchors, sortMethod);
      })();

  return {
    numStr,
    anchors,
    browseSpans,
    covers,
    stats: {
      validSpanCount: graph.byKey.size,
      fullCoverCount,
      returnedCoverCount: covers.length,
    },
    selectedAnchor: anchor ? stripInternalSpan(anchor) : null,
  } satisfies SearchResults;
}

export async function warmSearchEngine() {
  await ensureDictionary();
}

export async function searchMnemonics(
  numStr: string,
  sortMethod: SortMethod,
  anchorKey: string | null,
) {
  const dict = await ensureDictionary();
  return runSearch(numStr, sortMethod, anchorKey, dict);
}

export function searchMnemonicsSync(
  numStr: string,
  sortMethod: SortMethod,
  anchorKey: string | null,
) {
  if (!dictionaryCache) {
    throw new Error("Search engine is not warmed");
  }

  return runSearch(numStr, sortMethod, anchorKey, dictionaryCache);
}
