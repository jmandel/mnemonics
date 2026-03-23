import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createServer } from "node:net";

type CdpMessage = {
  id?: number;
  method?: string;
  params?: any;
  result?: any;
  error?: { message: string };
};

type CdpProblem =
  | {
      type: "exception";
      text: string;
      line?: number;
    }
  | {
      type: "log";
      level: string;
      source: string;
      text: string;
    };

type SpawnedProcess = ReturnType<typeof spawn>;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getFreePort() {
  return await new Promise<number>((resolve, reject) => {
    const server = createServer();

    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();

      if (!address || typeof address === "string") {
        reject(new Error("Unable to resolve free port"));
        return;
      }

      const { port } = address;
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(port);
      });
    });
  });
}

async function waitFor<T>(fn: () => Promise<T | null>, label: string, timeoutMs = 20_000) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    const value = await fn();

    if (value !== null) {
      return value;
    }

    await delay(100);
  }

  throw new Error(`Timed out waiting for ${label}`);
}

function killProcess(process: SpawnedProcess | null) {
  if (!process || process.killed) {
    return;
  }

  process.kill("SIGINT");
}

async function waitForExit(process: SpawnedProcess | null, timeoutMs = 5_000) {
  if (!process || process.exitCode !== null) {
    return;
  }

  await Promise.race([
    new Promise<void>((resolve) => process.once("exit", () => resolve())),
    delay(timeoutMs),
  ]);

  if (process.exitCode === null) {
    process.kill("SIGTERM");
  }
}

function resolveChromeBinary() {
  const candidates = [
    process.env.CHROME_BIN,
    "/usr/bin/google-chrome-stable",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter((value): value is string => Boolean(value));

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error("Chrome binary not found. Set CHROME_BIN if needed.");
}

async function waitForHttp(url: string, timeoutMs = 20_000) {
  return await waitFor(async () => {
    try {
      const response = await fetch(url);
      return response.ok ? true : null;
    } catch {
      return null;
    }
  }, `HTTP endpoint ${url}`, timeoutMs);
}

function collectOutput(process: SpawnedProcess) {
  let stdout = "";
  let stderr = "";

  process.stdout?.on("data", (chunk) => {
    stdout += chunk.toString();
  });

  process.stderr?.on("data", (chunk) => {
    stderr += chunk.toString();
  });

  return {
    get stdout() {
      return stdout;
    },
    get stderr() {
      return stderr;
    },
  };
}

async function waitForChrome(port: number, timeoutMs = 20_000) {
  return await waitFor(async () => {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (!response.ok) {
        return null;
      }

      return true;
    } catch {
      return null;
    }
  }, "Chrome remote debugging", timeoutMs);
}

export class CdpPage {
  private readonly ws: WebSocket;
  private nextId = 1;
  private readonly pending = new Map<number, { resolve: (value: any) => void; reject: (error: Error) => void }>();
  private readonly problems: CdpProblem[] = [];

  private constructor(ws: WebSocket) {
    this.ws = ws;

    this.ws.addEventListener("message", (event) => {
      const message = JSON.parse(event.data.toString()) as CdpMessage;

      if (message.id) {
        const handler = this.pending.get(message.id);

        if (!handler) {
          return;
        }

        this.pending.delete(message.id);

        if (message.error) {
          handler.reject(new Error(message.error.message));
        } else {
          handler.resolve(message.result);
        }

        return;
      }

      if (message.method === "Runtime.exceptionThrown") {
        this.problems.push({
          type: "exception",
          text: message.params?.exceptionDetails?.text ?? "Unknown exception",
          line: message.params?.exceptionDetails?.lineNumber,
        });
      }

      if (message.method === "Log.entryAdded") {
        const level = message.params?.entry?.level;

        if (level === "warning" || level === "error") {
          this.problems.push({
            type: "log",
            level,
            source: message.params?.entry?.source ?? "unknown",
            text: message.params?.entry?.text ?? "",
          });
        }
      }
    });
  }

  static async connect(debugPort: number, atlasDebug = false) {
    const target = await waitFor(async () => {
      const response = await fetch(`http://127.0.0.1:${debugPort}/json/list`);
      const targets = (await response.json()) as Array<{
        type: string;
        url: string;
        webSocketDebuggerUrl: string;
      }>;

      return targets.find((entry) => entry.type === "page") ?? null;
    }, "Chrome page target");

    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise<void>((resolve, reject) => {
      ws.addEventListener("open", () => resolve(), { once: true });
      ws.addEventListener("error", (event) => reject(event), { once: true });
    });

    const page = new CdpPage(ws);
    await page.send("Page.enable");
    await page.send("Runtime.enable");
    await page.send("Log.enable");
    await page.send("Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 2200,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await page.send("Page.addScriptToEvaluateOnNewDocument", {
      source: `
        Object.defineProperty(window, "__copiedTexts", { value: [], configurable: true });
        Object.defineProperty(window, "__atlasDebugEnabled", {
          value: ${atlasDebug ? "true" : "false"},
          configurable: true
        });
        Object.defineProperty(window, "__atlasDebug", {
          value: null,
          writable: true,
          configurable: true
        });
        Object.defineProperty(navigator, "clipboard", {
          configurable: true,
          value: {
            writeText: async (text) => {
              window.__copiedTexts.push(text);
            }
          }
        });
      `,
    });

    return page;
  }

  async close() {
    this.ws.close();
  }

  resetProblems() {
    this.problems.length = 0;
  }

  getProblems() {
    return [...this.problems];
  }

  async send(method: string, params: Record<string, unknown> = {}) {
    const id = this.nextId;
    this.nextId += 1;
    this.ws.send(JSON.stringify({ id, method, params }));

    return await new Promise<any>((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
    });
  }

  async navigate(url: string) {
    await this.send("Page.navigate", { url });
    await this.waitForValue(
      "document.readyState === 'complete' && !!document.querySelector('[data-testid=\"num-input\"]')",
      "application root",
    );
  }

  async setViewport(width: number, height: number, mobile = false) {
    await this.send("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile,
    });
  }

  async evaluate<T>(expression: string) {
    const { result } = await this.send("Runtime.evaluate", {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });

    return result.value as T;
  }

  async waitForValue<T>(expression: string, label: string, timeoutMs = 20_000) {
    return await waitFor(async () => {
      const value = await this.evaluate<T | null>(expression);
      return value === undefined || value === false ? null : value;
    }, label, timeoutMs);
  }

  async setInputValue(selector: string, value: string) {
    const escapedSelector = JSON.stringify(selector);
    const escapedValue = JSON.stringify(value);

    await this.evaluate(`
      (() => {
        const input = document.querySelector(${escapedSelector});
        if (!(input instanceof HTMLInputElement)) return false;
        const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
        if (!setter) return false;
        setter.call(input, ${escapedValue});
        input.dispatchEvent(new Event("input", { bubbles: true }));
        return true;
      })()
    `);
  }

  async click(selector: string) {
    const escapedSelector = JSON.stringify(selector);

    await this.evaluate(`
      (() => {
        const element = document.querySelector(${escapedSelector});
        if (!(element instanceof HTMLElement)) return false;
        element.click();
        return true;
      })()
    `);
  }
}

export type AppHarness = {
  baseUrl: string;
  page: CdpPage;
  close: () => Promise<void>;
};

export async function launchAppHarness(
  cwd: string,
  options: { atlasDebug?: boolean } = {},
): Promise<AppHarness> {
  const serverPort = await getFreePort();
  const baseUrl = `http://127.0.0.1:${serverPort}/`;
  const serverProcess = spawn(process.execPath, ["index.html", `--host=127.0.0.1:${serverPort}`], {
    cwd,
    stdio: ["ignore", "pipe", "pipe"],
  });
  const serverOutput = collectOutput(serverProcess);

  try {
    await waitForHttp(baseUrl);
  } catch (error) {
    killProcess(serverProcess);
    await waitForExit(serverProcess);
    throw new Error(
      `Failed to start Bun dev server at ${baseUrl}\nstdout:\n${serverOutput.stdout}\nstderr:\n${serverOutput.stderr}\n${String(error)}`,
    );
  }

  const chromePort = await getFreePort();
  const chromeUserDataDir = mkdtempSync(join(tmpdir(), "mnemonics-chrome-"));
  const chromeProcess = spawn(
    resolveChromeBinary(),
    [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--disable-extensions",
      "--no-first-run",
      "--no-default-browser-check",
      `--remote-debugging-port=${chromePort}`,
      `--user-data-dir=${chromeUserDataDir}`,
      "about:blank",
    ],
    {
      cwd,
      stdio: ["ignore", "pipe", "pipe"],
    },
  );

  await waitForChrome(chromePort);
  const page = await CdpPage.connect(chromePort, options.atlasDebug ?? false);

  return {
    baseUrl,
    page,
    close: async () => {
      await page.close();
      killProcess(serverProcess);
      killProcess(chromeProcess);
      await waitForExit(serverProcess);
      await waitForExit(chromeProcess);
      rmSync(chromeUserDataDir, { recursive: true, force: true });
    },
  };
}
