// @tabler/icons-react ships types only for its barrel entry, but importing icons from
// the barrel costs ~5900 dev requests (see any icon import site). The per-icon modules
// are untyped, so declare their shape here: each one default-exports a single Icon.
// The `Icon` type import is erased at compile time, so this pulls in no runtime code.
declare module "@tabler/icons-react/dist/esm/icons/*.mjs" {
    import type { Icon } from "@tabler/icons-react";
    const icon: Icon;
    export default icon;
}
