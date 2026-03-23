import { startTransition, useEffect, useRef, useState } from "react";

import { CanvasAtlas } from "./CanvasAtlas";
import type { SearchResults, SortMethod, SpanCandidate, WordOption } from "./types";

type SearchEngine = typeof import("./engine");

type GridSelection = {
  span: SpanCandidate;
  word: WordOption;
};

type DigitRange = {
  start: number;
  end: number;
};

function sanitizeDigits(value: string) {
  return value.replace(/\D/g, "");
}

function sortCovers(results: SearchResults, method: SortMethod): SearchResults {
  const covers = [...results.covers];

  switch (method) {
    case "length":
      covers.sort(
        (left, right) =>
          left.partCount - right.partCount ||
          right.quality - left.quality ||
          right.balance - left.balance,
      );
      break;
    case "balanced":
      covers.sort(
        (left, right) =>
          right.balance - left.balance ||
          right.quality - left.quality ||
          left.partCount - right.partCount,
      );
      break;
    case "quality":
    default:
      covers.sort(
        (left, right) =>
          right.quality - left.quality ||
          left.partCount - right.partCount ||
          right.balance - left.balance,
      );
      break;
  }

  return {
    ...results,
    covers,
  };
}

function initialDigitsFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return sanitizeDigits(params.get("n") ?? "");
}

function spansOverlap(left: SpanCandidate, right: SpanCandidate) {
  return left.start < right.end && left.end > right.start;
}

function buildCoveragePercent(digits: string, selections: GridSelection[]) {
  if (!digits) {
    return 0;
  }

  const covered = new Array<boolean>(digits.length).fill(false);

  for (const selection of selections) {
    for (let index = selection.span.start; index < selection.span.end; index += 1) {
      covered[index] = true;
    }
  }

  return Math.round((covered.filter(Boolean).length / digits.length) * 100);
}

function formatCount(value: number) {
  return value.toLocaleString();
}

function rangeLabel(range: DigitRange) {
  return `${range.start + 1}-${range.end}`;
}

function pickFocusRange(ranges: DigitRange[]) {
  if (ranges.length === 0) {
    return null;
  }

  return [...ranges].sort(
    (left, right) =>
      (left.end - left.start) - (right.end - right.start) ||
      left.start - right.start,
  )[0] ?? null;
}

function coverWeightBySpan(results: SearchResults | null) {
  const weights = new Map<string, number>();

  if (!results) {
    return weights;
  }

  const covers = results.covers.slice(0, 48);

  covers.forEach((cover, index) => {
    const rankWeight = 1 / (index + 1);
    const coverSignal = (cover.quality + cover.balance) * 0.5 + (6 - cover.partCount) * 6;

    cover.spans.forEach((span) => {
      weights.set(span.key, (weights.get(span.key) ?? 0) + rankWeight * coverSignal);
    });
  });

  return weights;
}

function spanMatchesSelections(span: SpanCandidate, selections: GridSelection[]) {
  if (selections.length === 0) {
    return true;
  }

  return selections.every(
    (selection) => selection.span.key === span.key || !spansOverlap(selection.span, span),
  );
}

function uncoveredRanges(totalDigits: number, selections: GridSelection[]) {
  if (selections.length === 0) {
    return [{ start: 0, end: totalDigits }] satisfies DigitRange[];
  }

  const sorted = [...selections].sort((left, right) => left.span.start - right.span.start);
  const ranges: DigitRange[] = [];
  let cursor = 0;

  for (const selection of sorted) {
    if (cursor < selection.span.start) {
      ranges.push({
        start: cursor,
        end: selection.span.start,
      });
    }

    cursor = Math.max(cursor, selection.span.end);
  }

  if (cursor < totalDigits) {
    ranges.push({
      start: cursor,
      end: totalDigits,
    });
  }

  return ranges;
}

function gapFitScore(span: SpanCandidate, ranges: DigitRange[]) {
  let best = 0;

  for (const range of ranges) {
    if (span.start < range.start || span.end > range.end) {
      continue;
    }

    const rangeLength = Math.max(range.end - range.start, 1);
    const coverage = span.spanLength / rangeLength;
    const boundaryTouches = Number(span.start === range.start) + Number(span.end === range.end);
    const exactFit = boundaryTouches === 2 ? 1 : 0;
    const score =
      exactFit * 80 +
      boundaryTouches * 24 +
      coverage * 32 -
      Math.max(rangeLength - span.spanLength, 0) * 1.2;

    if (score > best) {
      best = score;
    }
  }

  return best;
}

function coverMatchesSelections(cover: SearchResults["covers"][number], selections: GridSelection[]) {
  if (selections.length === 0) {
    return true;
  }

  return selections.every((selection) =>
    cover.spans.some((span) => span.key === selection.span.key),
  );
}

function coverWeightBySpanForSelections(results: SearchResults | null, selections: GridSelection[]) {
  if (selections.length === 0) {
    return coverWeightBySpan(results);
  }

  const weights = new Map<string, number>();

  if (!results) {
    return weights;
  }

  const covers = results.covers.filter((cover) => coverMatchesSelections(cover, selections)).slice(0, 48);

  covers.forEach((cover, index) => {
    const rankWeight = 1 / (index + 1);
    const coverSignal = (cover.quality + cover.balance) * 0.5 + (6 - cover.partCount) * 6;

    cover.spans.forEach((span) => {
      weights.set(span.key, (weights.get(span.key) ?? 0) + rankWeight * coverSignal);
    });
  });

  return weights;
}

function sortGridSpans(
  spans: SpanCandidate[],
  results: SearchResults | null,
  method: SortMethod,
  totalDigits: number,
  selections: GridSelection[],
) {
  const weights = coverWeightBySpanForSelections(results, selections);
  const targetBalancedLength = Math.max(2, totalDigits / 3);
  const selectedKeys = new Set(selections.map((selection) => selection.span.key));
  const ranges = uncoveredRanges(totalDigits, selections);
  const compatibleSpans = spans.filter(
    (span) => !selectedKeys.has(span.key) && spanMatchesSelections(span, selections),
  );
  const weightedCompatibleSpans =
    selections.length === 0
      ? compatibleSpans
      : compatibleSpans.filter((span) => (weights.get(span.key) ?? 0) > 0.001);
  const visibleSpans =
    weightedCompatibleSpans.length > 0 ? weightedCompatibleSpans : compatibleSpans;

  return [...visibleSpans].sort((left, right) => {
    const leftSelected = selections.some((selection) => selection.span.key === left.key);
    const rightSelected = selections.some((selection) => selection.span.key === right.key);

    if (leftSelected !== rightSelected) {
      return Number(rightSelected) - Number(leftSelected);
    }

    const gapDelta = gapFitScore(right, ranges) - gapFitScore(left, ranges);

    if (Math.abs(gapDelta) > 0.001) {
      return gapDelta;
    }

    const coverDelta = (weights.get(right.key) ?? 0) - (weights.get(left.key) ?? 0);

    if (Math.abs(coverDelta) > 0.001) {
      return coverDelta;
    }

    switch (method) {
      case "length":
        return (
          right.spanLength - left.spanLength ||
          right.localScore - left.localScore ||
          right.wordCount - left.wordCount ||
          left.start - right.start
        );
      case "balanced":
        return (
          Math.abs(left.spanLength - targetBalancedLength) -
            Math.abs(right.spanLength - targetBalancedLength) ||
          right.localScore - left.localScore ||
          right.wordCount - left.wordCount ||
          left.start - right.start
        );
      case "quality":
      default:
        return (
          right.localScore - left.localScore ||
          right.wordCount - left.wordCount ||
          right.spanLength - left.spanLength ||
          left.start - right.start
        );
    }
  });
}

function messageForError(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
}

async function copyText(text: string) {
  await navigator.clipboard.writeText(text);
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat-chip">
      <span className="stat-label">{label}</span>
      <strong className="stat-value">{value}</strong>
    </div>
  );
}

export function App() {
  const [input, setInput] = useState(initialDigitsFromUrl);
  const [sortMethod, setSortMethod] = useState<SortMethod>("quality");
  const [controlsCollapsed, setControlsCollapsed] = useState(() => Boolean(initialDigitsFromUrl()));
  const [textScale, setTextScale] = useState(1.28);
  const [isSearching, setIsSearching] = useState(false);
  const [phase, setPhase] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [baseResults, setBaseResults] = useState<SearchResults | null>(null);
  const [gridSelections, setGridSelections] = useState<GridSelection[]>([]);

  const enginePromiseRef = useRef<Promise<SearchEngine> | null>(null);
  const engineModuleRef = useRef<SearchEngine | null>(null);
  const engineReadyRef = useRef(false);
  const searchFrameRef = useRef<number | null>(null);
  const nextRequestIdRef = useRef(1);
  const pendingRef = useRef(new Map<number, string>());
  const currentDigitsRef = useRef(input);
  const currentSortRef = useRef(sortMethod);

  currentDigitsRef.current = input;
  currentSortRef.current = sortMethod;

  function loadEngine() {
    if (engineModuleRef.current) {
      return Promise.resolve(engineModuleRef.current);
    }

    if (!enginePromiseRef.current) {
      enginePromiseRef.current = import("./engine").then((engine) => {
        engineModuleRef.current = engine;
        return engine;
      });
    }

    return enginePromiseRef.current;
  }

  function warmEngine() {
    if (engineReadyRef.current) {
      return loadEngine();
    }

    return loadEngine().then(async (engine) => {
      if (!engineReadyRef.current) {
        await engine.warmSearchEngine();
        engineReadyRef.current = true;
      }

      return engine;
    });
  }

  function resetSelections() {
    setGridSelections([]);
  }

  useEffect(() => {
    const url = new URL(window.location.href);

    if (input) {
      url.searchParams.set("n", input);
    } else {
      url.searchParams.delete("n");
    }

    history.replaceState({}, "", url);
  }, [input]);

  useEffect(() => {
    void warmEngine().catch(() => {
      // The real error is surfaced in the regular search path.
    });
  }, []);

  useEffect(() => {
    if (searchFrameRef.current !== null) {
      cancelAnimationFrame(searchFrameRef.current);
      searchFrameRef.current = null;
    }

    if (!input) {
      setIsSearching(false);
      setPhase("");
      setError(null);
      setBaseResults(null);
      setGridSelections([]);
      return;
    }

    setIsSearching(true);
    setPhase("Updating map…");
    setError(null);

    const nextInput = input;

    searchFrameRef.current = requestAnimationFrame(() => {
      searchFrameRef.current = null;
      resetSelections();

      const requestId = nextRequestIdRef.current;
      nextRequestIdRef.current += 1;
      pendingRef.current.set(requestId, nextInput);

      void warmEngine()
        .then((engine) => engine.searchMnemonics(nextInput, currentSortRef.current, null))
        .then((results) => {
          const activeInput = pendingRef.current.get(requestId);
          pendingRef.current.delete(requestId);

          if (activeInput !== currentDigitsRef.current) {
            return;
          }

          startTransition(() => {
            setError(null);
            setIsSearching(false);
            setPhase("");
            setBaseResults(sortCovers(results, currentSortRef.current));
          });
        })
        .catch((searchError) => {
          pendingRef.current.delete(requestId);
          startTransition(() => {
            setIsSearching(false);
            setPhase("");
            setError(messageForError(searchError));
          });
        });
    });

    return () => {
      if (searchFrameRef.current !== null) {
        cancelAnimationFrame(searchFrameRef.current);
        searchFrameRef.current = null;
      }
    };
  }, [input]);

  useEffect(() => {
    if (baseResults) {
      setBaseResults(sortCovers(baseResults, sortMethod));
    }
  }, [sortMethod]);

  const orderedSelections = [...gridSelections].sort((left, right) => left.span.start - right.span.start);
  const coveragePercent = buildCoveragePercent(input, orderedSelections);
  const openRanges = uncoveredRanges(input.length, orderedSelections);
  const focusRange = pickFocusRange(openRanges);
  const visibleGridSpans = sortGridSpans(
    baseResults?.browseSpans ?? [],
    baseResults,
    sortMethod,
    input.length,
    orderedSelections,
  );
  const showSetupPanel = !controlsCollapsed || !input;

  async function copyBuild() {
    if (orderedSelections.length === 0) {
      return;
    }

    try {
      await copyText(orderedSelections.map((selection) => selection.word.word).join(" / "));
    } catch (copyError) {
      setError(copyError instanceof Error ? copyError.message : "Copy failed");
    }
  }

  function chooseGridWord(span: SpanCandidate, word: WordOption) {
    setGridSelections((current) => {
      const next = current.filter(
        (selection) => selection.span.key === span.key || !spansOverlap(selection.span, span),
      );
      const existing = next.find((selection) => selection.span.key === span.key);

      if (existing && existing.word.word === word.word) {
        return next.filter((selection) => selection.span.key !== span.key);
      }

      return [
        ...next.filter((selection) => selection.span.key !== span.key),
        {
          span,
          word,
        },
      ];
    });
  }

  return (
    <div className="app-shell" data-testid="app-shell">
      {showSetupPanel ? (
        <div className="app-topbar">
          <div className="hud-stack">
            <header className="hud-card hud-top">
              <div className="hud-header">
                <div className="hud-brand">
                  <p className="eyebrow">Mnemonic Atlas</p>
                  <p className="hud-title">Explore the number as a word map.</p>
                </div>

                <div className="hud-header-actions">
                  <div className="hud-stats">
                    <Stat label="Tiles" value={formatCount(visibleGridSpans.length)} />
                    <Stat
                      label={orderedSelections.length > 0 ? "Next" : "Build"}
                      value={
                        orderedSelections.length > 0
                          ? (focusRange ? rangeLabel(focusRange) : "Done")
                          : `${coveragePercent}%`
                      }
                    />
                  </div>
                  {input ? (
                    <button
                      className="hud-toggle"
                      type="button"
                      onClick={() => setControlsCollapsed(true)}
                    >
                      Hide
                    </button>
                  ) : null}
                </div>
              </div>

              <label className="input-label" htmlFor="num-input">
                Digits
              </label>
              <input
                id="num-input"
                className="num-input"
                data-testid="num-input"
                inputMode="numeric"
                autoFocus
                autoComplete="off"
                placeholder="31415926"
                value={input}
                onChange={(event) => {
                  resetSelections();
                  setInput(sanitizeDigits(event.target.value));
                }}
              />

              <div className="sort-row">
                <button
                  className={`sort-pill ${sortMethod === "quality" ? "active" : ""}`}
                  data-testid="sort-quality"
                  data-sort="quality"
                  type="button"
                  onClick={() => setSortMethod("quality")}
                >
                  Best overall
                </button>
                <button
                  className={`sort-pill ${sortMethod === "length" ? "active" : ""}`}
                  data-testid="sort-length"
                  data-sort="length"
                  type="button"
                  onClick={() => setSortMethod("length")}
                >
                  Fewest chunks
                </button>
                <button
                  className={`sort-pill ${sortMethod === "balanced" ? "active" : ""}`}
                  data-testid="sort-balanced"
                  data-sort="balanced"
                  type="button"
                  onClick={() => setSortMethod("balanced")}
                >
                  Most balanced
                </button>

                <div className="text-size-controls" aria-label="Text size">
                  <span className="text-size-label">Text</span>
                  <button
                    className="text-size-button"
                    type="button"
                    onClick={() => setTextScale((current) => Math.max(0.9, current - 0.08))}
                  >
                    A-
                  </button>
                  <button
                    className="text-size-button"
                    type="button"
                    onClick={() => setTextScale((current) => Math.min(1.7, current + 0.08))}
                  >
                    A+
                  </button>
                </div>
              </div>

              <div className="hud-feedback">
                <p className="hint-line">
                  Drag or two-finger scroll to pan. Mouse wheel, pinch, or Ctrl+wheel zooms. Tap
                  any word inside a tile to add it to the build.
                </p>
                {isSearching ? (
                  <p className="phase-line" data-testid="phase-line">
                    {phase}
                  </p>
                ) : null}
                {error ? (
                  <p className="error-line" data-testid="error-line">
                    {error}
                  </p>
                ) : null}
              </div>
            </header>

            {!input ? (
              <div className="hud-card hud-empty" data-testid="empty-state">
                Type digits, then move through the field directly with touch, trackpad, or mouse.
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      {orderedSelections.length > 0 ? (
        <aside className="build-ribbon" data-testid="build-strip">
          <div className="build-ribbon-actions">
            <button
              aria-label="Copy build"
              className="ribbon-icon-button"
              data-testid="copy-build"
              title="Copy build"
              type="button"
              onClick={() => void copyBuild()}
            >
              <svg aria-hidden="true" viewBox="0 0 16 16">
                <path
                  d="M5 2h7v9H5zM3 5H2V14H10V13"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="1.4"
                />
              </svg>
            </button>
            <button
              aria-label="Clear build"
              className="ribbon-icon-button"
              data-testid="clear-anchor"
              title="Clear build"
              type="button"
              onClick={resetSelections}
            >
              <svg aria-hidden="true" viewBox="0 0 16 16">
                <path
                  d="M3 3 13 13M13 3 3 13"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="1.4"
                />
              </svg>
            </button>
          </div>

          <div className="build-ribbon-track">
            {orderedSelections.map((selection) => (
              <button
                key={selection.span.key}
                className="build-chip"
                title={`Remove ${selection.word.word}`}
                type="button"
                onClick={() =>
                  setGridSelections((current) =>
                    current.filter((entry) => entry.span.key !== selection.span.key),
                  )
                }
              >
                {selection.span.digits} / {selection.word.word}
              </button>
            ))}
          </div>
        </aside>
      ) : null}

      <div className="atlas-stage">
        {controlsCollapsed && input ? (
          <div className="collapsed-toolbar">
            <button
              aria-label="Edit digits"
              className="collapsed-edit-button"
              title="Edit digits"
              type="button"
              onClick={() => setControlsCollapsed(false)}
            >
              <svg aria-hidden="true" viewBox="0 0 16 16">
                <path
                  d="M11.9 1.6a1.5 1.5 0 0 1 2.1 0l.4.4a1.5 1.5 0 0 1 0 2.1l-7.8 7.8-3.4.9.9-3.4zM10.8 2.7 3.9 9.6l-.5 1.8 1.8-.5 6.9-6.9zM9.7 3.8l2.5 2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="1.4"
                />
              </svg>
            </button>
            <input
              id="num-input"
              className="num-input num-input-hidden"
              data-testid="num-input"
              inputMode="numeric"
              autoComplete="off"
              tabIndex={-1}
              value={input}
              readOnly
              aria-hidden="true"
            />
          </div>
        ) : null}

        <CanvasAtlas
          digits={input}
          focusRange={focusRange}
          spans={visibleGridSpans}
          selections={orderedSelections}
          textScale={textScale}
          onChooseWord={chooseGridWord}
        />
      </div>
    </div>
  );
}
