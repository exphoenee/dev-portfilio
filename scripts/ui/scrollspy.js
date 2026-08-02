/* ============================================================
   SCROLLSPY, highlights the nav link of the section in view.
   ============================================================ */

import { $, $$ } from '../dom.js';

/* Where the "you are reading here" line sits. The stylesheet already
   declares it as html { scroll-padding-top }, the offset an anchor jump
   leaves free under the fixed navbar, so read it back from there instead
   of repeating the number and letting the two drift apart. */
function readingLine() {
  const declared = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop);
  return Number.isFinite(declared) ? declared : 90;
}

export function initScrollSpy() {
  const links = $$('#nav-links a[href^="#"]');
  if (!links.length) return;

  /* Sorted by document order, not by menu order: if the two ever drift
     apart, "the section the line has reached" is still the right answer. */
  const targets = links
    .map((link) => ({ link, section: $(link.getAttribute('href')) }))
    .filter((entry) => entry.section)
    .sort((a, b) => (
      a.section.compareDocumentPosition(b.section) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
    ));
  if (!targets.length) return;

  let active = null;
  function setActive(link) {
    if (link === active) return;
    active = link;
    targets.forEach(({ link: other }) => {
      const on = other === link;
      other.classList.toggle('active', on);
      // aria-current tells a screen reader which entry matches what is on
      // screen; "location" is the value for a position within the page.
      if (on) other.setAttribute('aria-current', 'location');
      else other.removeAttribute('aria-current');
    });
  }

  function update() {
    const doc = document.documentElement;
    // The last section can be shorter than the gap below the line, so its top
    // may never reach it. At the end of the page it always wins.
    if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
      setActive(targets[targets.length - 1].link);
      return;
    }
    /* The active section is the last one whose top has already passed the
       line. Reading it as "the topmost section still touching a band" is
       what breaks after an anchor jump: the target lands exactly on the
       line and the section above it ends exactly there, so both touch, and
       the previous one wins by a pixel. Asking "which section has the line
       reached" has no such tie. The +1 absorbs subpixel rounding. */
    const line = readingLine() + 1;
    let current = targets[0];
    targets.forEach((entry) => {
      if (entry.section.getBoundingClientRect().top <= line) current = entry;
    });
    setActive(current.link);
  }

  // Coalesce to one layout read per frame: scrolling fires far more often.
  let queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; update(); });
  }

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);

  /* A language switch rewrites every section's text and late images settle
     in, both move the sections without any scrolling happening. */
  if (window.ResizeObserver) {
    const observer = new ResizeObserver(schedule);
    targets.forEach(({ section }) => observer.observe(section));
  }

  update();
}
