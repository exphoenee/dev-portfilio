/* ============================================================
   RENDER SKILLS
   ============================================================ */

import { $, $$, t, esc } from '../dom.js';
import { SKILLS } from '../../data/portfolio-data.js';
import { observeReveal } from '../ui/reveal.js';

export function renderSkills() {
  const wrap = $('#skills-groups');
  if (!wrap) return;
  wrap.innerHTML = SKILLS.map((group) => `
    <div class="skill-group">
      <h3 class="skill-group-title">${esc(t(group.titleKey))}</h3>
      <div class="skill-chips">
        ${group.chips.map((chip) => `<span class="chip">${chip.icon ? `<img src="${esc(chip.icon)}" alt="" loading="lazy">` : ''}${esc(chip.label)}</span>`).join('')}
      </div>
    </div>`).join('');
  $$('.skill-group', wrap).forEach((el, i) => observeReveal(el, i % 2 === 0 ? 0 : 60));
}

/* Only the group headings are translated, the chip labels are product
   names, identical in every language. */
export function updateSkillsText() {
  const wrap = $('#skills-groups');
  if (!wrap) return;
  $$('.skill-group-title', wrap).forEach((el, i) => {
    if (SKILLS[i]) el.textContent = t(SKILLS[i].titleKey);
  });
}
