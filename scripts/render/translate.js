/* ============================================================
   APPLY UI TRANSLATIONS — swaps the static labels, then re-renders
   every data-driven section in the newly selected language.
   ============================================================ */

import { $, $$, t } from '../dom.js';
import { state } from '../state.js';
import { renderProjects } from './projects.js';
import { renderTimeline } from './timeline.js';
import { renderSkills } from './skills.js';
import { renderContact } from './contact.js';
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

export function applyTranslations() {
  document.documentElement.lang = state.lang;
  const ogLocale = $('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', OG_LOCALES[state.lang] || OG_LOCALES.en);
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
  $$('.lang-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === state.lang));
  $$('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  $$('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  renderProjects();
  renderTimeline();
  renderSkills();
  renderContact();
  renderTerminal();
  bkUpdateText();
  restartTyping();
}
