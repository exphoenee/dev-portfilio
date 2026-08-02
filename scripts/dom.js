/* ============================================================
   DOM HELPERS — shared by every view module.
   `t` lives here too so a module needs one import for both.
   ============================================================ */

import { locale } from './locale.js';

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
export const t = (key) => locale.t(key);

/* Escape text interpolated into a template string, so that the markup path
   and the textContent path used by the language switch render identically.
   Covers attribute values too — a quote in a title would otherwise end the
   attribute early. Icon markup (CONTACT[].icon, LINK_ICONS) is deliberate
   HTML and stays raw. */
const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export const esc = (value) => String(value).replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
