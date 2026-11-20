import { useDeferredValue, useEffect, useMemo, useState } from "react";

import { findBreakdowns, wordsFor } from "./engine";

const PAGE_SIZE = 25;
const WORDS_PREVIEW = 30;

const SOUND_KEY: Array<[string, string]> = [
  ["0", "s z"],
  ["1", "t d th"],
  ["2", "n"],
  ["3", "m"],
  ["4", "r"],
  ["5", "l"],
  ["6", "j sh ch"],
  ["7", "k g"],
  ["8", "f v"],
  ["9", "p b"],
];

function sanitizeDigits(value: string) {
  return value.replace(/\D/g, "");
}

function initialDigitsFromUrl() {
  return sanitizeDigits(new URLSearchParams(window.location.search).get("n") ?? "");
}

function ChunkRow({ chunk }: { chunk: string }) {
  const [open, setOpen] = useState(false);
  const words = wordsFor(chunk);
  const visible = open ? words : words.slice(0, WORDS_PREVIEW);
  const hidden = words.length - visible.length;

  return (
    <div className="chunk" data-testid="chunk">
      <span className="chunk-digits">{chunk}</span>
      <p className="words">
        {visible.map((entry) => (
          <span className={`word tier-${entry.tier}`} key={entry.word}>
            {entry.word}
          </span>
        ))}
        {hidden > 0 ? (
          <button className="more-words" type="button" onClick={() => setOpen(true)}>
            +{hidden} more
          </button>
        ) : null}
        {open && words.length > WORDS_PREVIEW ? (
          <button className="more-words" type="button" onClick={() => setOpen(false)}>
            fewer
          </button>
        ) : null}
      </p>
    </div>
  );
}

export function App() {
  const [input, setInput] = useState(initialDigitsFromUrl);
  const [shown, setShown] = useState(PAGE_SIZE);
  const digits = useDeferredValue(input);
  const breakdowns = useMemo(() => findBreakdowns(digits), [digits]);

  useEffect(() => {
    const url = new URL(window.location.href);

    if (input) {
      url.searchParams.set("n", input);
    } else {
      url.searchParams.delete("n");
    }

    history.replaceState({}, "", url);
  }, [input]);

  useEffect(() => setShown(PAGE_SIZE), [digits]);

  return (
    <main className="page">
      <header className="top">
        <input
          className="num-input"
          data-testid="num-input"
          aria-label="Digits"
          inputMode="numeric"
          autoFocus
          autoComplete="off"
          placeholder="Enter a number"
          value={input}
          onChange={(event) => setInput(sanitizeDigits(event.target.value))}
        />
        <p className="key" aria-label="Digit sounds">
          {SOUND_KEY.map(([digit, sounds]) => (
            <span key={digit}>
              <b>{digit}</b> {sounds}
            </span>
          ))}
        </p>
      </header>

      {digits ? (
        <p className="summary" data-testid="summary">
          {breakdowns.length === 0
            ? "No way to split these digits into words."
            : `${breakdowns.length}${breakdowns.length >= 500 ? "+" : ""} ways to split · fewest chunks first · fainter words are rarer`}
        </p>
      ) : (
        <p className="summary">
          Each digit stands for consonant sounds; vowels are free. Enter a number to see every way to
          split it into words.
        </p>
      )}

      {breakdowns.slice(0, shown).map((breakdown, index) => (
        <section className="breakdown" data-testid="breakdown" key={breakdown.key}>
          <h2>
            <span className="rank">{index + 1}</span>
            {breakdown.chunks.join(" · ")}
          </h2>
          <div className="chunks">
            {breakdown.chunks.map((chunk, chunkIndex) => (
              <ChunkRow chunk={chunk} key={`${chunkIndex}:${chunk}`} />
            ))}
          </div>
        </section>
      ))}

      {shown < breakdowns.length ? (
        <button className="more" type="button" onClick={() => setShown(shown + PAGE_SIZE)}>
          Show more ({breakdowns.length - shown} left)
        </button>
      ) : null}
    </main>
  );
}
