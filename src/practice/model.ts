import rawPractice from "../../practice.json";

// Built by scripts/build_words.py: [word, "f8 sh6 ng27", "tag,tag"].
type RawPracticeWord = [string, string, string];

export type Sound = { label: string; digits: string };

export type PracticeWord = {
  word: string;
  sounds: Sound[];
  digits: string;
  tags: string[];
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
};

export const RUN_SECONDS = 60;
const STORAGE_KEY = "mnemonics.practice.v1";
const DAY = 24 * 60 * 60 * 1000;
// Days until a learned word comes back, by Leitner box.
const BOX_DAYS = [0, 1, 3, 7, 21];

export const words: PracticeWord[] = (rawPractice as unknown as RawPracticeWord[]).map(
  ([word, sounds, tags]) => {
    const parsed = sounds.split(" ").map((token) => {
      const match = token.match(/^([a-z]+)(\d+)$/)!;
      return { label: match[1]!, digits: match[2]! };
    });
    return {
      word,
      sounds: parsed,
      digits: parsed.map((sound) => sound.digits).join(""),
      tags: tags ? tags.split(",") : [],
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

// Prompt size grows with skill: short single words, any single word, pairs, then 2-3 words.
export const LEVELS = [
  { words: [1, 1], maxDigits: 3 },
  { words: [1, 1], maxDigits: 5 },
  { words: [2, 2], maxDigits: 3 },
  { words: [2, 3], maxDigits: 4 },
];

export function emptyStore(): Store {
  return { skills: {}, cards: {}, runs: [], level: 0 };
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
    .filter(([, stat]) => stat.seen >= 5)
    .map(([skill, stat]) => ({ skill, stat, score: weakness(stat, average) }))
    // Only real weak spots: missed at least 1 in 10, or a third slower than your average.
    .filter(({ stat }) => stat.missed / stat.seen >= 0.1 || (average > 0 && stat.ms > average * 1.33))
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
  const fits = (entry: PracticeWord) => entry.digits.length <= shape.maxDigits;
  const pool = words.filter(fits);
  const average = store ? averageMs(store) : 0;
  const recent: string[] = [];

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

      if (candidate && !recent.includes(candidate.word)) {
        recent.push(candidate.word);
        if (recent.length > 40) {
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
  for (const skill of [sound.label, ...word.tags]) {
    bump(store, skill, (stat) => {
      stat.ms = stat.seen === 0 ? clamped : stat.ms * 0.85 + clamped * 0.15;
    });
  }
}

export function recordWord(store: Store, word: PracticeWord, missedSound: Sound | null) {
  for (const skill of skillsOf(word)) {
    bump(store, skill, (stat) => {
      stat.seen += 1;
      if (missedSound && (skill === missedSound.label || word.tags.includes(skill))) {
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

// After a run: move up a prompt size when fast and accurate, down when struggling.
export function nextLevel(level: number, run: Run) {
  const accuracy = run.phrases ? (run.phrases - run.misses) / run.phrases : 0;
  if (accuracy >= 0.9 && run.digits >= 30 + level * 8) {
    return Math.min(level + 1, LEVELS.length - 1);
  }
  if (accuracy < 0.7 && run.phrases >= 4) {
    return Math.max(level - 1, 0);
  }
  return level;
}

// Shared runs travel in the URL as words: "turtle.pendulum-wolf".
export function encodePhrases(phrases: Phrase[]) {
  return phrases.map((phrase) => phrase.map((entry) => entry.word).join(".")).join("-");
}

export function decodePhrases(text: string): Phrase[] {
  return text
    .split("-")
    .map((part) => part.split(".").map((word) => byWord.get(word)).filter((entry): entry is PracticeWord => !!entry))
    .filter((phrase) => phrase.length > 0);
}
