// Renders the social preview card. Hand-authored SVG -> PNG via sharp.
// Run: node scripts/make-og.mjs
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const W = 1200, H = 630;
const BG = "#0C0C0E", SURFACE = "#16161A", LINE = "#2F2F36";
const INK = "#F6F4F0", INK2 = "#C8C4BC", INK3 = "#9C978E", ACCENT = "#EC9440";

const gridLines = () => {
  let out = "";
  for (let x = 0; x <= W; x += 72) out += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="${LINE}" stroke-width="1"/>`;
  for (let y = 0; y <= H; y += 72) out += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="${LINE}" stroke-width="1"/>`;
  return out;
};

const stat = (x, value, label) => `
  <text x="${x}" y="508" fill="${INK}" font-family="DejaVu Sans, Arial, sans-serif" font-size="34" font-weight="700">${value}</text>
  <text x="${x}" y="536" fill="${INK3}" font-family="DejaVu Sans Mono, monospace" font-size="16">${label}</text>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="0%" r="70%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${BG}" stop-opacity="0"/>
      <stop offset="100%" stop-color="${BG}" stop-opacity="1"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="${BG}"/>
  <g opacity="0.55">${gridLines()}</g>
  <rect width="${W}" height="${H}" fill="url(#fade)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <rect x="64" y="60" width="44" height="44" rx="10" fill="${SURFACE}" stroke="${LINE}"/>
  <text x="86" y="89" fill="${ACCENT}" font-family="DejaVu Sans Mono, monospace" font-size="18" font-weight="700" text-anchor="middle">AJ</text>
  <text x="124" y="89" fill="${INK}" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="600">Ashish Kumar Jha</text>

  <text x="64" y="232" fill="${INK}" font-family="DejaVu Sans, Arial, sans-serif" font-size="68" font-weight="700">I build backend systems</text>
  <text x="64" y="312" fill="${INK}" font-family="DejaVu Sans, Arial, sans-serif" font-size="68" font-weight="700">that hold up <tspan fill="${ACCENT}">under load</tspan>.</text>

  <text x="64" y="372" fill="${INK2}" font-family="DejaVu Sans, Arial, sans-serif" font-size="26">Software engineer &#183; Java &#183; Spring Boot &#183; PostgreSQL &#183; AWS</text>

  <line x1="64" y1="430" x2="1136" y2="430" stroke="${LINE}" stroke-width="1"/>
  ${stat(64, "2+", "YEARS")}
  ${stat(304, "15%", "PERF GAINED")}
  ${stat(604, "20%", "RESPONSE TIME CUT")}
  ${stat(944, "5", "SYSTEMS SHIPPED")}
</svg>`;

writeFileSync("scripts/og.svg", svg);
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile("public/og.png");
console.log("wrote public/og.png");
