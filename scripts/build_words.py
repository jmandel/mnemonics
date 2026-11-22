# /// script
# requires-python = ">=3.11"
# dependencies = ["wordfreq==3.1.1", "lemminflect==0.2.3", "openpyxl==3.1.5"]
# ///
"""Build words.json: every CMUdict word keyed by its Major System digits, with a
familiarity tier, display casing (names and acronyms), and same-sound spellings merged.

Output: {digits: [[shown, tier, concrete, "other/spellings"?], ...]}, tier 0 = common,
1 = familiar, 2 = obscure; concrete = 1 for easy-to-picture words.

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
    # Hunspell en_US (from SCOWL) keeps capitalization: "India", "FBI", "email".
    "en_US.dic": "https://raw.githubusercontent.com/wooorm/dictionaries/main/dictionaries/en/index.dic",
    "first-names.txt": "https://raw.githubusercontent.com/dominictarr/random-name/master/first-names.txt",
}

# Abbreviations Hunspell lists as proper nouns ("Nov", "Gen"); not mnemonic words.
ABBREVIATIONS = {
    "jan", "feb", "apr", "jun", "jul", "aug", "sep", "sept", "oct", "nov", "dec",
    "mon", "tue", "tues", "thu", "thur", "thurs", "fri",
    "gen", "pre", "del", "dept", "govt", "corp", "inc", "ltd", "mr", "mrs", "ms", "dr", "jr", "sr",
}

# Names: Hunspell's curated proper nouns (Canberra, Picasso, Godzilla) are kept down to
# Zipf 3.0; others need 3.8, which drops the long tail of surnames (Accetta, Szeto).
# Plain first names below common level go to rare so they don't crowd familiar words.
MIN_LISTED_NAME_ZIPF = 3.0
MIN_NAME_ZIPF = 3.8
COMMON_NAME_ZIPF = 4.3

CONTRACTION = re.compile(
    r"[a-z]+n't|y'all|(i|you|we|they|he|she|it|that|there|here|who|what|where|let)'(ll|re|ve|d|m|s)"
)

# Slurs are dropped. Swear words are kept like any other word.
SLURS = {
    "chink", "chinks", "coon", "coons", "dyke", "dykes", "fag", "fags", "faggot", "faggots",
    "gook", "gooks", "kike", "kikes", "nigga", "niggas", "nigger", "niggers", "raghead",
    "retard", "retards", "spic", "spics", "tranny", "trannies", "wetback", "wetbacks",
}

PHONEME_DIGITS = {
    "S": "0", "Z": "0",
    "T": "1", "D": "1", "TH": "1", "DH": "1",
    "N": "2",
    "M": "3",
    "R": "4", "ER": "4",
    "L": "5",
    "CH": "6", "JH": "6", "SH": "6", "ZH": "6",
    "K": "7", "G": "7",
    "F": "8", "V": "8",
    "P": "9", "B": "9",
}


def digits_for(phones):
    """Major System digits for a stress-free phoneme list.

    NG follows the spelling: n + g (27) in "sing", just n (2) before K/G as in "bank" (927).
    """
    out = []
    for index, phone in enumerate(phones):
        if phone == "NG":
            following = phones[index + 1] if index + 1 < len(phones) else None
            out.append("2" if following in ("K", "G") else "27")
        else:
            out.append(PHONEME_DIGITS.get(phone, ""))
    return "".join(out)


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


def load_cased_words():
    """lowercase -> set of capitalizations found in Hunspell en_US."""
    cased = defaultdict(set)
    for line in (SOURCES / "en_US.dic").read_text(encoding="utf-8").splitlines()[1:]:
        word = line.split("/")[0].strip()
        if word:
            cased[word.lower()].add(word)
    return cased


def lemmas(word):
    found = {word}
    for forms in getAllLemmas(word).values():
        found.update(forms)
    return found


def display_form(word, family, zipf, prevalence, dictionary, cased):
    """Return (text to show, is_name). Lowercase words, "Paris"-style names, "FBI"-style acronyms."""
    candidates = [word, *sorted(family - {word})]
    # A lowercase entry for the word or its base form wins: "walls" is a word even
    # though Hunspell also lists the surname "Walls".
    if any(candidate in cased.get(candidate, ()) for candidate in candidates):
        return word, False
    for candidate in candidates:
        forms = cased.get(candidate)
        if forms:
            if any(form.isupper() for form in forms) and len(word) <= 5:
                return word.upper(), True
            return capitalize(word), True
    # Not in Hunspell: fall back to the lowercase word lists. Contractions ("don't")
    # are ordinary words even though word lists omit them.
    if any(w in dictionary or w in prevalence for w in family) or (
        re.search(r"'(t|ve|ll|re|d|m)$", word) is not None and zipf >= 3
    ):
        return word, False
    return capitalize(word), True


def capitalize(word):
    return "-".join(part[:1].upper() + part[1:] for part in word.split("-"))


def classify(word, zipf, is_name, prevalence, concreteness, first_names):
    """Return (tier, sort_score, concrete). Tier 0 = common, 1 = familiar, 2 = obscure."""
    family = lemmas(word)
    # Inflections inherit how well known their base word is ("metered" from "meter").
    known = max((prevalence[w] for w in family if w in prevalence), default=None)
    conc = max((concreteness[w] for w in family if w in concreteness), default=None)

    if is_name:
        tier = 0 if zipf >= COMMON_NAME_ZIPF else 2 if word in first_names else 1
    elif known is not None:
        tier = 0 if known >= 0.97 and zipf >= 2.5 else 1 if known >= 0.85 and zipf >= 1.5 else 2
    else:
        tier = 0 if zipf >= 3.8 else 1 if zipf >= 2.8 else 2

    # Within a tier: frequency first, nudged toward words people know and can picture.
    score = zipf + (2.0 * ((known or 0.5) - 0.9) if not is_name else -0.6)
    if conc is not None:
        score += 0.35 * (conc - 3.0)
    # Easy to picture: a concreteness rating of 4+ on the 1-5 scale (turtle, piano).
    concrete = conc is not None and conc >= 4.0
    return tier, round(score, 3), concrete


def keep_spelling(word, zipf, dictionary, prevalence, cased):
    # Letter names, abbreviations, possessives ("paris'", "jones's"), elisions ("'gain").
    if len(word) < 2 or "." in word or word.startswith("'") or not re.search("[a-z]", word):
        return False
    if word.endswith("'s") or word.endswith("s'") or word in SLURS:
        return False
    # "st-louis", "l'oreal", "d'souza".
    if re.match(r"(st-|l'|d')", word):
        return False
    # Hyphenated phrases ("how-many", "bay-area") only if a word list has them ("co-op").
    # wordfreq can't judge these: it scores "how-many" by its parts.
    if "-" in word and not (word in dictionary or word in prevalence or word in cased):
        return False
    # Apostrophes: standard contractions ("don't", "we'll", "y'all") or listed words
    # ("o'clock"); not dialect forms like "ya'll" or "ol'".
    if "'" in word and not (
        CONTRACTION.fullmatch(word) or word in dictionary or word in prevalence or word in cased
    ):
        return False
    # Dialect spellings: "doin'", "nothin".
    if word.endswith("in'") or (word.endswith("in") and word + "g" in dictionary and word not in dictionary):
        return False
    return True


def main():
    fetch_sources()
    prevalence = load_prevalence()
    concreteness = load_concreteness()
    dictionary = set((SOURCES / "enable1.txt").read_text().split())
    cased = load_cased_words()
    first_names = {line.strip().lower() for line in (SOURCES / "first-names.txt").read_text().splitlines()}

    # word -> pronunciations in CMUdict order; the first is the standard one.
    pronunciations = defaultdict(list)
    for line in (ROOT / "cmudict.dict").read_text(encoding="utf-8", errors="replace").splitlines():
        if not line.strip() or line.startswith(";;;"):
            continue
        head, *phones = line.split("#")[0].split()
        word = re.sub(r"\(\d+\)$", "", head).lower()
        pronunciations[word].append([re.sub(r"\d", "", p) for p in phones])

    # digits -> standard pronunciation -> spellings. Grouping by the standard
    # pronunciation means only true homophones merge (meat/meet, not cars/cause).
    buckets = defaultdict(lambda: defaultdict(set))
    for word, prons in pronunciations.items():
        primary = digits_for(prons[0])
        for phones in prons:
            digits = digits_for(phones)
            # Casual variants that drop a consonant ("twenty" as "twenny", "last" as
            # "lass") would file the word under the wrong number.
            if digits and len(digits) == len(primary):
                buckets[digits][" ".join(prons[0])].add(word)

    out = {}
    for digits in sorted(buckets):
        entries = []
        seen = set()
        for spellings in buckets[digits].values():
            ranked = []
            for word in spellings:
                zipf = zipf_frequency(word, "en")
                if not keep_spelling(word, zipf, dictionary, prevalence, cased):
                    continue
                shown, is_name = display_form(word, lemmas(word), zipf, prevalence, dictionary, cased)
                if is_name and (
                    zipf < (MIN_LISTED_NAME_ZIPF if word in cased else MIN_NAME_ZIPF) or word in ABBREVIATIONS
                ):
                    continue
                # Short words must be known: drops "sh", "hm", "ers", "ras".
                if not is_name and len(word) <= 3 and zipf < 4 and not (lemmas(word) & prevalence.keys()):
                    continue
                tier, score, concrete = classify(word, zipf, is_name, prevalence, concreteness, first_names)
                ranked.append((tier, -score, word, shown, is_name, concrete))
            ranked.sort()
            # Same pronunciation, same digits: one mnemonic. Keep the best spelling.
            ranked = [entry for entry in ranked if entry[2] not in seen]
            if not ranked:
                continue
            tier, neg_score, word, shown, is_name, concrete = ranked[0]
            # Mention other common real-word spellings (meat/meet, nose/knows).
            others = [entry[3] for entry in ranked[1:] if entry[0] == 0 and not entry[4]]
            seen.update(entry[2] for entry in ranked)
            entries.append((tier, neg_score, shown, int(concrete), others))
        if not entries:
            continue
        entries.sort()
        out[digits] = [
            [shown, tier, concrete] + (["/".join(others)] if others else [])
            for tier, _, shown, concrete, others in entries
        ]

    OUT.write_text(json.dumps(out, separators=(",", ":")))
    total = sum(len(v) for v in out.values())
    print(f"{len(out)} digit keys, {total} words -> {OUT.name} ({OUT.stat().st_size // 1024} KB)", file=sys.stderr)


if __name__ == "__main__":
    main()
