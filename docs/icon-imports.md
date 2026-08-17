# Icon imports

**Always deep-import Tabler icons. Never import from the `@tabler/icons-react` barrel.**

```ts
// Do this:
import IconDownload from "@tabler/icons-react/dist/esm/icons/IconDownload.mjs";

// Not this:
import { IconDownload } from "@tabler/icons-react";
```

Note the **default** import — see [Gotchas](#gotchas).

## Why

`@tabler/icons-react` v3 has no `exports` field and its barrel entry re-exports ~5,900
icon modules. Vite pre-bundles that barrel into ~5,882 separate chunk files. In dev,
where modules are served unbundled, the browser must request nearly all of them before
React can mount — so the `#root` placeholder in `index.html` ("Loading...") stays on
screen for ~5 seconds on first load.

Production was never affected: Rollup tree-shakes the barrel at build time, so the prod
bundle only ever contained the handful of icons actually used. This is a **dev-only**
problem, which is why it survived unnoticed — the deployed site loads in under a second.

Measured on this repo, barrel imports vs. deep imports:

| | Barrel | Deep |
| --- | --- | --- |
| Dev chunk files (`node_modules/.vite/deps/`) | 5,886 | 6 |
| Dev deps cache size | 103 MB | 7.9 MB |
| Modules transformed (`npm run build`) | 7,055 | 1,179 |
| Prod bundle | 478.49 kB | 478.49 kB (identical) |

The prod bundle being byte-identical is the proof that this change is behavior-neutral
where things were already fast.

## Gotchas

**Use a default import.** Each per-icon module ends in `export { IconCode as default }` —
there is no named export. A named import (`import { IconCode } from ".../IconCode.mjs"`)
type-checks fine against the wildcard declaration below but is `undefined` at runtime,
and React fails only when that component renders.

**Types come from a shim.** The package ships type declarations only for its barrel
entry; the per-icon `.mjs` files are untyped, so `tsc` errors with TS7016 on a deep
import. `src/types/tabler-icons.d.ts` declares the shape:

```ts
declare module "@tabler/icons-react/dist/esm/icons/*.mjs" {
    import type { Icon } from "@tabler/icons-react";
    const icon: Icon;
    export default icon;
}
```

The `Icon` type import is erased at compile time, so it costs no runtime code. If you
deep-import an icon and `tsc` still complains, check that this file is inside
`tsconfig.app.json`'s `include`.

**Verifying a change here.** `npm run build` alone does not catch the default-vs-named
mistake. Confirm an icon actually renders:

```bash
node --input-type=module -e "
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import Icon from '@tabler/icons-react/dist/esm/icons/IconDownload.mjs';
console.log(renderToStaticMarkup(createElement(Icon, { size: 20 })).startsWith('<svg'));
"
```

To re-measure the dev cost, `rm -rf node_modules/.vite`, start `npm run dev`, then count
`ls node_modules/.vite/deps/ | grep -c '^chunk-.*\.js$'`. Single digits is healthy;
thousands means a barrel import crept back in.

## If a barrel import creeps back

Grep catches most of it, but note that multi-line imports hide from a naive
`grep "import.*tabler"` — search for the specifier alone:

```bash
grep -rn '"@tabler/icons-react"' src/
```

That should return **no hits**. Any match is a barrel import and costs the full ~5s.
