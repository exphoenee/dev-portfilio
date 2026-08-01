/* ============================================================
   VIEW STATE — the little mutable state the render modules share.
   ============================================================ */

import { locale } from './locale.js';
import { THEME_DARK } from './config.js';

export const state = {
  lang: locale.lang,
  theme: THEME_DARK,
  filter: 'all',
  tabs: {} // per-card tab memory: { [projectId]: 'functional' | 'technical' }
};

export function tabFor(id) {
  return state.tabs[id] || 'functional';
}
