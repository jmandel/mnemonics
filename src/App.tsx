import { useDeferredValue, useEffect, useMemo, useState } from "react";

import { countAtLevel, findBreakdowns, wordsFor, type Level, type Word } from "./engine";

const PAGE_SIZE = 25;
const WORDS_PREVIEW = 24;

const LEVELS: Array<{ level: Level; label: string; param: string }> = [
  { level: 0, label: "common", param: "common" },
  { level: 1, label: "familiar", param: "familiar" },
  { level: 2, label: "all", param: "all" },
];

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

function initialLevelFromUrl(): Level {
  const param = new URLSearchParams(window.location.search).get("words");
  return LEVELS.find((entry) => entry.param === param)?.level ?? 0;
}

// Names are shown capitalized ("Madrid") so they read as names at a glance.
function displayWord(entry: Word) {
  return entry.isName ? entry.word.charAt(0).toUpperCase() + entry.word.slice(1) : entry.word;
}

function WordItem({ entry }: { entry: Word }) {
  return (
    <span className={`word tier-${entry.tier}`}>
      {displayWord(entry)}
      {entry.alternates.length > 0 ? (
        <span className="alt">/{entry.alternates.join("/")}</span>
      ) : null}
    </span>
  );
}

function ChunkRow({ chunk, level }: { chunk: string; level: Level }) {
  const [open, setOpen] = useState(false);
  const words = wordsFor(chunk);
  const atLevel = countAtLevel(words, level);
  const visible = open ? words : words.slice(0, Math.min(atLevel, WORDS_PREVIEW));
  const hidden = words.length - visible.length;

  return (
    <div className="chunk" data-testid="chunk">
      <span className="chunk-digits">{chunk}</span>
      <p className="words">
        {visible.map((entry) => (
          <WordItem entry={entry} key={entry.word} />
        ))}
        {hidden > 0 ? (
          <button className="more-words" type="button" onClick={() => setOpen(true)}>
            +{hidden}
          </button>
        ) : null}
        {open && visible.length > Math.min(atLevel, WORDS_PREVIEW) ? (
          <button className="more-words" type="button" onClick={() => setOpen(false)}>
            less
          </button>
        ) : null}
      </p>
    </div>
  );
}

export function App() {
  const [input, setInput] = useState(initialDigitsFromUrl);
  const [level, setLevel] = useState<Level>(initialLevelFromUrl);
  const [shown, setShown] = useState(PAGE_SIZE);
  const digits = useDeferredValue(input);
  const breakdowns = useMemo(() => findBreakdowns(digits, level), [digits, level]);

  useEffect(() => {
    const url = new URL(window.location.href);

    if (input) {
      url.searchParams.set("n", input);
    } else {
      url.searchParams.delete("n");
    }

    if (level === 0) {
      url.searchParams.delete("words");
    } else {
      url.searchParams.set("words", LEVELS[level]!.param);
    }

    history.replaceState({}, "", url);
  }, [input, level]);

  useEffect(() => setShown(PAGE_SIZE), [digits, level]);

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
        <div className="controls">
          <p className="key" aria-label="Digit sounds">
            {SOUND_KEY.map(([digit, sounds]) => (
              <span key={digit}>
                <b>{digit}</b> {sounds}
              </span>
            ))}
          </p>
          <div className="levels" role="radiogroup" aria-label="Words to use">
            {LEVELS.map((entry) => (
              <button
                aria-checked={level === entry.level}
                className={level === entry.level ? "active" : ""}
                data-testid={`level-${entry.param}`}
                key={entry.param}
                role="radio"
                type="button"
                onClick={() => setLevel(entry.level)}
              >
                {entry.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {digits ? (
        <p className="summary" data-testid="summary">
          {breakdowns.length === 0
            ? level < 2
              ? `No split uses only ${LEVELS[level]!.label} words. Try ${LEVELS[level + 1]!.label}.`
              : "No way to split these digits into words."
            : `${breakdowns.length}${breakdowns.length >= 500 ? "+" : ""} ways to split · fewest chunks first · faded = less common`}
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
              <ChunkRow chunk={chunk} key={`${level}:${chunkIndex}:${chunk}`} level={level} />
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
