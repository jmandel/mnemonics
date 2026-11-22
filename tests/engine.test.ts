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

test("75842 is california, a common name", () => {
  expect(findBreakdowns("975842", 0).map((breakdown) => breakdown.key)).toContain("9|75842");
  const california = wordsFor("75842")[0];
  expect(california?.word).toBe("california");
  expect(california?.isName).toBe(true);
  expect(california?.tier).toBe(0);
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
