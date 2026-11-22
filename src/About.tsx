import { useState } from "react";

import { digitsOfWord, exampleWord } from "./engine";
import { DIGITS, RULES } from "./majorSystem";

function TryWord() {
  const [word, setWord] = useState("");
  const digits = word.trim() ? digitsOfWord(word) : null;
  return (
    <p className="try-word">
      <input
        aria-label="Try a word"
        autoComplete="off"
        placeholder="Try a word"
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
              <td>{exampleWord(row.digit)}</td>
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

      <h2>00–99</h2>
      <p className="about-note">One picturable word for every two-digit number. Tap one to see all its words.</p>
      <div className="peg-grid">
        {grid.map((digits) => (
          <a className="peg" href={`?n=${digits}#`} key={digits}>
            <span className="peg-digits">{digits}</span>
            <span className="peg-word">{exampleWord(digits) ?? "–"}</span>
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
