/* ============================================================
   RENDER HERO TERMINAL (data-driven decorative lines)
   ============================================================ */

import { $, esc } from '../dom.js';
import { PROJECTS } from '../../data/portfolio-data.js';
import { computeStats } from '../ui/stats.js';

export function renderTerminal() {
  const line1 = $('#terminal-ls1');
  const line2 = $('#terminal-ls2');
  const statsLine = $('#terminal-stats');
  // Keep the decorative `ls` compact: show a data-driven subset, '… +N' hints at the rest.
  // Wrap each name so hyphenated ids ("ba-team") never break mid-word.
  const folders = PROJECTS.map((p) => `<span class="t-dir">${esc(p.id)}</span>`).slice(0, 9);
  if (line1) {
    line1.innerHTML = folders.slice(0, 4).join('&nbsp;&nbsp;');
  }
  if (line2) {
    const hidden = PROJECTS.length - 9;
    line2.innerHTML = folders.slice(4, 9).join('&nbsp;&nbsp;') + (hidden > 0 ? `&nbsp;&nbsp;<span class="t-dir">… +${hidden}</span>` : '');
  }
  if (statsLine) {
    const s = computeStats();
    statsLine.textContent = `✓ ${s.projects} projects · ${s.languages} languages · ${s.npm} npm packages · ${s.demos} demos`;
  }
}
