import { useState } from "react";

import { digitsOfWord, exampleWord } from "./engine";
import { DIGITS, RULES } from "./majorSystem";
import { buildRules as rules, examples } from "./practice/model";

const percent = (share: number) => `${Math.round(share * 100)}%`;

// How tiers are assigned. Every number comes from the build (practice.json), so this
// always describes the data the page is showing.
function Rating() {
  const [common, uncommon, rare] = rules.tierCounts.map((count) => count.toLocaleString());
  return (
    <>
      <h2>How words are rated</h2>
      <p className="about-text">
        Every word is <b>common</b>, <b>uncommon</b> or <b>rare</b>; the slider on the Words page sets how far down to
        go. Two measures decide it:
      </p>
      <ul className="about-list">
        <li>
          <b>How many people know it</b>: word prevalence norms from a study in which about 220,000 people said
          whether they knew each of 62,000 English words (Brysbaert et al., 2019). An inflected form counts as known as
          its base word, so "metered" is as well known as "meter".
        </li>
        <li>
          <b>How often it's used</b>: wordfreq's Zipf scale, which blends books, subtitles, the web and more. Zipf 3 is
          about once per million words, 4 ten times per million, 5 a hundred.
        </li>
      </ul>
      <table className="code-table tier-table">
        <thead>
          <tr>
            <th>tier</th>
            <th>words</th>
            <th>rule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>common</td>
            <td>{common}</td>
            <td>
              known by {percent(rules.commonKnown)}+ of people and Zipf {rules.commonKnownZipf}+ (Zipf{" "}
              {rules.commonZipf}+ if there's no prevalence data)
            </td>
          </tr>
          <tr>
            <td>uncommon</td>
            <td>{uncommon}</td>
            <td>
              known by {percent(rules.uncommonKnown)}+ and Zipf {rules.uncommonKnownZipf}+ (Zipf {rules.uncommonZipf}+
              without prevalence data)
            </td>
          </tr>
          <tr>
            <td>rare</td>
            <td>{rare}</td>
            <td>everything else</td>
          </tr>
        </tbody>
      </table>
      <p className="about-text">
        <b>Names</b> (shown capitalized) and acronyms are common at Zipf {rules.commonNameZipf}+ and uncommon below
        that, except plain first names, which are rare. A name is kept only if a standard dictionary (Hunspell en_US)
        lists it and it reaches Zipf {rules.minListedNameZipf}, or it reaches Zipf {rules.minNameZipf} on its own, which
        leaves out the long tail of surnames.
      </p>
      <p className="about-text">
        <b>Order.</b> Within a tier, words are alphabetical. Splits with the same number of chunks are ranked by how
        common each chunk's best word is, whether the chunk has an easy-to-picture word (rated{" "}
        {rules.concreteRating}+ out of 5 for concreteness; Brysbaert et al., 2014), and how many words it offers.
      </p>
      <p className="about-text">
        <b>Left out.</b> Each word has exactly one number. If its pronunciations differ only by a dropped consonant,
        the one matching the spelling wins ("around" is 421, not 42); if they truly conflict ("amateur" as 314 or
        364), the word is left out. Slurs, abbreviations, letter names and fragments are dropped too. Practice uses{" "}
        {rules.practiceWords.toLocaleString()} common, picturable words whose numbers follow the rules above.
      </p>
    </>
  );
}

function example(digits: string) {
  return examples[digits] ?? exampleWord(digits);
}

// Digits for a word or a phrase ("queen bear" = 72 94), or null if any word is unknown.
function phraseDigits(text: string) {
  const parts = text.trim().split(/\s+/).map((part) => digitsOfWord(part));
  return parts.every((part) => part !== null) ? parts.join(" ") : null;
}

function TryWord() {
  const [word, setWord] = useState("");
  const digits = word.trim() ? phraseDigits(word) : null;
  return (
    <p className="try-word">
      <input
        aria-label="Try a word"
        autoComplete="off"
        placeholder="Try a word or phrase"
        spellCheck={false}
        value={word}
        onChange={(event) => setWord(event.target.value)}
      />
      <span className="try-result" data-testid="try-result">
        {word.trim() ? (digits ? <b>{digits}</b> : "not in the word list") : "see its number"}
      </span>
    </p>
  );
}

export function About() {
  const grid = Array.from({ length: 100 }, (_, index) => String(index).padStart(2, "0"));

  return (
    <main className="page about">
      <p className="about-lead">
        The Major System turns numbers into words. Each digit is a consonant sound; vowels and w, h, y are free. To
        remember 7294, find words whose consonant sounds are 7-2-9-4: <b>queen bear</b>, or <b>Canberra</b>.
      </p>

      <TryWord />

      <table className="code-table">
        <thead>
          <tr>
            <th>digit</th>
            <th>sounds</th>
            <th className="hook-col">remember it by</th>
            <th>e.g.</th>
          </tr>
        </thead>
        <tbody>
          {DIGITS.map((row) => (
            <tr key={row.digit}>
              <td className="code-digit">{row.digit}</td>
              <td>{row.spelled}</td>
              <td className="hook-col">{row.hook}</td>
              <td>{example(row.digit)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Rules</h2>
      <dl className="rules">
        {RULES.map(([rule, example]) => (
          <div key={rule}>
            <dt>{rule}</dt>
            <dd>{example}</dd>
          </div>
        ))}
      </dl>

      <Rating />

      <h2>00–99</h2>
      <p className="about-note">One picturable word for every two-digit number. Tap one to see all its words.</p>
      <div className="peg-grid">
        {grid.map((digits) => (
          <a className="peg" href={`?n=${digits}#`} key={digits}>
            <span className="peg-digits">{digits}</span>
            <span className="peg-word">{example(digits) ?? "–"}</span>
          </a>
        ))}
      </div>

      <p className="about-note">
        Word data: CMU Pronouncing Dictionary, wordfreq, Brysbaert word prevalence and concreteness norms, Hunspell
        en_US. Built reproducibly; see the{" "}
        <a href="https://github.com/jmandel/mnemonics">source on GitHub</a>.
      </p>
    </main>
  );
}
