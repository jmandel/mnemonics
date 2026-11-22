import { useEffect, useState } from "react";

import { About } from "./About";
import { Finder } from "./Finder";
import { Practice } from "./practice/Practice";

type Route = "words" | "practice" | "about";

// Pages live in the hash (#practice, #about) so ?n= word links keep working.
function currentRoute(): Route {
  const name = window.location.hash.slice(1).split("?")[0];
  return name === "practice" || name === "about" ? name : "words";
}

const LINKS: Array<[Route, string, string]> = [
  ["words", "Words", "#"],
  ["practice", "Practice", "#practice"],
  ["about", "About", "#about"],
];

export function App() {
  const [route, setRoute] = useState<Route>(currentRoute);

  useEffect(() => {
    const onHash = () => {
      setRoute(currentRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <>
      <nav className="site-nav">
        <span className="brand">Major System</span>
        {LINKS.map(([name, label, href]) => (
          <a aria-current={route === name ? "page" : undefined} href={href} key={name}>
            {label}
          </a>
        ))}
      </nav>
      {route === "practice" ? <Practice /> : route === "about" ? <About /> : <Finder />}
    </>
  );
}
