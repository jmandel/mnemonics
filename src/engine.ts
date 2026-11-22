import rawWords from "../words.json";

// Built by scripts/build_words.py: digits -> [word, tier, isName, otherSpellings?]. Tier 0 = common, 1 = familiar, 2 = obscure.
type RawEntry = [string, number, number] | [string, number, number, string];

export type Level = 0 | 1 | 2;

export type Word = {
  word: string;
  tier: Level;
  isName: boolean;
  alternates: string[];
};

export type Breakdown = {
  key: string;
  chunks: string[];
};

const MAX_BREAKDOWNS = 500;

let dictionary: Map<string, Word[]> | null = null;

function getDictionary() {
  if (!dictionary) {
    dictionary = new Map(
      Object.entries(rawWords as unknown as Record<string, RawEntry[]>).map(([digits, entries]) => [
        digits,
        entries
          .map(([word, tier, isName, alternates]) => ({
            word,
            tier: tier as Level,
            isName: isName === 1,
            alternates: alternates ? alternates.split("/") : [],
          }))
          // Alphabetical within each tier so long lists are easy to scan.
          .sort((left, right) => left.tier - right.tier || left.word.localeCompare(right.word)),
      ]),
    );
  }

  return dictionary;
}

// All words for a chunk: common first, alphabetical within each tier.
export function wordsFor(digits: string) {
  return getDictionary().get(digits) ?? [];
}

// Words are sorted by tier, so the ones at or below a level form a prefix.
export function countAtLevel(words: Word[], level: Level) {
  let count = 0;

  while (count < words.length && words[count]!.tier <= level) {
    count += 1;
  }

  return count;
}

// Higher is better: an easy best word, then more choices.
function chunkScore(chunk: string, level: Level) {
  const words = wordsFor(chunk);
  return (2 - (words[0]?.tier ?? 2)) * 2 + Math.log2(countAtLevel(words, level) + 1) * 0.5;
}

// Every way to cut the digits into chunks that each have a word at the given level,
// fewest chunks first, then by how good each chunk's words are.
export function findBreakdowns(digits: string, level: Level = 2, limit = MAX_BREAKDOWNS) {
  const n = digits.length;
  const usable = (chunk: string) => countAtLevel(wordsFor(chunk), level) > 0;

  // canFinish[i]: digits[i..] can be fully split into usable chunks.
  const canFinish = new Array<boolean>(n + 1).fill(false);
  canFinish[n] = true;

  for (let start = n - 1; start >= 0; start -= 1) {
    for (let end = start + 1; end <= n; end += 1) {
      if (canFinish[end] && usable(digits.slice(start, end))) {
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
    const batch: Array<Breakdown & { score: number }> = [];
    const chunks: string[] = [];

    const walk = (start: number) => {
      if (results.length + batch.length >= limit) {
        return;
      }

      if (start === n) {
        if (chunks.length === parts) {
          const score = chunks.reduce((sum, chunk) => sum + chunkScore(chunk, level), 0) / parts;
          batch.push({ key: chunks.join("|"), chunks: [...chunks], score });
        }
        return;
      }

      if (chunks.length >= parts) {
        return;
      }

      for (let end = start + 1; end <= n; end += 1) {
        const chunk = digits.slice(start, end);

        if (canFinish[end] && usable(chunk)) {
          chunks.push(chunk);
          walk(end);
          chunks.pop();
        }
      }
    };

    walk(0);
    batch.sort((left, right) => right.score - left.score);
    results.push(...batch.map(({ key, chunks }) => ({ key, chunks })));
  }

  return results;
}
