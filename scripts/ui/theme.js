/* ============================================================
   THEME — detection, persistence and browser-chrome colour sync.
   NOTE: the pre-paint IIFE in index.html mirrors THEME_COLORS;
   keep the two in sync if a colour changes.
   ============================================================ */

import { $$ } from '../dom.js';
import { state } from '../state.js';
import { THEME_KEY, THEME_DARK, THEME_LIGHT } from '../config.js';

const THEME_COLORS = {
  [THEME_LIGHT]: '#f6f7fb',
  [THEME_DARK]: '#0b0d1a'
};

export function detectTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === THEME_LIGHT || stored === THEME_DARK) return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? THEME_LIGHT : THEME_DARK;
}

export function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  localStorage.setItem(THEME_KEY, state.theme);
  // Keep the browser chrome color (theme-color meta) in sync with the manual toggle.
  const color = THEME_COLORS[state.theme];
  $$('meta[name="theme-color"]').forEach((el) => el.setAttribute('content', color));
}

export function initTheme() {
  state.theme = detectTheme();
  document.documentElement.dataset.theme = state.theme;
}

export function toggleTheme() {
  state.theme = state.theme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
  applyTheme();
}
