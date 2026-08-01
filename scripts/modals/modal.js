/* ============================================================
   MODAL PRIMITIVES — open/close, backdrop + close-button wiring
   and a single Escape handler shared by all three modals.
   ============================================================ */

import { $ } from '../dom.js';

/* Registration order sets the Escape priority: the first registered
   modal that is currently open is the one Escape closes. */
const registry = [];

export function isModalOpen(id) {
  const el = $('#' + id);
  return !!el && !el.hidden;
}

export function openModal(id) {
  const el = $('#' + id);
  if (!el) return;
  el.hidden = false;
  document.body.classList.add('modal-open');
}

export function closeModal(id) {
  const el = $('#' + id);
  if (el) el.hidden = true;
  document.body.classList.remove('modal-open');
}

/* Register a modal and wire its close button + backdrop. */
export function registerModal({ id, closeSel, backdropSel, close }) {
  registry.push({ id, close });
  const btn = $(closeSel);
  if (btn) btn.addEventListener('click', close);
  const backdrop = $(backdropSel);
  if (backdrop) backdrop.addEventListener('click', close);
}

export function initEscapeHandling() {
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const open = registry.find((m) => isModalOpen(m.id));
    if (open) open.close();
  });
}
