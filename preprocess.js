// preprocess.js: Convert cmudict.dict to a JSON index.
// Mapping (ARPAbet -> digit) per the Major System:
const phonemeToDigit = {
  "S": "0",
  "Z": "0",
  "T": "1",
  "D": "1",
  "TH": "1",
  "DH": "1",
  "N": "2",
  "M": "3",
  "R": "4",
  "L": "5",
  "CH": "6",
  "JH": "6",
  "SH": "6",
  "ZH": "6",
  "K": "7",
  "G": "7",
  "NG": "7",
  "F": "8",
  "V": "8",
  "P": "9",
  "B": "9"
};

import { readFileSync, writeFileSync } from "fs";

// Read the raw dictionary file.
const dictText = readFileSync("cmudict.dict", "utf8");

// Build the index.
const index = {};
const lines = dictText.split("\n");
for (const line of lines) {
  const trimmed = line.trim();
  // Skip empty lines and comment lines (starting with ";;;")
  if (!trimmed || trimmed.startsWith(";;;")) continue;
  const tokens = trimmed.split(/\s+/);
  if (tokens.length < 2) continue;
  const word = tokens[0];
  const phonemes = tokens.slice(1);
  let key = "";
  for (const p of phonemes) {
    // Skip vowels (those ending with a digit)
    if (/\d$/.test(p)) continue;
    if (phonemeToDigit[p]) {
      key += phonemeToDigit[p];
    }
  }
  if (key) {
    if (!index[key]) {
      index[key] = [];
    }
    index[key].push(word);
  }
}

// Write the index to a JSON file.
writeFileSync("cmudict.json", JSON.stringify(index, null, 2), "utf8");
console.log("Preprocessed dictionary saved to cmudict.json");
