/* ============================================================
   MODAL PRIMITIVES, open/close, backdrop + close-button wiring,
   a single Escape handler, and the focus contract every dialog
   with aria-modal="true" owes the keyboard:

     · focus moves into the dialog on open,
     · Tab cycles inside it instead of escaping to the page behind,
     · focus returns to whatever opened it on close.
   ============================================================ */

import { $, $$ } from '../dom.js';

/* Registration order sets the Escape priority: the first registered
   modal that is currently open is the one Escape closes. */
const registry = [];

/* What had focus when each modal was opened. */
const triggers = new Map();

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  'iframe',
  '[tabindex]:not([tabindex="-1"])'
].join(',');

/* Visible only, the booking wizard keeps its inactive screens in the DOM
   behind [hidden], and those must stay out of the tab order. */
function focusable(dialog) {
  return $$(FOCUSABLE, dialog).filter((el) => el.offsetParent !== null || el === document.activeElement);
}

export function isModalOpen(id) {
  const el = $('#' + id);
  return !!el && !el.hidden;
}

export function openModal(id, { focus } = {}) {
  const el = $('#' + id);
  if (!el) return;
  triggers.set(id, document.activeElement instanceof HTMLElement ? document.activeElement : null);
  el.hidden = false;
  document.body.classList.add('modal-open');
  // After the dialog is visible, so offsetParent-based filtering is meaningful.
  setTimeout(() => {
    const target = (focus && $(focus, el)) || focusable(el)[0];
    if (target) target.focus();
  }, 60);
}

export function closeModal(id) {
  const el = $('#' + id);
  if (el) el.hidden = true;
  document.body.classList.remove('modal-open');
  const trigger = triggers.get(id);
  triggers.delete(id);
  if (trigger && trigger.isConnected) trigger.focus();
}

/* Register a modal: close button, backdrop, and the Tab trap. */
export function registerModal({ id, closeSel, backdropSel, close }) {
  registry.push({ id, close });

  const btn = $(closeSel);
  if (btn) btn.addEventListener('click', close);
  const backdrop = $(backdropSel);
  if (backdrop) backdrop.addEventListener('click', close);

  const dialog = $('#' + id);
  if (!dialog) return;
  dialog.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const items = focusable(dialog);
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    // Wrap at both ends; also catches focus that started outside the list.
    if (e.shiftKey && (document.activeElement === first || !items.includes(document.activeElement))) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}

export function initEscapeHandling() {
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const open = registry.find((m) => isModalOpen(m.id));
    if (open) open.close();
  });
}
