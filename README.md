# Mnemonics

A small Bun + React page for the Mnemonic Major System. Type a number and it lists every way to split the digits into chunks that have words (fewest chunks first), with all the words for each chunk, most common first.

## Repo Layout

- `index.html`
  Bun/Pages HTML entrypoint.
- `src/`
  The page (`App.tsx`) and the breakdown/word lookup (`engine.ts`).
- `tests/`
  Engine tests.
- `preprocess.js`
  Builds `cmudict.json` from `cmudict.dict` and Google 1-gram counts.
- `cmudict.dict`
  Raw CMU Pronouncing Dictionary source.
- `cmudict.json`
  Generated dictionary consumed by the app.
- `pp2.js`
  Older supporting source material preserved for reference.
- `archive/legacy-explorer.html`
  Preserved copy of the original single-file explorer.

The local `claude/` and `codex/` spike folders are intentionally ignored and are not part of the committed source tree.

## Data Pipeline

The heavy preprocessing path still lives at the repo root.

```bash
bun run prepare:data
```

That runs `preprocess.js` and rebuilds `cmudict.json`.

`preprocess.js` downloads `onegrams-*.txt` files if they are missing. Those local corpus files are ignored by git.

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
