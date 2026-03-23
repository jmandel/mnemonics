import { createRoot } from "react-dom/client";

import { App } from "./App";
import "./app.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Missing root container");
}

createRoot(container).render(<App />);
