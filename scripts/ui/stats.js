/* ============================================================
   STATS, every number is computed from the data, never hardcoded.
   Consumed by the Projects section counters and the hero terminal.
   ============================================================ */

import { $$ } from '../dom.js';
import { PROJECTS } from '../../data/portfolio-data.js';
import { AVAILABLE_LANGS } from '../locale.js';

export function computeStats() {
  return {
    projects: PROJECTS.length,
    languages: AVAILABLE_LANGS.length,
    npm: PROJECTS.filter((p) => p.links.npm).length,
    demos: PROJECTS.filter((p) => p.links.demo).length
  };
}

function animateCounters() {
  $$('.stat-num[data-count]').forEach((el) => {
    const target = +el.dataset.count;
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

/* Fill the [data-stat] counters from the data, then count them up. */
export function initStats() {
  const stats = computeStats();
  $$('.stat-num[data-stat]').forEach((el) => {
    el.dataset.count = stats[el.dataset.stat] ?? 0;
  });
  animateCounters();
}
