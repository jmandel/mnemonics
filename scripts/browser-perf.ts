import { fileURLToPath } from "node:url";

import { launchAppHarness, type AppHarness } from "../tests/cdp";

type BenchmarkCase = {
  label: string;
  digits: string;
};

type BrowserMeasurement = {
  durationMs: number;
  mutationCount: number;
  sawSearching: boolean;
  longTaskCount: number;
  maxLongTaskMs: number;
  totalLongTaskMs: number;
  tiles: number;
  selectedWords: number;
  buildPhrase: string | null;
  tileCountLabel: string | null;
};

type RunResult = BrowserMeasurement & {
  label: string;
  digits: string;
  run: number;
};

const DESKTOP_VIEWPORT = { width: 1440, height: 2200 };
const RUNS_PER_CASE = Number(process.env.BROWSER_PERF_RUNS ?? "8");
const BENCHMARK_CASES: BenchmarkCase[] = [
  { label: "pi", digits: "3141592653" },
  { label: "e", digits: "2718281828" },
  { label: "sqrt2", digits: "1414213562" },
  { label: "phi", digits: "1618033988" },
  { label: "sqrt3", digits: "1732050807" },
];

function percentile(values: number[], quantile: number) {
  if (values.length === 0) {
    return 0;
  }

  const sorted = [...values].sort((left, right) => left - right);
  const index = Math.min(sorted.length - 1, Math.max(0, Math.ceil(sorted.length * quantile) - 1));
  return sorted[index] ?? 0;
}

function average(values: number[]) {
  if (values.length === 0) {
    return 0;
  }

  return values.reduce((total, value) => total + value, 0) / values.length;
}

function formatMs(value: number) {
  return `${value.toFixed(1)}ms`;
}

function printSummary(label: string, runs: RunResult[]) {
  const durations = runs.map((run) => run.durationMs);
  const longTasks = runs.map((run) => run.longTaskCount);
  const maxLongTasks = runs.map((run) => run.maxLongTaskMs);
  const mutationCounts = runs.map((run) => run.mutationCount);

  console.log(`\n${label}`);
  console.table(
    runs.map((run) => ({
      case: run.label,
      run: run.run,
      duration_ms: Number(run.durationMs.toFixed(1)),
      long_tasks: run.longTaskCount,
      max_long_task_ms: Number(run.maxLongTaskMs.toFixed(1)),
      mutations: run.mutationCount,
      tiles: run.tiles,
      selected_words: run.selectedWords,
      build_phrase: run.buildPhrase ?? "",
    })),
  );

  console.log(
    [
      `count=${runs.length}`,
      `median=${formatMs(percentile(durations, 0.5))}`,
      `p95=${formatMs(percentile(durations, 0.95))}`,
      `max=${formatMs(Math.max(...durations))}`,
      `avg=${formatMs(average(durations))}`,
      `avg_mutations=${average(mutationCounts).toFixed(1)}`,
      `avg_long_tasks=${average(longTasks).toFixed(2)}`,
      `max_long_task=${formatMs(Math.max(...maxLongTasks))}`,
    ].join("  "),
  );
}

async function waitForSettledResults(page: AppHarness["page"], expectedValue: string) {
  return await page.waitForValue<{
    value: string;
    tiles: number;
  }>(
    `
      (() => {
        const input = document.querySelector('[data-testid="num-input"]');
        const summary = document.querySelector('[data-testid="atlas-summary"]');
        if (!(input instanceof HTMLInputElement)) return null;
        const hasTerminalState =
          !!document.querySelector('[data-testid="atlas-canvas"]') ||
          !!document.querySelector('[data-testid="empty-state"]');
        const isSearching = !!document.querySelector('[data-testid="phase-line"]');
        if (input.value !== ${JSON.stringify(expectedValue)} || isSearching || !hasTerminalState) {
          return null;
        }
        return {
          value: input.value,
          tiles: Number(summary?.getAttribute('data-tile-count') ?? "0")
        };
      })()
    `,
    `settled results for ${expectedValue}`,
  );
}

async function arm10thDigitMeasurement(page: AppHarness["page"]) {
  await page.evaluate(`
    (() => {
      const input = document.querySelector('[data-testid="num-input"]');
      const appShell = document.querySelector('[data-testid="app-shell"]') ?? document.body;
      if (!(input instanceof HTMLInputElement) || !(appShell instanceof HTMLElement)) {
        return false;
      }

      const expectedLength = input.value.length + 1;
      let eventTime = -1;
      let lastMutationAt = performance.now();
      let mutationCount = 0;
      let sawSearching = false;
      let quietFrames = 0;
      const longTaskDurations = [];

      const longTaskObserver =
        typeof PerformanceObserver === "function"
          ? new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                if (entry.entryType === "longtask") {
                  longTaskDurations.push(entry.duration);
                }
              }
            })
          : null;

      try {
        longTaskObserver?.observe({ type: "longtask", buffered: false });
      } catch {
        // Ignore long task support failures in older Chrome builds.
      }

      const observer = new MutationObserver((records) => {
        mutationCount += records.length;
        lastMutationAt = performance.now();
      });

      observer.observe(appShell, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
      });

      window.__browserPerfResult = null;

      input.addEventListener(
        "input",
        () => {
          if (input.value.length === expectedLength && eventTime < 0) {
            eventTime = performance.now();
          }
        },
        { once: true },
      );

      const finish = () => {
        observer.disconnect();
        longTaskObserver?.disconnect();
        const maxLongTaskMs = longTaskDurations.length ? Math.max(...longTaskDurations) : 0;
        const totalLongTaskMs = longTaskDurations.reduce((total, value) => total + value, 0);

        window.__browserPerfResult = {
          durationMs: performance.now() - eventTime,
          mutationCount,
          sawSearching,
          longTaskCount: longTaskDurations.length,
          maxLongTaskMs,
          totalLongTaskMs,
          tiles: Number(document.querySelector('[data-testid="atlas-summary"]')?.getAttribute('data-tile-count') ?? "0"),
          selectedWords: Number(document.querySelector('[data-testid="atlas-summary"]')?.getAttribute('data-selected-count') ?? "0"),
          buildPhrase: Array.from(document.querySelectorAll('[data-testid="build-strip"] .build-chip'))
            .map((chip) => chip.textContent?.trim() ?? '')
            .filter(Boolean)
            .join(' / ') || null,
          tileCountLabel: document.querySelector('.atlas-panel .panel-count')?.textContent?.trim() ?? null
        };
      };

      const step = () => {
        const now = performance.now();
        const isSearching = !!document.querySelector('[data-testid="phase-line"]');
        const hasTerminalState =
          !!document.querySelector('[data-testid="atlas-canvas"]') ||
          !!document.querySelector('[data-testid="empty-state"]');

        if (isSearching) {
          sawSearching = true;
        }

        if (
          eventTime >= 0 &&
          input.value.length === expectedLength &&
          !isSearching &&
          hasTerminalState &&
          now - lastMutationAt >= 16
        ) {
          quietFrames += 1;
        } else {
          quietFrames = 0;
        }

        if (eventTime >= 0 && quietFrames >= 2) {
          finish();
          return;
        }

        if (eventTime >= 0 && now - eventTime > 30_000) {
          observer.disconnect();
          longTaskObserver?.disconnect();
          window.__browserPerfResult = {
            error: "Timed out waiting for DOM to settle",
            durationMs: now - eventTime,
            mutationCount,
            sawSearching,
            longTaskCount: longTaskDurations.length,
            maxLongTaskMs: longTaskDurations.length ? Math.max(...longTaskDurations) : 0,
            totalLongTaskMs: longTaskDurations.reduce((total, value) => total + value, 0),
            tiles: Number(document.querySelector('[data-testid="atlas-summary"]')?.getAttribute('data-tile-count') ?? "0"),
            selectedWords: Number(document.querySelector('[data-testid="atlas-summary"]')?.getAttribute('data-selected-count') ?? "0"),
            buildPhrase: Array.from(document.querySelectorAll('[data-testid="build-strip"] .build-chip'))
              .map((chip) => chip.textContent?.trim() ?? '')
              .filter(Boolean)
              .join(' / ') || null,
            tileCountLabel: document.querySelector('.atlas-panel .panel-count')?.textContent?.trim() ?? null
          };
          return;
        }

        requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
      return true;
    })()
  `);
}

async function typeOneDigit(page: AppHarness["page"], digit: string) {
  await page.evaluate(`
    (() => {
      const input = document.querySelector('[data-testid="num-input"]');
      if (!(input instanceof HTMLInputElement)) {
        return false;
      }
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
      return true;
    })()
  `);

  await page.send("Input.insertText", { text: digit });
}

async function measure10thDigit(page: AppHarness["page"], digits: string) {
  const prefix = digits.slice(0, 9);
  const finalDigit = digits.slice(9);

  await page.setInputValue('[data-testid="num-input"]', prefix);
  await waitForSettledResults(page, prefix);
  await arm10thDigitMeasurement(page);
  await typeOneDigit(page, finalDigit);

  const result = await page.waitForValue<BrowserMeasurement & { error?: string }>(
    "window.__browserPerfResult ?? null",
    `10th digit measurement for ${digits}`,
    40_000,
  );

  if (result.error) {
    throw new Error(`${digits}: ${result.error}`);
  }

  return result;
}

async function run() {
  let app: AppHarness | null = null;

  try {
    app = await launchAppHarness(fileURLToPath(new URL("..", import.meta.url)));
    await app.page.setViewport(DESKTOP_VIEWPORT.width, DESKTOP_VIEWPORT.height, false);
    await app.page.navigate(new URL("/", app.baseUrl).toString());

    const primeDigits = BENCHMARK_CASES[0]?.digits.slice(0, 9) ?? "314159265";
    await app.page.setInputValue('[data-testid="num-input"]', primeDigits);
    await waitForSettledResults(app.page, primeDigits);

    const runs: RunResult[] = [];

    for (const benchmarkCase of BENCHMARK_CASES) {
      for (let runNumber = 1; runNumber <= RUNS_PER_CASE; runNumber += 1) {
        const result = await measure10thDigit(app.page, benchmarkCase.digits);
        runs.push({
          label: benchmarkCase.label,
          digits: benchmarkCase.digits,
          run: runNumber,
          ...result,
        });
      }
    }

    console.log(
      [
        "Browser refresh benchmark",
        `viewport=${DESKTOP_VIEWPORT.width}x${DESKTOP_VIEWPORT.height}`,
        `cases=${BENCHMARK_CASES.length}`,
        `runs_per_case=${RUNS_PER_CASE}`,
        "measurement=10th digit input event -> DOM settled for 2 RAFs with search idle",
      ].join("  "),
    );

    printSummary("Overall", runs);

    for (const benchmarkCase of BENCHMARK_CASES) {
      printSummary(
        `Case: ${benchmarkCase.label} (${benchmarkCase.digits})`,
        runs.filter((run) => run.label === benchmarkCase.label),
      );
    }
  } finally {
    await app?.close();
  }
}

await run();
