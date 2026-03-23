import {
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type { SpanCandidate, WordOption } from "./types";

type GridSelection = {
  span: SpanCandidate;
  word: WordOption;
};

type WordLayout = {
  key: string;
  word: WordOption;
  x: number;
  y: number;
  width: number;
  height: number;
};

type TileLayout = {
  key: string;
  span: SpanCandidate;
  x: number;
  y: number;
  width: number;
  height: number;
  lane: number;
  laneSpan: number;
  compactLane: number;
  detailTextScale: number;
  selectedWord: WordOption | null;
  muted: boolean;
  words: WordLayout[];
};

type WorldLayout = {
  width: number;
  height: number;
  digitWidth: number;
  digitHeight: number;
  laneHeight: number;
  headerHeight: number;
  miniDigitHeight: number;
  textScale: number;
  tiles: TileLayout[];
};

type ProjectedTileLayout = {
  key: string;
  span: SpanCandidate;
  x: number;
  y: number;
  width: number;
  height: number;
  lane: number;
  laneSpan: number;
  compactLane: number;
  detailTextScale: number;
  detailFontSize: number;
  headerHeight: number;
  miniDigitHeight: number;
  selectedWord: WordOption | null;
  muted: boolean;
  words: WordLayout[];
};

type LayoutProjection = {
  detailProgress: number;
  worldHeight: number;
  tiles: ProjectedTileLayout[];
};

type CameraState = {
  x: number;
  y: number;
  scale: number;
};

type Point = {
  x: number;
  y: number;
};

type HitResult = {
  tile: ProjectedTileLayout;
  word: WordLayout | null;
};

type DigitRange = {
  start: number;
  end: number;
};

const VIEW_TOP_BAND = 46;
const VIEW_TOP_BUFFER = 4;
const VIEW_PAD = 22;
const WORLD_DIGIT_WIDTH = 112;
const WORLD_DIGIT_HEIGHT = 52;
const WORLD_TILE_GAP = 10;
const WORLD_TILE_PAD_X = 10;
const WORLD_TILE_PAD_Y = 10;
const WORLD_HEADER_HEIGHT = 26;
const WORLD_WORD_HEIGHT = 17;
const WORLD_WORD_GAP_X = 6;
const WORLD_WORD_GAP_Y = 6;
const WORLD_LANE_HEIGHT = 34;
const WORLD_MINI_DIGIT_HEIGHT = 14;
const WORLD_MINI_DIGIT_GAP = 4;
const MIN_SCALE = 0.4;
const MAX_SCALE = 2.4;
const DETAIL_SCALE_THRESHOLD = 0.66;
const FONT_STACK = '"IBM Plex Sans", "Avenir Next", "Segoe UI", sans-serif';
const MONO_STACK = '"IBM Plex Mono", "SFMono-Regular", Consolas, monospace';
const SURFACE_BG_TOP = "#f4faff";
const SURFACE_BG_MID = "#e6f0fa";
const SURFACE_BG_BOTTOM = "#d3e2f1";
const SURFACE_LINE = "rgba(53, 94, 135, 0.12)";
const SURFACE_LINE_STRONG = "rgba(53, 94, 135, 0.18)";
const SURFACE_TEXT = "#102f4c";
const SURFACE_TEXT_SOFT = "rgba(16, 47, 76, 0.7)";
const SURFACE_TEXT_MUTED = "rgba(16, 47, 76, 0.52)";
const SURFACE_TEXT_INVERSE = "#f6fbff";
const SURFACE_ACCENT = "rgba(44, 116, 182, 0.92)";
const SURFACE_ACCENT_STRONG = "rgba(12, 61, 105, 0.94)";
const SURFACE_TILE = "rgba(248, 252, 255, 0.9)";
const SURFACE_TILE_MUTED = "rgba(248, 252, 255, 0.34)";
const SURFACE_WORD_HILITE = "rgba(44, 116, 182, 0.14)";

const WORD_WIDTH_CACHE = new Map<string, number>();
const WORD_LAYOUT_CACHE = new Map<
  string,
  { words: WordLayout[]; height: number; usedWidth: number; rowCount: number }
>();
const PROJECTED_BOX_CACHE = new Map<
  string,
  {
    width: number;
    height: number;
    headerHeight: number;
    miniDigitHeight: number;
    detailFontSize: number;
    words: WordLayout[];
  }
>();
const LAYOUT_PROJECTION_CACHE = new WeakMap<WorldLayout, Map<string, LayoutProjection>>();

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function lerp(from: number, to: number, amount: number) {
  return from + (to - from) * amount;
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  _radius: number,
) {
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.closePath();
}

function rangeLabel(span: SpanCandidate) {
  return `${span.start + 1}-${span.end}`;
}

function overlaps(left: SpanCandidate, right: SpanCandidate) {
  return left.start < right.end && left.end > right.start;
}

function makeMeasureContext() {
  if (typeof document === "undefined") {
    return null;
  }

  const canvas = document.createElement("canvas");
  return canvas.getContext("2d");
}

function reserveDigits(
  laneFree: Array<Array<[number, number]>>,
  laneFill: number[],
  lane: number,
  laneSpan: number,
  start: number,
  end: number,
  totalDigits: number,
) {
  for (let step = 0; step < laneSpan; step += 1) {
    const laneIndex = lane + step;

    while (laneFree.length <= laneIndex) {
      laneFree.push([[0, totalDigits]]);
      laneFill.push(0);
    }

    for (let gapIndex = 0; gapIndex < laneFree[laneIndex].length; gapIndex += 1) {
      const [gapStart, gapEnd] = laneFree[laneIndex][gapIndex] ?? [0, 0];

      if (gapStart <= start && end <= gapEnd) {
        const next: Array<[number, number]> = [];

        if (gapStart < start) {
          next.push([gapStart, start]);
        }

        if (end < gapEnd) {
          next.push([end, gapEnd]);
        }

        laneFree[laneIndex].splice(gapIndex, 1, ...next);
        laneFill[laneIndex] += end - start;
        break;
      }
    }
  }
}

function laneBlockFits(
  laneFree: Array<Array<[number, number]>>,
  lane: number,
  laneSpan: number,
  start: number,
  end: number,
) {
  for (let step = 0; step < laneSpan; step += 1) {
    const gaps = laneFree[lane + step];

    if (!gaps) {
      continue;
    }

    if (!gaps.some(([gapStart, gapEnd]) => gapStart <= start && end <= gapEnd)) {
      return false;
    }
  }

  return true;
}

function findBestLane(
  laneFree: Array<Array<[number, number]>>,
  laneFill: number[],
  start: number,
  end: number,
  laneSpan: number,
  preferredLane: number | null,
) {
  if (
    preferredLane !== null &&
    preferredLane >= 0 &&
    laneBlockFits(laneFree, preferredLane, laneSpan, start, end)
  ) {
    return preferredLane;
  }

  let bestLane = laneFree.length;
  let bestFill = -1;

  for (let lane = 0; lane <= laneFree.length; lane += 1) {
    if (!laneBlockFits(laneFree, lane, laneSpan, start, end)) {
      continue;
    }

    const fill = laneFill[lane] ?? 0;

    if (fill > bestFill) {
      bestLane = lane;
      bestFill = fill;
    }
  }

  return bestLane;
}

function measureWordWidth(ctx: CanvasRenderingContext2D, word: string, textScale: number) {
  const cacheKey = `${word}:${textScale.toFixed(2)}`;
  const cached = WORD_WIDTH_CACHE.get(cacheKey);

  if (cached !== undefined) {
    return cached;
  }

  ctx.font = `600 ${15.5 * textScale}px ${FONT_STACK}`;
  const measured = Math.ceil(ctx.measureText(word).width + 8);
  WORD_WIDTH_CACHE.set(cacheKey, measured);
  return measured;
}

function measureWordWidthPx(
  ctx: CanvasRenderingContext2D,
  word: string,
  fontSize: number,
  weight = 600,
) {
  const cacheKey = `${weight}:${fontSize.toFixed(1)}:${word}`;
  const cached = WORD_WIDTH_CACHE.get(cacheKey);

  if (cached !== undefined) {
    return cached;
  }

  ctx.font = `${weight} ${fontSize}px ${FONT_STACK}`;
  const measured = Math.ceil(ctx.measureText(word).width + Math.max(4, fontSize * 0.38));
  WORD_WIDTH_CACHE.set(cacheKey, measured);
  return measured;
}

function measureMiniDigitWidth(spanLength: number, tileWidth: number) {
  const available = Math.max(24, tileWidth - WORLD_TILE_PAD_X * 2);
  const gapTotal = Math.max(0, spanLength - 1) * WORLD_MINI_DIGIT_GAP;
  return Math.max(12, Math.min(22, (available - gapTotal) / Math.max(1, spanLength)));
}

function truncateTextToWidth(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
) {
  if (maxWidth <= 0) {
    return "";
  }

  if (ctx.measureText(text).width <= maxWidth) {
    return text;
  }

  const ellipsis = "…";

  if (ctx.measureText(ellipsis).width > maxWidth) {
    return "";
  }

  let low = 0;
  let high = text.length;

  while (low < high) {
    const mid = Math.ceil((low + high) / 2);
    const next = `${text.slice(0, mid)}${ellipsis}`;

    if (ctx.measureText(next).width <= maxWidth) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  return `${text.slice(0, low)}${ellipsis}`;
}

function compactPreviewLayout(
  ctx: CanvasRenderingContext2D,
  words: WordOption[],
  maxWidth: number,
  maxHeight: number,
  lineHeight: number,
  rowGap: number,
) {
  const gap = 10;
  const safeWidth = Math.max(10, maxWidth);
  const safeLineHeight = Math.max(10, lineHeight);
  const safeRowGap = Math.max(1, rowGap);
  const rowCount = Math.max(
    1,
    Math.floor((Math.max(safeLineHeight, maxHeight) + safeRowGap) / (safeLineHeight + safeRowGap)),
  );

  if (words.length === 0 || maxWidth <= 0 || maxHeight <= 0) {
    return {
      rows: [] as string[][],
      marker: "",
    };
  }

  const remaining = [...words];
  const rows: string[][] = [];
  const rowWidths: number[] = [];

  for (let rowIndex = 0; rowIndex < rowCount && remaining.length > 0; rowIndex += 1) {
    const row: string[] = [];
    let usedWidth = 0;
    let scanIndex = 0;

    while (scanIndex < remaining.length) {
      const rawLabel = remaining[scanIndex]?.word ?? "";
      const labelWidth = ctx.measureText(rawLabel).width;
      const nextWidth = usedWidth + (row.length > 0 ? gap : 0) + labelWidth;

      if (nextWidth <= safeWidth) {
        row.push(rawLabel);
        usedWidth = nextWidth;
        remaining.splice(scanIndex, 1);
        continue;
      }

      const availableWidth = safeWidth - usedWidth - (row.length > 0 ? gap : 0);

      if (row.length === 0 && scanIndex === 0 && availableWidth > 8) {
        const truncated = truncateTextToWidth(ctx, rawLabel, availableWidth);
        if (truncated) {
          row.push(truncated);
          usedWidth = ctx.measureText(truncated).width;
        }
        remaining.splice(scanIndex, 1);
        continue;
      }

      scanIndex += 1;
    }

    if (row.length > 0) {
      rows.push(row);
      rowWidths.push(usedWidth);
    }
  }

  let hiddenCount = remaining.length;

  if (hiddenCount <= 0 || rows.length === 0) {
    return {
      rows,
      marker: "",
    };
  }

  let marker = `+${hiddenCount}`;
  let markerWidth = ctx.measureText(marker).width;
  const lastRow = rows[rows.length - 1];

  if (!lastRow) {
    return {
      rows,
      marker,
    };
  }

  let lastWidth = rowWidths[rowWidths.length - 1] ?? 0;

  while (lastRow.length > 1 && lastWidth + gap + markerWidth > safeWidth) {
    lastRow.pop();
    hiddenCount += 1;
    marker = `+${hiddenCount}`;
    markerWidth = ctx.measureText(marker).width;
    lastWidth = lastRow.reduce((total, label, index) => {
      return total + (index > 0 ? gap : 0) + ctx.measureText(label).width;
    }, 0);
  }

  if (lastRow.length === 1 && lastWidth + gap + markerWidth > safeWidth) {
    const availableWidth = safeWidth - gap - markerWidth;
    const truncated = truncateTextToWidth(ctx, lastRow[0] ?? "", availableWidth);

    if (truncated) {
      lastRow[0] = truncated;
      lastWidth = ctx.measureText(truncated).width;
    }
  }

  if (lastWidth + gap + markerWidth > safeWidth) {
    marker = "";
  }

  return {
    rows,
    marker,
  };
}

function drawTopSelectionTrack(
  ctx: CanvasRenderingContext2D,
  layout: WorldLayout,
  camera: CameraState,
  selections: GridSelection[],
  focusRange: DigitRange | null,
) {
  if (selections.length === 0 && !focusRange) {
    return;
  }

  const trackY = 26;
  const trackHeight = 11;

  if (focusRange && focusRange.end > focusRange.start) {
    const x0 = worldToScreenX(focusRange.start * layout.digitWidth, camera) + 3;
    const x1 = worldToScreenX(focusRange.end * layout.digitWidth, camera) - 3;
    const width = x1 - x0;

    if (width > 6) {
      ctx.save();
      ctx.setLineDash([4, 3]);
      ctx.strokeStyle = "rgba(45, 120, 185, 0.7)";
      ctx.lineWidth = 1;
      drawRoundedRect(ctx, x0, trackY, width, trackHeight, 0);
      ctx.stroke();
      ctx.restore();

    }
  }

  for (const selection of selections) {
    const x0 = worldToScreenX(selection.span.start * layout.digitWidth, camera) + 3;
    const x1 = worldToScreenX(selection.span.end * layout.digitWidth, camera) - 3;
    const width = x1 - x0;

    if (width <= 6) {
      continue;
    }

    ctx.fillStyle = "rgba(11, 61, 105, 0.94)";
    ctx.strokeStyle = "rgba(11, 61, 105, 1)";
    ctx.lineWidth = 1;
    drawRoundedRect(ctx, x0, trackY, width, trackHeight, 0);
    ctx.fill();
    ctx.stroke();

    if (width >= 28) {
      ctx.fillStyle = SURFACE_TEXT_INVERSE;
      ctx.font = `700 8px ${FONT_STACK}`;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      const label = truncateTextToWidth(ctx, selection.word.word, width - 8);
      ctx.fillText(label, x0 + 4, trackY + trackHeight / 2 + 0.5);
    }
  }
}

function layoutWords(
  ctx: CanvasRenderingContext2D,
  span: SpanCandidate,
  tileWidth: number,
  textScale: number,
  headerHeight: number,
  wordHeight: number,
  wordGapY: number,
) {
  const cacheKey = `${span.key}:${Math.round(tileWidth)}:${textScale.toFixed(2)}`;
  const cached = WORD_LAYOUT_CACHE.get(cacheKey);

  if (cached) {
    return cached;
  }

  const contentWidth = Math.max(tileWidth - WORLD_TILE_PAD_X * 2, 40);
  const words: WordLayout[] = [];
  const items = span.words
    .map((word, index) => ({
      key: `${span.key}:${word.word}`,
      word,
      index,
      width: Math.min(measureWordWidth(ctx, word.word, textScale), contentWidth),
    }))
    .sort((left, right) => right.width - left.width || left.index - right.index);
  const rows: Array<{
    items: Array<{
      key: string;
      word: WordOption;
      index: number;
      width: number;
    }>;
    width: number;
  }> = [];
  let maxUsedWidth = 0;

  for (const item of items) {
    let bestRowIndex = -1;
    let bestRemaining = Number.POSITIVE_INFINITY;

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
      const row = rows[rowIndex];

      if (!row) {
        continue;
      }

      const nextWidth = row.width + (row.items.length > 0 ? WORLD_WORD_GAP_X : 0) + item.width;

      if (nextWidth > contentWidth) {
        continue;
      }

      const remaining = contentWidth - nextWidth;

      if (remaining < bestRemaining) {
        bestRemaining = remaining;
        bestRowIndex = rowIndex;
      }
    }

    if (bestRowIndex === -1) {
      rows.push({
        items: [item],
        width: item.width,
      });
      continue;
    }

    const row = rows[bestRowIndex];

    if (!row) {
      continue;
    }

    row.items.push(item);
    row.width += WORLD_WORD_GAP_X + item.width;
  }

  rows.sort((left, right) => {
    const leftIndex = Math.min(...left.items.map((item) => item.index));
    const rightIndex = Math.min(...right.items.map((item) => item.index));
    return leftIndex - rightIndex;
  });

  rows.forEach((row, rowIndex) => {
    row.items.sort((left, right) => left.index - right.index);
    let x = 0;
    const y = rowIndex * (wordHeight + wordGapY);

    row.items.forEach((item) => {
      words.push({
        key: item.key,
        word: item.word,
        x: WORLD_TILE_PAD_X + x,
        y: WORLD_TILE_PAD_Y + headerHeight + 4 + y,
        width: item.width,
        height: wordHeight,
      });

      x += item.width + WORLD_WORD_GAP_X;
    });

    maxUsedWidth = Math.max(maxUsedWidth, row.width);
  });

  const rowCount = Math.max(1, rows.length);
  const rowsHeight = words.length === 0 ? wordHeight : (rowCount - 1) * (wordHeight + wordGapY) + wordHeight;
  const next = {
    words,
    height: WORLD_TILE_PAD_Y * 2 + headerHeight + 4 + rowsHeight,
    usedWidth: WORLD_TILE_PAD_X * 2 + maxUsedWidth,
    rowCount: words.length === 0 ? 1 : rowCount,
  };
  WORD_LAYOUT_CACHE.set(cacheKey, next);
  return next;
}

function layoutWordsPx(
  ctx: CanvasRenderingContext2D,
  span: SpanCandidate,
  tileWidth: number,
  fontSize: number,
  headerHeight: number,
  wordHeight: number,
  wordGapX: number,
  wordGapY: number,
  padX: number,
  padY: number,
) {
  const cacheKey = [
    "px",
    span.key,
    Math.round(tileWidth),
    fontSize.toFixed(1),
    Math.round(headerHeight),
    Math.round(wordHeight),
    Math.round(wordGapX),
    Math.round(wordGapY),
    Math.round(padX),
    Math.round(padY),
  ].join(":");
  const cached = WORD_LAYOUT_CACHE.get(cacheKey);

  if (cached) {
    return cached;
  }

  const contentWidth = Math.max(tileWidth - padX * 2, 32);
  const words: WordLayout[] = [];
  const items = span.words
    .map((word, index) => ({
      key: `${span.key}:${word.word}`,
      word,
      index,
      width: Math.min(
        measureWordWidthPx(
          ctx,
          word.word,
          fontSize,
          word.band === "frequent" ? 700 : word.band === "rare" ? 500 : 600,
        ),
        contentWidth,
      ),
    }))
    .sort((left, right) => right.width - left.width || left.index - right.index);
  const rows: Array<{
    items: Array<{
      key: string;
      word: WordOption;
      index: number;
      width: number;
    }>;
    width: number;
  }> = [];
  let maxUsedWidth = 0;

  for (const item of items) {
    let bestRowIndex = -1;
    let bestRemaining = Number.POSITIVE_INFINITY;

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
      const row = rows[rowIndex];

      if (!row) {
        continue;
      }

      const nextWidth = row.width + (row.items.length > 0 ? wordGapX : 0) + item.width;

      if (nextWidth > contentWidth) {
        continue;
      }

      const remaining = contentWidth - nextWidth;

      if (remaining < bestRemaining) {
        bestRemaining = remaining;
        bestRowIndex = rowIndex;
      }
    }

    if (bestRowIndex === -1) {
      rows.push({
        items: [item],
        width: item.width,
      });
      continue;
    }

    const row = rows[bestRowIndex];

    if (!row) {
      continue;
    }

    row.items.push(item);
    row.width += wordGapX + item.width;
  }

  rows.sort((left, right) => {
    const leftIndex = Math.min(...left.items.map((item) => item.index));
    const rightIndex = Math.min(...right.items.map((item) => item.index));
    return leftIndex - rightIndex;
  });

  rows.forEach((row, rowIndex) => {
    row.items.sort((left, right) => left.index - right.index);
    let x = 0;
    const y = rowIndex * (wordHeight + wordGapY);

    row.items.forEach((item) => {
      words.push({
        key: item.key,
        word: item.word,
        x: padX + x,
        y: padY + headerHeight + 4 + y,
        width: item.width,
        height: wordHeight,
      });

      x += item.width + wordGapX;
    });

    maxUsedWidth = Math.max(maxUsedWidth, row.width);
  });

  const rowCount = Math.max(1, rows.length);
  const rowsHeight = words.length === 0 ? wordHeight : (rowCount - 1) * (wordHeight + wordGapY) + wordHeight;
  const next = {
    words,
    height: padY * 2 + headerHeight + 4 + rowsHeight,
    usedWidth: padX * 2 + maxUsedWidth,
    rowCount: words.length === 0 ? 1 : rowCount,
  };
  WORD_LAYOUT_CACHE.set(cacheKey, next);
  return next;
}

function detailWordMetrics(textScale: number) {
  return {
    wordHeight: Math.round(WORLD_WORD_HEIGHT * textScale),
    wordGapY: Math.round(3 * Math.max(1, textScale * 0.72)),
  };
}

function chooseTileBox(
  ctx: CanvasRenderingContext2D,
  span: SpanCandidate,
  textScale: number,
  headerHeight: number,
) {
  const maxWidth = Math.max(span.spanLength * WORLD_DIGIT_WIDTH - WORLD_TILE_GAP, WORLD_DIGIT_WIDTH - 6);
  const minHeaderWidth =
    WORLD_TILE_PAD_X * 2 +
    span.digits.length * 16 +
    Math.max(0, span.digits.length - 1) * WORLD_MINI_DIGIT_GAP;
  const maxTextScale = Math.min(2.1, textScale * 1.36);
  const scaleCandidates = Array.from(
    new Set(
      [maxTextScale, maxTextScale - 0.12, maxTextScale - 0.24, maxTextScale - 0.36, textScale]
        .map((value) => Number(value.toFixed(2)))
        .filter((value) => value >= textScale),
    ),
  ).sort((left, right) => right - left);

  const baseMetrics = detailWordMetrics(textScale);
  const baseWideLayout = layoutWords(
    ctx,
    span,
    maxWidth,
    textScale,
    headerHeight,
    baseMetrics.wordHeight,
    baseMetrics.wordGapY,
  );
  const targetRowCount = baseWideLayout.rowCount;
  const allowedRowCount = targetRowCount + 1;

  for (const candidateScale of scaleCandidates) {
    const metrics = detailWordMetrics(candidateScale);
    const wideLayout = layoutWords(
      ctx,
      span,
      maxWidth,
      candidateScale,
      headerHeight,
      metrics.wordHeight,
      metrics.wordGapY,
    );

    if (wideLayout.rowCount > allowedRowCount) {
      continue;
    }

    let width = clamp(Math.ceil(wideLayout.usedWidth + 2), minHeaderWidth, maxWidth);
    let fittedLayout = wideLayout;

    for (let attempt = 0; attempt < 3; attempt += 1) {
      fittedLayout = layoutWords(
        ctx,
        span,
        width,
        candidateScale,
        headerHeight,
        metrics.wordHeight,
        metrics.wordGapY,
      );

      if (fittedLayout.rowCount > allowedRowCount) {
        width = clamp(width + Math.ceil(WORLD_DIGIT_WIDTH * 0.18), minHeaderWidth, maxWidth);
        continue;
      }

      const tighterWidth = clamp(Math.ceil(fittedLayout.usedWidth + 2), minHeaderWidth, maxWidth);

      if (tighterWidth >= width - 1) {
        width = tighterWidth;
        break;
      }

      width = tighterWidth;
    }

    const finalLayout = layoutWords(
      ctx,
      span,
      width,
      candidateScale,
      headerHeight,
      metrics.wordHeight,
      metrics.wordGapY,
    );

    if (finalLayout.rowCount <= allowedRowCount) {
      return {
        width,
        wordLayout: finalLayout,
        detailTextScale: candidateScale,
      };
    }
  }

  const fallbackWidth = clamp(Math.ceil(baseWideLayout.usedWidth + 2), minHeaderWidth, maxWidth);
  const fallbackLayout = layoutWords(
    ctx,
    span,
    fallbackWidth,
    textScale,
    headerHeight,
    baseMetrics.wordHeight,
    baseMetrics.wordGapY,
  );

  return {
    width: fallbackWidth,
    wordLayout: fallbackLayout,
    detailTextScale: textScale,
  };
}

function chooseProjectedDetailBox(
  ctx: CanvasRenderingContext2D,
  layout: WorldLayout,
  tile: TileLayout,
  scale: number,
) {
  const maxWidth = Math.max(
    (tile.span.spanLength * layout.digitWidth - WORLD_TILE_GAP) * scale,
    (layout.digitWidth - 6) * scale,
  );
  const maxHeight = Math.max(tile.height * scale, 54);
  const cacheKey = [
    tile.key,
    scale.toFixed(3),
    Math.round(maxWidth),
    Math.round(maxHeight),
    layout.textScale.toFixed(2),
    tile.detailTextScale.toFixed(2),
  ].join(":");
  const cached = PROJECTED_BOX_CACHE.get(cacheKey);

  if (cached) {
    return cached;
  }

  const maxFontSize = clamp(14.6 * tile.detailTextScale * Math.min(scale, 1.14), 12, 28);
  let fallback: {
    width: number;
    height: number;
    headerHeight: number;
    miniDigitHeight: number;
    detailFontSize: number;
    words: WordLayout[];
  } | null = null;

  for (let fontSize = Math.round(maxFontSize); fontSize >= 11; fontSize -= 1) {
    const padX = clamp(fontSize * 0.52, 10, 18);
    const padY = clamp(fontSize * 0.34, 8, 14);
    const miniDigitHeight = clamp(fontSize * 0.82, 11, 18);
    const miniDigitWidth = clamp(fontSize * 0.98, 13, 22);
    const miniDigitGap = clamp(fontSize * 0.18, 3, 7);
    const headerHeight = Math.max(
      miniDigitHeight + clamp(fontSize * 0.88, 12, 20),
      clamp(fontSize * 2.05, 26, 44),
    );
    const wordHeight = Math.round(fontSize * 1.16);
    const wordGapX = clamp(fontSize * 0.34, 6, 13);
    const wordGapY = clamp(fontSize * 0.22, 4, 9);
    const minHeaderWidth =
      padX * 2 +
      tile.span.digits.length * miniDigitWidth +
      Math.max(0, tile.span.digits.length - 1) * miniDigitGap;
    const wideLayout = layoutWordsPx(
      ctx,
      tile.span,
      maxWidth,
      fontSize,
      headerHeight,
      wordHeight,
      wordGapX,
      wordGapY,
      padX,
      padY,
    );

    if (!fallback || wideLayout.height < fallback.height) {
      fallback = {
        width: clamp(Math.ceil(wideLayout.usedWidth + 2), minHeaderWidth, maxWidth),
        height: wideLayout.height,
        headerHeight,
        miniDigitHeight,
        detailFontSize: fontSize,
        words: wideLayout.words,
      };
    }

    if (wideLayout.height > maxHeight) {
      continue;
    }

    const targetRowCount = wideLayout.rowCount;
    const allowedRowCount = targetRowCount + 1;
    let width = clamp(Math.ceil(wideLayout.usedWidth + 2), minHeaderWidth, maxWidth);
    let fittedLayout = wideLayout;

    for (let attempt = 0; attempt < 4; attempt += 1) {
      fittedLayout = layoutWordsPx(
        ctx,
        tile.span,
        width,
        fontSize,
        headerHeight,
        wordHeight,
        wordGapX,
        wordGapY,
        padX,
        padY,
      );

      if (fittedLayout.height > maxHeight || fittedLayout.rowCount > allowedRowCount) {
        const widened = clamp(width + maxWidth * 0.12, minHeaderWidth, maxWidth);

        if (widened <= width + 1) {
          break;
        }

        width = widened;
        continue;
      }

      const tighterWidth = clamp(Math.ceil(fittedLayout.usedWidth + 2), minHeaderWidth, maxWidth);

      if (tighterWidth >= width - 1) {
        width = tighterWidth;
        break;
      }

      width = tighterWidth;
    }

    const finalLayout = layoutWordsPx(
      ctx,
      tile.span,
      width,
      fontSize,
      headerHeight,
      wordHeight,
      wordGapX,
      wordGapY,
      padX,
      padY,
    );

    if (finalLayout.height <= maxHeight && finalLayout.rowCount <= allowedRowCount) {
      const next = {
        width,
        height: finalLayout.height,
        headerHeight,
        miniDigitHeight,
        detailFontSize: fontSize,
        words: finalLayout.words,
      };
      PROJECTED_BOX_CACHE.set(cacheKey, next);
      return next;
    }
  }

  const resolvedFallback = fallback ?? {
    width: Math.max(64, maxWidth * 0.72),
    height: Math.max(54, maxHeight * 0.7),
    headerHeight: 28,
    miniDigitHeight: 12,
    detailFontSize: 11,
    words: [] as WordLayout[],
  };
  PROJECTED_BOX_CACHE.set(cacheKey, resolvedFallback);
  return resolvedFallback;
}

function chooseProjectedCompactBox(
  ctx: CanvasRenderingContext2D,
  layout: WorldLayout,
  tile: TileLayout,
  scale: number,
) {
  const width = Math.max(
    tile.span.spanLength * layout.digitWidth - WORLD_TILE_GAP,
    layout.digitWidth - 6,
  );
  const screenWidth = width * scale;
  const cacheKey = [
    "compact",
    tile.key,
    scale.toFixed(3),
    Math.round(screenWidth),
    layout.textScale.toFixed(2),
  ].join(":");
  const cached = PROJECTED_BOX_CACHE.get(cacheKey);

  if (cached) {
    return cached;
  }

  const compactPadX = 8;
  const microCompact = screenWidth < 84;
  const compactTopPad = microCompact ? 4 : 6;
  const compactBottomPad = microCompact ? 4 : 6;
  const compactMetaFontSize = clamp(12.5 * layout.textScale * scale, microCompact ? 8 : 9, 15);
  const compactWordFontSize = clamp(12.8 * layout.textScale * scale, microCompact ? 8 : 9, 15);
  const compactLineHeight = Math.max(compactWordFontSize * 0.94, 10);
  const compactRowGap = microCompact ? 1 : Math.max(2, compactWordFontSize * 0.16);
  const rowCap = microCompact ? 1 : screenWidth < 156 ? 2 : 3;
  const previewMaxHeight =
    rowCap * compactLineHeight + Math.max(0, rowCap - 1) * compactRowGap;

  ctx.font = `700 ${compactWordFontSize}px ${FONT_STACK}`;
  const preview = compactPreviewLayout(
    ctx,
    tile.selectedWord
      ? [
          tile.selectedWord,
          ...tile.span.words.filter((word) => word.word !== tile.selectedWord?.word),
        ]
      : tile.span.words,
    Math.max(10, screenWidth - compactPadX * 2),
    previewMaxHeight,
    compactLineHeight,
    compactRowGap,
  );
  const previewRows = Math.max(1, preview.rows.length);
  const previewHeight =
    previewRows * compactLineHeight + Math.max(0, previewRows - 1) * compactRowGap;
  const metaBandHeight = microCompact
    ? compactMetaFontSize * 0.8 + 2
    : compactMetaFontSize * 0.72 + 9;
  const dividerGap = microCompact ? 0 : 5;
  const height =
    compactTopPad +
    metaBandHeight +
    dividerGap +
    previewHeight +
    compactBottomPad +
    (microCompact ? 2 : 4);
  const next = {
    width: screenWidth,
    height,
    headerHeight: layout.headerHeight * scale,
    miniDigitHeight: layout.miniDigitHeight * scale,
    detailFontSize: tile.detailTextScale * 14.6 * scale,
    words: tile.words,
  };
  PROJECTED_BOX_CACHE.set(cacheKey, next);
  return next;
}

function buildWorldLayout(
  ctx: CanvasRenderingContext2D,
  digits: string,
  spans: SpanCandidate[],
  selections: GridSelection[],
  previousLanes: Map<string, number>,
  textScale: number,
) {
  const resolvedTextScale = clamp(textScale, 0.9, 1.7);
  const miniDigitHeight = Math.round(WORLD_MINI_DIGIT_HEIGHT * Math.max(1, resolvedTextScale * 0.9));
  const headerHeight = Math.max(
    Math.round(WORLD_HEADER_HEIGHT * Math.max(1, resolvedTextScale * 0.9)),
    miniDigitHeight + Math.round(10 * Math.max(1, resolvedTextScale * 0.84)),
  );
  const laneHeight = Math.round(WORLD_LANE_HEIGHT * Math.max(1, resolvedTextScale * 0.96));

  if (!digits) {
    return {
      width: WORLD_DIGIT_WIDTH * 6,
      height: 220,
      digitWidth: WORLD_DIGIT_WIDTH,
      digitHeight: WORLD_DIGIT_HEIGHT,
      laneHeight,
      headerHeight,
      miniDigitHeight,
      textScale: resolvedTextScale,
      tiles: [],
    } satisfies WorldLayout;
  }

  const selectionMap = new Map(selections.map((selection) => [selection.span.key, selection.word]));
  const orderIndex = new Map(spans.map((span, index) => [span.key, index]));
  const ranked = [...spans].sort(
    (left, right) =>
      Number(selectionMap.has(right.key)) - Number(selectionMap.has(left.key)) ||
      (orderIndex.get(left.key) ?? 0) - (orderIndex.get(right.key) ?? 0),
  );

  const laneFree: Array<Array<[number, number]>> = [];
  const laneFill: number[] = [];
  const compactLaneFree: Array<Array<[number, number]>> = [];
  const compactLaneFill: number[] = [];
  const tiles: TileLayout[] = [];

  for (const span of ranked) {
    const selectedWord = selectionMap.get(span.key) ?? null;
    const spanWorldWidth = Math.max(
      span.spanLength * WORLD_DIGIT_WIDTH - WORLD_TILE_GAP,
      WORLD_DIGIT_WIDTH - 6,
    );
    const tileBox = chooseTileBox(
      ctx,
      span,
      resolvedTextScale,
      headerHeight,
    );
    const width = tileBox.width;
    const wordLayout = tileBox.wordLayout;
    const laneSpan = Math.max(1, Math.ceil((wordLayout.height + 8) / laneHeight));
    const lane = findBestLane(
      laneFree,
      laneFill,
      span.start,
      span.end,
      laneSpan,
      previousLanes.get(span.key) ?? null,
    );
    const compactLane = findBestLane(
      compactLaneFree,
      compactLaneFill,
      span.start,
      span.end,
      1,
      null,
    );

    reserveDigits(laneFree, laneFill, lane, laneSpan, span.start, span.end, digits.length);
    reserveDigits(
      compactLaneFree,
      compactLaneFill,
      compactLane,
      1,
      span.start,
      span.end,
      digits.length,
    );

    tiles.push({
      key: span.key,
      span,
      x:
        span.start * WORLD_DIGIT_WIDTH +
        WORLD_TILE_GAP * 0.5 +
        Math.max(0, (spanWorldWidth - width) * 0.5),
      y: 20 + lane * laneHeight,
      width,
      height: wordLayout.height,
      lane,
      laneSpan,
      compactLane,
      detailTextScale: tileBox.detailTextScale,
      selectedWord,
      muted:
        selections.length > 0 &&
        !selectedWord &&
        selections.some((selection) => overlaps(selection.span, span)),
      words: wordLayout.words,
    });
  }

  const usedLanes = tiles.reduce((maxLane, tile) => Math.max(maxLane, tile.lane + tile.laneSpan), 0);
  return {
    width: Math.max(digits.length * WORLD_DIGIT_WIDTH, WORLD_DIGIT_WIDTH * 6),
    height: 48 + Math.max(usedLanes * laneHeight, laneHeight * 4),
    digitWidth: WORLD_DIGIT_WIDTH,
    digitHeight: WORLD_DIGIT_HEIGHT,
    laneHeight,
    headerHeight,
    miniDigitHeight,
    textScale: resolvedTextScale,
    tiles,
  } satisfies WorldLayout;
}

function wordTextColor(word: WordOption, tileActive: boolean, muted: boolean) {
  if (tileActive) {
    return SURFACE_TEXT_INVERSE;
  }

  if (muted) {
    return "rgba(16, 47, 76, 0.38)";
  }

  switch (word.band) {
    case "frequent":
      return SURFACE_TEXT;
    case "common":
      return "#1e527f";
    case "uncommon":
      return "#4a6f90";
    case "rare":
    default:
      return "rgba(19, 35, 49, 0.72)";
  }
}

function tileFill(selected: boolean, hovered: boolean, muted: boolean) {
  if (selected) {
    return SURFACE_ACCENT_STRONG;
  }

  if (hovered) {
    return SURFACE_ACCENT;
  }

  if (muted) {
    return SURFACE_TILE_MUTED;
  }

  return SURFACE_TILE;
}

function tileStroke(selected: boolean, hovered: boolean, muted: boolean) {
  if (selected) {
    return "rgba(12, 61, 105, 1)";
  }

  if (hovered) {
    return "rgba(44, 116, 182, 1)";
  }

  if (muted) {
    return "rgba(53, 94, 135, 0.12)";
  }

  return SURFACE_LINE_STRONG;
}

function projectLayout(
  ctx: CanvasRenderingContext2D,
  layout: WorldLayout,
  scale: number,
): LayoutProjection {
  const detailProgress = scale >= DETAIL_SCALE_THRESHOLD ? 1 : 0;
  const cacheKey = `${detailProgress}:${scale.toFixed(3)}`;
  const cachedByScale = LAYOUT_PROJECTION_CACHE.get(layout);
  const cached = cachedByScale?.get(cacheKey);

  if (cached) {
    return cached;
  }

  const compactLaneHeight = Math.max(54, Math.round(42 + layout.textScale * 10));

  if (detailProgress !== 1) {
    const digitCount = Math.max(
      1,
      layout.tiles.reduce((maxIndex, tile) => Math.max(maxIndex, tile.span.end), 0),
    );
    const columnHeights = Array.from({ length: digitCount }, () => 6);
    const gapWorld = Math.max(2.5, 5 / Math.max(scale, 0.5));
    const projectedTiles: ProjectedTileLayout[] = [];

    for (const tile of layout.tiles) {
      const compactBox = chooseProjectedCompactBox(ctx, layout, tile, scale);
      const spanWorldWidth = Math.max(
        tile.span.spanLength * layout.digitWidth - WORLD_TILE_GAP,
        layout.digitWidth - 6,
      );
      const width = Math.min(spanWorldWidth, compactBox.width / scale);
      const height = Math.max(
        Math.min(tile.height, compactLaneHeight - 4),
        compactBox.height / scale,
      );
      const y = Math.max(6, ...columnHeights.slice(tile.span.start, tile.span.end));
      const bottom = y + height + gapWorld;

      for (let index = tile.span.start; index < tile.span.end; index += 1) {
        columnHeights[index] = bottom;
      }

      projectedTiles.push({
        ...tile,
        x:
          tile.span.start * layout.digitWidth +
          WORLD_TILE_GAP * 0.5 +
          Math.max(0, (spanWorldWidth - width) * 0.5),
        y,
        width,
        height,
        headerHeight: layout.headerHeight,
        miniDigitHeight: layout.miniDigitHeight,
        detailFontSize: tile.detailTextScale * 14.6,
      });
    }

    const projection = {
      detailProgress,
      worldHeight: 28 + Math.max(...columnHeights, compactLaneHeight * 4),
      tiles: projectedTiles,
    } satisfies LayoutProjection;
    const nextByScale = cachedByScale ?? new Map<string, LayoutProjection>();
    nextByScale.set(cacheKey, projection);
    LAYOUT_PROJECTION_CACHE.set(layout, nextByScale);
    return projection;
  }

  const digitCount = Math.max(
    1,
    layout.tiles.reduce((maxIndex, tile) => Math.max(maxIndex, tile.span.end), 0),
  );
  const columnHeights = Array.from({ length: digitCount }, () => 20);
  const gapWorld = Math.max(3.5, 6 / Math.max(scale, 0.5));
  const projectedTiles: ProjectedTileLayout[] = [];

  for (const tile of layout.tiles) {
    const detailBox = chooseProjectedDetailBox(ctx, layout, tile, scale);
    const spanWorldWidth = Math.max(
      tile.span.spanLength * layout.digitWidth - WORLD_TILE_GAP,
      layout.digitWidth - 6,
    );
    const width = detailBox.width / scale;
    const height = detailBox.height / scale;
    const headerHeight = detailBox.headerHeight / scale;
    const miniDigitHeight = detailBox.miniDigitHeight / scale;
    const detailFontSize = detailBox.detailFontSize / scale;
    const y = Math.max(20, ...columnHeights.slice(tile.span.start, tile.span.end));
    const bottom = y + height + gapWorld;

    for (let index = tile.span.start; index < tile.span.end; index += 1) {
      columnHeights[index] = bottom;
    }

    projectedTiles.push({
      ...tile,
      x:
        tile.span.start * layout.digitWidth +
        WORLD_TILE_GAP * 0.5 +
        Math.max(0, (spanWorldWidth - width) * 0.5),
      y,
      width,
      height,
      headerHeight,
      miniDigitHeight,
      detailFontSize,
      words: detailBox.words.map((word) => ({
        ...word,
        x: word.x / scale,
        y: word.y / scale,
        width: word.width / scale,
        height: word.height / scale,
      })),
    });
  }

  const projection = {
    detailProgress,
    worldHeight: 48 + Math.max(...columnHeights, 20),
    tiles: projectedTiles,
  } satisfies LayoutProjection;
  const nextByScale = cachedByScale ?? new Map<string, LayoutProjection>();
  nextByScale.set(cacheKey, projection);
  LAYOUT_PROJECTION_CACHE.set(layout, nextByScale);
  return projection;
}

function clampCamera(
  ctx: CanvasRenderingContext2D,
  layout: WorldLayout,
  viewport: Point,
  camera: CameraState,
) {
  const projection = projectLayout(ctx, layout, camera.scale);
  const contentHeight = Math.max(120, viewport.y - VIEW_TOP_BAND - VIEW_TOP_BUFFER - VIEW_PAD);
  const visibleWidth = viewport.x / camera.scale;
  const visibleHeight = contentHeight / camera.scale;

  const centeredX = (layout.width - visibleWidth) * 0.5;

  const minX = layout.width <= visibleWidth ? centeredX : -VIEW_PAD / camera.scale;
  const maxX =
    layout.width <= visibleWidth
      ? centeredX
      : layout.width - visibleWidth + VIEW_PAD / camera.scale;
  const minY = 0;
  const maxY = Math.max(0, projection.worldHeight - visibleHeight);

  return {
    x: clamp(camera.x, minX, maxX),
    y: clamp(camera.y, minY, maxY),
    scale: clamp(camera.scale, MIN_SCALE, MAX_SCALE),
  };
}

function fitCamera(
  ctx: CanvasRenderingContext2D,
  layout: WorldLayout,
  viewport: Point,
): CameraState {
  const fitWidth = (viewport.x - VIEW_PAD * 2) / Math.max(layout.width, 1);
  const fitHeight = (viewport.y - VIEW_TOP_BAND - VIEW_PAD * 2) / Math.max(layout.height, 1);
  const scale = clamp(Math.min(fitWidth, Math.max(fitHeight, fitWidth * 0.92)), 0.55, 1.28);
  return clampCamera(ctx, layout, viewport, {
    x: 0,
    y: 0,
    scale,
  });
}

function worldToScreenX(worldX: number, camera: CameraState) {
  return (worldX - camera.x) * camera.scale;
}

function worldToScreenY(worldY: number, camera: CameraState) {
  return VIEW_TOP_BAND + VIEW_TOP_BUFFER + (worldY - camera.y) * camera.scale;
}

function screenToWorld(point: Point, camera: CameraState) {
  return {
    x: camera.x + point.x / camera.scale,
    y: camera.y + (point.y - VIEW_TOP_BAND - VIEW_TOP_BUFFER) / camera.scale,
  };
}

function wheelShouldZoom(event: WheelEvent) {
  return event.ctrlKey || event.metaKey || event.deltaMode !== WheelEvent.DOM_DELTA_PIXEL;
}

function hitTest(
  ctx: CanvasRenderingContext2D,
  layout: WorldLayout,
  camera: CameraState,
  point: Point,
): HitResult | null {
  if (point.y < VIEW_TOP_BAND + VIEW_TOP_BUFFER) {
    return null;
  }

  const worldPoint = screenToWorld(point, camera);
  const projection = projectLayout(ctx, layout, camera.scale);

  for (let index = projection.tiles.length - 1; index >= 0; index -= 1) {
    const tile = projection.tiles[index];

    if (!tile) {
      continue;
    }

    if (
      worldPoint.x < tile.x ||
      worldPoint.x > tile.x + tile.width ||
      worldPoint.y < tile.y ||
      worldPoint.y > tile.y + tile.height
    ) {
      continue;
    }

    for (const word of tile.words) {
      const chipX = tile.x + word.x;
      const chipY = tile.y + word.y;

      if (
        worldPoint.x >= chipX &&
        worldPoint.x <= chipX + word.width &&
        worldPoint.y >= chipY &&
        worldPoint.y <= chipY + word.height
      ) {
        return {
          tile,
          word,
        };
      }
    }

    return {
      tile,
      word: null,
    };
  }

  return null;
}

function drawEmptyState(ctx: CanvasRenderingContext2D, viewport: Point) {
  ctx.fillStyle = SURFACE_TEXT;
  ctx.font = `700 42px Charter, "Iowan Old Style", "Palatino Linotype", serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Explore the mnemonic field", viewport.x / 2, viewport.y / 2 - 22);

  ctx.fillStyle = SURFACE_TEXT_SOFT;
  ctx.font = `500 18px ${FONT_STACK}`;
  ctx.fillText("Type digits, then drag, scroll, or pinch the atlas like a map.", viewport.x / 2, viewport.y / 2 + 22);
}

function drawScene(
  ctx: CanvasRenderingContext2D,
  viewport: Point,
  layout: WorldLayout,
  digits: string,
  focusRange: DigitRange | null,
  camera: CameraState,
  hoveredTileKey: string | null,
  hoveredWordKey: string | null,
  selections: GridSelection[],
  debugEnabled: boolean,
) {
  ctx.clearRect(0, 0, viewport.x, viewport.y);

  const gradient = ctx.createLinearGradient(0, 0, 0, viewport.y);
  gradient.addColorStop(0, SURFACE_BG_TOP);
  gradient.addColorStop(0.52, SURFACE_BG_MID);
  gradient.addColorStop(1, SURFACE_BG_BOTTOM);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, viewport.x, viewport.y);

  ctx.fillStyle = "rgba(247, 251, 255, 0.94)";
  ctx.fillRect(0, 0, viewport.x, VIEW_TOP_BAND);

  ctx.fillStyle = "rgba(228, 238, 249, 0.98)";
  ctx.fillRect(0, VIEW_TOP_BAND, viewport.x, VIEW_TOP_BUFFER);

  if (!digits) {
    drawEmptyState(ctx, viewport);
    return null;
  }

  const selectedDigits = new Set<number>();
  const projection = projectLayout(ctx, layout, camera.scale);

  for (const selection of selections) {
    for (let index = selection.span.start; index < selection.span.end; index += 1) {
      selectedDigits.add(index);
    }
  }

  for (let index = 0; index <= digits.length; index += 1) {
    const laneX = worldToScreenX(index * layout.digitWidth, camera);

    if (laneX < -40 || laneX > viewport.x + 40) {
      continue;
    }

    ctx.strokeStyle = SURFACE_LINE;
    ctx.lineWidth = index === 0 || index === digits.length ? 1.8 : 1;
    ctx.beginPath();
    ctx.moveTo(laneX, 0);
    ctx.lineTo(laneX, viewport.y);
    ctx.stroke();
  }

  for (let index = 0; index < digits.length; index += 1) {
    const x0 = worldToScreenX(index * layout.digitWidth, camera);
    const x1 = worldToScreenX((index + 1) * layout.digitWidth, camera);

    if (x1 < -40 || x0 > viewport.x + 40) {
      continue;
    }

    ctx.fillStyle = selectedDigits.has(index)
      ? "rgba(11, 61, 105, 0.08)"
      : index % 2 === 0
        ? "rgba(255, 255, 255, 0.18)"
        : "rgba(45, 120, 185, 0.04)";
    ctx.fillRect(x0, 0, x1 - x0, viewport.y);

    const boxWidth = clamp(x1 - x0 - 20, 16, 40);
    const boxX = x0 + (x1 - x0 - boxWidth) / 2;
    const boxY = 4;
    const boxHeight = 18;

    ctx.fillStyle = selectedDigits.has(index)
      ? "rgba(11, 61, 105, 0.94)"
      : "rgba(250, 253, 255, 0.96)";
    ctx.strokeStyle = selectedDigits.has(index)
      ? "rgba(11, 61, 105, 1)"
      : SURFACE_LINE_STRONG;
    ctx.lineWidth = 1.2;
    drawRoundedRect(ctx, boxX, boxY, boxWidth, boxHeight, 14);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = selectedDigits.has(index) ? SURFACE_TEXT_INVERSE : SURFACE_TEXT;
    ctx.font = `700 ${clamp(Math.min(boxWidth * 0.32, boxHeight * 0.72), 9, 14)}px ${MONO_STACK}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(digits[index] ?? "", boxX + boxWidth / 2, boxY + boxHeight / 2 + 0.5);
  }

  drawTopSelectionTrack(ctx, layout, camera, selections, focusRange);

  const debugTiles: Array<{
    key: string;
    digits: string;
    start: number;
    end: number;
    x: number;
    y: number;
    width: number;
    height: number;
    words: Array<{ key: string; word: string; selected: boolean; x: number; y: number; width: number; height: number }>;
  }> = [];

  ctx.save();
  ctx.beginPath();
  ctx.rect(0, VIEW_TOP_BAND + VIEW_TOP_BUFFER, viewport.x, viewport.y - VIEW_TOP_BAND - VIEW_TOP_BUFFER);
  ctx.clip();

  for (const tile of projection.tiles) {
    const screenX = worldToScreenX(tile.x, camera);
    const screenY = worldToScreenY(tile.y, camera);
    const screenWidth = tile.width * camera.scale;
    const showWords = projection.detailProgress === 1;
    const screenHeight = tile.height * camera.scale;

    if (
      screenX > viewport.x + 120 ||
      screenY > viewport.y + 120 ||
      screenX + screenWidth < -120 ||
      screenY + screenHeight < VIEW_TOP_BAND - 120
    ) {
      continue;
    }

    const selected = Boolean(tile.selectedWord);
    const hovered = hoveredTileKey === tile.key;

    ctx.fillStyle = tileFill(selected, hovered, tile.muted);
    ctx.strokeStyle = tileStroke(selected, hovered, tile.muted);
    ctx.lineWidth = selected || hovered ? 2.2 : 1.2;
    drawRoundedRect(ctx, screenX, screenY, screenWidth, screenHeight, clamp(14 * camera.scale, 10, 18));
    ctx.fill();
    ctx.stroke();

    if (showWords) {
      const miniDigitWidth =
        measureMiniDigitWidth(tile.span.digits.length, tile.width) * camera.scale;
      const miniDigitGap = WORLD_MINI_DIGIT_GAP * camera.scale;
      const miniDigitHeight = tile.miniDigitHeight * camera.scale;
      const miniDigitsX = screenX + 12;
      const miniDigitsY = screenY + 7 * camera.scale;

      for (let index = 0; index < tile.span.digits.length; index += 1) {
        const digit = tile.span.digits[index] ?? "";
        const digitX = miniDigitsX + index * (miniDigitWidth + miniDigitGap);

        if (digitX + miniDigitWidth > screenX + screenWidth - 12) {
          break;
        }

        ctx.fillStyle = selected
          ? "rgba(247, 251, 255, 0.18)"
          : hovered
            ? "rgba(247, 251, 255, 0.16)"
            : "rgba(11, 61, 105, 0.08)";
        ctx.strokeStyle = selected || hovered ? "rgba(247, 251, 255, 0.24)" : "rgba(11, 61, 105, 0.12)";
        ctx.lineWidth = 1;
        drawRoundedRect(
          ctx,
          digitX,
          miniDigitsY,
          miniDigitWidth,
          miniDigitHeight,
          clamp(5 * camera.scale, 4, 8),
        );
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = selected || hovered ? SURFACE_TEXT_INVERSE : SURFACE_TEXT;
        ctx.font = `700 ${clamp(10.5 * layout.textScale * camera.scale, 8, 13)}px ${MONO_STACK}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(digit, digitX + miniDigitWidth / 2, miniDigitsY + miniDigitHeight / 2 + 0.5);
      }

      ctx.strokeStyle = selected || hovered ? "rgba(247, 251, 255, 0.2)" : SURFACE_LINE;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(screenX + 12, screenY + (tile.headerHeight + 1) * camera.scale);
      ctx.lineTo(screenX + screenWidth - 12, screenY + (tile.headerHeight + 1) * camera.scale);
      ctx.stroke();
    }

    const debugWords: Array<{
      key: string;
      word: string;
      selected: boolean;
      x: number;
      y: number;
      width: number;
      height: number;
    }> = [];

    if (showWords) {
      for (const word of tile.words) {
        const wordX = worldToScreenX(tile.x + word.x, camera);
        const wordY = worldToScreenY(tile.y + word.y, camera);
        const wordWidth = word.width * camera.scale;
        const wordHeight = word.height * camera.scale;
        const chosen = tile.selectedWord?.word === word.word.word;
        const hoveredWord = hoveredWordKey === word.key;

        if (chosen || hoveredWord) {
          ctx.fillStyle = chosen
            ? "rgba(247, 251, 255, 0.22)"
            : selected || hovered
              ? "rgba(247, 251, 255, 0.14)"
              : SURFACE_WORD_HILITE;
          drawRoundedRect(
            ctx,
            wordX - 3,
            wordY - 2,
            wordWidth + 6,
            wordHeight + 4,
            clamp(8 * camera.scale, 6, 10),
          );
          ctx.fill();
        }

        ctx.fillStyle = wordTextColor(word.word, selected || hovered, tile.muted);
        ctx.font =
          word.word.band === "frequent"
            ? `700 ${clamp(tile.detailFontSize * camera.scale, 11, 28)}px ${FONT_STACK}`
            : word.word.band === "rare"
              ? `500 ${clamp(tile.detailFontSize * camera.scale, 11, 28)}px ${FONT_STACK}`
              : `600 ${clamp(tile.detailFontSize * camera.scale, 11, 28)}px ${FONT_STACK}`;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(word.word.word, wordX + 4, wordY + wordHeight / 2 + 0.5);

        if (debugEnabled) {
          debugWords.push({
            key: word.key,
            word: word.word.word,
            selected: chosen,
            x: wordX,
            y: wordY,
            width: wordWidth,
            height: wordHeight,
          });
        }
      }
    } else {
      const compactPadX = 8;
      const microCompact = screenHeight < 38 || screenWidth < 84;
      const compactTopPad = microCompact ? 4 : 7;
      const compactBottomPad = microCompact ? 4 : 7;
      const compactMetaFontSize = clamp(12.5 * layout.textScale * camera.scale, microCompact ? 8 : 9, 15);
      const compactAuxFontSize = clamp(10.5 * layout.textScale * camera.scale, microCompact ? 7 : 8, 12);
      const compactWordFontSize = clamp(12.8 * layout.textScale * camera.scale, microCompact ? 8 : 9, 15);
      const compactMetaY = screenY + compactTopPad + compactMetaFontSize * 0.44;
      const compactPreviewBottom = screenY + screenHeight - compactBottomPad;
      const compactPreviewTop = microCompact
        ? compactPreviewBottom - compactWordFontSize - 1
        : compactMetaY + compactMetaFontSize * 0.72 + 4;
      const compactPreviewHeight = microCompact
        ? compactWordFontSize + 2
        : Math.max(10, compactPreviewBottom - compactPreviewTop);
      const compactRowGap = microCompact ? 1 : Math.max(2, compactWordFontSize * 0.16);

      ctx.save();
      ctx.beginPath();
      ctx.rect(screenX + 2, screenY + 2, Math.max(0, screenWidth - 4), Math.max(0, screenHeight - 4));
      ctx.clip();

      ctx.fillStyle = selected || hovered ? SURFACE_TEXT_INVERSE : SURFACE_TEXT;
      ctx.font = `700 ${compactMetaFontSize}px ${MONO_STACK}`;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(tile.span.digits, screenX + compactPadX, compactMetaY);

      if (!microCompact && screenHeight >= 28) {
        ctx.strokeStyle = selected || hovered ? "rgba(247, 251, 255, 0.24)" : SURFACE_LINE;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(screenX + compactPadX, compactPreviewTop - 5);
        ctx.lineTo(screenX + screenWidth - compactPadX, compactPreviewTop - 5);
        ctx.stroke();
      }

      ctx.font = `700 ${compactWordFontSize}px ${FONT_STACK}`;
      const compactLineHeight = Math.max(compactWordFontSize * 0.94, 10);
      const preview = compactPreviewLayout(
        ctx,
        tile.selectedWord
          ? [
              tile.selectedWord,
              ...tile.span.words.filter((word) => word.word !== tile.selectedWord?.word),
            ]
          : tile.span.words,
        Math.max(10, screenWidth - compactPadX * 2),
        compactPreviewHeight,
        compactLineHeight,
        compactRowGap,
      );
      const totalPreviewHeight =
        preview.rows.length > 0
          ? preview.rows.length * compactLineHeight + (preview.rows.length - 1) * compactRowGap
          : 0;
      let rowY = microCompact
        ? compactPreviewBottom - compactWordFontSize * 0.18
        : Math.max(
            compactPreviewTop + compactLineHeight * 0.5,
            compactPreviewBottom - totalPreviewHeight + compactLineHeight * 0.5,
          );

      ctx.fillStyle = selected || hovered ? SURFACE_TEXT_INVERSE : wordTextColor(tile.span.bestWord, false, tile.muted);
      ctx.textAlign = "left";

      for (let rowIndex = 0; rowIndex < preview.rows.length; rowIndex += 1) {
        const row = preview.rows[rowIndex];
        let previewX = screenX + compactPadX;

        for (const label of row) {
          ctx.fillText(label, previewX, rowY);
          previewX += ctx.measureText(label).width + 10;
        }

        if (rowIndex === preview.rows.length - 1 && preview.marker) {
          ctx.fillStyle = selected || hovered ? "rgba(247, 251, 255, 0.68)" : SURFACE_TEXT_MUTED;
          ctx.font = `600 ${compactAuxFontSize}px ${FONT_STACK}`;
          ctx.textAlign = "right";
          ctx.fillText(preview.marker, screenX + screenWidth - compactPadX, rowY);
          ctx.fillStyle = selected || hovered
            ? SURFACE_TEXT_INVERSE
            : wordTextColor(tile.span.bestWord, false, tile.muted);
          ctx.font = `700 ${compactWordFontSize}px ${FONT_STACK}`;
          ctx.textAlign = "left";
        }

        rowY += compactLineHeight + compactRowGap;
      }

      ctx.restore();
    }

    if (debugEnabled) {
      debugTiles.push({
        key: tile.key,
        digits: tile.span.digits,
        start: tile.span.start,
        end: tile.span.end,
        x: screenX,
        y: screenY,
        width: screenWidth,
        height: screenHeight,
        words: debugWords,
      });
    }
  }

  ctx.restore();

  return debugEnabled
    ? {
        camera,
        tiles: debugTiles,
      }
    : null;
}

export function CanvasAtlas({
  digits,
  focusRange,
  spans,
  selections,
  textScale,
  onChooseWord,
}: {
  digits: string;
  focusRange: DigitRange | null;
  spans: SpanCandidate[];
  selections: GridSelection[];
  textScale: number;
  onChooseWord: (span: SpanCandidate, word: WordOption) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const debugPayloadRef = useRef<HTMLScriptElement | null>(null);
  const measureContextRef = useRef<CanvasRenderingContext2D | null>(null);
  const layoutRef = useRef<WorldLayout | null>(null);
  const previousLanesRef = useRef(new Map<string, number>());
  const previousSpanSignatureRef = useRef("");
  const animationRef = useRef<number | null>(null);
  const lastFrameAtRef = useRef<number | null>(null);
  const cameraRef = useRef<CameraState>({ x: 0, y: 0, scale: 1 });
  const targetCameraRef = useRef<CameraState>({ x: 0, y: 0, scale: 1 });
  const inertiaRef = useRef<{
    vx: number;
    vy: number;
    active: boolean;
  }>({
    vx: 0,
    vy: 0,
    active: false,
  });
  const hoverRef = useRef<{ tileKey: string | null; wordKey: string | null }>({
    tileKey: null,
    wordKey: null,
  });
  const viewportRef = useRef<Point>({ x: 0, y: 0 });
  const lastDigitsRef = useRef("");
  const pointersRef = useRef(new Map<number, Point>());
  const dragRef = useRef<{
    pointerId: number | null;
    start: Point;
    startCamera: CameraState;
    lastPoint: Point;
    lastTime: number;
    velocity: Point;
    pointerType: string | null;
    moved: boolean;
    hit: HitResult | null;
  }>({
    pointerId: null,
    start: { x: 0, y: 0 },
    startCamera: { x: 0, y: 0, scale: 1 },
    lastPoint: { x: 0, y: 0 },
    lastTime: 0,
    velocity: { x: 0, y: 0 },
    pointerType: null,
    moved: false,
    hit: null,
  });
  const pinchRef = useRef<{
    active: boolean;
    startDistance: number;
    startScale: number;
    worldAnchor: Point;
  }>({
    active: false,
    startDistance: 0,
    startScale: 1,
    worldAnchor: { x: 0, y: 0 },
  });
  const [viewport, setViewport] = useState<Point>({ x: 0, y: 0 });

  if (measureContextRef.current === null) {
    measureContextRef.current = makeMeasureContext();
  }

  const spanSignature = spans.map((span) => span.key).join("|");

  const layout = useMemo(() => {
    if (!measureContextRef.current) {
      return null;
    }

    const lanePreferences =
      previousSpanSignatureRef.current === spanSignature ? previousLanesRef.current : new Map<string, number>();

    return buildWorldLayout(
      measureContextRef.current,
      digits,
      spans,
      selections,
      lanePreferences,
      textScale,
    );
  }, [digits, selections, spanSignature, spans, textScale]);

  useEffect(() => {
    if (!layout) {
      previousLanesRef.current = new Map();
      previousSpanSignatureRef.current = "";
      return;
    }

    layoutRef.current = layout;
    previousLanesRef.current = new Map(layout.tiles.map((tile) => [tile.key, tile.lane]));
    previousSpanSignatureRef.current = spanSignature;
  }, [layout, spanSignature]);

  useEffect(() => {
    layoutRef.current = layout;
  }, [layout]);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const observer = new ResizeObserver(([entry]) => {
      const next = {
        x: Math.floor(entry.contentRect.width),
        y: Math.floor(entry.contentRect.height),
      };
      viewportRef.current = next;
      setViewport((current) => (current.x === next.x && current.y === next.y ? current : next));
    });

    observer.observe(root);
    const rect = root.getBoundingClientRect();
    const initial = {
      x: Math.floor(rect.width),
      y: Math.floor(rect.height),
    };
    viewportRef.current = initial;
    setViewport(initial);

    return () => observer.disconnect();
  }, []);

  function publishDebug(payload: unknown) {
    if (typeof window === "undefined") {
      return;
    }

    const debugWindow = window as Window & {
      __atlasDebugEnabled?: boolean;
      __atlasDebug?: unknown;
    };

    debugWindow.__atlasDebug = debugWindow.__atlasDebugEnabled ? payload : null;

    if (debugPayloadRef.current) {
      debugPayloadRef.current.textContent =
        debugWindow.__atlasDebugEnabled && payload ? JSON.stringify(payload) : "";
    }
  }

  function drawFrame() {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const width = viewportRef.current.x;
    const height = viewportRef.current.y;

    if (width <= 0 || height <= 0) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context || !layout) {
      return;
    }

    const dpr = window.devicePixelRatio || 1;
    const pixelWidth = Math.max(1, Math.round(width * dpr));
    const pixelHeight = Math.max(1, Math.round(height * dpr));

    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    const now = performance.now();
    const elapsed = lastFrameAtRef.current === null ? 16 : Math.min(40, now - lastFrameAtRef.current);
    lastFrameAtRef.current = now;

    if (!measureContextRef.current) {
      return;
    }

    const target = clampCamera(measureContextRef.current, layout, viewportRef.current, targetCameraRef.current);
    targetCameraRef.current = target;

    if (inertiaRef.current.active && pointersRef.current.size === 0) {
      const unclamped = {
        x: cameraRef.current.x + inertiaRef.current.vx * elapsed,
        y: cameraRef.current.y + inertiaRef.current.vy * elapsed,
        scale: cameraRef.current.scale,
      };
      const next = clampCamera(measureContextRef.current, layout, viewportRef.current, unclamped);
      cameraRef.current = next;
      targetCameraRef.current = next;

      const friction = Math.pow(0.9, elapsed / 16.67);
      inertiaRef.current.vx *= friction;
      inertiaRef.current.vy *= friction;

      if (
        Math.abs(unclamped.x - next.x) > 0.001 ||
        Math.abs(unclamped.y - next.y) > 0.001 ||
        (Math.abs(inertiaRef.current.vx) < 0.02 && Math.abs(inertiaRef.current.vy) < 0.02)
      ) {
        inertiaRef.current.active = false;
        inertiaRef.current.vx = 0;
        inertiaRef.current.vy = 0;
      }
    } else {
      const current = cameraRef.current;
      const dx = target.x - current.x;
      const dy = target.y - current.y;
      const ds = target.scale - current.scale;

      if (Math.abs(dx) > 0.02 || Math.abs(dy) > 0.02 || Math.abs(ds) > 0.001) {
        cameraRef.current = {
          x: lerp(current.x, target.x, 0.22),
          y: lerp(current.y, target.y, 0.22),
          scale: lerp(current.scale, target.scale, 0.2),
        };
      } else {
        cameraRef.current = target;
      }
    }

    const debugPayload = drawScene(
      context,
      viewportRef.current,
      layout,
      digits,
      focusRange,
      cameraRef.current,
      hoverRef.current.tileKey,
      hoverRef.current.wordKey,
      selections,
      typeof window !== "undefined" &&
        Boolean((window as Window & { __atlasDebugEnabled?: boolean }).__atlasDebugEnabled),
    );
    publishDebug(debugPayload);

    if (
      inertiaRef.current.active ||
      Math.abs(targetCameraRef.current.x - cameraRef.current.x) > 0.02 ||
      Math.abs(targetCameraRef.current.y - cameraRef.current.y) > 0.02 ||
      Math.abs(targetCameraRef.current.scale - cameraRef.current.scale) > 0.001
    ) {
      animationRef.current = requestAnimationFrame(() => {
        animationRef.current = null;
        drawFrame();
      });
    }
  }

  function invalidate() {
    if (animationRef.current !== null) {
      return;
    }

    animationRef.current = requestAnimationFrame(() => {
      animationRef.current = null;
      drawFrame();
    });
  }

  useEffect(() => {
    if (!layout || viewport.x <= 0 || viewport.y <= 0) {
      publishDebug(null);
      return;
    }

    if (lastDigitsRef.current !== digits) {
      if (!measureContextRef.current) {
        return;
      }

      const fit = fitCamera(measureContextRef.current, layout, viewport);
      if (!lastDigitsRef.current || !digits) {
        cameraRef.current = fit;
      } else {
        cameraRef.current = clampCamera(measureContextRef.current, layout, viewport, cameraRef.current);
      }
      targetCameraRef.current = fit;
      inertiaRef.current.active = false;
      inertiaRef.current.vx = 0;
      inertiaRef.current.vy = 0;
      lastDigitsRef.current = digits;
    } else {
      if (!measureContextRef.current) {
        return;
      }

      cameraRef.current = clampCamera(measureContextRef.current, layout, viewport, cameraRef.current);
      targetCameraRef.current = clampCamera(
        measureContextRef.current,
        layout,
        viewport,
        targetCameraRef.current,
      );
    }

    drawFrame();
  }, [digits, focusRange, layout, selections, viewport.x, viewport.y]);

  useEffect(() => {
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }

      lastFrameAtRef.current = null;
    };
  }, []);

  function localPointFromEvent(event: ReactPointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;

    if (!canvas) {
      return null;
    }

    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  function localPointFromClient(clientX: number, clientY: number) {
    const canvas = canvasRef.current;

    if (!canvas) {
      return null;
    }

    const rect = canvas.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  }

  function setCameraImmediate(next: CameraState) {
    if (!layout) {
      return;
    }

    if (!measureContextRef.current) {
      return;
    }

    const clamped = clampCamera(measureContextRef.current, layout, viewportRef.current, next);
    cameraRef.current = clamped;
    targetCameraRef.current = clamped;
    invalidate();
  }

  function setCameraTarget(next: CameraState) {
    if (!layout) {
      return;
    }

    if (!measureContextRef.current) {
      return;
    }

    targetCameraRef.current = clampCamera(measureContextRef.current, layout, viewportRef.current, next);
    invalidate();
  }

  function zoomAtPoint(factor: number, point: Point, immediate: boolean) {
    if (!layout) {
      return;
    }

    const base = immediate ? cameraRef.current : targetCameraRef.current;
    const nextScale = clamp(base.scale * factor, MIN_SCALE, MAX_SCALE);
    const worldAnchor = screenToWorld(point, base);
    const next = {
      scale: nextScale,
      x: worldAnchor.x - point.x / nextScale,
      y: worldAnchor.y - (point.y - VIEW_TOP_BAND - VIEW_TOP_BUFFER) / nextScale,
    };

    if (immediate) {
      setCameraImmediate(next);
    } else {
      setCameraTarget(next);
    }
  }

  function stopInertia() {
    inertiaRef.current.active = false;
    inertiaRef.current.vx = 0;
    inertiaRef.current.vy = 0;
  }

  function updateHover(point: Point) {
    if (!layout) {
      return;
    }

    if (!measureContextRef.current) {
      return;
    }

    const hit = hitTest(measureContextRef.current, layout, cameraRef.current, point);
    const nextTileKey = hit?.tile.key ?? null;
    const nextWordKey = hit?.word?.key ?? null;

    if (
      nextTileKey !== hoverRef.current.tileKey ||
      nextWordKey !== hoverRef.current.wordKey
    ) {
      hoverRef.current = {
        tileKey: nextTileKey,
        wordKey: nextWordKey,
      };
      invalidate();
    }
  }

  function beginPinch() {
    const points = [...pointersRef.current.values()];

    if (points.length < 2 || !layout) {
      return;
    }

    const [first, second] = points;

    if (!first || !second) {
      return;
    }

    const midpoint = {
      x: (first.x + second.x) * 0.5,
      y: (first.y + second.y) * 0.5,
    };
    const distance = Math.hypot(first.x - second.x, first.y - second.y);

    pinchRef.current = {
      active: true,
      startDistance: Math.max(distance, 1),
      startScale: cameraRef.current.scale,
      worldAnchor: screenToWorld(midpoint, cameraRef.current),
    };
  }

  function updatePinch() {
    const points = [...pointersRef.current.values()];

    if (points.length < 2 || !layout || !pinchRef.current.active) {
      return;
    }

    const [first, second] = points;

    if (!first || !second) {
      return;
    }

    const midpoint = {
      x: (first.x + second.x) * 0.5,
      y: (first.y + second.y) * 0.5,
    };
    const distance = Math.hypot(first.x - second.x, first.y - second.y);
    const nextScale = clamp(
      pinchRef.current.startScale * (distance / Math.max(pinchRef.current.startDistance, 1)),
      MIN_SCALE,
      MAX_SCALE,
    );
    const next = {
      scale: nextScale,
      x: pinchRef.current.worldAnchor.x - midpoint.x / nextScale,
      y: pinchRef.current.worldAnchor.y -
        (midpoint.y - VIEW_TOP_BAND - VIEW_TOP_BUFFER) / nextScale,
    };

    setCameraImmediate(next);
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLCanvasElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    const point = localPointFromEvent(event);

    if (!point) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    pointersRef.current.set(event.pointerId, point);
    stopInertia();

    if (pointersRef.current.size >= 2) {
      dragRef.current.pointerId = null;
      beginPinch();
      return;
    }

    dragRef.current = {
      pointerId: event.pointerId,
      start: point,
      startCamera: cameraRef.current,
      lastPoint: point,
      lastTime: performance.now(),
      velocity: { x: 0, y: 0 },
      pointerType: event.pointerType,
      moved: false,
      hit:
        layout && measureContextRef.current
          ? hitTest(measureContextRef.current, layout, cameraRef.current, point)
          : null,
    };
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLCanvasElement>) {
    const point = localPointFromEvent(event);

    if (!point) {
      return;
    }

    if (pointersRef.current.has(event.pointerId)) {
      pointersRef.current.set(event.pointerId, point);
    }

    if (pointersRef.current.size >= 2) {
      updatePinch();
      return;
    }

    if (dragRef.current.pointerId === event.pointerId) {
      const dx = point.x - dragRef.current.start.x;
      const dy = point.y - dragRef.current.start.y;
      const moved = Math.abs(dx) > 4 || Math.abs(dy) > 4;
      const now = performance.now();
      const elapsed = Math.max(1, now - dragRef.current.lastTime);

      if (moved) {
        dragRef.current.moved = true;
        setCameraImmediate({
          x: dragRef.current.startCamera.x - dx / dragRef.current.startCamera.scale,
          y: dragRef.current.startCamera.y - dy / dragRef.current.startCamera.scale,
          scale: dragRef.current.startCamera.scale,
        });
      }

      dragRef.current.velocity = {
        x: -(point.x - dragRef.current.lastPoint.x) / dragRef.current.startCamera.scale / elapsed,
        y: -(point.y - dragRef.current.lastPoint.y) / dragRef.current.startCamera.scale / elapsed,
      };
      dragRef.current.lastPoint = point;
      dragRef.current.lastTime = now;
    } else if (event.pointerType === "mouse") {
      updateHover(point);
    }
  }

  function finishPointer(event: ReactPointerEvent<HTMLCanvasElement>) {
    const point = localPointFromEvent(event);
    pointersRef.current.delete(event.pointerId);

    if (pointersRef.current.size < 2) {
      pinchRef.current.active = false;
    }

    if (dragRef.current.pointerId === event.pointerId) {
      const interaction = dragRef.current;
      dragRef.current = {
        pointerId: null,
        start: { x: 0, y: 0 },
        startCamera: cameraRef.current,
        lastPoint: { x: 0, y: 0 },
        lastTime: 0,
        velocity: { x: 0, y: 0 },
        pointerType: null,
        moved: false,
        hit: null,
      };

      if (!interaction.moved && interaction.hit) {
        const selectedWord =
          interaction.hit.word?.word ??
          interaction.hit.tile.selectedWord ??
          interaction.hit.tile.span.bestWord;
        onChooseWord(
          interaction.hit.tile.span,
          selectedWord,
        );
      } else if (
        interaction.moved &&
        interaction.pointerType !== "mouse" &&
        (Math.abs(interaction.velocity.x) > 0.02 || Math.abs(interaction.velocity.y) > 0.02)
      ) {
        inertiaRef.current = {
          vx: interaction.velocity.x,
          vy: interaction.velocity.y,
          active: true,
        };
        invalidate();
      }
    }

    if (point && event.pointerType === "mouse") {
      updateHover(point);
    }
  }

  function handleWheelEvent(event: WheelEvent) {
    event.preventDefault();

    const point = localPointFromClient(event.clientX, event.clientY);

    if (!point) {
      return;
    }

    if (wheelShouldZoom(event)) {
      const magnitude = clamp(Math.abs(event.deltaY), 1, 160);
      const factorBase = Math.pow(1.002, magnitude);
      const factor = event.deltaY < 0 ? factorBase : 1 / factorBase;
      stopInertia();
      zoomAtPoint(factor, point, true);
      return;
    }

    stopInertia();
    const base = cameraRef.current;
    setCameraImmediate({
      x: base.x + event.deltaX / base.scale,
      y: base.y + event.deltaY / base.scale,
      scale: base.scale,
    });
  }

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const handler = (event: WheelEvent) => handleWheelEvent(event);
    canvas.addEventListener("wheel", handler, { passive: false });

    return () => {
      canvas.removeEventListener("wheel", handler);
    };
  }, [layout]);

  function handleDoubleClick(event: ReactMouseEvent<HTMLCanvasElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    stopInertia();
    zoomAtPoint(1.2, { x: event.clientX - rect.left, y: event.clientY - rect.top }, false);
  }

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const atlasWindow = window as Window & {
      __atlasTest?: {
        camera: () => CameraState;
        tileCount: () => number;
        tileKeys: () => string[];
        selectTile: (tileIndex: number, wordIndex?: number) => boolean;
        selectTileByKey: (tileKey: string, wordIndex?: number) => boolean;
      };
    };

    atlasWindow.__atlasTest = {
      camera: () => ({ ...cameraRef.current }),
      tileCount: () => layoutRef.current?.tiles.length ?? 0,
      tileKeys: () => (layoutRef.current?.tiles ?? []).map((tile) => tile.key),
      selectTile: (tileIndex: number, wordIndex = 0) => {
        const tile = layoutRef.current?.tiles[tileIndex];

        if (!tile) {
          return false;
        }

        const chosenWord = tile.words[wordIndex]?.word ?? tile.selectedWord ?? tile.span.bestWord;
        onChooseWord(tile.span, chosenWord);
        return true;
      },
      selectTileByKey: (tileKey: string, wordIndex = 0) => {
        const tile = (layoutRef.current?.tiles ?? []).find((entry) => entry.key === tileKey);

        if (!tile) {
          return false;
        }

        const chosenWord = tile.words[wordIndex]?.word ?? tile.selectedWord ?? tile.span.bestWord;
        onChooseWord(tile.span, chosenWord);
        return true;
      },
    };

    return () => {
      delete atlasWindow.__atlasTest;
    };
  }, [onChooseWord]);

  return (
    <div ref={rootRef} className="atlas-root">
      <canvas
        ref={canvasRef}
        className="atlas-canvas"
        data-testid="atlas-canvas"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishPointer}
        onPointerCancel={finishPointer}
        onPointerLeave={() => {
          hoverRef.current = {
            tileKey: null,
            wordKey: null,
          };
          invalidate();
        }}
        onDoubleClick={handleDoubleClick}
      />
      <div
        className="sr-only"
        data-testid="atlas-summary"
        data-tile-count={spans.length}
        data-selected-count={selections.length}
      />
      <script ref={debugPayloadRef} data-testid="atlas-debug-payload" type="application/json" />
    </div>
  );
}
