# Mnemonics

A small Bun + React page for the Mnemonic Major System. Type a number and it lists every way to split the digits into chunks that have words (fewest chunks first), with all the words for each chunk, alphabetical within each familiarity tier. Tap a word to keep it: the list narrows to splits that use it, and the chosen words build up as a phrase you can copy. A chunk already listed higher up collapses to one line marked ↑.

## Repo Layout

- `index.html`, `src/`
  The page (`App.tsx`) and the breakdown/word lookup (`engine.ts`).
- `tests/`
  Engine tests.
- `scripts/build_words.py`
  Builds `words.json` from `cmudict.dict` and the word data below.
- `cmudict.dict`
  CMU Pronouncing Dictionary, the source of pronunciations.
- `words.json`
  Generated word list consumed by the app.
- `pp2.js`, `archive/legacy-explorer.html`
  Older material preserved for reference.

## Word Data

```bash
bun run prepare:data   # = uv run scripts/build_words.py
```

Each CMUdict pronunciation is turned into Major System digits. NG follows the spelling: 27 in "sing", 2 before k/g as in "bank" (927). A word's alternate pronunciations are only used when they keep every consonant, so casual forms like "twenny" don't file "twenty" under 12. For every word the build then decides:

- **Familiarity tier** (common / familiar / obscure), shown by the `common · familiar · all` control. It uses word prevalence (the share of people who know a word), falling back to frequency. Inflected forms inherit their base word's prevalence, so "metered" counts as well known because "meter" is.
- **Name, acronym or word**, from the capitalization in Hunspell's en_US list (India, FBI, email), falling back to the ENABLE list and prevalence norms. Names are capitalized, acronyms uppercase; names with no measurable frequency are dropped.
- **Easy to picture** (concreteness 4+), used to rank splits with the same number of chunks.
- **Filtering.** Slurs are dropped; swear words are kept. Possessives, abbreviations, letter names, two-letter fragments and hyphenated phrases that no word list has ("how-many") are skipped.
- **Order within a chunk:** tier, then frequency, nudged toward words people know and words that are easy to picture (concreteness).
- **Same-sound merging.** Spellings with the same standard pronunciation (meat/meet, nose/knows) become one entry; other common spellings are shown after a slash.

Letter names, abbreviations and possessives are skipped.

Sources, downloaded into `data/sources/` on first run:

- [CMU Pronouncing Dictionary](https://github.com/cmusphinx/cmudict) (BSD).
- [wordfreq](https://github.com/rspeer/wordfreq) Zipf frequencies by Robyn Speer (data CC BY-SA 4.0).
- Word prevalence norms: Brysbaert, Mandera, McCormick & Keuleers (2019), "Word prevalence norms for 62,000 English lemmas", *Behavior Research Methods* 51, 467–479.
- Concreteness ratings: Brysbaert, Warriner & Kuperman (2014), "Concreteness ratings for 40 thousand generally known English word lemmas", *Behavior Research Methods* 46, 904–911.
- [ENABLE](https://github.com/dolph/dictionary) word list (public domain).
- [Hunspell en_US](https://github.com/wooorm/dictionaries) from SCOWL (MIT/BSD-style).
- [LemmInflect](https://github.com/bjascob/LemmInflect) for base forms.

## App

Install and run from the repo root:

```bash
bun install
bun run dev
```

Useful commands:

```bash
bun run build
bun run typecheck
bun run test
```

## GitHub Pages

The Pages deploy target is the root app.

```bash
bun run build:pages
```

That emits the static artifact into `dist/` and drops a `.nojekyll` marker for GitHub Pages.

The deploy workflow lives at `.github/workflows/pages.yml`.

It:

1. Checks out the repo
2. Installs Bun
3. Installs root dependencies
4. Typechecks the root app
5. Builds the Pages artifact
6. Deploys it with the standard GitHub Pages actions

The workflow is wired for pushes to `master` or `main`, plus manual dispatch.
