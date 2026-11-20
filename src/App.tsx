import { useDeferredValue, useEffect, useMemo, useState } from "react";

import { findBreakdowns, wordsFor } from "./engine";

const PAGE_SIZE = 20;

function sanitizeDigits(value: string) {
  return value.replace(/\D/g, "");
}

function initialDigitsFromUrl() {
  return sanitizeDigits(new URLSearchParams(window.location.search).get("n") ?? "");
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
      <h1>Mnemonics</h1>
      <input
        className="num-input"
        data-testid="num-input"
        inputMode="numeric"
        autoFocus
        autoComplete="off"
        placeholder="Digits, e.g. 31415926"
        value={input}
        onChange={(event) => setInput(sanitizeDigits(event.target.value))}
      />

      {digits ? (
        <p className="summary" data-testid="summary">
          {breakdowns.length === 0
            ? "No way to split these digits into words."
            : `${breakdowns.length}${breakdowns.length >= 500 ? "+" : ""} breakdowns, fewest chunks first.`}
        </p>
      ) : null}

      {breakdowns.slice(0, shown).map((breakdown) => (
        <section className="breakdown" data-testid="breakdown" key={breakdown.key}>
          <h2>{breakdown.chunks.join(" · ")}</h2>
          <div className="chunks">
            {breakdown.chunks.map((chunk, index) => {
              const words = wordsFor(chunk);
              return (
                <div className="chunk" key={`${index}:${chunk}`}>
                  <h3>
                    {chunk} <span className="count">{words.length} {words.length === 1 ? "word" : "words"}</span>
                  </h3>
                  <ul>
                    {words.map((entry) => (
                      <li key={entry.word}>{entry.word}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {shown < breakdowns.length ? (
        <button className="more" type="button" onClick={() => setShown(shown + PAGE_SIZE)}>
          Show more breakdowns
        </button>
      ) : null}
    </main>
  );
}
