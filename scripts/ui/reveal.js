/* ============================================================
   SCROLL REVEAL, one shared observer, unobserves after firing.
   ============================================================ */

import { $$ } from '../dom.js';

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

/* Mark an element as revealable and start watching it. */
export function observeReveal(el, delayMs = 0) {
  el.classList.add('reveal');
  if (delayMs) el.style.transitionDelay = delayMs + 'ms';
  else el.style.transitionDelay = '0ms';
  revealObserver.observe(el);
}

export function setupReveal() {
  $$('.section-head, .hero-grid').forEach((el) => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}
