/* ============================================================
   Shared tech icon lookup.

   Maps a chip label to its file in assets/images/tech/.
   Keep labels here, not in section-specific data, so Projects and Skills
   render badges with the same logic.
   ============================================================ */

const TECH_ICON_DIR = 'assets/images/tech';

export const TECH_ICONS = {
  AOS: 'AOS.png',
  Bootstrap: 'bootstrap.svg',
  Chai: 'chai.png',
  'CI/CD': 'cicd.png',
  Storybook: 'storybook.png',
  Stripe: 'Stripe.png',
  'Claude Code': 'claude.svg',
  Codex: 'codex.svg',
  CSS: 'css.svg',
  DOMelemJS: 'domelemjs.jpg',
  Express: 'express.svg',
  'Express.js': 'express.svg',
  FANUC: 'fanuc.png',
  Firebase: 'firebase.svg',
  Formspree: 'formspree.webp',
  Freebuff: 'freebuff.png',
  'Gemini AI': 'gemini.png',
  'GitHub Pages': 'github.svg',
  'HERE Maps': 'heremap.png',
  HTML: 'html.svg',
  i18next: 'i18next.avif',
  JavaScript: 'javascript.svg',
  Jest: 'jest.svg',
  KiloCode: 'kilocode.png',
  KRL: 'kuka.png',
  KUKA: 'kuka.png',
  LabVIEW: 'labview.png',
  'Machine Vision': 'machine_vision.svg',
  Mocha: 'mocha.svg',
  MongoDB: 'mongodb.svg',
  MySQL: 'mysql.svg',
  NestJS: 'NestJS.svg',
  NextJS: 'next.js.svg',
  'Next.js': 'nextjs.svg',
  'Node.js': 'nodejs.svg',
  npm: 'npm.svg',
  Ollama: 'ollama.svg',
  OnRobot: 'OnRobot.svg',
  OpenCode: 'opencode.svg',
  PHP: 'php.svg',
  Playwright: 'playwright.svg',
  PNPM: 'pnpm.svg',
  Python: 'python.svg',
  React: 'react.svg',
  Redux: 'Redux.svg',
  'REST API': 'rest-api.svg',
  SCSS: 'scss.svg',
  'styled-components': 'styled_components.svg',
  Suno: 'suno.svg',
  Svelte: 'svelte.svg',
  SvelteKit: 'svelte.svg',
  Swagger: 'swagger.svg',
  'TensorFlow.js': 'Tensorflow.svg',
  TPL: 'fanuc.png',
  TypeScript: 'typescript.svg',
  'Universal Robot': 'universal-robot.png',
  'Vanilla JS': 'javascript.svg',
  Vite: 'vite.svg',
  Vitest: 'vitest.svg',
  'VS Code': 'vscode.svg',
  Webpack: 'webpack.svg',
  WebSocket: 'websocket.svg',
  Zustand: 'zustand.png'
};

export function techIconSrc(label) {
  const file = TECH_ICONS[label];
  return file ? `${TECH_ICON_DIR}/${file}` : '';
}
