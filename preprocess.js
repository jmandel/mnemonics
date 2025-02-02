import { existsSync, writeFileSync, unlinkSync } from "fs";
import { createGunzip } from "zlib";
import https from "https";
import http from "http";
import { pipeline } from "stream";
import { promisify } from "util";
const pipe = promisify(pipeline);

// ----- CONFIGURATION -----
const MIN_YEAR = 1900;
const OUTPUT_FILENAME = "cmudict.json";
const DICT_FILENAME = "cmudict.dict";

// We'll download one-gram files for all letters a to z.
const letters = "abcdefghijklmnopqrstuvwxyz".split("");
// Template URL for one-gram files (gzipped)
const ONEGRAM_URL_TEMPLATE = "https://storage.googleapis.com/books/ngrams/books/googlebooks-eng-all-1gram-20120701-{{letter}}.gz";

// ----- UTILITY: Download a file, with optional decompression -----
function downloadFile(url, dest, decompress = false) {
  return new Promise((resolve, reject) => {
    const file = Bun.writeStream(dest);
    const getModule = url.startsWith("https") ? https : http;
    getModule.get(url, (response) => {
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
      }
      if (decompress) {
        const gunzip = createGunzip();
        pipeline(response, gunzip, file, (err) => {
          if (err) reject(err);
          else resolve();
        });
      } else {
        response.pipe(file);
        file.on("finish", () => {
          file.end();
          resolve();
        });
      }
    }).on("error", (err) => {
      try { unlinkSync(dest); } catch (e) {}
      reject(err);
    });
  });
}

// ----- STEP 1: Download One-Gram Files for All Letters -----
async function downloadOneGramFiles() {
  for (const letter of letters) {
    const url = ONEGRAM_URL_TEMPLATE.replace("{{letter}}", letter);
    const dest = `onegrams-${letter}.txt`;
    if (!existsSync(dest)) {
      console.log(`Downloading ${url} ...`);
      await downloadFile(url, dest, true);
    } else {
      console.log(`Using existing ${dest}`);
    }
  }
}

// ----- STEP 2: Build Allowed Words Set from CMUDICT -----
// We stream the CMU dictionary file to build the set of words that appear in it.
// This set limits the one-gram processing to only words that are in cmudict.
async function buildAllowedWordsSet() {
  if (!existsSync(DICT_FILENAME)) {
    throw new Error(`CMU dictionary file (${DICT_FILENAME}) not found.`);
  }
  const file = Bun.file(DICT_FILENAME);
  const decoder = new TextDecoder("utf-8");
  let allowedSet = new Set();
  let buffer = "";
  for await (const chunk of file.stream()) {
    buffer += decoder.decode(chunk, { stream: true });
    let lines = buffer.split("\n");
    buffer = lines.pop(); // Save the last partial line
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      if (trimmed.startsWith(";;;")) continue; // Skip comments
      const tokens = trimmed.split(/\s+/);
      if (tokens.length < 1) continue;
      const word = tokens[0].toUpperCase();
      allowedSet.add(word);
    }
  }
  if (buffer) {
    const lines = buffer.split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      if (trimmed.startsWith(";;;")) continue;
      const tokens = trimmed.split(/\s+/);
      if (tokens.length < 1) continue;
      const word = tokens[0].toUpperCase();
      allowedSet.add(word);
    }
  }
  return allowedSet;
}

// ----- STEP 3: Build Frequency Map from One-Gram Files -----
// Process each one-gram file in a streaming manner, accumulating frequencies
// only for words that appear in the allowed set.
async function buildFrequencyMap(allowedSet) {
  const freqMap = {}; // { WORD (uppercase) -> total count }
  const decoder = new TextDecoder("utf-8");
  for (const letter of letters) {
    const filename = `onegrams-${letter}.txt`;
    if (!existsSync(filename)) {
      console.error(`File ${filename} not found. Skipping.`);
      continue;
    }
    console.log(filename);
    const file = Bun.file(filename);
    let buffer = "";
    for await (const chunk of file.stream()) {
      buffer += decoder.decode(chunk, { stream: true });
      let lines = buffer.split("\n");
      buffer = lines.pop();
      for (const line of lines) {
        processOneGramLine(line, allowedSet, freqMap);
      }
    }
    if (buffer) {
      const lines = buffer.split("\n");
      for (const line of lines) {
        processOneGramLine(line, allowedSet, freqMap);
      }
    }
  }
  return freqMap;
}

function processOneGramLine(line, allowedSet, freqMap) {
  const trimmed = line.trim();
  if (!trimmed) return;
  const parts = trimmed.split(/\s+/);
  if (parts.length < 3) return;
  const word = parts[0].toUpperCase();
  if (!allowedSet.has(word)) return;
  const year = parseInt(parts[1], 10);
  const count = parseInt(parts[2], 10);
  if (year < MIN_YEAR) return;
  freqMap[word] = (freqMap[word] || 0) + count;
}

// ----- STEP 4: Build the CMU Dictionary Index -----
// Build an index using the Major System mapping from the CMU dictionary.
// Each entry is an array of objects: { word, freq }.
async function buildCMUDictIndex(freqMap) {
  // Read the entire dictionary file as text using Bun.file().text()
  const dictText = await Bun.file(DICT_FILENAME).text();
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
  const index = {};
  dictText.split("\n").forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) return;
    if (trimmed.startsWith(";;;")) return;
    const tokens = trimmed.split(/\s+/);
    if (tokens.length < 2) return;
    const word = tokens[0];
    const phonemes = tokens.slice(1);
    let key = "";
    for (const p of phonemes) {
      if (/\d$/.test(p)) continue;
      if (phonemeToDigit[p]) {
        key += phonemeToDigit[p];
      }
    }
    if (!key) return;
    if (!index[key]) index[key] = [];
    const freq = freqMap[word.toUpperCase()] || 0;
    index[key].push({ word, freq });
  });
  return index;
}

// ----- STEP 5: Write the Annotated Dictionary to JSON -----
async function preprocess() {
  console.log("Downloading one-gram files...");
  await downloadOneGramFiles();
  console.log("Building allowed words set from CMUDICT...");
  const allowedSet = await buildAllowedWordsSet();
  console.log("Building frequency map from one-gram files...");
  const freqMap = await buildFrequencyMap(allowedSet);
  console.log("Processing CMU dictionary...");
  const index = await buildCMUDictIndex(freqMap);
  writeFileSync(OUTPUT_FILENAME, JSON.stringify(index, null, 2), "utf8");
  console.log(`Preprocessed dictionary saved to ${OUTPUT_FILENAME}`);
}

preprocess().catch(err => {
  console.error("Error during preprocessing:", err);
});
