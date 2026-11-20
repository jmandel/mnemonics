import rawDictionaryData from "../cmudict.json";

type RawDictionary = Record<string, Array<{ word: string; freq: number }>>;

export type Word = { word: string; freq: number; tier: 0 | 1 | 2 };

export type Breakdown = {
  key: string;
  chunks: string[];
  score: number;
};

const MAX_BREAKDOWNS = 500;

let dictionary: Map<string, Word[]> | null = null;

// Strip CMUdict variant markers like "read(2)", merge duplicates, sort most frequent first.
// tier: 0 = top 10% by frequency, 1 = above median, 2 = rare.
export function getDictionary() {
  if (dictionary) {
    return dictionary;
  }

  dictionary = new Map();
  const raw = rawDictionaryData as RawDictionary;
  const freqs = Object.values(raw)
    .flat()
    .map((entry) => entry.freq)
    .sort((left, right) => left - right);
  const p50 = freqs[Math.floor(freqs.length * 0.5)] ?? 0;
  const p90 = freqs[Math.floor(freqs.length * 0.9)] ?? 0;

  for (const [digits, entries] of Object.entries(raw)) {
    const byWord = new Map<string, Word>();

    for (const entry of entries) {
      const word = entry.word.replace(/\(\d+\)$/u, "").trim();

      // Skip letter names and abbreviations like "j", "j." or "a.s".
      if (word.length < 2 || !/[a-z]/iu.test(word) || word.includes(".")) {
        continue;
      }

      const existing = byWord.get(word.toLowerCase());

      if (!existing || entry.freq > existing.freq) {
        const freq = Math.max(0, entry.freq);
        byWord.set(word.toLowerCase(), { word, freq, tier: freq >= p90 ? 0 : freq >= p50 ? 1 : 2 });
      }
    }

    const words = [...byWord.values()].sort(
      (left, right) => right.freq - left.freq || left.word.localeCompare(right.word),
    );

    if (words.length > 0) {
      dictionary.set(digits, words);
    }
  }

  return dictionary;
}

export function wordsFor(digits: string) {
  return getDictionary().get(digits) ?? [];
}

// Mean log-frequency of each chunk's most common word; higher means easier words.
function breakdownScore(chunks: string[]) {
  const total = chunks.reduce((sum, chunk) => sum + Math.log10((wordsFor(chunk)[0]?.freq ?? 0) + 1), 0);
  return total / chunks.length;
}

// Every way to cut the digits into chunks that each have at least one word,
// fewest chunks first, then by how common each chunk's top word is.
export function findBreakdowns(digits: string, limit = MAX_BREAKDOWNS) {
  const dict = getDictionary();
  const n = digits.length;

  // canFinish[i]: digits[i..] can be fully split into dictionary chunks.
  const canFinish = new Array<boolean>(n + 1).fill(false);
  canFinish[n] = true;

  for (let start = n - 1; start >= 0; start -= 1) {
    for (let end = start + 1; end <= n; end += 1) {
      if (canFinish[end] && dict.has(digits.slice(start, end))) {
        canFinish[start] = true;
        break;
      }
    }
  }

  const results: Breakdown[] = [];

  if (n === 0 || !canFinish[0]) {
    return results;
  }

  // Enumerate by exact chunk count so short breakdowns are found first even when
  // the total number of splits is huge.
  for (let parts = 1; parts <= n && results.length < limit; parts += 1) {
    const batch: Breakdown[] = [];
    const chunks: string[] = [];

    const walk = (start: number) => {
      if (results.length + batch.length >= limit) {
        return;
      }

      if (start === n) {
        if (chunks.length === parts) {
          batch.push({ key: chunks.join("|"), chunks: [...chunks], score: breakdownScore(chunks) });
        }
        return;
      }

      if (chunks.length >= parts) {
        return;
      }

      for (let end = start + 1; end <= n; end += 1) {
        const chunk = digits.slice(start, end);

        if (canFinish[end] && dict.has(chunk)) {
          chunks.push(chunk);
          walk(end);
          chunks.pop();
        }
      }
    };

    walk(0);
    batch.sort((left, right) => right.score - left.score);
    results.push(...batch);
  }

  return results;
}
