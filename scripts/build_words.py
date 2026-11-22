# /// script
# requires-python = ">=3.11"
# dependencies = ["wordfreq==3.1.1", "lemminflect==0.2.3", "openpyxl==3.1.5"]
# ///
"""Build words.json: every CMUdict word keyed by its Major System digits, with a
familiarity tier, a name flag, and same-sound spellings merged.

Run from the repo root:  uv run scripts/build_words.py
Source files are downloaded once into data/sources/ (git-ignored).
"""

import json
import re
import sys
import urllib.request
from collections import defaultdict
from pathlib import Path

import openpyxl
from lemminflect import getAllLemmas
from wordfreq import zipf_frequency

ROOT = Path(__file__).resolve().parent.parent
SOURCES = ROOT / "data" / "sources"
OUT = ROOT / "words.json"

DOWNLOADS = {
    "enable1.txt": "https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt",
    "concreteness.txt": "https://raw.githubusercontent.com/ArtsEngine/concreteness/master/Concreteness_ratings_Brysbaert_et_al_BRM.txt",
    "prevalence.xlsx": "https://static-content.springer.com/esm/art%3A10.3758%2Fs13428-018-1077-9/MediaObjects/13428_2018_1077_MOESM2_ESM.xlsx",
}

PHONEME_DIGITS = {
    "S": "0", "Z": "0",
    "T": "1", "D": "1", "TH": "1", "DH": "1",
    "N": "2",
    "M": "3",
    "R": "4", "ER": "4",
    "L": "5",
    "CH": "6", "JH": "6", "SH": "6", "ZH": "6",
    "K": "7", "G": "7", "NG": "7",
    "F": "8", "V": "8",
    "P": "9", "B": "9",
}


def fetch_sources():
    SOURCES.mkdir(parents=True, exist_ok=True)
    for name, url in DOWNLOADS.items():
        path = SOURCES / name
        if not path.exists():
            print(f"downloading {name}", file=sys.stderr)
            urllib.request.urlretrieve(url, path)


def load_prevalence():
    sheet = openpyxl.load_workbook(SOURCES / "prevalence.xlsx", read_only=True)["Prevalence"]
    rows = sheet.iter_rows(values_only=True)
    next(rows)
    return {str(word).lower(): float(pknown) for word, pknown, *_ in rows if word}


def load_concreteness():
    lines = (SOURCES / "concreteness.txt").read_text().splitlines()[1:]
    return {parts[0].lower(): float(parts[2]) for parts in (line.split("\t") for line in lines)}


def lemmas(word):
    found = {word}
    for forms in getAllLemmas(word).values():
        found.update(forms)
    return found


def classify(word, zipf, prevalence, concreteness, dictionary):
    """Return (tier, is_name, sort_score). Tier 0 = common, 1 = familiar, 2 = obscure."""
    family = lemmas(word)
    # Inflections inherit how well known their base word is ("metered" from "meter").
    known = max((prevalence[w] for w in family if w in prevalence), default=None)
    conc = max((concreteness[w] for w in family if w in concreteness), default=None)
    # Contractions ("don't", "i've") are ordinary words even though word lists omit them.
    is_word = any(w in dictionary or w in prevalence for w in family) or (
        "-" in word and all(part in dictionary for part in word.split("-"))
    ) or (
        re.search(r"'(t|ve|ll|re|d|m)$", word) is not None and zipf >= 3
    )
    is_name = not is_word

    if is_name:
        tier = 0 if zipf >= 4.3 else 1 if zipf >= 3.3 else 2
    elif known is not None:
        tier = 0 if known >= 0.97 and zipf >= 2.5 else 1 if known >= 0.85 and zipf >= 1.5 else 2
    else:
        tier = 0 if zipf >= 3.8 else 1 if zipf >= 2.8 else 2

    # Within a tier: frequency first, nudged toward words people know and can picture.
    score = zipf + (2.0 * ((known or 0.5) - 0.9) if not is_name else -0.6)
    if conc is not None:
        score += 0.35 * (conc - 3.0)
    return tier, is_name, round(score, 3)


def main():
    fetch_sources()
    prevalence = load_prevalence()
    concreteness = load_concreteness()
    dictionary = set((SOURCES / "enable1.txt").read_text().split())

    # digits -> pronunciation -> candidate spellings
    buckets = defaultdict(lambda: defaultdict(set))
    for line in (ROOT / "cmudict.dict").read_text(encoding="utf-8", errors="replace").splitlines():
        if not line.strip() or line.startswith(";;;"):
            continue
        head, *phones = line.split("#")[0].split()
        word = re.sub(r"\(\d+\)$", "", head).lower()
        # Skip letter names, abbreviations, and possessives.
        if len(word) < 2 or "." in word or word.endswith("'s") or not re.search("[a-z]", word):
            continue
        bare = [re.sub(r"\d", "", p) for p in phones]
        digits = "".join(PHONEME_DIGITS.get(p, "") for p in bare)
        if digits:
            buckets[digits][" ".join(bare)].add(word)

    out = {}
    for digits in sorted(buckets):
        entries = []
        seen = set()
        for spellings in buckets[digits].values():
            ranked = []
            for word in spellings:
                zipf = zipf_frequency(word, "en")
                tier, is_name, score = classify(word, zipf, prevalence, concreteness, dictionary)
                # Drop names nobody uses, and two-letter non-words.
                if is_name and (zipf == 0 or len(word) < 3):
                    continue
                ranked.append((tier, -score, word, is_name))
            ranked.sort()
            # Same pronunciation, same digits: one mnemonic. Keep the best spelling.
            ranked = [entry for entry in ranked if entry[2] not in seen]
            if not ranked:
                continue
            tier, neg_score, word, is_name = ranked[0]
            # Mention other well-known spellings (meat/meet), not variants like "paign" or "hm".
            others = [entry[2] for entry in ranked[1:] if prevalence.get(entry[2], 0) >= 0.95]
            seen.update(entry[2] for entry in ranked)
            entries.append((tier, neg_score, word, is_name, others))
        if not entries:
            continue
        entries.sort()
        out[digits] = [
            [word, tier, int(is_name)] + (["/".join(others)] if others else [])
            for tier, _, word, is_name, others in entries
        ]

    OUT.write_text(json.dumps(out, separators=(",", ":")))
    total = sum(len(v) for v in out.values())
    print(f"{len(out)} digit keys, {total} words -> {OUT.name} ({OUT.stat().st_size // 1024} KB)", file=sys.stderr)


if __name__ == "__main__":
    main()
