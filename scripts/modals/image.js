/* ============================================================
   IMAGE MODAL — lightbox for the large/ version of a project image.
   ============================================================ */

import { $ } from '../dom.js';
import { openModal, closeModal, registerModal } from './modal.js';

const MODAL_ID = 'image-modal';

export function openImageModal(src, alt) {
  const img = $('#image-modal-img');
  const caption = $('#image-modal-caption');
  img.src = src;
  img.alt = alt;
  img.classList.remove('is-error');
  img.classList.add('is-loading'); // cleared once the load event fires
  if (caption) caption.textContent = alt;
  // openModal remembers the card button and gives focus back on close.
  openModal(MODAL_ID, { focus: '#image-close' });
}

export function closeImageModal() {
  closeModal(MODAL_ID);
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
