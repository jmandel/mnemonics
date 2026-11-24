import { useEffect, useRef, useState } from "react";

import { SKILL_NOTES } from "../majorSystem";
import {
  LEVELS,
  RUN_SECONDS,
  decodePrompts,
  digitOwners,
  encodePrompts,
  examplesFor,
  hashString,
  loadStore,
  makeGenerator,
  nextLevel,
  phraseDigits,
  recordDigit,
  recordPick,
  recordWord,
  saveStore,
  seededRandom,
  weakestSkills,
  type Phrase,
  type PracticeWord,
  type Prompt,
  type Run,
  type Store,
} from "./model";

type Phase = "ready" | "running" | "miss" | "done";

type Challenge = { prompts: Prompt[]; code: string; score: number; level: number };

type Result = Run & { shown: Prompt[]; levelChange: number; hintsOff: boolean; previousBest: number };

// What went wrong, for the miss view: a typed digit, or a picked word.
type Miss = { kind: "type"; at: number; digit: string } | { kind: "pick"; picked: PracticeWord };

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
  const prompts = decodePrompts(code);
  return prompts.length
    ? { prompts, code, score: Number(params.get("s") ?? 0), level: Number(params.get("l") ?? 0) }
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

// Per typed position: which word and sound it belongs to, with the word's index.
function positions(phrase: Phrase) {
  const out: Array<{ wordIndex: number; soundIndex: number; sound: PracticeWord["sounds"][number] }> = [];
  phrase.forEach((entry, wordIndex) => {
    entry.sounds.forEach((sound, soundIndex) => {
      for (let index = 0; index < sound.digits.length; index += 1) {
        out.push({ wordIndex, soundIndex, sound });
      }
    });
  });
  return out;
}

// How many sounds of each word are fully typed.
function soundsDone(phrase: Phrase, typedCount: number) {
  const done = phrase.map(() => 0);
  let position = 0;
  phrase.forEach((entry, wordIndex) => {
    for (const sound of entry.sounds) {
      position += sound.digits.length;
      if (position <= typedCount) {
        done[wordIndex] += 1;
      }
    }
  });
  return done;
}

const VOWELISH = "aeiouwhy'-";

// The word with the letters of each typed sound lit, and silent letters faded once passed.
function LitWord({ entry, done, current }: { entry: PracticeWord; done: number; current: boolean }) {
  if (!entry.align) {
    return <span className={current ? "lit-word current" : "lit-word"}>{entry.word}</span>;
  }
  const marks = entry.align.split("");
  let lastLit = -1;
  marks.forEach((mark, index) => {
    if (mark !== "-" && parseInt(mark, 36) < done) {
      lastLit = index;
    }
  });
  const complete = done >= entry.sounds.length;
  return (
    <span className={current ? "lit-word current" : "lit-word"}>
      {entry.word.split("").map((letter, index) => {
        const mark = marks[index]!;
        const lit = mark !== "-" && parseInt(mark, 36) < done;
        const silent = mark === "-" && !VOWELISH.includes(letter) && (complete || index < lastLit);
        return (
          <span className={lit ? "letter lit" : silent ? "letter silent" : "letter"} key={index}>
            {letter}
          </span>
        );
      })}
    </span>
  );
}

// Typed digits grouped by word, and within a word by sound, each sound labeled.
function TypedDigits({ phrase, shown, missAt }: { phrase: Phrase; shown: string; missAt: number | null }) {
  let position = 0;
  return (
    <>
      {phrase.map((entry, wordIndex) => {
        const groups = entry.sounds.map((sound) => {
          const start = position;
          position += sound.digits.length;
          return { sound, start, digits: shown.slice(start, position) };
        });
        if (!groups.some((group) => group.digits)) {
          return null;
        }
        return (
          <span className="typed-word" key={wordIndex}>
            {groups
              .filter((group) => group.digits)
              .map(({ sound, start, digits }, index) => (
                <span className="typed-sound" key={index}>
                  <span className="typed-digits">
                    {digits.split("").map((digit, offset) => (
                      <span className={start + offset === missAt ? "slot wrong" : "slot"} key={offset}>
                        {digit}
                      </span>
                    ))}
                  </span>
                  <span className="typed-label">{sound.label}</span>
                </span>
              ))}
          </span>
        );
      })}
    </>
  );
}

type ChoicesProps = {
  choices: PracticeWord[];
  onPick: (index: number) => void;
  // After a wrong pick: mark the answer and the pick; any tap continues.
  answer?: PracticeWord;
  picked?: PracticeWord;
};

function Choices({ choices, onPick, answer, picked }: ChoicesProps) {
  return (
    <div className="choices" data-testid="choices">
      {choices.map((entry, index) => (
        <button
          className={entry === answer ? "choice answer" : entry === picked ? "choice picked" : "choice"}
          key={entry.word}
          tabIndex={-1}
          type="button"
          onPointerDown={(event) => {
            event.preventDefault();
            onPick(index);
          }}
        >
          <span className="choice-key">{index + 1}</span>
          {entry.word}
        </button>
      ))}
    </div>
  );
}

// After a wrong pick: your pick and the answer, sound by sound, so the trap is plain.
function PickReview({ prompt, picked }: { prompt: Extract<Prompt, { kind: "pick" }>; picked: PracticeWord }) {
  return (
    <div className="pick-review">
      {[picked, prompt.answer].map((entry) => (
        <span className={entry === prompt.answer ? "pick-row answer" : "pick-row picked"} key={entry.word}>
          <LitWord current={false} done={entry.sounds.length} entry={entry} />
          <span className="pick-digits">
            {entry.sounds.map((sound) => (
              <span key={sound.label + sound.digits}>
                {sound.label}
                <b>{sound.digits}</b>
              </span>
            ))}
          </span>
          <span className="pick-note">{entry === prompt.answer ? "answer" : "your pick"}</span>
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
  const [prompt, setPrompt] = useState<Prompt | null>(null);
  const [typed, setTyped] = useState("");
  const [miss, setMiss] = useState<Miss | null>(null);
  const [remaining, setRemaining] = useState(RUN_SECONDS * 1000);
  const [result, setResult] = useState<Result | null>(null);
  const [shareNote, setShareNote] = useState("");
  const [streak, setStreak] = useState(0);

  // Run state lives in refs so the key handler always sees the latest values.
  const run = useRef({
    store: store,
    phase: "ready" as Phase,
    prompt: null as Prompt | null,
    typed: "",
    lastKey: 0,
    shownAt: 0,
    pausedAt: 0,
    endAt: 0,
    queue: [] as Prompt[],
    shown: [] as Prompt[],
    next: (() => ({ kind: "type", words: [] })) as () => Prompt,
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
    state.prompt = next;
    state.typed = "";
    state.lastKey = performance.now();
    state.shownAt = state.lastKey;
    setPrompt(next);
    setTyped("");
    setMiss(null);
  }

  function start() {
    const working = loadStore();
    const state = run.current;
    const level = challenge ? challenge.level : working.level;
    const seed = challenge ? hashString(challenge.code) : (Math.random() * 2 ** 32) >>> 0;
    Object.assign(state, {
      store: working,
      queue: challenge ? [...challenge.prompts] : [],
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
    setPrompt(null);
    setRunPhase("done");
  }

  function abort() {
    run.current.phase = "ready";
    setPhase("ready");
    setPrompt(null);
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

  // Wrong answer: pause the clock and wait for a tap so you can study the answer.
  function missed(next: Miss) {
    const state = run.current;
    state.phrases += 1;
    state.misses += 1;
    state.pausedAt = performance.now();
    setMiss(next);
    setStreak(0);
    setRunPhase("miss");
  }

  function correct(digitCount: number) {
    const state = run.current;
    state.digits += digitCount;
    state.phrases += 1;
    setStreak((count) => count + 1);
    showNext();
  }

  // "Which word is this number?": choices are picked by position (keys 1-4).
  function pick(index: number) {
    const state = run.current;
    const current = state.prompt;
    if (state.phase === "miss") {
      continueAfterMiss();
      return;
    }
    if (state.phase !== "running" || current?.kind !== "pick" || performance.now() - state.shownAt < FRESH_PROMPT_MS) {
      return;
    }
    const picked = current.choices[index];
    if (!picked) {
      return;
    }
    recordPick(state.store, current.answer, picked);
    if (picked === current.answer) {
      correct(current.answer.digits.length);
    } else {
      missed({ kind: "pick", picked });
    }
  }

  function press(digit: string) {
    const state = run.current;
    if (state.phase === "miss") {
      continueAfterMiss();
      return;
    }
    if (state.phase !== "running" || !state.prompt) {
      return;
    }
    if (state.prompt.kind === "pick") {
      if (/^[1-4]$/.test(digit)) {
        pick(Number(digit) - 1);
      }
      return;
    }
    const phrase = state.prompt.words;
    const expected = phraseDigits(phrase);
    const owners = digitOwners(phrase);
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
        for (const word of phrase) {
          recordWord(state.store, word, null);
        }
        correct(expected.length);
      }
      return;
    }

    // Wrong digit: the prompt is missed.
    let position = 0;
    for (const word of phrase) {
      const end = position + word.digits.length;
      if (index >= position && index < end) {
        recordWord(state.store, word, owner.sound);
      } else if (end <= index) {
        recordWord(state.store, word, null);
      }
      position = end;
    }
    missed({ kind: "type", at: index, digit });
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

  // Physical keyboard: digits type (1-4 pick), Enter or Space starts or continues, Escape stops.
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
    url.hash = `practice?c=${encodePrompts(result.shown)}&s=${result.digits}&l=${result.level}`;
    const text = `Major System sprint: ${result.digits} digits in ${RUN_SECONDS}s. Same rounds, can you beat it?`;
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

  const phrase = prompt?.kind === "type" ? prompt.words : null;
  const expected = phrase ? phraseDigits(phrase) : "";
  const done = phrase ? soundsDone(phrase, typed.length) : [];
  const currentWord = phrase ? (positions(phrase)[typed.length]?.wordIndex ?? -1) : -1;
  const seconds = Math.ceil(remaining / 1000);
  const active = phase === "running" || phase === "miss";
  const picking = active && prompt?.kind === "pick";

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
                ? `Same rounds as a friend who got ${challenge.score} digits`
                : `${RUN_SECONDS} seconds · type each word's number, or pick the word for a number`}
            </span>
          </button>
        ) : null}

        {phase === "running" && phrase ? (
          <p className={streak > 0 ? "phrase-text pop" : "phrase-text"} data-testid="phrase-text" key={run.current.shown.length}>
            {phrase.map((entry, index) => (
              <LitWord current={phrase.length > 1 && index === currentWord} done={done[index]!} entry={entry} key={index} />
            ))}
          </p>
        ) : null}

        {phase === "running" && prompt?.kind === "pick" ? (
          <div className="pick-prompt pop" data-testid="pick-prompt" key={run.current.shown.length}>
            <span className="pick-number">{prompt.answer.digits}</span>
            <span className="pick-question">which word is this?</span>
          </div>
        ) : null}

        {phase === "miss" && phrase && miss?.kind === "type" ? (
          <div className="miss-view" data-testid="miss">
            <Breakdown missAt={miss.at} phrase={phrase} />
            <p className="miss-note">
              you typed {miss.digit}, it's {expected[miss.at]} · clock paused, tap to go on
            </p>
          </div>
        ) : null}

        {phase === "miss" && prompt?.kind === "pick" && miss?.kind === "pick" ? (
          <div className="miss-view" data-testid="miss">
            <PickReview picked={miss.picked} prompt={prompt} />
            <p className="miss-note">{prompt.answer.digits} is {prompt.answer.word} · clock paused, tap to go on</p>
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
        {/* Only what you've typed, grouped by word and sound. */}
        {active && phrase && (typed || miss?.kind === "type") ? (
          <TypedDigits missAt={miss?.kind === "type" ? miss.at : null} phrase={phrase} shown={phase === "miss" ? expected : typed} />
        ) : (
          "\u00a0"
        )}
      </p>

      {/* Same footprint either way, so nothing below moves. */}
      {picking && prompt?.kind === "pick" ? (
        <Choices
          answer={phase === "miss" ? prompt.answer : undefined}
          choices={prompt.choices}
          picked={phase === "miss" && miss?.kind === "pick" ? miss.picked : undefined}
          onPick={pick}
        />
      ) : (
        <Keypad hints={store.level === 0} onDigit={press} />
      )}

      {phase === "ready" || phase === "done" ? (
        <>
          <WeakSpots store={store} />
          <History store={store} />
        </>
      ) : null}
    </main>
  );
}
