/* ============================================================
   THEME — persistence and browser-chrome colour sync.

   The theme is resolved once, before first paint, by the inline
   bootstrap in index.html (that is what prevents the flash).
   This module does not repeat that decision: it reads the result.

   Colours are not duplicated here either — the browser chrome
   colour is simply the page background, so it is read from the
   --bg custom property of the active theme.
   ============================================================ */

import { $$ } from '../dom.js';
import { state } from '../state.js';
import { THEME_KEY, THEME_DARK, THEME_LIGHT } from '../config.js';

function isTheme(value) {
  return value === THEME_LIGHT || value === THEME_DARK;
}

/* Fallback for when the inline bootstrap is absent (it mirrors this logic). */
export function detectTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (isTheme(stored)) return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? THEME_LIGHT : THEME_DARK;
}

function syncChromeColor() {
  const color = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
  if (!color) return;
  $$('meta[name="theme-color"]').forEach((el) => el.setAttribute('content', color));
}

export function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  localStorage.setItem(THEME_KEY, state.theme);
  syncChromeColor();
}

export function initTheme() {
  const preResolved = document.documentElement.dataset.theme;
  state.theme = isTheme(preResolved) ? preResolved : detectTheme();
  document.documentElement.dataset.theme = state.theme;
}

export function toggleTheme() {
  state.theme = state.theme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
  applyTheme();
}
