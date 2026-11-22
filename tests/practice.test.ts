import { expect, test } from "bun:test";

import { digitsOfWord, exampleWord } from "../src/engine";
import {
  decodePhrases,
  digitOwners,
  examples,
  emptyStore,
  encodePhrases,
  findWord,
  makeGenerator,
  phraseDigits,
  recordWord,
  seededRandom,
  words,
} from "../src/practice/model";

test("every example the About page gives matches the word data", () => {
  const claims: Array<[string, string]> = [
    ["phone", "82"], ["knee", "2"], ["butter", "914"], ["lamb", "53"], ["knight", "21"],
    ["walk", "7"], ["box", "970"], ["tax", "170"], ["sing", "027"], ["bank", "927"],
    ["finger", "8274"], ["jumped", "6391"], ["played", "951"], ["car", "74"], ["bird", "941"],
    ["fishing", "8627"], ["engine", "262"], ["accent", "7021"], ["queen", "72"], ["bear", "94"], ["warrior", "44"],
  ];
  for (const [word, digits] of claims) {
    expect(`${word} ${digitsOfWord(word)}`).toBe(`${word} ${digits}`);
  }
  expect(exampleWord("7294")).not.toBeNull();
  expect(examples["61"]).toBe("sheet");
  expect(examples["71"]).toBe("cat");
  expect(Object.keys(examples).length).toBeGreaterThanOrEqual(105);
});

test("ambiguous words resolve to the spelled form or are dropped", () => {
  expect(digitsOfWord("around")).toBe("421");
  expect(digitsOfWord("already")).toBe("541");
  expect(digitsOfWord("asked")).toBe("071");
  expect(digitsOfWord("amateur")).toBeNull();
  expect(digitsOfWord("tissue")).toBeNull();
});

test("practice words are clean base forms whose answers follow the rules", () => {
  const names = new Set(words.map((entry) => entry.word));
  for (const avoided of ["jogging", "mice", "jalapeno", "hygienist", "bookkeeper", "rapist", "midget"]) {
    expect(names.has(avoided)).toBe(false);
  }
});

test("practice words carry sounds that spell their digits", () => {
  expect(words.length).toBeGreaterThan(3000);
  const ceiling = findWord("ceiling");
  expect(ceiling?.digits).toBe("0527");
  expect(ceiling?.sounds.map((sound) => sound.label)).toEqual(["s", "l", "ng"]);
  for (const entry of words.slice(0, 500)) {
    expect(digitsOfWord(entry.word)).toBe(entry.digits);
  }
});

test("the same seed makes the same phrases, and shared runs round-trip", () => {
  const first = makeGenerator(seededRandom(42), 3, null);
  const second = makeGenerator(seededRandom(42), 3, null);
  const phrases = Array.from({ length: 10 }, first);
  expect(Array.from({ length: 10 }, second)).toEqual(phrases);
  expect(decodePhrases(encodePhrases(phrases))).toEqual(phrases);
  for (const phrase of phrases) {
    expect(phrase.length).toBeGreaterThanOrEqual(2);
    expect(digitOwners(phrase).length).toBe(phraseDigits(phrase).length);
  }
});

test("top-level prompts are long numbers", () => {
  const next = makeGenerator(seededRandom(3), 3, null);
  const lengths = Array.from({ length: 200 }, () => phraseDigits(next()).length);
  expect(Math.max(...lengths)).toBeGreaterThanOrEqual(12);
  expect(lengths.reduce((sum, length) => sum + length, 0) / lengths.length).toBeGreaterThan(7);
});

test("level 0 prompts are single short words", () => {
  const next = makeGenerator(seededRandom(7), 0, emptyStore());
  for (let index = 0; index < 50; index += 1) {
    const phrase = next();
    expect(phrase.length).toBe(1);
    expect(phrase[0]!.digits.length).toBeLessThanOrEqual(3);
  }
});

test("a missed word gets a card and comes back; misses are credited to the sound", () => {
  const store = emptyStore();
  const ceiling = findWord("ceiling")!;
  recordWord(store, ceiling, ceiling.sounds[2]!);
  expect(store.cards.ceiling?.box).toBe(0);
  expect(store.skills.ng?.missed).toBe(1);
  expect(store.skills.s?.missed).toBe(0);
  // A slip on the s isn't charged to the word's ng pattern.
  recordWord(store, ceiling, ceiling.sounds[0]!);
  expect(store.skills.s?.missed).toBe(1);
  expect(store.skills.ng?.missed).toBe(1);
  recordWord(store, ceiling, null);
  expect(store.cards.ceiling?.box).toBe(1);
});
