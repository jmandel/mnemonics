# /// script
# requires-python = ">=3.11"
# dependencies = ["wordfreq==3.1.1", "lemminflect==0.2.3", "openpyxl==3.1.5"]
# ///
"""Build words.json: every CMUdict word keyed by its Major System digits, with a
familiarity tier, display casing (names and acronyms), and same-sound spellings merged.

Output: {digits: [[shown, tier, concrete, "other/spellings"?], ...]}, tier 0 = common,
1 = uncommon, 2 = rare; concrete = 1 for easy-to-picture words.

Also writes practice.json: {"words": [[word, "f8 sh6 ng27", "tag,tag", zipf*10], ...],
"examples": {digits: word}} with practice prompts (common, picturable base forms whose
answer follows from the rules) and the About page's example word for 0-99.

Run from the repo root:  uv run --locked scripts/build_words.py
Every input is downloaded from a pinned URL into data/sources/ (git-ignored) and
checked against its sha256, so a rebuild reproduces words.json byte for byte.
Python dependencies are locked in scripts/build_words.py.lock.
"""

import hashlib
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
PRACTICE_OUT = ROOT / "practice.json"

# name: (pinned URL, sha256). GitHub sources are pinned to a commit.
DOWNLOADS = {
    # CMU Pronouncing Dictionary, cmusphinx/cmudict as of 2024-12-17.
    "cmudict.dict": (
        "https://raw.githubusercontent.com/cmusphinx/cmudict/0f8072f814306c5ee4fbf992ed853601b12c01f9/cmudict.dict",
        "81917843c7f44ce2b094ac63873c2c7a4cf802040792c455ba3ca406891c3d22",
    ),
    "enable1.txt": (
        "https://raw.githubusercontent.com/dolph/dictionary/233d25a56b9ac8bef906916ccf091a976995cce0/enable1.txt",
        "3f16130220645692ed49c7134e24a18504c2ca55b3c012f7290e3e77c63b1a89",
    ),
    # Brysbaert, Warriner & Kuperman (2014) concreteness ratings.
    "concreteness.txt": (
        "https://raw.githubusercontent.com/ArtsEngine/concreteness/0e52728a0c419c7755924b6c8b9d467b3c01720b/Concreteness_ratings_Brysbaert_et_al_BRM.txt",
        "0b4082dbd38585b0ee1fd258145b7a50592f8d0d98e5fc6b6844ceef3cd8ecc8",
    ),
    # Brysbaert et al. (2019) word prevalence norms, the paper's supplementary file.
    "prevalence.xlsx": (
        "https://static-content.springer.com/esm/art%3A10.3758%2Fs13428-018-1077-9/MediaObjects/13428_2018_1077_MOESM2_ESM.xlsx",
        "3b2cbee33f7a4eab50e71a7a09461fe28c32bb16c53435327b94cf7b951b76af",
    ),
    # Hunspell en_US (from SCOWL) keeps capitalization: "India", "FBI", "email".
    "en_US.dic": (
        "https://raw.githubusercontent.com/wooorm/dictionaries/8cfea406b505e4d7df52d5a19bce525df98c54ab/dictionaries/en/index.dic",
        "f0b1a234bd178bdd01875b2a392a9647f888b8fe879f79c52aae62c2759b3647",
    ),
    # Used only to keep practice prompts and About examples clean; lists keep these words.
    "ldnoobw.txt": (
        "https://raw.githubusercontent.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/5faf2ba42d7b1c0977169ec3611df25a3c08eb13/en",
        "af851ecef1d5f212caba17339b12ac39cc2fef7d78c74876f67237644fcee8bd",
    ),
    "first-names.txt": (
        "https://raw.githubusercontent.com/dominictarr/random-name/468ae50d63f1d1ecb417d1b119748df9191431e7/first-names.txt",
        "17d20fdf5281781bf2f2f73119e39d040f5a6da40ffa93d2cab06027df5fb37d",
    ),
}

# Abbreviations Hunspell lists as proper nouns ("Nov", "Gen"); not mnemonic words.
ABBREVIATIONS = {
    "jan", "feb", "apr", "jun", "jul", "aug", "sep", "sept", "oct", "nov", "dec",
    "mon", "tue", "tues", "thu", "thur", "thurs", "fri",
    "gen", "pre", "del", "dept", "govt", "corp", "inc", "ltd", "mr", "mrs", "ms", "dr", "jr", "sr",
}

# Names: Hunspell's curated proper nouns (Canberra, Picasso, Godzilla) are kept down to
# Zipf 3.0; others need 3.8, which drops the long tail of surnames (Accetta, Szeto).
# Plain first names below common level go to rare so they don't crowd uncommon words.
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
    "midget", "midgets", "negro", "negroes",
}

# Also kept out of practice prompts and examples (beyond ldnoobw.txt): violent, sexual
# or bodily words that make a poor surprise in a quiz.
PRACTICE_AVOID = {
    "rapist", "rape", "lynching", "hooker", "hookers", "cleavage", "lingerie", "diarrhea",
    "laxative", "anus", "sex", "sexy", "nude", "naked", "penis", "vagina", "nipple", "condom",
    "semen", "sperm", "pubic", "testicle", "testicles", "scrotum", "urine", "feces", "vomit",
    "corpse", "suicide", "heroin", "cocaine", "brothel", "pimp", "bong", "douche",
}

# CMUdict pronunciations that are simply wrong for the Major System; these words are
# dropped everywhere rather than filed under the wrong number.
MISPRONOUNCED = {
    "jalapeno", "jalapenos",  # the j is an h sound: 592, not 6592
    "hygienist", "hygienists",  # soft g: 6201, not 7201
    "backstreet",  # the r is missing
}

# Two-letter acronyms worth keeping; other two-letter names and acronyms are noise.
SPOKEN_ACRONYMS = {"tv", "dj", "pc", "uk", "ok"}

# Number words make confusing examples ("five" for 88).
NUMBER_WORDS = {
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty",
    "ninety", "hundred", "thousand", "million",
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
    for name, (url, expected) in DOWNLOADS.items():
        path = SOURCES / name
        if not path.exists():
            print(f"downloading {name}", file=sys.stderr)
            urllib.request.urlretrieve(url, path)
        # Also checks cached files, so a stale or edited source can't slip in.
        actual = hashlib.sha256(path.read_bytes()).hexdigest()
        if actual != expected:
            sys.exit(f"{name}: sha256 {actual} does not match pinned {expected}; delete it and rerun")


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
    """Return (tier, sort_score, concrete). Tier 0 = common, 1 = uncommon, 2 = rare."""
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
    # Easy to picture: the word itself is rated 4+ on the 1-5 concreteness scale (turtle,
    # piano). Not inherited from a base form, which would make "could" picturable via "can".
    concrete = concreteness.get(word, 0) >= 4.0
    return tier, round(score, 3), concrete


SILENT_SPELLINGS = [
    (r"^kn", "n"), (r"^gn", "n"), (r"^wr", "r"), (r"^ps", "s"), (r"^pn", "n"),
    (r"mb$", "m"), (r"mn$", "m"), (r"([ao])l([km])", r"\1\2"), (r"ould", "ood"),
    (r"gh(t|$)", r"\1"), (r"stle$", "sel"), (r"sten$", "sen"),
]
LETTER_DIGITS = {
    "s": "0", "z": "0", "t": "1", "d": "1", "n": "2", "m": "3", "r": "4", "l": "5",
    "j": "6", "k": "7", "g": "7", "q": "7", "f": "8", "v": "8", "p": "9", "b": "9",
}


def spelled_digits(word):
    """Rough Major System digits from spelling alone, used to choose between a word's
    pronunciations: "around" spells 421, "balk" 97 (silent l)."""
    w = re.sub("[^a-z]", "", word)
    for pattern, replacement in SILENT_SPELLINGS:
        w = re.sub(pattern, replacement, w)
    w = re.sub(r"([b-df-hj-np-tv-z])\1", r"\1", w)  # double letters are one sound
    w = w.replace("tch", "ch").replace("ph", "f").replace("ck", "k").replace("qu", "k").replace("x", "ks")
    w = re.sub(r"c(?=[eiy])", "s", w).replace("c", "k")
    w = w.replace("th", "t").replace("sh", "j").replace("ch", "j")
    return "".join(LETTER_DIGITS.get(ch, "") for ch in w)


# Spellings that can sound two ways; a practice word passes if any reading matches.
AMBIGUOUS_SPELLINGS = [("G", ("7", "6")), ("C", ("6", "7")), ("H", ("", "8", "7"))]


def spelled_readings(word):
    """Every digit string the spelling allows under the taught rules (soft or hard g,
    ch as in chin or chorus, gh silent, f or g). Used to keep practice words whose
    answer follows from their spelling."""
    w = re.sub("[^a-z]", "", word)
    for pattern, replacement in SILENT_SPELLINGS:
        if pattern != r"gh(t|$)":
            w = re.sub(pattern, replacement, w)
    w = re.sub(r"cc(?=[eiy])", "ks", w)
    w = re.sub(r"([b-df-hj-np-tv-z])\1", r"\1", w)
    w = w.replace("tch", "ch").replace("ph", "f").replace("ck", "k").replace("qu", "k").replace("x", "ks")
    w = w.replace("ch", "C").replace("gh", "H")
    w = re.sub(r"g(?=[eiy])", "G", w)
    w = re.sub(r"c(?=[eiy])", "s", w).replace("c", "k")
    w = w.replace("th", "t").replace("sh", "j")
    readings = {""}
    for ch in w:
        options = dict(AMBIGUOUS_SPELLINGS).get(ch, (LETTER_DIGITS.get(ch, ""),))
        readings = {prefix + option for prefix in readings for option in options}
        if len(readings) > 64:
            break
    return readings


def edit_distance(a, b):
    row = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        prev, row[0] = row[0], i
        for j, cb in enumerate(b, 1):
            prev, row[j] = row[j], min(row[j] + 1, row[j - 1] + 1, prev + (ca != cb))
    return row[-1]


def choose_pronunciation(word, prons):
    """The one pronunciation a word is filed under, or None if it is ambiguous.

    Pronunciations that differ only by a dropped consonant ("around" as 42 or 421)
    resolve to the one closest to the spelling. Ones with the same number of
    consonants but different digits ("amateur" 314 or 364) are true conflicts.
    """
    by_digits = {}
    for phones in prons:
        digits = digits_for(phones)
        if digits:
            by_digits.setdefault(digits, phones)
    if not by_digits:
        return None
    if len(by_digits) == 1:
        return next(iter(by_digits.values()))
    lengths = [len(digits) for digits in by_digits]
    if len(set(lengths)) < len(lengths):
        return None
    spelled = spelled_digits(word)
    best = min(by_digits, key=lambda digits: (edit_distance(digits, spelled), -len(digits)))
    return by_digits[best]


def keep_spelling(word, zipf, dictionary, prevalence, cased):
    # Letter names, abbreviations, possessives ("paris'", "jones's"), elisions ("'gain").
    if len(word) < 2 or "." in word or word.startswith("'") or not re.search("[a-z]", word):
        return False
    if word.endswith("'s") or word.endswith("s'") or word in SLURS or word in MISPRONOUNCED:
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


SOUND_LABELS = {
    "S": "s", "Z": "z", "T": "t", "D": "d", "TH": "th", "DH": "th", "N": "n", "M": "m",
    "R": "r", "ER": "r", "L": "l", "CH": "ch", "JH": "j", "SH": "sh", "ZH": "zh",
    "K": "k", "G": "g", "NG": "ng", "F": "f", "V": "v", "P": "p", "B": "b",
}


def sounds_for(phones):
    """Consonant sounds with their digits, e.g. "f8 sh6 ng27" for "fishing"."""
    out = []
    for index, phone in enumerate(phones):
        if phone == "NG":
            following = phones[index + 1] if index + 1 < len(phones) else None
            digits = "2" if following in ("K", "G") else "27"
        else:
            digits = digits_for([phone])
        if digits:
            out.append(SOUND_LABELS[phone] + digits)
    return " ".join(out)


def spelling_tags(word, phones):
    """Spelling patterns that trip people up, tracked as practice skills."""
    tags = []
    if re.search(r"c[eiy]", word) and ("S" in phones or "SH" in phones):
        tags.append("soft c")
    if re.search(r"g[eiy]", word) and "JH" in phones:
        tags.append("soft g")
    if "x" in word:
        tags.append("x")
    if "ph" in word or ("gh" in word and "F" in phones):
        tags.append("ph/gh")
    if re.search(r"^(kn|gn|wr|ps)|mb$|[ao]l[km]|gh(t|$)", word):
        tags.append("silent")
    if re.search(r"([b-df-hj-np-tv-z])\1", word):
        tags.append("double")
    if word.endswith("ed") and phones[-1] in ("T", "D"):
        tags.append("-ed")
    if "NG" in phones:
        tags.append("ng")
    if "ER" in phones and "r" in word:
        tags.append("er")
    return tags


def is_base_form(word):
    # "jog", not "jogging" (even though "jogging" is also a noun); "mouse", not "mice".
    lemmas_by_pos = getAllLemmas(word)
    forms = {form for forms in lemmas_by_pos.values() for form in forms}
    if forms and word not in forms:
        return False
    other = forms - {word}
    return not (other and re.search("(ing|ed|s)$", word))


def is_clean(word, avoid):
    return word not in avoid and not any(part in avoid for part in re.split("[^a-z]", word))


def is_practice_word(word, tier, is_name, concrete, digits, phones, avoid):
    """Common, picturable base-form words whose answer follows from the taught rules."""
    consonants = [phone for phone in phones if phone in SOUND_LABELS]
    return (
        tier == 0 and not is_name and concrete and re.fullmatch("[a-z]{3,}", word) is not None
        and 1 <= len(digits) <= 6
        and is_base_form(word)
        and is_clean(word, avoid)
        # Spelling and pronunciation agree (not "jalapeno" = 592 or "hygienist").
        and digits in spelled_readings(word)
        # No doubled sounds across a compound ("bookkeeper"), which people count differently.
        and all(left != right for left, right in zip(consonants, consonants[1:]))
    )


def main():
    fetch_sources()
    prevalence = load_prevalence()
    concreteness = load_concreteness()
    dictionary = set((SOURCES / "enable1.txt").read_text().split())
    cased = load_cased_words()
    first_names = {line.strip().lower() for line in (SOURCES / "first-names.txt").read_text().splitlines()}
    avoid = PRACTICE_AVOID | {line.strip().lower() for line in (SOURCES / "ldnoobw.txt").read_text().splitlines()}

    # word -> pronunciations in CMUdict order; the first is the standard one.
    pronunciations = defaultdict(list)
    for line in (SOURCES / "cmudict.dict").read_text(encoding="utf-8", errors="replace").splitlines():
        if not line.strip() or line.startswith(";;;"):
            continue
        head, *phones = line.split("#")[0].split()
        word = re.sub(r"\(\d+\)$", "", head).lower()
        pronunciations[word].append([re.sub(r"\d", "", p) for p in phones])

    # digits -> pronunciation -> spellings. Each word is filed under exactly one
    # pronunciation, and grouping by it means only true homophones merge (meat/meet).
    buckets = defaultdict(lambda: defaultdict(set))
    chosen = {}
    for word, prons in pronunciations.items():
        phones = choose_pronunciation(word, prons)
        if phones is not None:
            chosen[word] = phones
            buckets[digits_for(phones)][" ".join(phones)].add(word)

    out = {}
    practice = []
    examples = defaultdict(list)
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
                # Fragments: vowel-less abbreviations ("mt", "pr", "mm") and two-letter names
                # and acronyms ("Le", "AL"), except a few everyone says as letters ("TV").
                if not re.search("[aeiouy]", word) and not shown.isupper():
                    continue
                if len(word) <= 2 and is_name and word not in SPOKEN_ACRONYMS:
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
            zipf = zipf_frequency(word, "en")
            if is_practice_word(word, tier, is_name, concrete, digits, chosen[word], avoid):
                practice.append(
                    [word, sounds_for(chosen[word]), ",".join(spelling_tags(word, chosen[word])), round(zipf * 10)]
                )
            # About page example for short numbers: the most picturable everyday word.
            # Uncommon words only count when no common one fits (88: "fife", not "five").
            if len(digits) <= 2 and tier <= 1 and not is_name and is_base_form(word) and is_clean(word, avoid):
                if word not in NUMBER_WORDS and re.fullmatch("[a-z]+", word):
                    rating = concreteness.get(word, 0)
                    examples[digits].append((-(rating + 0.5 * zipf) + 10 * tier, word))
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
    practice.sort()
    best_examples = {digits: min(options)[1] for digits, options in sorted(examples.items())}
    PRACTICE_OUT.write_text(json.dumps({"words": practice, "examples": best_examples}, separators=(",", ":")))
    print(f"{len(practice)} practice words -> {PRACTICE_OUT.name} ({PRACTICE_OUT.stat().st_size // 1024} KB)", file=sys.stderr)


if __name__ == "__main__":
    main()
