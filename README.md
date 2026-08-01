# Developer Portfolio

A clean, interactive developer portfolio built with **vanilla HTML, CSS and JavaScript** — no frameworks, no build tools.

![Portfolio features](assets/images/projects/cv.jpg)

## ✨ Features

- 🌗 **Light / Dark mode** — respects your system preference, toggle saved in `localStorage`
- 🌍 **6 languages** — English, Deutsch, Magyar, Français, Italiano, Español (auto-detected, switchable)
- 📦 **19 real projects** — data collected from the actual repositories (e.g. AI4Test, FACTS Driver App, Szela Coaching)
- 🖼️ **Project illustrations** — logos and screenshots from each project
- 🔀 **Functional / Technical tabs** — every project card switches between a functional and a technical description
- 🗂️ **Category filters** — Libraries, Games, Apps & Tools, APIs, Websites
- 🧩 **Template-driven architecture** — all content is rendered from a central data file (`data.js`) plus per-language locale files (`locales/*.js`), mirroring the CV project
- ⌨️ **Typing effect, animated counters, scroll reveals, terminal hero**
- 📱 **Fully responsive** — mobile menu, fluid grid

## 🏗️ Project structure (templating — mirrors the CV project)

```
dev-portfilio/
├── data/
│   ├── portfolio-data.js   ← single source of truth: PROJECTS, TIMELINE, SKILLS, CONTACT
│   └── locales/
│       ├── en-page.js      ← UI labels per language (CV-style *-page.js)
│       ├── de-page.js
│       ├── hu-page.js
│       ├── fr-page.js
│       ├── it-page.js
│       └── es-page.js
├── scripts/
│   ├── config.js           ← shared constants (theme/lang keys)
│   ├── locale.js           ← LocaleManager: language detection, storage, t()
│   └── main.js             ← view script: renders everything from data + locales
├── styles/
│   └── portfolio.css       ← all styles
├── index.html              ← thin shell; skills & contact are rendered by JS
└── assets/images/
    ├── projects/        ← project images (19)
    ├── tech/            ← tech icons
    └── favicon.svg
```

## 🚀 Hosting on GitHub Pages

1. Create a repository on GitHub (e.g. `dev-portfolio`).
2. Push this folder to the repository:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/dev-portfolio.git
   git push -u origin main
   ```

3. Go to **Settings → Pages** in the repository.
4. Under **Build and deployment**, select:
   - Source: **Deploy from a branch**
   - Branch: `main` / root (`/`)
5. Click **Save** — your site will be live at `https://YOUR_USERNAME.github.io/dev-portfolio/`.

> 💡 **Tip:** for a custom domain, add a `CNAME` file containing your domain and configure the DNS record.

## ✏️ Customizing

- **Projects** — edit the `PROJECTS` array in `data/portfolio-data.js` (name, category, image, tech, links and descriptions in all 6 languages).
- **Skills** — the `SKILLS` array in `data/portfolio-data.js` is synced from the CV repo's `cv/cv-data.js` `skillGroups` (primary, backend, testing, tooling, ai) + spoken languages; chips carry optional icons from `assets/images/tech`.
- **Contact cards** — edit the `CONTACT` array in `data/portfolio-data.js`.
- **Career timeline** — edit the `TIMELINE` array in `data/portfolio-data.js`.
- **UI labels** (nav, hero, buttons, footer…) — edit the matching key in each `data/locales/*-page.js` file.
- **Colors** — tweak the CSS variables in the `:root` / theme blocks of `style.css`.

> The portfolio uses ES modules (`<script type="module">`), so serve it over HTTP (e.g. `npx serve` or GitHub Pages) — opening `index.html` directly via `file://` blocks module loading.

## 🛠️ Tech Stack

| Layer      | Technology                            |
|------------|---------------------------------------|
| Markup     | Semantic HTML5                        |
| Styling    | CSS3 (custom properties, animations)  |
| Logic      | Vanilla JavaScript (ES6+)             |
| Fonts      | Sora, Inter, JetBrains Mono (Google Fonts) |
| Hosting    | GitHub Pages                          |

## 📄 License

MIT — free to use and modify.
