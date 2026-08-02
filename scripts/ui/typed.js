/* ============================================================
   TYPED EFFECT, cycles the hero roles from the active locale.
   ============================================================ */

import { $, t } from '../dom.js';

let typeIndex = 0;
let charIndex = 0;
let deleting = false;
let typeTimer = null;

export function typeLoop() {
  clearTimeout(typeTimer);
  const el = $('#typed');
  if (!el) return;
  const roles = t('roles');
  const current = roles[typeIndex % roles.length];

  if (!deleting) {
    el.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      typeTimer = setTimeout(typeLoop, 1800);
      return;
    }
    typeTimer = setTimeout(typeLoop, 55);
  } else {
    el.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      typeIndex++;
      typeTimer = setTimeout(typeLoop, 400);
      return;
    }
    typeTimer = setTimeout(typeLoop, 30);
  }
}

/* Restart with the new roles after a language switch (cancels the in-flight loop). */
export function restartTyping() {
  charIndex = 0;
  deleting = false;
  typeLoop();
}
