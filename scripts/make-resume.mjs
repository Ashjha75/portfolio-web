// Renders docs/resume/resume.html -> public/resume.pdf with headless Chrome.
// Chrome is used because it emits real selectable text and embeds fonts; no
// LaTeX/Pandoc/Word is installed on this machine. See docs/resume/README.md.
import { execFileSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { resolve } from "node:path";

const CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  process.env.LOCALAPPDATA + "/Google/Chrome/Application/chrome.exe",
];

const chrome = CANDIDATES.find((p) => p && existsSync(p));
if (!chrome) {
  console.error("Chrome not found. Checked:\n" + CANDIDATES.join("\n"));
  process.exit(1);
}

const src = resolve("docs/resume/resume.html").replaceAll("\\", "/");
const out = resolve("public/resume.pdf").replaceAll("\\", "/");

execFileSync(chrome, [
  "--headless",
  "--disable-gpu",
  "--no-pdf-header-footer",
  "--virtual-time-budget=4000",
  `--print-to-pdf=${out}`,
  `file:///${src}`,
], { stdio: "inherit" });

console.log(`wrote public/resume.pdf (${statSync(out).size} bytes)`);
