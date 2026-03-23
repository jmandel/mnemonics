import { expect, test } from "bun:test";

import { searchMnemonics } from "../src/engine";

test("anchors only include spans with at least one complete non-junky cover", async () => {
  const results = await searchMnemonics("31415926", "quality", null);

  for (const anchor of results.anchors) {
    const anchored = await searchMnemonics("31415926", "quality", anchor.key);
    expect(anchored.covers.length).toBeGreaterThan(0);
  }
});

test("overall search keeps non-junky covers that also appear in anchored search", async () => {
  const results = await searchMnemonics("3141592653", "quality", null);
  const phrases = results.covers.map((cover) => cover.spans.map((span) => span.bestWord.word).join(" / "));

  expect(results.covers.length).toBeGreaterThan(0);
  expect(phrases).toContain("made / hardly / pendulum");
});

test("975842 surfaces california as a non-junky anchor and visible cover", async () => {
  const results = await searchMnemonics("975842", "quality", null);

  expect(results.anchors[0]?.bestWord.word).toBe("california");

  const visibleCovers = results.covers.map((cover) =>
    cover.spans.map((span) => span.bestWord.word).join(" / "),
  );

  expect(visibleCovers).toContain("be / california");
});

test("deep buckets prune obscure tail words while keeping strong heads", async () => {
  const results = await searchMnemonics("31415926", "quality", null);
  const span = results.browseSpans.find((entry) => entry.digits === "141");

  expect(span).toBeTruthy();
  if (!span) {
    throw new Error("Missing 141 span");
  }

  expect(span.words.length).toBeLessThanOrEqual(40);
  expect(span.words.map((word) => word.word)).toContain("third");
  expect(span.words.map((word) => word.word)).not.toContain("dewaard");
});

test("longer inputs do not return dead anchors", async () => {
  const results = await searchMnemonics("31415967810412", "quality", null);

  expect(results.anchors.length).toBeGreaterThan(0);
  expect(results.covers.length).toBeGreaterThan(0);
  expect(
    results.covers.some((cover) =>
      cover.spans.some((span) => span.bestWord.word.toLowerCase() === "gifts"),
    ),
  ).toBe(true);

  for (const anchor of results.anchors) {
    const anchored = await searchMnemonics("31415967810412", "quality", anchor.key);
    expect(anchored.covers.length).toBeGreaterThan(0);
  }
});
