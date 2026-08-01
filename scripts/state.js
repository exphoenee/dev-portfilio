/* ============================================================
   VIEW STATE — the little mutable state the render modules share.
   The active language is NOT here: `locale` owns it (it detects,
   persists and falls back), so the render modules read locale.lang.
   ============================================================ */

import { THEME_DARK } from './config.js';

export const state = {
  theme: THEME_DARK,
  filter: 'all',
  tabs: {} // per-card tab memory: { [projectId]: 'functional' | 'technical' }
};

export function tabFor(id) {
  return state.tabs[id] || 'functional';
}
