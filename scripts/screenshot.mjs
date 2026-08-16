#!/usr/bin/env node
// Captures a screenshot of a project URL and saves it as a webp into src/assets,
// matching the ~1200x800 dimensions of the existing project images.
import { chromium } from "playwright";
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.join(__dirname, "..", "src", "assets");

const WIDTH = 1200;
const HEIGHT = 800;

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { fullPage: false };
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--url") opts.url = args[++i];
    else if (arg === "--out") opts.out = args[++i];
    else if (arg === "--full-page") opts.fullPage = true;
  }
  return opts;
}

async function main() {
  const { url, out, fullPage } = parseArgs();
  if (!url || !out) {
    console.error(
      "Usage: npm run screenshot -- --url <url> --out <filename-without-ext> [--full-page]"
    );
    process.exit(1);
  }

  await mkdir(ASSETS_DIR, { recursive: true });
  const outputPath = path.join(ASSETS_DIR, `${out}.webp`);

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({
      viewport: { width: WIDTH, height: HEIGHT },
    });
    await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(4000); // let entrance animations settle
    const buffer = await page.screenshot({ fullPage });

    await sharp(buffer)
      .resize(WIDTH, HEIGHT, { fit: "cover", position: "top" })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`Saved screenshot to ${path.relative(process.cwd(), outputPath)}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
