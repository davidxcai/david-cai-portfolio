// Parses the subset of LaTeX used by resume.tex (Jake Gutierrez's template) so the
// .tex file stays the single source of truth for both the PDF and the /resume page.
// This is not a general LaTeX parser: it understands the template's custom macros
// and the handful of inline commands the resume actually uses.

export type InlineNode =
    | { type: "text"; value: string }
    | { type: "bold"; children: InlineNode[] }
    | { type: "italic"; children: InlineNode[] }
    | { type: "underline"; children: InlineNode[] }
    | { type: "link"; href: string; children: InlineNode[] }
    | { type: "br" };

// Slots are positional because the macro is: the template renders #1 top-left,
// #2 top-right, #3 bottom-left, #4 bottom-right regardless of what they mean.
// Education passes {School}{Location}{Degree}{Date}; Experience passes
// {Title}{Date}{Company}{Location}. Naming them semantically would be wrong for one of them.
export type ResumeEntry = {
    kind: "subheading" | "project";
    topLeft: InlineNode[];
    topRight: InlineNode[];
    bottomLeft: InlineNode[];
    bottomRight: InlineNode[];
    items: InlineNode[][];
};

export type ResumeSection = {
    title: string;
    entries: ResumeEntry[];
    // Sections built from plain markup instead of entry macros (Technical Skills)
    // keep their content as lines split on `\\`.
    lines: InlineNode[][];
};

export type Resume = {
    name: string;
    sections: ResumeSection[];
};

type Group = { content: string; next: number };

function stripComments(src: string): string {
    let out = "";
    for (let i = 0; i < src.length; i++) {
        const c = src[i];
        if (c === "\\" && i + 1 < src.length) {
            out += c + src[i + 1];
            i++;
            continue;
        }
        if (c === "%") {
            const nl = src.indexOf("\n", i);
            if (nl === -1) break;
            out += "\n";
            i = nl;
            continue;
        }
        out += c;
    }
    return out;
}

function readGroup(src: string, start: number): Group | null {
    let i = start;
    while (i < src.length && /\s/.test(src[i])) i++;
    if (src[i] !== "{") return null;
    let depth = 0;
    for (let j = i; j < src.length; j++) {
        const c = src[j];
        if (c === "\\") {
            j++;
            continue;
        }
        if (c === "{") depth++;
        else if (c === "}") {
            depth--;
            if (depth === 0) return { content: src.slice(i + 1, j), next: j + 1 };
        }
    }
    return null;
}

function readGroups(src: string, start: number, count: number): { groups: string[]; next: number } | null {
    const groups: string[] = [];
    let pos = start;
    for (let n = 0; n < count; n++) {
        const g = readGroup(src, pos);
        if (!g) return null;
        groups.push(g.content);
        pos = g.next;
    }
    return { groups, next: pos };
}

function normalizeText(value: string): string {
    return value
        .replace(/---/g, "—")
        .replace(/--/g, "–")
        .replace(/``/g, "“")
        .replace(/''/g, "”")
        .replace(/~/g, " ")
        .replace(/\s+/g, " ");
}

const WRAPPERS: Record<string, "bold" | "italic" | "underline"> = {
    textbf: "bold",
    textit: "italic",
    emph: "italic",
    underline: "underline",
};

// Commands whose single argument should be dropped entirely.
const DROP_WITH_ARG = new Set(["vspace", "hspace", "scalebox", "raisebox"]);

export function parseInline(src: string): InlineNode[] {
    const nodes: InlineNode[] = [];
    let buffer = "";

    const flush = () => {
        if (!buffer) return;
        const value = normalizeText(buffer);
        if (value) nodes.push({ type: "text", value });
        buffer = "";
    };

    let i = 0;
    while (i < src.length) {
        const c = src[i];

        if (c === "\\") {
            const next = src[i + 1];
            if (next === "\\") {
                flush();
                nodes.push({ type: "br" });
                i += 2;
                // A `\\` may be followed by spacing directives; let the loop handle them.
                continue;
            }
            if (next && "&%$#_{}".includes(next)) {
                buffer += next;
                i += 2;
                continue;
            }
            const match = /^[a-zA-Z]+/.exec(src.slice(i + 1));
            if (!match) {
                i += 2;
                continue;
            }
            const name = match[0];
            let pos = i + 1 + name.length;

            const wrapper = WRAPPERS[name];
            if (wrapper) {
                const g = readGroup(src, pos);
                if (g) {
                    flush();
                    nodes.push({ type: wrapper, children: parseInline(g.content) });
                    i = g.next;
                    continue;
                }
            } else if (name === "href") {
                const read = readGroups(src, pos, 2);
                if (read) {
                    flush();
                    nodes.push({
                        type: "link",
                        href: plainText(parseInline(read.groups[0])),
                        children: parseInline(read.groups[1]),
                    });
                    i = read.next;
                    continue;
                }
            } else if (DROP_WITH_ARG.has(name)) {
                const g = readGroup(src, pos);
                if (g) {
                    i = g.next;
                    continue;
                }
            }

            // Unknown/among font-size and shape commands (\small, \scshape, \Huge, \item...).
            // Drop the command and the whitespace LaTeX would have gobbled after it.
            while (pos < src.length && src[pos] === " ") pos++;
            i = pos;
            continue;
        }

        if (c === "{") {
            const g = readGroup(src, i);
            if (g) {
                flush();
                nodes.push(...parseInline(g.content));
                i = g.next;
                continue;
            }
        }

        if (c === "$") {
            const end = src.indexOf("$", i + 1);
            if (end !== -1) {
                buffer += src.slice(i + 1, end).trim();
                i = end + 1;
                continue;
            }
        }

        buffer += c;
        i++;
    }

    flush();
    return trimEdges(nodes);
}

function trimEdges(nodes: InlineNode[]): InlineNode[] {
    const out = [...nodes];
    while (out.length && isBlank(out[0])) out.shift();
    while (out.length && isBlank(out[out.length - 1])) out.pop();
    const first = out[0];
    if (first?.type === "text") out[0] = { type: "text", value: first.value.replace(/^\s+/, "") };
    const last = out[out.length - 1];
    if (last?.type === "text") out[out.length - 1] = { type: "text", value: last.value.replace(/\s+$/, "") };
    return out;
}

function isBlank(node: InlineNode): boolean {
    return node.type === "text" && node.value.trim() === "";
}

export function plainText(nodes: InlineNode[]): string {
    return nodes
        .map((node) => {
            switch (node.type) {
                case "text":
                    return node.value;
                case "br":
                    return " ";
                default:
                    return plainText(node.children);
            }
        })
        .join("");
}

function splitLines(nodes: InlineNode[]): InlineNode[][] {
    const lines: InlineNode[][] = [];
    let current: InlineNode[] = [];
    for (const node of nodes) {
        if (node.type === "br") {
            lines.push(trimEdges(current));
            current = [];
            continue;
        }
        current.push(node);
    }
    lines.push(trimEdges(current));
    return lines.filter((line) => line.length > 0);
}

const ENTRY_MACRO = /\\(resumeSubheading|resumeProjectHeading|resumeItem|resumeSubItem)\b/g;

function parseSectionBody(body: string): { entries: ResumeEntry[]; lines: InlineNode[][] } {
    const entries: ResumeEntry[] = [];
    let current: ResumeEntry | null = null;
    let matched = false;

    ENTRY_MACRO.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = ENTRY_MACRO.exec(body))) {
        const name = match[1];
        const start = match.index + match[0].length;

        if (name === "resumeSubheading") {
            const read = readGroups(body, start, 4);
            if (!read) continue;
            matched = true;
            current = {
                kind: "subheading",
                topLeft: parseInline(read.groups[0]),
                topRight: parseInline(read.groups[1]),
                bottomLeft: parseInline(read.groups[2]),
                bottomRight: parseInline(read.groups[3]),
                items: [],
            };
            entries.push(current);
            ENTRY_MACRO.lastIndex = read.next;
        } else if (name === "resumeProjectHeading") {
            const read = readGroups(body, start, 2);
            if (!read) continue;
            matched = true;
            current = {
                kind: "project",
                topLeft: parseInline(read.groups[0]),
                topRight: parseInline(read.groups[1]),
                bottomLeft: [],
                bottomRight: [],
                items: [],
            };
            entries.push(current);
            ENTRY_MACRO.lastIndex = read.next;
        } else {
            const g = readGroup(body, start);
            if (!g) continue;
            matched = true;
            current?.items.push(parseInline(g.content));
            ENTRY_MACRO.lastIndex = g.next;
        }
    }

    // Sections like Technical Skills have no entry macros; treat the body as inline
    // markup and split it on the `\\` line breaks the template uses.
    const lines = matched ? [] : splitLines(parseInline(stripListMacros(body)));
    return { entries, lines };
}

function stripListMacros(body: string): string {
    return body.replace(/\\(begin|end)\{itemize\}(\[[^\]]*\])?/g, "").replace(/\\resume[A-Za-z]*/g, "");
}

export function parseResume(source: string): Resume {
    const src = stripComments(source);

    const docStart = src.indexOf("\\begin{document}");
    const docEnd = src.indexOf("\\end{document}");
    const body = src.slice(docStart === -1 ? 0 : docStart + "\\begin{document}".length, docEnd === -1 ? src.length : docEnd);

    // Name lives in the \begin{center} header block as the first bold run.
    let name = "";
    const centerStart = body.indexOf("\\begin{center}");
    const centerEnd = body.indexOf("\\end{center}");
    if (centerStart !== -1 && centerEnd !== -1) {
        const header = parseInline(body.slice(centerStart + "\\begin{center}".length, centerEnd));
        const bold = header.find((node) => node.type === "bold");
        if (bold && bold.type === "bold") name = plainText(bold.children).trim();
    }

    const sections: ResumeSection[] = [];
    const sectionRe = /\\section\s*\{/g;
    const starts: { title: string; from: number }[] = [];
    let m: RegExpExecArray | null;
    while ((m = sectionRe.exec(body))) {
        const g = readGroup(body, m.index + "\\section".length);
        if (!g) continue;
        starts.push({ title: plainText(parseInline(g.content)).trim(), from: g.next });
        sectionRe.lastIndex = g.next;
    }

    starts.forEach((section, index) => {
        const end = index + 1 < starts.length ? body.lastIndexOf("\\section", starts[index + 1].from) : body.length;
        const { entries, lines } = parseSectionBody(body.slice(section.from, end));
        sections.push({ title: section.title, entries, lines });
    });

    return { name, sections };
}
