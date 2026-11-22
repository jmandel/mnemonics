import { expect, test } from "bun:test";

import { countAtLevel, findBreakdowns, wordsFor } from "../src/engine";

test("every breakdown covers the digits with chunks that have words at the level", () => {
  const digits = "31415926";

  for (const level of [0, 1, 2] as const) {
    const breakdowns = findBreakdowns(digits, level);
    expect(breakdowns.length).toBeGreaterThan(0);

    for (const breakdown of breakdowns) {
      expect(breakdown.chunks.join("")).toBe(digits);
      for (const chunk of breakdown.chunks) {
        expect(countAtLevel(wordsFor(chunk), level)).toBeGreaterThan(0);
      }
    }
  }
});

test("stricter levels give fewer splits", () => {
  const counts = ([0, 1, 2] as const).map((level) => findBreakdowns("3141592653", level).length);
  expect(counts[0]).toBeLessThan(counts[2]!);
  expect(counts[0]).toBeLessThanOrEqual(counts[1]!);
});

test("breakdowns are ordered by chunk count", () => {
  const counts = findBreakdowns("3141592653", 2).map((breakdown) => breakdown.chunks.length);
  expect(counts).toEqual([...counts].sort((left, right) => left - right));
});

test("75842 is California, a common name shown capitalized", () => {
  expect(findBreakdowns("975842", 0).map((breakdown) => breakdown.key)).toContain("9|75842");
  const california = wordsFor("75842").find((entry) => entry.word === "California");
  expect(california?.tier).toBe(0);
});

const filedUnder = (word: string, digits: string) => wordsFor(digits).some((entry) => entry.word === word);

test("casual pronunciations that drop a consonant don't file words under the wrong digits", () => {
  expect(filedUnder("twenty", "121")).toBe(true);
  expect(filedUnder("twenty", "12")).toBe(false);
  expect(filedUnder("last", "501")).toBe(true);
  expect(filedUnder("last", "50")).toBe(false);
  expect(filedUnder("county", "72")).toBe(false);
});

test("ng follows the spelling: 27 alone, 2 before k/g", () => {
  expect(filedUnder("sing", "027")).toBe(true);
  expect(filedUnder("bank", "927")).toBe(true);
  expect(filedUnder("think", "127")).toBe(true);
});

test("slurs are dropped and acronyms are uppercase", () => {
  expect(filedUnder("fag", "8")).toBe(false);
  expect(filedUnder("FBI", "89")).toBe(true);
});

test("pins keep a chunk and stop other chunks from crossing it", () => {
  const pins = [{ start: 0, end: 4, word: "turtle" }];
  const breakdowns = findBreakdowns("14159265", 0, pins);
  expect(breakdowns.length).toBeGreaterThan(0);
  for (const breakdown of breakdowns) {
    expect(breakdown.chunks[0]).toBe("1415");
  }
});

test("words are alphabetical within tiers and same-sound spellings are merged", () => {
  const words = wordsFor("92");
  const sorted = [...words].sort(
    (left, right) => left.tier - right.tier || left.word.localeCompare(right.word),
  );
  expect(words).toEqual(sorted);
  expect(words.map((entry) => entry.word)).not.toContain("pane");
});

test("obscure names stay out of common words", () => {
  const common = wordsFor("3141").slice(0, countAtLevel(wordsFor("3141"), 0)).map((entry) => entry.word);
  expect(common).toContain("moderate");
  expect(common).not.toContain("moothart");
});

test("long inputs stay bounded", () => {
  expect(findBreakdowns("31415926535897932384", 2).length).toBeLessThanOrEqual(500);
});
