# Project screenshots

`src/data/projects.ts` lists each project with an `image` field that imports a `.webp`
from `src/assets/`, same as every other image in this repo — fingerprinted by Vite, no
runtime fetch. Instead of taking and cropping those screenshots by hand, use the script:

```bash
npm run screenshot -- --url <project-url> --out <filename-without-ext> [--full-page]
```

This launches headless Chromium (Playwright), navigates to the URL, screenshots it, and
resizes/converts the result to `src/assets/<out>.webp` via `sharp`, matching the existing
project images: 1200×800, `fit: cover`, quality 80.

Example — adding or refreshing an entry:

```bash
npm run screenshot -- --url https://skin-tracker-beige.vercel.app --out skin-tracker
```

Then wire it into `projects.ts` like any other image:

```ts
import skinTracker from "../assets/skin-tracker.webp";
```

## When to run it

On demand — when you add a project or a live project's UI changes enough that its
thumbnail is stale. It is **not** part of `npm run build`: project URLs rarely change,
and every build launching a headless browser against live third-party sites would be
slow and flaky (network conditions, third-party downtime).

## One-time setup

The script depends on `playwright` and `sharp` (already in `devDependencies`), but
Playwright's browser binaries are not npm packages — they're downloaded separately and
cached outside the repo (`~/Library/Caches/ms-playwright` on macOS). Run once per
machine:

```bash
npx playwright install chromium
```

## Gotchas

**Entrance animations.** The script waits for `networkidle` and then a fixed
`page.waitForTimeout(4000)` before capturing, to let fade-in/hero animations settle.
4 seconds was tuned against a site (Mobi's homepage) whose hero text/logo fade in well
after network idle — a shorter wait captured only its starfield background with no
content. If a future screenshot comes back blank or missing obvious UI, don't assume the
script is broken first — debug the specific site:

```bash
node -e '
import("playwright").then(async ({ chromium }) => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
  await page.goto("<url>", { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(4000);
  await page.screenshot({ path: "/tmp/debug.png", fullPage: true });
  await browser.close();
});
'
```

A full-page capture often reveals content sitting below an empty-looking viewport crop,
or `page.on("console"/"pageerror")` listeners will surface a client-side error that's
suppressing render in headless mode specifically.

**Cropping.** `fit: "cover", position: "top"` anchors the crop to the top of the page,
same as a straight viewport screenshot would show. For a page whose interesting content
isn't near the top, pass `--full-page` and expect to eyeball the result — `sharp` will
still crop to 1200×800 from the top of the full page, which is rarely what you want for
a full-page capture. (There's no CLI flag to change the crop anchor; edit the `position`
option in `scripts/screenshot.mjs` for a one-off if needed.)

**Verifying a capture.** The script logs a success message even if the page rendered
something wrong (blank hero, error page, cookie banner). Always open the resulting
`.webp` and look at it before committing — don't just check that the file exists.
