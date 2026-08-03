# Missing Tech Icons

Report of tech labels that render **without an icon**, generated from `data/portfolio-data.js` + the `TECH_ICONS` map in `scripts/tech-icons.js` + the files in `assets/images/tech/`.

- **45** unique labels appear on project cards; **15** of them have no icon mapping
- Skills & Technologies chips: **1** chip lacks an icon file (**CI/CD**); the spoken-language chips are emoji-only **by design**
- Every `TECH_ICONS` entry points to an existing file ✅ (no broken references)
- Skill chips resolve icons through the shared `TECH_ICONS` lookup ✅

---

## Project cards, labels without an icon

These labels appear in a project's `tech: [...]` array, but have no entry in the `TECH_ICONS` map in `scripts/tech-icons.js`, so the chip renders as text only.

| # | Label | Used by |
|---|-------|---------|
| 1 | 50+ components | createDOMBlocks |
| 2 | AI Agents | BA Team |
| 3 | Calendar API | CV, Viktor Bozzay |
| 4 | Canvas | Bull's Eye, Page on Mobile |
| 5 | DOMelemJS | createDOMBlocks, Rock Paper Scissors |
| 6 | ES Modules | Auditorium, CV, Viktor Bozzay |
| 7 | ESM | Page on Mobile |
| 8 | Glide.js | Pécs Coach |
| 9 | Monorepo | FACTS, FACTS Driver App |
| 10 | MVC | Szela Coaching |
| 11 | OOP | Bull's Eye |
| 12 | Real-time | Scolia Darts |
| 13 | Stripe | Realtime Space Travel |
| 14 | tsup | Arrganizer, DOMelemJS |
| 15 | Zero-dep | DOMelemJS |

> 💡 **Quick wins:** the remaining labels need either a new icon file first, or a deliberate mapping to a broader existing icon.

---

## `TECH_ICONS` entries not used by any project

Mapped, but no project's `tech: [...]` currently contains the label. These entries are still valid because the same lookup now also serves the Skills section.

| Label | File |
|-------|------|
| Chai | `chai.png` |
| Claude Code | `claude.svg` |
| Codex | `codex.svg` |
| Express.js | `express.svg` |
| FANUC | `fanuc.png` |
| Freebuff | `freebuff.png` |
| GitHub Pages | `github.svg` |
| KiloCode | `kilocode.png` |
| KRL | `kuka.png` |
| KUKA | `kuka.png` |
| LabVIEW | `labview.png` |
| Machine Vision | `machine_vision.svg` |
| MongoDB | `mongodb.svg` |
| NestJS | `NestJS.svg` |
| Next.js | `nextjs.svg` |
| Ollama | `ollama.svg` |
| OnRobot | `OnRobot.svg` |
| OpenCode | `opencode.svg` |
| Playwright | `playwright.svg` |
| REST API | `rest-api.svg` |
| SCSS | `scss.svg` |
| styled-components | `styled_components.svg` |
| Suno | `suno.svg` |
| Svelte | `svelte.svg` |
| TPL | `fanuc.png` |
| Universal Robot | `universal-robot.png` |
| WebSocket | `websocket.svg` |
| Zustand | `zustand.png` |

---

## Skills & Technologies chips, missing icons

| Group | Label | Note |
|-------|-------|------|
| Tooling & Build | **CI/CD** | No icon file exists yet; add `ci-cd.svg` (or similar) to `assets/images/tech/` and map it in `TECH_ICONS` |

**Spoken Languages** (Hungarian, German, English) intentionally have **no** icon, the flag emoji is part of the label itself.

---

## Reference

- `TECH_ICONS` map (`scripts/tech-icons.js`): entries are shared by Projects and Skills, all files exist ✅
- Skills chips with mapped icons: all referenced files exist ✅
