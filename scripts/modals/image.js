/* ============================================================
   IMAGE MODAL — lightbox for the large/ version of a project image.
   ============================================================ */

import { $ } from '../dom.js';
import { openModal, closeModal, registerModal } from './modal.js';

const MODAL_ID = 'image-modal';

let trigger = null;

export function openImageModal(src, alt, fromEl) {
  const img = $('#image-modal-img');
  const caption = $('#image-modal-caption');
  trigger = fromEl || (document.activeElement instanceof HTMLElement ? document.activeElement : null);
  img.src = src;
  img.alt = alt;
  img.classList.remove('is-error');
  img.classList.add('is-loading'); // cleared once the load event fires
  if (caption) caption.textContent = alt;
  openModal(MODAL_ID);
  // Move keyboard focus into the dialog (consistent with the hire modal focusing its first field)
  setTimeout(() => { const close = $('#image-close'); if (close) close.focus(); }, 60);
}

export function closeImageModal() {
  closeModal(MODAL_ID);
  // Return focus to the card button that opened the lightbox
  if (trigger && trigger.isConnected) trigger.focus();
}

export function initImageModal() {
  registerModal({
    id: MODAL_ID,
    closeSel: '#image-close',
    backdropSel: '#image-backdrop',
    close: closeImageModal
  });

  const img = $('#image-modal-img');
  if (!img) return;
  img.addEventListener('load', () => img.classList.remove('is-loading'));
  img.addEventListener('error', () => {
    img.classList.remove('is-loading');
    img.classList.add('is-error');
  });
}
