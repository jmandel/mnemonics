import { expect, test } from "bun:test";

import { digitsOfWord, exampleWord } from "../src/engine";
import {
  decodePhrases,
  digitOwners,
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
  ];
  for (const [word, digits] of claims) {
    expect(`${word} ${digitsOfWord(word)}`).toBe(`${word} ${digits}`);
  }
  expect(exampleWord("7294")).not.toBeNull();
});

test("ambiguous words resolve to the spelled form or are dropped", () => {
  expect(digitsOfWord("around")).toBe("421");
  expect(digitsOfWord("already")).toBe("541");
  expect(digitsOfWord("asked")).toBe("071");
  expect(digitsOfWord("amateur")).toBeNull();
  expect(digitsOfWord("tissue")).toBeNull();
});

test("practice words carry sounds that spell their digits", () => {
  expect(words.length).toBeGreaterThan(3000);
  const fishing = findWord("fishing");
  expect(fishing?.digits).toBe("8627");
  expect(fishing?.sounds.map((sound) => sound.label)).toEqual(["f", "sh", "ng"]);
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
  const fishing = findWord("fishing")!;
  recordWord(store, fishing, fishing.sounds[2]!);
  expect(store.cards.fishing?.box).toBe(0);
  expect(store.skills.ng?.missed).toBe(1);
  expect(store.skills.f?.missed).toBe(0);
  recordWord(store, fishing, null);
  expect(store.cards.fishing?.box).toBe(1);
});
