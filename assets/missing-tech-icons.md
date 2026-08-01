# Missing Tech Icons

Report of tech labels that render **without an icon** — generated from `data/portfolio-data.js` + the `TECH_ICONS` map in `scripts/main.js` + the files in `assets/images/tech/`.

- **37** unique labels on project cards have no icon mapping
- Skills & Technologies chips: **1** chip lacks an icon file (**CI/CD**); the spoken-language chips are emoji-only **by design**
- Every `TECH_ICONS` entry points to an existing file ✅ (no broken references)

---

## Project cards — labels without an icon

These labels appear in a project's `tech: [...]` array, but have no entry in the `TECH_ICONS` map in `scripts/main.js`, so the chip renders as text only.

| # | Label | Used by |
|---|-------|---------|
| 1 | 50+ components | createDOMBlocks |
| 2 | AI | AI4Test |
| 3 | AI Agents | BA Team |
| 4 | AOS | Pécs Coach |
| 5 | Bootstrap | Pécs Coach, Szela Coaching |
| 6 | Calendar API | CV — Viktor Bozzay |
| 7 | Canvas | Bull's Eye |
| 8 | Canvas 2D | Page on Mobile |
| 9 | DOMelemJS | createDOMBlocks, Rock Paper Scissors — TypeScript |
| 10 | Docs | BA Team |
| 11 | ES Modules | Auditorium, CV — Viktor Bozzay |
| 12 | ESM | Page on Mobile |
| 13 | Fintech | FundMyPitch |
| 14 | Firebase | Realtime Space Travel |
| 15 | Formspree | CV — Viktor Bozzay |
| 16 | Gemini AI | AGX AI Translation Helper |
| 17 | GitHub Pages | BA Team |
| 18 | Glide.js | Pécs Coach |
| 19 | HERE Maps | FACTS Driver App |
| 20 | MVC | Szela Coaching |
| 21 | Markdown | BA Team |
| 22 | Mocha | Arrganizer |
| 23 | Monorepo | FACTS Driver App |
| 24 | OOP | Bull's Eye |
| 25 | Real-time | Scolia Darts |
| 26 | Responsive | FundMyPitch, Pécs Coach, Scolia Darts |
| 27 | Secure Login | FACTS |
| 28 | Session auth | Szela Coaching |
| 29 | Terser | RomanNumbersJS |
| 30 | Test Automation | AI4Test |
| 31 | Web Client | Scolia Darts |
| 32 | Web Platform | FundMyPitch |
| 33 | Web Portal | FACTS |
| 34 | WebP | Page on Mobile |
| 35 | Zero-dep | DOMelemJS |
| 36 | i18next | AGX AI Translation Helper |
| 37 | tsup | Arrganizer, DOMelemJS |

> 💡 **Quick win:** **Firebase** already has `assets/images/tech/firebase.svg` (used in the Skills section) — adding `Firebase: 'firebase.svg'` to `TECH_ICONS` in `scripts/main.js` gives the Realtime Space Travel card its icon immediately.

---

## Skills & Technologies chips — missing icons

| Group | Label | Note |
|-------|-------|------|
| Tooling & Build | **CI/CD** | No icon file exists yet — add `ci-cd.svg` (or similar) to `assets/images/tech/` and set `icon` on the chip |

**Spoken Languages** (Hungarian, German, English) intentionally have **no** icon — the flag emoji is part of the label itself.

---

## Reference

- `TECH_ICONS` map (`scripts/main.js`): 18 entries — React, TypeScript, Vanilla JS, VS Code, Vite, Vitest, Jest, Webpack, HTML, CSS, JavaScript, Node.js, Express, Swagger, npm, PHP, MySQL, TensorFlow.js — all files exist ✅
- Skills chips with icons: all referenced files exist ✅
