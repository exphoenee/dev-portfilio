/* ============================================================
   SCROLL REVEAL, declarative, one shared observer.

   Markup declares what it wants and this module only decides when:

     <div data-reveal="fade-up" data-reveal-delay="120"></div>

   Directions live in styles/portfolio.css next to the rest of the
   presentation. Once an element has played it is unobserved and every
   trace of the reveal is stripped from it, see finish() for why.
   ============================================================ */

import { $$ } from '../dom.js';

const REDUCED = '(prefers-reduced-motion: reduce)';

/* Start a little before the element is fully in view: at the bottom edge it
   would animate under the fold, at the top it would arrive too late. */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    observer.unobserve(entry.target);
    play(entry.target);
  });
}, { rootMargin: '0px 0px -8% 0px', threshold: 0 });

function play(el) {
  el.classList.add('revealed');
  /* The element is left in its natural state afterwards. Without this the
     reveal transition and its delay would stay on the element and every
     later transition would inherit them, so a card that reveals with a
     150ms delay would also lag by 150ms on hover. */
  el.addEventListener('transitionend', function finish(event) {
    if (event.target !== el || event.propertyName !== 'opacity') return;
    el.removeEventListener('transitionend', finish);
    el.removeAttribute('data-reveal');
    el.classList.remove('revealed');
    el.style.removeProperty('--reveal-delay');
    el.style.removeProperty('--reveal-duration');
  });
}

/* Watch every not-yet-revealed element under `root`. Safe to call again
   after a re-render: elements already played no longer carry the
   attribute, and observing the same element twice is a no-op. */
export function revealIn(root = document) {
  const elements = $$('[data-reveal]', root);
  if (!elements.length) return;

  // Someone who asked for less motion gets the content, not the choreography.
  if (window.matchMedia(REDUCED).matches) {
    elements.forEach((el) => el.removeAttribute('data-reveal'));
    return;
  }

  elements.forEach((el) => {
    const delay = el.dataset.revealDelay;
    const duration = el.dataset.revealDuration;
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
    if (duration) el.style.setProperty('--reveal-duration', `${duration}ms`);
    observer.observe(el);
  });
}
