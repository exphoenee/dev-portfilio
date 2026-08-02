/* ============================================================
   LOCALE MANAGER — mirrors the CV project's scripts/locale.js
   Per-language UI labels live in data/locales/*-page.js; this module
   detects the language, persists it and exposes t().
   ============================================================ */

import { EN_PAGE } from '../data/locales/en-page.js';
import { DE_PAGE } from '../data/locales/de-page.js';
import { HU_PAGE } from '../data/locales/hu-page.js';
import { FR_PAGE } from '../data/locales/fr-page.js';
import { IT_PAGE } from '../data/locales/it-page.js';
import { ES_PAGE } from '../data/locales/es-page.js';
import { LANG_KEY } from './config.js';

const PAGE_LABELS = {
  en: EN_PAGE.labels,
  de: DE_PAGE.labels,
  hu: HU_PAGE.labels,
  fr: FR_PAGE.labels,
  it: IT_PAGE.labels,
  es: ES_PAGE.labels,
};

export const AVAILABLE_LANGS = Object.keys(PAGE_LABELS);

export const LANG_PARAM = 'lang';

const STORAGE_KEY = LANG_KEY;

/* A ?lang= in the URL wins over the stored preference, so a shared link
   opens in the language it was shared in. */
function _langFromUrl() {
  if (typeof window === 'undefined') return null;
  const value = new URLSearchParams(window.location.search).get(LANG_PARAM);
  return value && PAGE_LABELS[value] ? value : null;
}

function _detectBrowserLang() {
  const list =
    typeof navigator !== 'undefined'
      ? navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language]
      : [];
  for (const l of list) {
    const code = String(l).split('-')[0].toLowerCase();
    if (PAGE_LABELS[code]) return code;
  }
  return 'en';
}

class LocaleManager {
  constructor() {
    const saved =
      typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    this._lang = _langFromUrl() || (saved && PAGE_LABELS[saved] ? saved : _detectBrowserLang());
    if (typeof document !== 'undefined') document.documentElement.dataset.lang = this._lang;
  }

  get lang() {
    return this._lang;
  }

  setLang(lang) {
    if (!PAGE_LABELS[lang]) return;
    this._lang = lang;
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, lang);
    if (typeof document !== 'undefined') document.documentElement.dataset.lang = lang;
    this._syncUrl();
  }

  /* Keep ?lang= in the address bar so the current view is linkable.
     replaceState, not pushState: a language switch is not a navigation
     step the back button should have to walk through. */
  _syncUrl() {
    if (typeof window === 'undefined' || !window.history?.replaceState) return;
    const url = new URL(window.location.href);
    if (url.searchParams.get(LANG_PARAM) === this._lang) return;
    url.searchParams.set(LANG_PARAM, this._lang);
    window.history.replaceState(null, '', url);
  }

  t(key) {
    return PAGE_LABELS[this._lang]?.[key] ?? PAGE_LABELS.en[key] ?? key;
  }
}

export const locale = new LocaleManager();
