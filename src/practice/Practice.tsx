import { useEffect, useRef, useState } from "react";

import { SKILL_NOTES } from "../majorSystem";
import {
  LEVELS,
  RUN_SECONDS,
  decodePhrases,
  digitOwners,
  encodePhrases,
  examplesFor,
  hashString,
  loadStore,
  makeGenerator,
  nextLevel,
  phraseDigits,
  recordDigit,
  recordWord,
  saveStore,
  seededRandom,
  weakestSkills,
  type Phrase,
  type Run,
  type Store,
} from "./model";

type Phase = "ready" | "running" | "miss" | "done";

type Challenge = { phrases: Phrase[]; code: string; score: number; level: number };

type Result = Run & { shown: Phrase[]; levelChange: number; hintsOff: boolean; previousBest: number };

// After a miss the clock pauses until you tap; taps sooner than this are double-taps.
const MISS_MIN_MS = 300;

const KEY_SOUNDS: Record<string, string> = {
  "0": "s z",
  "1": "t d",
  "2": "n",
  "3": "m",
  "4": "r",
  "5": "l",
  "6": "j sh",
  "7": "k g",
  "8": "f v",
  "9": "p b",
};

// Digits typed this soon after a new prompt are leftovers from the last one, not answers.
const FRESH_PROMPT_MS = 200;

function levelName(level: number) {
  return LEVELS[Math.min(level, LEVELS.length - 1)]!.name;
}

function readChallenge(): Challenge | null {
  const params = new URLSearchParams(window.location.hash.split("?")[1] ?? "");
  const code = params.get("c");
  if (!code) {
    return null;
  }
  const phrases = decodePhrases(code);
  return phrases.length
    ? { phrases, code, score: Number(params.get("s") ?? 0), level: Number(params.get("l") ?? 0) }
    : null;
}

function bestDigits(store: Store) {
  return store.runs.reduce((best, run) => Math.max(best, run.digits), 0);
}

function Keypad({ onDigit, hints }: { onDigit: (digit: string) => void; hints: boolean }) {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", ""];
  return (
    <div className="keypad" data-testid="keypad">
      {keys.map((key, index) =>
        key ? (
          <button
            className="key-button"
            key={key}
            tabIndex={-1}
            type="button"
            // Pointer-down, not click: no delay on touch, and timing starts at the press.
            onPointerDown={(event) => {
              event.preventDefault();
              onDigit(key);
            }}
          >
            <span className="key-digit">{key}</span>
            {hints ? <span className="key-sounds">{KEY_SOUNDS[key]}</span> : null}
          </button>
        ) : (
          <span key={`blank-${index}`} />
        ),
      )}
    </div>
  );
}

function Breakdown({ phrase, missAt }: { phrase: Phrase; missAt: number | null }) {
  let position = 0;
  return (
    <div className="breakdown-words">
      {phrase.map((entry, index) => (
        <span className="breakdown-word" key={`${index}:${entry.word}`}>
          <span className="breakdown-label">{entry.word}</span>
          <span className="breakdown-sounds">
            {entry.sounds.map((sound, soundIndex) => {
              const start = position;
              position += sound.digits.length;
              const missed = missAt !== null && missAt >= start && missAt < position;
              return (
                <span className={missed ? "sound missed" : "sound"} key={soundIndex}>
                  {sound.label} <b>{sound.digits}</b>
                </span>
              );
            })}
          </span>
        </span>
      ))}
    </div>
  );
}

function WeakSpots({ store }: { store: Store }) {
  const [open, setOpen] = useState<string | null>(null);
  const weak = weakestSkills(store);

  if (weak.length === 0) {
    return null;
  }

  return (
    <section className="practice-panel">
      <h2>Practice most</h2>
      <p className="weak-list">
        {weak.map(({ skill, stat }) => (
          <button
            className={open === skill ? "weak active" : "weak"}
            key={skill}
            type="button"
            onClick={() => setOpen(open === skill ? null : skill)}
          >
            {skill}
            <span className="weak-detail">
              {stat.missed >= 2 ? `missed ${stat.missed} of ${stat.seen}` : "slower than your average"}
            </span>
          </button>
        ))}
      </p>
      {open ? (
        <p className="weak-note">
          {SKILL_NOTES[open] ?? `the "${open}" sound`}. For example:{" "}
          {examplesFor(open)
            .map((entry) => `${entry.word} ${entry.digits}`)
            .join(" · ")}
          . Your next runs lean on it automatically.
        </p>
      ) : (
        <p className="weak-note">Runs lean toward these automatically. Tap one for the rule and examples.</p>
      )}
    </section>
  );
}

function History({ store }: { store: Store }) {
  const runs = store.runs.slice(-30);
  if (runs.length === 0) {
    return null;
  }
  const best = bestDigits(store);
  const recent = store.runs.slice(-5);
  const average = recent.reduce((sum, run) => sum + run.digits, 0) / recent.length;
  return (
    <section className="practice-panel">
      <h2>Your runs</h2>
      <p className="history-line">
        {store.runs.length} {store.runs.length === 1 ? "run" : "runs"} · best {best} digits · recent average{" "}
        {average.toFixed(0)} · now on {levelName(store.level)}
      </p>
      <div className="history-bars" aria-label="Digits per run, oldest to newest">
        {runs.map((run) => (
          <span
            className={run.digits === best ? "bar best" : "bar"}
            key={run.at}
            style={{ height: `${Math.max(6, (run.digits / Math.max(best, 1)) * 100)}%` }}
            title={`${run.digits} digits, ${new Date(run.at).toLocaleDateString()}`}
          />
        ))}
      </div>
    </section>
  );
}

export function Practice() {
  const [store, setStore] = useState<Store>(loadStore);
  const [challenge] = useState<Challenge | null>(readChallenge);
  const [phase, setPhase] = useState<Phase>("ready");
  const [phrase, setPhrase] = useState<Phrase | null>(null);
  const [typed, setTyped] = useState("");
  const [missAt, setMissAt] = useState<number | null>(null);
  const [wrongDigit, setWrongDigit] = useState("");
  const [remaining, setRemaining] = useState(RUN_SECONDS * 1000);
  const [result, setResult] = useState<Result | null>(null);
  const [shareNote, setShareNote] = useState("");
  const [streak, setStreak] = useState(0);

  // Run state lives in refs so the key handler always sees the latest values.
  const run = useRef({
    store: store,
    phase: "ready" as Phase,
    phrase: null as Phrase | null,
    typed: "",
    lastKey: 0,
    shownAt: 0,
    pausedAt: 0,
    endAt: 0,
    queue: [] as Phrase[],
    shown: [] as Phrase[],
    next: (() => []) as () => Phrase,
    digits: 0,
    phrases: 0,
    misses: 0,
    level: 0,
  });

  function setRunPhase(next: Phase) {
    run.current.phase = next;
    setPhase(next);
  }

  function showNext() {
    const state = run.current;
    const next = state.queue.shift() ?? state.next();
    state.shown.push(next);
    state.phrase = next;
    state.typed = "";
    state.lastKey = performance.now();
    state.shownAt = state.lastKey;
    setPhrase(next);
    setTyped("");
    setMissAt(null);
  }

  function start() {
    const working = loadStore();
    const state = run.current;
    const level = challenge ? challenge.level : working.level;
    const seed = challenge ? hashString(challenge.code) : (Math.random() * 2 ** 32) >>> 0;
    Object.assign(state, {
      store: working,
      queue: challenge ? [...challenge.phrases] : [],
      shown: [],
      next: makeGenerator(seededRandom(seed), level, challenge ? null : working),
      digits: 0,
      phrases: 0,
      misses: 0,
      level,
      endAt: performance.now() + RUN_SECONDS * 1000,
    });
    setResult(null);
    setShareNote("");
    setStreak(0);
    setRemaining(RUN_SECONDS * 1000);
    showNext();
    setRunPhase("running");
  }

  function finish() {
    const state = run.current;
    if (state.phase === "done" || state.phase === "ready") {
      return;
    }
    const previousBest = bestDigits(state.store);
    const record: Run = {
      at: Date.now(),
      digits: state.digits,
      phrases: state.phrases,
      misses: state.misses,
      level: state.level,
      challenge: challenge !== null,
    };
    state.store.runs.push(record);
    const before = state.store.level;
    if (!challenge) {
      state.store.level = nextLevel(before, record);
    }
    saveStore(state.store);
    setStore({ ...state.store });
    setResult({
      ...record,
      shown: [...state.shown],
      levelChange: state.store.level - before,
      hintsOff: before === 0 && state.store.level > 0,
      previousBest,
    });
    setPhrase(null);
    setRunPhase("done");
  }

  function abort() {
    run.current.phase = "ready";
    setPhase("ready");
    setPhrase(null);
    setTyped("");
    setRemaining(RUN_SECONDS * 1000);
  }

  // Leave a miss's answer: the clock resumes and the next prompt appears.
  function continueAfterMiss() {
    const state = run.current;
    const now = performance.now();
    if (state.phase !== "miss" || now - state.pausedAt < MISS_MIN_MS) {
      return;
    }
    state.endAt += now - state.pausedAt;
    setRunPhase("running");
    showNext();
  }

  function press(digit: string) {
    const state = run.current;
    if (state.phase === "miss") {
      continueAfterMiss();
      return;
    }
    if (state.phase !== "running" || !state.phrase) {
      return;
    }
    const expected = phraseDigits(state.phrase);
    const owners = digitOwners(state.phrase);
    const index = state.typed.length;
    const owner = owners[index]!;
    const now = performance.now();
    if (index === 0 && now - state.shownAt < FRESH_PROMPT_MS) {
      return;
    }

    if (digit === expected[index]) {
      // The first digit of a prompt includes reading time, so it isn't timed.
      if (index > 0 && owner.first) {
        recordDigit(state.store, owner.word, owner.sound, now - state.lastKey);
      }
      state.lastKey = now;
      state.typed += digit;
      setTyped(state.typed);
      if (state.typed === expected) {
        state.digits += expected.length;
        state.phrases += 1;
        for (const word of state.phrase) {
          recordWord(state.store, word, null);
        }
        setStreak((count) => count + 1);
        showNext();
      }
      return;
    }

    // Wrong digit: the prompt is missed. Show the answer, then move on.
    state.phrases += 1;
    state.misses += 1;
    let position = 0;
    for (const word of state.phrase) {
      const end = position + word.digits.length;
      if (index >= position && index < end) {
        recordWord(state.store, word, owner.sound);
      } else if (end <= index) {
        recordWord(state.store, word, null);
      }
      position = end;
    }
    setMissAt(index);
    setWrongDigit(digit);
    setStreak(0);
    // Wrong answer: pause the clock and wait for a tap so you can study the answer.
    state.pausedAt = now;
    setRunPhase("miss");
  }

  // Countdown; it stops while a miss's answer is showing.
  useEffect(() => {
    if (phase !== "running") {
      return;
    }
    let frame = 0;
    const tick = () => {
      const left = run.current.endAt - performance.now();
      if (left <= 0) {
        setRemaining(0);
        finish();
        return;
      }
      setRemaining(left);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase]);

  // Physical keyboard: digits type, Enter or Space starts, Escape stops.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }
      const state = run.current;
      if (/^[0-9]$/.test(event.key)) {
        event.preventDefault();
        press(event.key);
      } else if ((event.key === "Enter" || event.key === " ") && (state.phase === "ready" || state.phase === "done")) {
        event.preventDefault();
        start();
      } else if ((event.key === "Enter" || event.key === " ") && state.phase === "miss") {
        event.preventDefault();
        continueAfterMiss();
      } else if (event.key === "Escape" && (state.phase === "running" || state.phase === "miss")) {
        abort();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  async function share() {
    if (!result) {
      return;
    }
    const url = new URL(window.location.href);
    url.search = "";
    url.hash = `practice?c=${encodePhrases(result.shown)}&s=${result.digits}&l=${result.level}`;
    const text = `Major System sprint: ${result.digits} digits in ${RUN_SECONDS}s. Same phrases, can you beat it?`;
    try {
      if (navigator.share) {
        await navigator.share({ text, url: url.toString() });
        return;
      }
      await navigator.clipboard.writeText(`${text} ${url}`);
      setShareNote("Link copied");
    } catch {
      setShareNote("");
    }
  }

  const expected = phrase ? phraseDigits(phrase) : "";
  const seconds = Math.ceil(remaining / 1000);
  const active = phase === "running" || phase === "miss";

  return (
    <main className="page practice">
      <div className="practice-status" aria-live="off">
        <span className={active && seconds <= 10 ? "clock low" : "clock"} data-testid="clock">
          {seconds}s
        </span>
        <span className="score" data-testid="score">
          {active ? `${run.current.digits} digits` : challenge ? `challenge: beat ${challenge.score}` : levelName(store.level)}
        </span>
        {active ? (
          <button className="stop" type="button" onClick={abort}>
            stop
          </button>
        ) : null}
      </div>

      <div
        className={`prompt ${phase}`}
        data-testid="prompt"
        onPointerDown={phase === "miss" ? continueAfterMiss : undefined}
      >
        {phase === "ready" ? (
          <button className="start" data-testid="start" type="button" onClick={start}>
            Start
            <span className="start-detail">
              {challenge
                ? `Same phrases as a friend who got ${challenge.score} digits`
                : `${RUN_SECONDS} seconds · type each phrase's number`}
            </span>
          </button>
        ) : null}

        {phase === "running" && phrase ? (
          <p className={streak > 0 ? "phrase-text pop" : "phrase-text"} data-testid="phrase-text" key={run.current.shown.length}>
            {phrase.map((entry) => entry.word).join(" ")}
          </p>
        ) : null}

        {phase === "miss" && phrase ? (
          <div className="miss-view" data-testid="miss">
            <Breakdown missAt={missAt} phrase={phrase} />
            <p className="miss-note">
              you typed {wrongDigit}, it's {missAt !== null ? expected[missAt] : ""} · clock paused, tap to go on
            </p>
          </div>
        ) : null}

        {phase === "done" && result ? (
          <div className="result" data-testid="result">
            <p className="result-score">
              <b>{result.digits}</b> digits
            </p>
            <p className="result-detail">
              {(result.digits / RUN_SECONDS).toFixed(2)} digits/s · {result.phrases - result.misses} of {result.phrases}{" "}
              right
              {challenge
                ? result.digits > challenge.score
                  ? ` · beat the challenge by ${result.digits - challenge.score}`
                  : result.digits === challenge.score
                    ? " · tied the challenge"
                    : ` · ${challenge.score - result.digits} short of the challenge`
                : result.digits > result.previousBest && result.previousBest > 0
                  ? " · new best"
                  : ""}
              {result.levelChange > 0
                ? ` · moving up to ${levelName(store.level)}${result.hintsOff ? " (keypad hints off)" : ""}`
                : result.levelChange < 0
                  ? ` · back to ${levelName(store.level)}`
                  : ""}
            </p>
            <p className="result-actions">
              <button className="again" type="button" onClick={start}>
                Go again
              </button>
              <button type="button" onClick={() => void share()}>
                {shareNote || "Share this run"}
              </button>
            </p>
          </div>
        ) : null}
      </div>

      <p className="typed" data-testid="typed" aria-label="Typed digits">
        {/* Only what you've typed: placeholders would give away the answer's length. */}
        {active && phrase && (typed || phase === "miss")
          ? (phase === "miss" ? expected : typed).split("").map((digit, index) => (
              <span
                className={index < typed.length ? "slot done" : phase === "miss" && index === missAt ? "slot wrong" : "slot"}
                key={index}
              >
                {digit}
              </span>
            ))
          : " "}
      </p>

      <Keypad hints={store.level === 0} onDigit={press} />

      {phase === "ready" || phase === "done" ? (
        <>
          <WeakSpots store={store} />
          <History store={store} />
        </>
      ) : null}
    </main>
  );
}
