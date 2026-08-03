/* ============================================================
   RENDER SKILLS
   ============================================================ */

import { $, $$, t, esc } from '../dom.js';
import { SKILLS } from '../../data/portfolio-data.js';
import { techIconSrc } from '../tech-icons.js';
import { revealIn } from '../ui/reveal.js';
import { wireImageLoaders } from '../ui/image-loader.js';

function skillChip(chip) {
  const icon = techIconSrc(chip.label);
  return `<span class="chip">${icon ? `<img src="${esc(icon)}" alt="" loading="lazy">` : ''}${esc(chip.label)}</span>`;
}

export function renderSkills() {
  const wrap = $('#skills-groups');
  if (!wrap) return;
  wrap.innerHTML = SKILLS.map((group, i) => `
    <div class="skill-group" data-reveal="fade-up" data-reveal-delay="${(i % 3) * 60}">
      <h3 class="skill-group-title">${esc(t(group.titleKey))}</h3>
      <div class="skill-chips">
        ${group.chips.map(skillChip).join('')}
      </div>
    </div>`).join('');
  revealIn(wrap);
  wireImageLoaders(wrap);
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
