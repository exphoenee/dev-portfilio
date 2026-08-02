/* ============================================================
   Developer Portfolio, Viktor Bozzay
   Vanilla JS · no frameworks · ES Modules
   Entry point: wiring only. Everything it wires lives in
   ui/ (chrome), render/ (data-driven sections) and modals/.
   ============================================================ */

import { $, $$ } from './dom.js';
import { locale } from './locale.js';

import { initTheme, toggleTheme } from './ui/theme.js';
import { revealIn } from './ui/reveal.js';
import { initStats } from './ui/stats.js';
import { initScrollSpy } from './ui/scrollspy.js';

import { renderAll, applyTranslations } from './render/translate.js';
import { initProjectCards } from './render/projects.js';

import { initEscapeHandling } from './modals/modal.js';
import { loadTurnstileScript } from './modals/turnstile.js';
import { initImageModal } from './modals/image.js';
import { initBookingModal, openBookingModal } from './modals/booking.js';
import { initHireModal, openHireModal } from './modals/hire.js';

function initNavbar() {
  const hamburger = $('#hamburger');
  const navLinks = $('#nav-links');
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });
  $$('#nav-links a').forEach((a) => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  }));
}

function initBackToTop() {
  const btn = $('#back-to-top');
  const onScroll = () => btn.classList.toggle('visible', window.scrollY > 500);
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initLangSwitcher() {
  $$('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      locale.setLang(btn.dataset.lang);
      applyTranslations();
    });
  });
}

function initFooterYear() {
  // "© 2026 …" while the current year is 2026, then "© 2026-2027 …" from 2027 on.
  const yearStart = 2026;
  const yearNow = new Date().getFullYear();
  $('#year').textContent = yearNow > yearStart ? `${yearStart}-${yearNow}` : String(yearStart);
}

function initModals() {
  loadTurnstileScript();
  // Registration order is the Escape priority: image → booking → hire.
  initImageModal();
  initBookingModal();
  initHireModal();
  initEscapeHandling();
  // Opening is delegated so JS-rendered contact cards work too.
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-open-hire]')) openHireModal();
    if (e.target.closest('[data-open-booking]')) openBookingModal();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderAll();

  initStats();
  // After renderAll: the section markup declares data-reveal, the rendered
  // cards add their own, and this one pass picks up both.
  revealIn();
  initFooterYear();

  $('#theme-toggle').addEventListener('click', toggleTheme);
  initLangSwitcher();
  initProjectCards();
  initNavbar();
  initScrollSpy();
  initBackToTop();
  initModals();
});
