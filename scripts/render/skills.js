/* ============================================================
   RENDER SKILLS
   ============================================================ */

import { $, $$, t } from '../dom.js';
import { SKILLS } from '../../data/portfolio-data.js';
import { observeReveal } from '../ui/reveal.js';

export function renderSkills() {
  const wrap = $('#skills-groups');
  if (!wrap) return;
  wrap.innerHTML = SKILLS.map((group) => `
    <div class="skill-group">
      <h3 class="skill-group-title">${t(group.titleKey)}</h3>
      <div class="skill-chips">
        ${group.chips.map((chip) => `<span class="chip">${chip.icon ? `<img src="${chip.icon}" alt="" loading="lazy">` : ''}${chip.label}</span>`).join('')}
      </div>
    </div>`).join('');
  $$('.skill-group', wrap).forEach((el, i) => observeReveal(el, i % 2 === 0 ? 0 : 60));
}
