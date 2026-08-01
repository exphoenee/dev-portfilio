/* ============================================================
   RENDER TIMELINE
   ============================================================ */

import { $, $$, t } from '../dom.js';
import { locale } from '../locale.js';
import { TIMELINE } from '../../data/portfolio-data.js';
import { observeReveal } from '../ui/reveal.js';

function timelineItem(item) {
  const period = item.period[locale.lang] || item.period.en;
  const title = item.title[locale.lang] || item.title.en;
  const desc = item.desc[locale.lang] || item.desc.en;
  const badge = item.current ? `<span class="timeline-badge">${t('timeline.current')}</span>` : '';
  return `
    <div class="timeline-item">
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-card">
        <div class="timeline-head">
          <span class="timeline-period">${period}</span>
          ${badge}
        </div>
        <h3 class="timeline-role">${title}</h3>
        <div class="timeline-company">${item.company}</div>
        <p class="timeline-desc">${desc}</p>
      </div>
    </div>`;
}

export function renderTimeline() {
  const list = $('#timeline-list');
  if (!list) return;
  list.innerHTML = TIMELINE.map(timelineItem).join('');
  // Reveal animation — re-wired on every render so cards also animate on language switch
  $$('.timeline-card', list).forEach((el, i) => observeReveal(el, i % 2 === 0 ? 0 : 120));
}
