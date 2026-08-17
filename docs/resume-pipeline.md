# Resume pipeline

`public/resume.tex` is the single source of truth for **both** the downloadable PDF and
the `/resume` page. Nothing about the resume is duplicated in TSX — edit the `.tex` and
both outputs follow.

```
public/resume.tex
   ├── tectonic ──────────────→ public/david-cai-resume.pdf   (download button)
   └── ?raw import → parser ──→ /resume page                  (styled HTML)
```

## Files

| File | Role |
| --- | --- |
| `public/resume.tex` | The resume. Edit this and nothing else. |
| `public/david-cai-resume.pdf` | Compiled output. Committed, because it is served statically. |
| `src/helper/parseResume.ts` | Parses the template's macros into a typed tree. |
| `src/data/resume.ts` | Imports the `.tex` via Vite `?raw` and exports the parsed result. |
| `src/pages/Resume.tsx` | Renders the parsed tree with the page's Tailwind styles. |

The PDF filename is `david-cai-resume.pdf`, not `resume.pdf`, because the download button
uses the `download` attribute — the filename is what lands in a visitor's Downloads folder.

## Editing the resume

1. Edit `public/resume.tex`.
2. The `/resume` page updates on save (Vite hot-reloads the `?raw` import).
3. Rebuild the PDF — **this is not automatic**:

```bash
tectonic public/resume.tex --outdir /tmp && cp /tmp/resume.pdf public/david-cai-resume.pdf
```

If you skip step 3 the page and the PDF disagree. That drift is the exact problem this
pipeline exists to prevent, so rebuild before committing.

### Why tectonic works here

The template is Jake Gutierrez's, which uses `\input{glyphtounicode}` and
`\pdfgentounicode=1` for ATS-parsable output. Those are pdftex-only primitives and crash
XeTeX/tectonic. Both are wrapped in `\ifdefined\pdfgentounicode` guards, so the file
builds under tectonic locally *and* keeps its original behavior under pdflatex/Overleaf.
Don't unwrap them.

## The one-page constraint

The resume must fit one page, and it currently sits at ~708pt of 722.7pt — about one line
of slack. Anything you add will likely overflow.

To measure without opening the PDF, ask TeX how full the last page is:

```bash
sed 's/^\\begin{document}/\\AtEndDocument{\\typeout{^^JUSED=\\the\\pagetotal ^^JGOAL=\\the\\textheight}}\n&/' \
  public/resume.tex > /tmp/probe.tex && tectonic --print /tmp/probe.tex 2>&1 | grep -E 'USED|GOAL'
```

If the document is one page, `USED` is how much of it is filled. If it spilled, `USED` is
how much of page 2 is occupied — i.e. how much you need to cut. The document is `10pt`
(line 8); it does not fit at `11pt`.

## Parser scope

`parseResume.ts` is **not** a general LaTeX parser. It understands exactly what this
resume uses. If you add a macro the parser doesn't know, it is silently dropped from the
page while still appearing in the PDF — the one failure mode worth watching for.

Supported:

- Structure: `\section`, `\resumeSubheading` (4 args), `\resumeProjectHeading` (2 args),
  `\resumeItem` / `\resumeSubItem` (1 arg).
- Inline: `\textbf`, `\textit`, `\emph`, `\underline`, `\href`, `\\` line breaks,
  `$|$`, escapes (`\%` `\&` `\$` `\#` `\_`), `--`/`---` dashes.
- Dropped deliberately: font/shape commands (`\small`, `\scshape`, `\Huge`, `\vspace`, …)
  and the list macros.

### Positional slots, not semantic names

`ResumeEntry` exposes `topLeft` / `topRight` / `bottomLeft` / `bottomRight` rather than
`school` / `date` / `company`. This is deliberate and should stay that way: the macro is
positional, and the resume passes different meanings to the same slots.

```latex
% Education:  {School}{Location}{Degree}{Date}
% Experience: {Title}{Date}{Company}{Location}
```

Any semantic naming would be correct for one section and wrong for the other.

### Sections without entry macros

Technical Skills is plain markup (`\textbf{Label}{: values} \\`) rather than entry macros.
The parser detects the absence of entry macros and falls back to parsing the section body
as inline content split on `\\`, exposed as `section.lines`. `Resume.tsx` renders
`lines` and `entries` both, so a section can use either shape.

## Gotchas

- **The `.tex` wins.** The page shows whatever the `.tex` says. The old hand-written HTML
  claimed a 3.5 GPA and Honors College that the `.tex` never had; those are gone. To show
  them on the page, add them to the `.tex` — which also puts them on the PDF.
- **The header is partly page chrome.** The name comes from the `.tex`, but the "Status:"
  line and `SocialLinks` are hardcoded in `Resume.tsx` — they aren't resume content.
- **`public/resume.tex` is imported from `src/`.** Vite discourages importing out of
  `public/`, but `?raw` resolves it fine and the file is already served publicly anyway.
  It costs ~9KB inlined into the bundle. Moving the `.tex` out of `public/` would avoid
  serving the source, at the cost of the PDF build path no longer sitting next to it.
