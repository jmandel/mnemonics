export type SortMethod = "quality" | "length" | "balanced";

export type FrequencyBand = "rare" | "uncommon" | "common" | "frequent";

export type WordOption = {
  word: string;
  freq: number;
  score: number;
  band: FrequencyBand;
};

export type SpanCandidate = {
  key: string;
  start: number;
  end: number;
  digits: string;
  spanLength: number;
  words: WordOption[];
  bestWord: WordOption;
  wordCount: number;
  localScore: number;
};

export type CoverResult = {
  key: string;
  spans: SpanCandidate[];
  quality: number;
  balance: number;
  partCount: number;
  averageFreq: number;
  copyText: string;
};

export type SearchStats = {
  validSpanCount: number;
  fullCoverCount: number;
  returnedCoverCount: number;
};

export type SearchResults = {
  numStr: string;
  anchors: SpanCandidate[];
  browseSpans: SpanCandidate[];
  covers: CoverResult[];
  stats: SearchStats;
  selectedAnchor: SpanCandidate | null;
};
