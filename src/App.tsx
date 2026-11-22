import { useDeferredValue, useEffect, useMemo, useState } from "react";

import {
  countAtLevel,
  fewestChunks,
  findBreakdowns,
  wordsFor,
  type Level,
  type Pin,
  type Word,
} from "./engine";

const PAGE_SIZE = 25;

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

const TIER_LABELS = ["", "familiar", "rare"];

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

function spanKey(start: number, end: number) {
  return `${start}:${end}`;
}

function WordButton({ entry, onPick }: { entry: Word; onPick: (word: string) => void }) {
  return (
    <button className="word" type="button" onClick={() => onPick(entry.word)}>
      {entry.word}
      {entry.alternates.length > 0 ? (
        <span className="alt">/{entry.alternates.join("/")}</span>
      ) : null}
    </button>
  );
}

type ChunkRowProps = {
  chunk: string;
  level: Level;
  pin: Pin | undefined;
  // Already listed in full higher up the page: show one line until opened.
  repeat: boolean;
  open: boolean;
  showRarer: boolean;
  onOpen: () => void;
  onShowRarer: (show: boolean) => void;
  onPick: (word: string) => void;
  onUnpin: () => void;
};

function ChunkRow(props: ChunkRowProps) {
  const { chunk, level, pin, repeat, open, showRarer } = props;

  if (pin) {
    return (
      <div className="chunk pinned" data-testid="chunk">
        <span className="chunk-digits">{chunk}</span>
        <div className="words">
          <p className="tier-line">
            <button className="word chosen" type="button" title="Choose again" onClick={props.onUnpin}>
              {pin.word}
            </button>
          </p>
        </div>
      </div>
    );
  }

  const words = wordsFor(chunk);
  const atLevel = countAtLevel(words, level);
  const visible = showRarer ? words : words.slice(0, atLevel);
  const hidden = words.length - visible.length;
  const tiers = ([0, 1, 2] as const)
    .map((tier) => ({ tier, entries: visible.filter((entry) => entry.tier === tier) }))
    .filter(({ entries }) => entries.length > 0);

  if (repeat && !open) {
    return (
      <div className="chunk" data-testid="chunk">
        <span className="chunk-digits">{chunk}</span>
        <button className="repeat" type="button" onClick={props.onOpen} title="Listed above; tap to show here">
          <span className="tier-label">↑</span>{" "}
          {words
            .slice(0, atLevel)
            .map((entry) => entry.word)
            .join("  ")}
        </button>
      </div>
    );
  }

  return (
    <div className="chunk" data-testid="chunk">
      <span className="chunk-digits">{chunk}</span>
      <div className="words">
        {tiers.map(({ tier, entries }, index) => (
          <p className={`tier-line tier-${tier}`} data-tier={tier} key={tier}>
            {/* The first line needs no label; later ones mark where the alphabet restarts. */}
            {index > 0 || tier > 0 ? <span className="tier-label">{TIER_LABELS[tier]}</span> : null}
            {entries.map((entry) => (
              <WordButton entry={entry} key={entry.word} onPick={props.onPick} />
            ))}
            {index === tiers.length - 1 && hidden > 0 ? (
              <button className="more-words" type="button" onClick={() => props.onShowRarer(true)}>
                +{hidden} rarer
              </button>
            ) : null}
            {index === tiers.length - 1 && showRarer && words.length > atLevel ? (
              <button className="more-words" type="button" onClick={() => props.onShowRarer(false)}>
                fewer
              </button>
            ) : null}
          </p>
        ))}
      </div>
    </div>
  );
}

function toggled(set: Set<string>, key: string, on: boolean) {
  const next = new Set(set);

  if (on) {
    next.add(key);
  } else {
    next.delete(key);
  }

  return next;
}

export function App() {
  const [input, setInput] = useState(initialDigitsFromUrl);
  const [level, setLevel] = useState<Level>(initialLevelFromUrl);
  const [pins, setPins] = useState<Pin[]>([]);
  const [shown, setShown] = useState(PAGE_SIZE);
  // Chunk positions whose repeated one-line summary was opened, and digit strings
  // whose rarer words are showing. Both apply to every copy on the page.
  const [opened, setOpened] = useState<Set<string>>(new Set());
  const [rarer, setRarer] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);
  const digits = useDeferredValue(input);
  const breakdowns = useMemo(() => findBreakdowns(digits, level, pins), [digits, level, pins]);

  // Point out when the next level fits the number in fewer chunks (e.g. "Canberra").
  const shorterAt = useMemo(() => {
    const best = breakdowns[0]?.chunks.length ?? Infinity;

    for (const next of LEVELS.filter((entry) => entry.level > level)) {
      const count = fewestChunks(digits, next.level, pins);

      if (count !== null && count < best) {
        return { ...next, count };
      }
    }

    return null;
  }, [breakdowns, digits, level, pins]);

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

  useEffect(() => {
    setPins([]);
    setOpened(new Set());
    setRarer(new Set());
  }, [digits]);

  useEffect(() => setShown(PAGE_SIZE), [digits, level, pins]);

  const sortedPins = [...pins].sort((left, right) => left.start - right.start);
  const phrase = sortedPins.map((pin) => pin.word).join(" ");
  const seen = new Set<string>();

  async function copyPhrase() {
    await navigator.clipboard.writeText(phrase);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <main className="page">
      <header className="top">
        <div className="title-row">
          <h1>Major System</h1>
          <div className="levels" role="radiogroup" aria-label="Words to use">
            <span className="levels-label">words</span>
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
          <span>
            <b>27</b> ng
          </span>
        </p>
        {sortedPins.length > 0 ? (
          <div className="phrase" data-testid="phrase">
            {sortedPins.map((pin) => (
              <button
                className="pin"
                key={spanKey(pin.start, pin.end)}
                title="Remove"
                type="button"
                onClick={() => setPins(pins.filter((entry) => entry !== pin))}
              >
                <span className="pin-digits">{digits.slice(pin.start, pin.end)}</span> {pin.word} ×
              </button>
            ))}
            <span className="phrase-actions">
              <button type="button" onClick={() => void copyPhrase()}>
                {copied ? "copied" : "copy"}
              </button>
              <button type="button" onClick={() => setPins([])}>
                clear
              </button>
            </span>
          </div>
        ) : null}
      </header>

      {digits ? (
        <p className="summary" data-testid="summary">
          {breakdowns.length === 0
            ? level < 2
              ? `No split uses only ${LEVELS[level]!.label} words.`
              : "No way to split these digits into words."
            : `${breakdowns.length}${breakdowns.length >= 500 ? "+" : ""} ways to split · fewest chunks first · tap a word to keep it`}
          {shorterAt ? (
            <>
              {" · "}
              <button className="hint" type="button" onClick={() => setLevel(shorterAt.level)}>
                {shorterAt.label} words fit in {shorterAt.count} {shorterAt.count === 1 ? "chunk" : "chunks"}
              </button>
            </>
          ) : null}
        </p>
      ) : (
        <div className="intro">
          <p>
            Each digit stands for a consonant sound (key above); vowels are free. Type a number, then tap a word in
            each chunk to build a phrase you can picture.
          </p>
          <p>
            Try{" "}
            <button className="hint" type="button" onClick={() => setInput("7294")}>
              7294
            </button>{" "}
            or{" "}
            <button className="hint" type="button" onClick={() => setInput("3141592653")}>
              3141592653
            </button>
            .
          </p>
        </div>
      )}

      {breakdowns.slice(0, shown).map((breakdown) => {
        let start = 0;

        return (
          <section className="breakdown" data-testid="breakdown" key={breakdown.key}>
            <h2>{breakdown.chunks.join(" · ")}</h2>
            <div className="chunks">
              {breakdown.chunks.map((chunk) => {
                const chunkStart = start;
                const end = start + chunk.length;
                const key = spanKey(chunkStart, end);
                const repeat = seen.has(key);
                seen.add(key);
                start = end;

                return (
                  <ChunkRow
                    chunk={chunk}
                    key={key}
                    level={level}
                    open={opened.has(key)}
                    pin={pins.find((pin) => pin.start === chunkStart && pin.end === end)}
                    repeat={repeat}
                    showRarer={rarer.has(chunk)}
                    onOpen={() => setOpened(toggled(opened, key, true))}
                    onPick={(word) => setPins([...pins, { start: chunkStart, end, word }])}
                    onShowRarer={(show) => setRarer(toggled(rarer, chunk, show))}
                    onUnpin={() => setPins(pins.filter((pin) => pin.start !== chunkStart))}
                  />
                );
              })}
            </div>
          </section>
        );
      })}

      {shown < breakdowns.length ? (
        <button className="more" type="button" onClick={() => setShown(shown + PAGE_SIZE)}>
          Show more ({breakdowns.length - shown} left)
        </button>
      ) : null}
    </main>
  );
}
