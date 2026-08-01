/* ============================================================
   DOM HELPERS — shared by every view module.
   `t` lives here too so a module needs one import for both.
   ============================================================ */

import { locale } from './locale.js';

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
export const t = (key) => locale.t(key);
