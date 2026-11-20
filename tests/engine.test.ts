import { expect, test } from "bun:test";

import { findBreakdowns, wordsFor } from "../src/engine";

test("every breakdown covers the digits with chunks that have words", () => {
  const digits = "31415926";
  const breakdowns = findBreakdowns(digits);

  expect(breakdowns.length).toBeGreaterThan(0);

  for (const breakdown of breakdowns) {
    expect(breakdown.chunks.join("")).toBe(digits);
    for (const chunk of breakdown.chunks) {
      expect(wordsFor(chunk).length).toBeGreaterThan(0);
    }
  }
});

test("breakdowns are ordered by chunk count", () => {
  const counts = findBreakdowns("3141592653").map((breakdown) => breakdown.chunks.length);
  expect(counts).toEqual([...counts].sort((left, right) => left - right));
});

test("975842 includes be · california", () => {
  const keys = findBreakdowns("975842").map((breakdown) => breakdown.key);
  expect(keys).toContain("9|75842");
  expect(wordsFor("75842").map((entry) => entry.word)).toContain("california");
});

test("word lists drop CMUdict variant markers and duplicates", () => {
  const words = wordsFor("41").map((entry) => entry.word);
  expect(words.some((word) => /\(\d+\)$/u.test(word))).toBe(false);
  expect(new Set(words.map((word) => word.toLowerCase())).size).toBe(words.length);
});

test("long inputs stay bounded", () => {
  expect(findBreakdowns("31415926535897932384").length).toBeLessThanOrEqual(500);
});
