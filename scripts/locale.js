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

export const AVAILABLE_LANGS = ['en', 'de', 'hu', 'fr', 'it', 'es'];

const STORAGE_KEY = LANG_KEY;

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
    this._lang = saved && PAGE_LABELS[saved] ? saved : _detectBrowserLang();
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
  }

  t(key) {
    return PAGE_LABELS[this._lang]?.[key] ?? PAGE_LABELS.en[key] ?? key;
  }
}

export const locale = new LocaleManager();
