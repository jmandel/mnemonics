import rawPractice from "../../practice.json";

// Built by scripts/build_words.py: words are [word, "f8 sh6 ng27", "tag,tag", zipf*10];
// examples maps 0-99 to the About page's example word.
type RawPracticeWord = [string, string, string, number];
// rules: the tier thresholds the build used, plus tier sizes, for the About page.
export type BuildRules = {
  commonKnown: number;
  commonKnownZipf: number;
  uncommonKnown: number;
  uncommonKnownZipf: number;
  commonZipf: number;
  uncommonZipf: number;
  commonNameZipf: number;
  minListedNameZipf: number;
  minNameZipf: number;
  concreteRating: number;
  tierCounts: [number, number, number];
  practiceWords: number;
};

const raw = rawPractice as unknown as {
  words: RawPracticeWord[];
  examples: Record<string, string>;
  rules: BuildRules;
};

export const examples = raw.examples;
export const buildRules = raw.rules;

export type Sound = { label: string; digits: string };

export type PracticeWord = {
  word: string;
  sounds: Sound[];
  digits: string;
  tags: string[];
  // wordfreq Zipf: 4+ is an everyday word.
  zipf: number;
};

// One prompt: a few words whose digits are typed in order.
export type Phrase = PracticeWord[];

export type SkillStat = {
  seen: number;
  missed: number;
  // Moving average of milliseconds per digit typed for this skill.
  ms: number;
};

// Leitner box for a word that was missed; it comes back until learned.
export type Card = { box: number; due: number };

export type Run = {
  at: number;
  digits: number;
  phrases: number;
  misses: number;
  level: number;
  challenge: boolean;
};

export type Store = {
  skills: Record<string, SkillStat>;
  cards: Record<string, Card>;
  runs: Run[];
  level: number;
  // Words shown lately, so runs don't keep repeating them (missed words still return).
  recent: string[];
};

export const RUN_SECONDS = 60;
const STORAGE_KEY = "mnemonics.practice.v1";
const DAY = 24 * 60 * 60 * 1000;
// Days until a learned word comes back, by Leitner box.
const BOX_DAYS = [0, 1, 3, 7, 21];

export const words: PracticeWord[] = raw.words.map(
  ([word, sounds, tags, zipf]) => {
    const parsed = sounds.split(" ").map((token) => {
      const match = token.match(/^([a-z]+)(\d+)$/)!;
      return { label: match[1]!, digits: match[2]! };
    });
    return {
      word,
      sounds: parsed,
      digits: parsed.map((sound) => sound.digits).join(""),
      tags: tags ? tags.split(",") : [],
      zipf: zipf / 10,
    };
  },
);

const byWord = new Map(words.map((entry) => [entry.word, entry]));

export function findWord(word: string) {
  return byWord.get(word);
}

// Skills are consonant sounds ("ng", "sh") and spelling patterns ("soft c", "silent").
export function skillsOf(entry: PracticeWord) {
  return [...new Set([...entry.sounds.map((sound) => sound.label), ...entry.tags])];
}

const wordsBySkill = new Map<string, PracticeWord[]>();

for (const entry of words) {
  for (const skill of skillsOf(entry)) {
    wordsBySkill.set(skill, [...(wordsBySkill.get(skill) ?? []), entry]);
  }
}

export const allSkills = [...wordsBySkill.keys()];

// Short, plain examples of a skill for the "practice most" panel.
export function examplesFor(skill: string, count = 6) {
  return (wordsBySkill.get(skill) ?? [])
    .filter((entry) => entry.digits.length <= 3)
    .sort((left, right) => left.word.length - right.word.length || left.word.localeCompare(right.word))
    .slice(0, count);
}

// Prompts grow with skill, from 1-3 digit everyday words up to 2-3 word phrases of
// as many as 18 digits. Digit limits are per word.
export const LEVELS = [
  { name: "short words", words: [1, 1], minDigits: 1, maxDigits: 3, minZipf: 4.2 },
  { name: "longer words", words: [1, 1], minDigits: 3, maxDigits: 6, minZipf: 3.6 },
  { name: "word pairs", words: [2, 2], minDigits: 2, maxDigits: 4, minZipf: 3.6 },
  { name: "long phrases", words: [2, 3], minDigits: 2, maxDigits: 6, minZipf: 0 },
];

// The sounds each spelling pattern is about, so a miss is only charged to a pattern
// when the missed sound is part of it.
const TAG_SOUNDS: Record<string, string[]> = {
  "soft c": ["s", "z", "sh"],
  "soft g": ["j"],
  x: ["k", "s", "z", "g"],
  "ph/gh": ["f"],
  "-ed": ["t", "d"],
  ng: ["ng"],
  er: ["r"],
};

export function emptyStore(): Store {
  return { skills: {}, cards: {}, runs: [], level: 0, recent: [] };
}

export function loadStore(): Store {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...emptyStore(), ...JSON.parse(saved) } : emptyStore();
  } catch {
    return emptyStore();
  }
}

export function saveStore(store: Store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

// Small seeded PRNG so a shared run can be replayed exactly.
export function seededRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashString(text: string) {
  let hash = 2166136261;
  for (const char of text) {
    hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
  }
  return hash >>> 0;
}

function averageMs(store: Store) {
  const stats = Object.values(store.skills).filter((stat) => stat.seen >= 3);
  return stats.length ? stats.reduce((sum, stat) => sum + stat.ms, 0) / stats.length : 0;
}

// How much a skill needs practice: misses count most, then slowness; untried skills get a nudge.
export function weakness(stat: SkillStat | undefined, average: number) {
  if (!stat || stat.seen < 3) {
    return 1.5;
  }
  const missRate = (stat.missed + 0.5) / (stat.seen + 2);
  const slowness = average > 0 ? Math.max(0, stat.ms / average - 1) : 0;
  return 1 + missRate * 6 + slowness * 2;
}

export function weakestSkills(store: Store, count = 3) {
  const average = averageMs(store);
  return Object.entries(store.skills)
    .filter(([, stat]) => stat.seen >= 12)
    .map(([skill, stat]) => ({ skill, stat, score: weakness(stat, average) }))
    // Only real weak spots: two or more misses at 1 in 10 or worse, or a third slower than average.
    .filter(
      ({ stat }) =>
        (stat.missed >= 2 && stat.missed / stat.seen >= 0.1) || (average > 0 && stat.ms > average * 1.33),
    )
    .sort((left, right) => right.score - left.score)
    .slice(0, count);
}

function pick<T>(items: T[], random: () => number) {
  return items[Math.floor(random() * items.length)]!;
}

function pickWeighted<T>(items: Array<[T, number]>, random: () => number) {
  const total = items.reduce((sum, [, weight]) => sum + weight, 0);
  let roll = random() * total;
  for (const [item, weight] of items) {
    roll -= weight;
    if (roll <= 0) {
      return item;
    }
  }
  return items[items.length - 1]![0];
}

// Makes prompts. With a store it leans toward weak skills and brings back missed words;
// without one (a shared challenge) it depends only on the seed.
export function makeGenerator(random: () => number, level: number, store: Store | null) {
  const shape = LEVELS[Math.min(level, LEVELS.length - 1)]!;
  const fits = (entry: PracticeWord) =>
    entry.digits.length >= shape.minDigits && entry.digits.length <= shape.maxDigits && entry.zipf >= shape.minZipf;
  const pool = words.filter(fits);
  const average = store ? averageMs(store) : 0;
  const recent: string[] = store ? store.recent : [];

  function nextWord(): PracticeWord {
    for (let attempt = 0; attempt < 30; attempt += 1) {
      let candidate: PracticeWord | undefined;

      if (store) {
        const now = Date.now();
        const due = Object.entries(store.cards)
          .filter(([word, card]) => card.due <= now && !recent.includes(word))
          .map(([word]) => byWord.get(word))
          .filter((entry): entry is PracticeWord => entry !== undefined && fits(entry));

        if (due.length > 0 && random() < 0.3) {
          candidate = pick(due, random);
        } else {
          const skill = pickWeighted(
            allSkills.map((name) => [name, weakness(store.skills[name], average)] as [string, number]),
            random,
          );
          const options = (wordsBySkill.get(skill) ?? []).filter(fits);
          candidate = options.length ? pick(options, random) : undefined;
        }
      } else {
        candidate = pick(pool, random);
      }

      const isDue = store?.cards[candidate?.word ?? ""] !== undefined;
      if (candidate && (isDue || !recent.includes(candidate.word))) {
        recent.push(candidate.word);
        if (recent.length > 300) {
          recent.shift();
        }
        return candidate;
      }
    }
    return pick(pool, random);
  }

  return (): Phrase => {
    const [low, high] = shape.words;
    const count = low! + Math.floor(random() * (high! - low! + 1));
    return Array.from({ length: count }, nextWord);
  };
}

export function phraseDigits(phrase: Phrase) {
  return phrase.map((entry) => entry.digits).join("");
}

// For each digit of a phrase: which word and sound it belongs to.
export function digitOwners(phrase: Phrase) {
  const owners: Array<{ word: PracticeWord; sound: Sound; first: boolean }> = [];
  for (const word of phrase) {
    for (const sound of word.sounds) {
      for (let index = 0; index < sound.digits.length; index += 1) {
        owners.push({ word, sound, first: index === 0 });
      }
    }
  }
  return owners;
}

function bump(store: Store, skill: string, update: (stat: SkillStat) => void) {
  const stat = store.skills[skill] ?? { seen: 0, missed: 0, ms: 0 };
  update(stat);
  store.skills[skill] = stat;
}

// A correctly typed digit: how long it took, credited to its sound and word patterns.
export function recordDigit(store: Store, word: PracticeWord, sound: Sound, ms: number) {
  const clamped = Math.min(ms, 4000);
  const tags = word.tags.filter((tag) => TAG_SOUNDS[tag]?.includes(sound.label));
  for (const skill of [sound.label, ...tags]) {
    bump(store, skill, (stat) => {
      stat.ms = stat.seen === 0 ? clamped : stat.ms * 0.85 + clamped * 0.15;
    });
  }
}

// A miss is charged to the sound typed wrong, and to a spelling pattern only when that
// sound is part of it (a slip on the k of "wrinkled" isn't an -ed problem).
export function recordWord(store: Store, word: PracticeWord, missedSound: Sound | null) {
  for (const skill of skillsOf(word)) {
    bump(store, skill, (stat) => {
      stat.seen += 1;
      const charged =
        missedSound !== null &&
        (skill === missedSound.label ||
          (word.tags.includes(skill) && (TAG_SOUNDS[skill]?.includes(missedSound.label) ?? false)));
      if (charged) {
        stat.missed += 1;
      }
    });
  }

  const card = store.cards[word.word];
  if (missedSound) {
    store.cards[word.word] = { box: 0, due: Date.now() };
  } else if (card) {
    const box = card.box + 1;
    if (box >= BOX_DAYS.length) {
      delete store.cards[word.word];
    } else {
      store.cards[word.word] = { box, due: Date.now() + BOX_DAYS[box]! * DAY };
    }
  }
}

// After a run: move up when fast and accurate (two steps when very fast), down when struggling.
export function nextLevel(level: number, run: Run) {
  const accuracy = run.phrases ? (run.phrases - run.misses) / run.phrases : 0;
  const target = 25 + level * 10;
  if (accuracy >= 0.85 && run.digits >= target) {
    return Math.min(level + (run.digits >= target * 2 ? 2 : 1), LEVELS.length - 1);
  }
  if (accuracy < 0.7 && run.phrases >= 4) {
    return Math.max(level - 1, 0);
  }
  return level;
}

// Shared runs travel in the URL as "turtle.pendulum-wolf", base64url-encoded so the
// link doesn't spoil the words.
export function encodePhrases(phrases: Phrase[]) {
  const plain = phrases.map((phrase) => phrase.map((entry) => entry.word).join(".")).join("-");
  return btoa(plain).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodePhrases(text: string): Phrase[] {
  let plain = "";
  try {
    plain = atob(text.replace(/-/g, "+").replace(/_/g, "/"));
  } catch {
    return [];
  }
  return plain
    .split("-")
    .map((part) => part.split(".").map((word) => byWord.get(word)).filter((entry): entry is PracticeWord => !!entry))
    .filter((phrase) => phrase.length > 0);
}
