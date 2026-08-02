# Missing Tech Icons

Report of tech labels that render **without an icon**, generated from `data/portfolio-data.js` + the `TECH_ICONS` map in `scripts/render/projects.js` + the files in `assets/images/tech/`.

- **45** unique labels appear on project cards; **18** of them have no icon mapping
- Skills & Technologies chips: **1** chip lacks an icon file (**CI/CD**); the spoken-language chips are emoji-only **by design**
- Every `TECH_ICONS` entry points to an existing file ✅ (no broken references)
- Every skills chip `icon` path points to an existing file ✅

---

## Project cards, labels without an icon

These labels appear in a project's `tech: [...]` array, but have no entry in the `TECH_ICONS` map in `scripts/render/projects.js`, so the chip renders as text only.

| # | Label | Used by |
|---|-------|---------|
| 1 | 50+ components | createDOMBlocks |
| 2 | AI Agents | BA Team |
| 3 | Calendar API | CV, Viktor Bozzay |
| 4 | Canvas | Bull's Eye, Page on Mobile |
| 5 | DOMelemJS | createDOMBlocks, Rock Paper Scissors, TypeScript |
| 6 | ES Modules | Auditorium, CV, Viktor Bozzay |
| 7 | ESM | Page on Mobile |
| 8 | Firebase | Realtime Space Travel |
| 9 | Glide.js | Pécs Coach |
| 10 | MVC | Szela Coaching |
| 11 | Monorepo | FACTS, FACTS Driver App |
| 12 | OOP | Bull's Eye |
| 13 | Python | BA Team |
| 14 | Real-time | Scolia Darts |
| 15 | Responsive | FundMyPitch |
| 16 | Stripe | Realtime Space Travel |
| 17 | Zero-dep | DOMelemJS |
| 18 | tsup | Arrganizer, DOMelemJS |

> 💡 **Quick wins:** two labels already have a matching file in `assets/images/tech/`, just add them to `TECH_ICONS`:
> `Firebase: 'firebase.svg'` (Realtime Space Travel) and `Python: 'python.svg'` (BA Team).
> The rest (Monorepo, Stripe, Glide.js, tsup, Canvas, ESM, …) need a new icon file first.

---

## `TECH_ICONS` entries not used by any project

Mapped, but no project's `tech: [...]` currently contains the label, harmless, but dead until a project uses it.

| Label | File |
|-------|------|
| Chai | `chai.png` |
| GitHub Pages | `github.svg` |

---

## Skills & Technologies chips, missing icons

| Group | Label | Note |
|-------|-------|------|
| Tooling & Build | **CI/CD** | No icon file exists yet, add `ci-cd.svg` (or similar) to `assets/images/tech/` and set `icon` on the chip |

**Spoken Languages** (Hungarian, German, English) intentionally have **no** icon, the flag emoji is part of the label itself.

---

## Reference

- `TECH_ICONS` map (`scripts/render/projects.js`): **29** entries, AOS, Bootstrap, CSS, Chai, Express, Formspree, Gemini AI, GitHub Pages, HERE Maps, HTML, JavaScript, Jest, Mocha, MySQL, Node.js, PHP, PNPM, React, Redux, Swagger, TensorFlow.js, TypeScript, VS Code, Vanilla JS, Vite, Vitest, Webpack, i18next, npm, all files exist ✅
- Skills chips with icons: all referenced files exist ✅
