// resume.tex is the single source of truth for both the downloadable PDF and the
// /resume page. Vite inlines the file at build time, so editing the .tex updates
// the page (and hot-reloads in dev) with no duplication to keep in sync.
import resumeSource from "../../public/resume.tex?raw";
import { parseResume } from "../helper/parseResume";

export const resume = parseResume(resumeSource);
