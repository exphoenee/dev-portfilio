/* ============================================================
   TRANSLATION PASSES

   Two distinct jobs that used to be one function:

   renderAll()       , first paint: build every data-driven section.
   applyTranslations(), language switch: swap the static labels and
                         patch the section text in place.

   The switch deliberately does NOT rebuild the sections. Replacing the
   innerHTML of four containers threw away 21 loaded <img> nodes, reset
   the reveal state (every card faded in again), moved focus to <body>
   if it sat inside a card, and forced a full layout pass, all to
   change text the browser could keep in place.
   ============================================================ */

import { $, $$, t } from '../dom.js';
import { locale } from '../locale.js';
import { renderProjects, updateProjectsText } from './projects.js';
import { renderTimeline, updateTimelineText } from './timeline.js';
import { renderSkills, updateSkillsText } from './skills.js';
import { renderContact, updateContactText } from './contact.js';
import { renderTerminal } from './terminal.js';
import { restartTyping } from '../ui/typed.js';
import { bkUpdateText } from '../modals/booking.js';

/* UI language (BCP-47) → Open Graph locale (e.g. en → en_US). */
const OG_LOCALES = {
  en: 'en_US',
  de: 'de_DE',
  hu: 'hu_HU',
  fr: 'fr_FR',
  it: 'it_IT',
  es: 'es_ES'
};

/* The static markup: [data-i18n] and its placeholder/aria variants. */
function applyStaticLabels() {
  document.documentElement.lang = locale.lang;
  const ogLocale = $('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', OG_LOCALES[locale.lang] || OG_LOCALES.en);
  $$('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (el.tagName === 'META') {
      el.setAttribute('content', t(key));
    } else if (el.tagName === 'TITLE') {
      el.textContent = t(key);
    } else {
      el.innerHTML = t(key);
    }
  });
  $$('.lang-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === locale.lang));
  $$('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  $$('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
}

export function renderAll() {
  applyStaticLabels();
  renderProjects();
  renderTimeline();
  renderSkills();
  renderContact();
  // The terminal is decorative and language-independent (project ids and
  // computed counts), so it is built once and never touched again.
  renderTerminal();
  restartTyping();
}

export function applyTranslations() {
  applyStaticLabels();
  updateProjectsText();
  updateTimelineText();
  updateSkillsText();
  updateContactText();
  bkUpdateText();
  restartTyping();
}
