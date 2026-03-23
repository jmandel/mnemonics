import { afterAll, afterEach, beforeAll, expect, setDefaultTimeout, test } from "bun:test";
import { fileURLToPath } from "node:url";

import { launchAppHarness, type AppHarness } from "./cdp";

setDefaultTimeout(120_000);

let app: AppHarness;

function testUrl(path = "/") {
  return new URL(path, app.baseUrl).toString();
}

async function open(path = "/") {
  app.page.resetProblems();
  await app.page.navigate(testUrl(path));
}

async function waitForGrid() {
  return await app.page.waitForValue<{
    input: string;
    url: string;
    tiles: number;
    activeSort: string | null;
  }>(
    `
      (() => {
        const tiles = Number(document.querySelector('[data-testid="atlas-summary"]')?.getAttribute('data-tile-count') ?? '0');
        if (!document.querySelector('[data-testid="atlas-canvas"]') || !tiles) return null;
        return {
          input: document.querySelector('[data-testid="num-input"]')?.value || '',
          url: location.href,
          tiles,
          activeSort: document.querySelector('.sort-pill.active')?.getAttribute('data-sort') || null
        };
      })()
    `,
    "grid atlas",
  );
}

beforeAll(async () => {
  app = await launchAppHarness(fileURLToPath(new URL("..", import.meta.url)), {
    atlasDebug: true,
  });
});

afterEach(() => {
  expect(app.page.getProblems()).toEqual([]);
});

afterAll(async () => {
  if (app) {
    await app.close();
  }
});

test("renders the fullscreen atlas and empty hint before any digits are entered", async () => {
  await open("/");

  const state = await app.page.evaluate<{
    hasEmptyState: boolean;
    hasGrid: boolean;
    search: string;
  }>(`
    (() => ({
      hasEmptyState: !!document.querySelector('[data-testid="empty-state"]'),
      hasGrid: !!document.querySelector('[data-testid="atlas-canvas"]'),
      search: location.search
    }))()
  `);

  expect(state.hasEmptyState).toBe(true);
  expect(state.hasGrid).toBe(true);
  expect(state.search).toBe("");
});

test("sanitizes input, syncs the URL, and renders the atlas", async () => {
  await open("/");
  await app.page.setInputValue('[data-testid="num-input"]', "31a41b5926");

  const grid = await waitForGrid();

  expect(grid.input).toBe("31415926");
  expect(grid.url.endsWith("?n=31415926")).toBe(true);
  expect(grid.tiles).toBeGreaterThan(0);
  expect(grid.activeSort).toBe("quality");
});

test("switches sort pills while keeping the atlas live", async () => {
  await open("/");
  await app.page.setInputValue('[data-testid="num-input"]', "31415926");
  await waitForGrid();

  await app.page.click('[data-testid="sort-length"]');
  const lengthSorted = await app.page.waitForValue<string | null>(
    `(() => document.querySelector('.sort-pill.active')?.getAttribute('data-sort') || null)()`,
    "fewest chunks sort",
  );

  await app.page.click('[data-testid="sort-balanced"]');
  const balancedSorted = await app.page.waitForValue<string | null>(
    `(() => document.querySelector('.sort-pill.active')?.getAttribute('data-sort') || null)()`,
    "most balanced sort",
  );

  expect(lengthSorted).toBe("length");
  expect(balancedSorted).toBe("balanced");
});

test("lets you build directly by clicking words inside tiles", async () => {
  await open("/");
  await app.page.setInputValue('[data-testid="num-input"]', "31415926");
  await waitForGrid();

  const selected = await app.page.evaluate<boolean>(`(() => window.__atlasTest?.selectTile?.(0, 0) ?? false)()`);
  expect(selected).toBe(true);

  const build = await app.page.waitForValue<{
    chips: string[];
  }>(
    `
      (() => {
        const strip = document.querySelector('[data-testid="build-strip"]');
        const chips = Array.from(strip?.querySelectorAll('.build-chip') ?? []).map((chip) =>
          chip.textContent?.trim() || ''
        ).filter(Boolean);
        return chips.length > 0 ? { chips } : null;
      })()
    `,
    "build strip after selecting a word",
  );

  expect(build.chips.length).toBeGreaterThan(0);
  expect(build.chips[0]).toContain("/");
});

test("bubbles compatible tiles upward after selecting a word", async () => {
  await open("/");
  await app.page.setInputValue('[data-testid="num-input"]', "31415926");
  await waitForGrid();

  const before = await app.page.evaluate<{
    count: number;
    firstKey: string | null;
  }>(`(() => ({
    count: window.__atlasTest?.tileCount?.() ?? 0,
    firstKey: window.__atlasTest?.tileKeys?.()?.[0] ?? null
  }))()`);
  const selected = await app.page.evaluate<boolean>(`(() => window.__atlasTest?.selectTile?.(0, 0) ?? false)()`);
  expect(selected).toBe(true);
  const selectedKeyLiteral = JSON.stringify(before.firstKey);

  const after = await app.page.waitForValue<{
    count: number;
    keys: string[];
  }>(
    `(() => {
      if (!document.querySelector('[data-testid="build-strip"]')) {
        return null;
      }
      const count = window.__atlasTest?.tileCount?.() ?? 0;
      const keys = window.__atlasTest?.tileKeys?.() ?? [];
      return count > 0 && count < ${before.count} && !keys.includes(${selectedKeyLiteral}) ? { count, keys } : null;
    })()`,
    "filtered tile count",
  );

  expect(after.count).toBeLessThan(before.count);
  expect(after.keys).not.toContain(before.firstKey);
});

test("locking a prefix and suffix bubbles the middle gap to the front", async () => {
  await open("/");
  await app.page.setInputValue('[data-testid="num-input"]', "31415926");
  await waitForGrid();

  const picks = await app.page.evaluate<{
    prefixKey: string | null;
    prefixEnd: number;
    suffixKey: string | null;
    suffixStart: number;
  } | null>(`
    (() => {
      const keys = window.__atlasTest?.tileKeys?.() ?? [];
      if (!Array.isArray(keys) || keys.length === 0) {
        return null;
      }

      const parseKey = (key) => {
        const [start, end] = String(key).split(':');
        return {
          key,
          start: Number(start),
          end: Number(end)
        };
      };
      const parsed = keys.map(parseKey);
      const prefix = parsed
        .filter((tile) => tile.start === 0)
        .sort((left, right) => left.end - right.end)[0];
      const suffix = parsed
        .filter((tile) => tile.end === 8 && tile.start >= (prefix?.end ?? 0))
        .sort((left, right) => right.start - left.start)[0];

      if (!prefix || !suffix) {
        return null;
      }

      return {
        prefixKey: prefix.key,
        prefixEnd: prefix.end,
        suffixKey: suffix.key,
        suffixStart: suffix.start
      };
    })()
  `);

  expect(picks).toBeTruthy();
  if (!picks?.prefixKey || !picks.suffixKey) {
    throw new Error("Missing prefix/suffix picks");
  }

  const firstSelected = await app.page.evaluate<boolean>(
    `(() => window.__atlasTest?.selectTileByKey?.(${JSON.stringify(picks.prefixKey)}, 0) ?? false)()`,
  );
  expect(firstSelected).toBe(true);

  const secondSelected = await app.page.waitForValue<boolean>(
    `(() => window.__atlasTest?.selectTileByKey?.(${JSON.stringify(picks.suffixKey)}, 0) ?? false)()`,
    "suffix selection",
  );
  expect(secondSelected).toBe(true);

  const firstRemaining = await app.page.waitForValue<{
    start: number;
    end: number;
  }>(
    `(() => {
      if (!document.querySelector('[data-testid="build-strip"]')) {
        return null;
      }
      const firstKey = window.__atlasTest?.tileKeys?.()?.[0] ?? null;
      if (!firstKey) {
        return null;
      }
      const [start, end] = String(firstKey).split(':');
      return { start: Number(start), end: Number(end) };
    })()`,
    "first remaining tile",
  );

  expect(firstRemaining.start).toBeGreaterThanOrEqual(picks.prefixEnd);
  expect(firstRemaining.end).toBeLessThanOrEqual(picks.suffixStart);

  const remainingLayout = await app.page.waitForValue<{
    topY: number;
    cameraY: number;
  }>(
    `(() => {
      const debug = window.__atlasDebug;
      const tiles = debug?.tiles ?? [];
      const cameraY = debug?.camera?.y;
      if (!tiles.length || typeof cameraY !== 'number') {
        return null;
      }
      const topY = Math.min(...tiles.map((tile) => tile.y ?? Number.POSITIVE_INFINITY));
      return Number.isFinite(topY) ? { topY, cameraY } : null;
    })()`,
    "remaining tiles near top",
  );

  expect(remainingLayout.cameraY).toBeGreaterThanOrEqual(-0.5);
  expect(remainingLayout.topY).toBeLessThan(140);
});

test("copies and clears the current build", async () => {
  await open("/");
  await app.page.setInputValue('[data-testid="num-input"]', "31415926");
  await waitForGrid();

  const selected = await app.page.evaluate<boolean>(`(() => window.__atlasTest?.selectTile?.(0, 0) ?? false)()`);
  expect(selected).toBe(true);

  const chosenWord = await app.page.waitForValue<string>(
    `
      (() => {
        const chip = document.querySelector('.build-chip')?.textContent?.trim();
        if (!chip) {
          return null;
        }
        const parts = chip.split('/').map((part) => part.trim()).filter(Boolean);
        return parts.at(-1) ?? null;
      })()
    `,
    "selected build chip word",
  );

  await app.page.click('[data-testid="copy-build"]');

  const copied = await app.page.waitForValue<string[]>(
    `
      (() => {
        const copiedTexts = Array.isArray(window.__copiedTexts) ? window.__copiedTexts : [];
        return copiedTexts.length > 0 ? copiedTexts : null;
      })()
    `,
    "copied build",
  );

  expect(copied.at(-1)).toContain(chosenWord);

  await app.page.click('[data-testid="clear-anchor"]');

  const cleared = await app.page.waitForValue<boolean>(
    `(() => !document.querySelector('[data-testid="build-strip"]'))()`,
    "cleared build strip",
  );

  expect(cleared).toBe(true);
});

test("uses a fullscreen canvas on desktop with browser scrolling disabled", async () => {
  await app.page.setViewport(1440, 1100, false);
  await open("/");
  await app.page.setInputValue('[data-testid="num-input"]', "31415967810412");
  await waitForGrid();

  const layout = await app.page.evaluate<{
    bodyOverflow: string;
    canvasTouchAction: string;
    shellHeight: number;
    topbarHeight: number;
    canvasHeight: number;
    viewportWidth: number;
    viewportHeight: number;
  }>(`
    (() => {
      const canvas = document.querySelector('[data-testid="atlas-canvas"]');
      const shell = document.querySelector('[data-testid="app-shell"]');
      const topbar = document.querySelector('.app-topbar');
      const rect = canvas?.getBoundingClientRect();
      return {
        bodyOverflow: getComputedStyle(document.body).overflow,
        canvasTouchAction: canvas ? getComputedStyle(canvas).touchAction : '',
        shellHeight: shell?.getBoundingClientRect().height ?? 0,
        topbarHeight: topbar?.getBoundingClientRect().height ?? 0,
        canvasHeight: rect?.height ?? 0,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight
      };
    })()
  `);

  expect(layout.bodyOverflow).toBe("hidden");
  expect(layout.canvasTouchAction).toBe("none");
  expect(layout.shellHeight).toBeGreaterThan(layout.viewportHeight - 32);
  expect(layout.canvasHeight + layout.topbarHeight).toBeGreaterThan(layout.viewportHeight - 56);
});

test("supports zoom gestures against the atlas camera", async () => {
  await app.page.setViewport(960, 720, false);
  await open("/");
  await app.page.setInputValue('[data-testid="num-input"]', "31415967810412");
  await waitForGrid();

  const zoomResult = await app.page.evaluate<{
    beforeScale: number;
    afterScale: number;
  } | null>(`
    (async () => {
      const canvas = document.querySelector('[data-testid="atlas-canvas"]');
      const before = window.__atlasTest?.camera?.() ?? null;
      if (!(canvas instanceof HTMLCanvasElement) || !before) {
        return null;
      }

      const rect = canvas.getBoundingClientRect();
      const centerX = rect.left + rect.width * 0.5;
      const centerY = rect.top + rect.height * 0.5;

      canvas.dispatchEvent(new WheelEvent('wheel', {
        bubbles: true,
        clientX: centerX,
        clientY: centerY,
        deltaY: -3,
        ctrlKey: true
      }));

      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      const after = window.__atlasTest?.camera?.() ?? null;

      return after
        ? {
            beforeScale: before.scale,
            afterScale: after.scale
          }
        : null;
    })()
  `);

  expect(zoomResult).toBeTruthy();
  if (!zoomResult) {
    throw new Error("Missing zoom result");
  }
  expect(zoomResult.afterScale).toBeGreaterThan(zoomResult.beforeScale);
});

test("treats pixel-wheel trackpad scrolling as pan instead of zoom", async () => {
  await app.page.setViewport(960, 720, false);
  await open("/");
  await app.page.setInputValue('[data-testid="num-input"]', "31415967810412");
  await waitForGrid();

  const panResult = await app.page.evaluate<{
    beforeScale: number;
    afterScale: number;
    beforeY: number;
    afterY: number;
  } | null>(`
    (async () => {
      const canvas = document.querySelector('[data-testid="atlas-canvas"]');
      const before = window.__atlasTest?.camera?.() ?? null;
      if (!(canvas instanceof HTMLCanvasElement) || !before) {
        return null;
      }

      const rect = canvas.getBoundingClientRect();
      const centerX = rect.left + rect.width * 0.5;
      const centerY = rect.top + rect.height * 0.5;

      canvas.dispatchEvent(new WheelEvent('wheel', {
        bubbles: true,
        clientX: centerX,
        clientY: centerY,
        deltaMode: WheelEvent.DOM_DELTA_PIXEL,
        deltaY: 72
      }));

      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      const after = window.__atlasTest?.camera?.() ?? null;

      return after
        ? {
            beforeScale: before.scale,
            afterScale: after.scale,
            beforeY: before.y,
            afterY: after.y
          }
        : null;
    })()
  `);

  expect(panResult).toBeTruthy();
  if (!panResult) {
    throw new Error("Missing pan result");
  }
  expect(Math.abs(panResult.afterScale - panResult.beforeScale)).toBeLessThan(0.0001);
  expect(Math.abs(panResult.afterY - panResult.beforeY)).toBeGreaterThan(0.5);
});

test("reflows tile word packing as zoom changes", async () => {
  await app.page.setViewport(960, 720, false);
  await open("/");
  await app.page.setInputValue('[data-testid="num-input"]', "314159");
  await waitForGrid();
  await app.page.waitForValue(
    `(() => {
      const tile = window.__atlasDebug?.tiles?.find?.((entry) => entry.digits === '314') ?? null;
      return tile ? true : null;
    })()`,
    "debug tile 314",
  );

  const before = await app.page.evaluate<{
    scale: number;
    rowSignature: string;
  } | null>(`
    (() => {
      const debug = window.__atlasDebug;
      const tile = debug?.tiles?.find?.((entry) => entry.digits === '314') ?? null;
      if (!debug || !tile) {
        return null;
      }

      const grouped = new Map();
      for (const word of tile.words ?? []) {
        const key = String(Math.round(word.y));
        const row = grouped.get(key) ?? [];
        row.push(word.word);
        grouped.set(key, row);
      }

      return {
        scale: debug.camera.scale,
        rowSignature: [...grouped.values()].map((row) => row.join(',')).join('|')
      };
    })()
  `);

  expect(before).toBeTruthy();
  if (!before) {
    throw new Error("Missing pre-zoom debug tile");
  }

  const after = await app.page.evaluate<{
    scale: number;
    rowSignature: string;
  } | null>(`
    (async () => {
      const canvas = document.querySelector('[data-testid="atlas-canvas"]');
      if (!(canvas instanceof HTMLCanvasElement)) {
        return null;
      }

      const rect = canvas.getBoundingClientRect();
      const centerX = rect.left + rect.width * 0.5;
      const centerY = rect.top + rect.height * 0.5;

      canvas.dispatchEvent(new WheelEvent('wheel', {
        bubbles: true,
        clientX: centerX,
        clientY: centerY,
        deltaY: -3,
        ctrlKey: true
      }));

      await new Promise((resolve) =>
        requestAnimationFrame(() =>
          requestAnimationFrame(() =>
            requestAnimationFrame(() =>
              requestAnimationFrame(resolve)
            )
          )
        )
      );

      const debug = window.__atlasDebug;
      const tile = debug?.tiles?.find?.((entry) => entry.digits === '314') ?? null;
      if (!debug || !tile) {
        return null;
      }

      const grouped = new Map();
      for (const word of tile.words ?? []) {
        const key = String(Math.round(word.y));
        const row = grouped.get(key) ?? [];
        row.push(word.word);
        grouped.set(key, row);
      }

      return {
        scale: debug.camera.scale,
        rowSignature: [...grouped.values()].map((row) => row.join(',')).join('|')
      };
    })()
  `);

  expect(after).toBeTruthy();
  if (!after) {
    throw new Error("Missing post-zoom debug tile");
  }

  expect(after.scale).toBeGreaterThan(before.scale);
  expect(after.rowSignature).not.toBe(before.rowSignature);
});

test("keeps the fullscreen atlas intact on mobile", async () => {
  await app.page.setViewport(390, 900, true);
  await open("/");
  await app.page.setInputValue('[data-testid="num-input"]', "31415926");
  await waitForGrid();

  const mobile = await app.page.evaluate<{
    bodyOverflow: string;
    canvasHeight: number;
    topbarHeight: number;
    viewportHeight: number;
    hudWidth: number;
    viewportWidth: number;
  }>(`
    (() => {
      const canvas = document.querySelector('[data-testid="atlas-canvas"]');
      const hud = document.querySelector('.hud-top');
      const topbar = document.querySelector('.app-topbar');
      return {
        bodyOverflow: getComputedStyle(document.body).overflow,
        canvasHeight: canvas?.getBoundingClientRect().height ?? 0,
        topbarHeight: topbar?.getBoundingClientRect().height ?? 0,
        viewportHeight: window.innerHeight,
        hudWidth: hud?.getBoundingClientRect().width ?? 0,
        viewportWidth: window.innerWidth
      };
    })()
  `);

  expect(mobile.bodyOverflow).toBe("hidden");
  expect(mobile.canvasHeight + mobile.topbarHeight).toBeGreaterThan(mobile.viewportHeight - 56);
  expect(mobile.hudWidth).toBeLessThanOrEqual(mobile.viewportWidth);

  await app.page.setViewport(1440, 2200, false);
});

test("bootstraps a search from the query string", async () => {
  await open("/?n=27182818");

  const grid = await waitForGrid();

  expect(grid.input).toBe("27182818");
  expect(grid.url.endsWith("?n=27182818")).toBe(true);
  expect(grid.tiles).toBeGreaterThan(0);
});
