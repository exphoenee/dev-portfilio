/* ============================================================
   RENDER CONTACT
   Cards that open a modal render as <button>, the rest as <a>.
   ============================================================ */

import { $, $$, t } from '../dom.js';
import { CONTACT } from '../../data/portfolio-data.js';
import { observeReveal } from '../ui/reveal.js';

export function renderContact() {
  const wrap = $('#contact-cards');
  if (!wrap) return;
  wrap.innerHTML = CONTACT.map((c) => {
    if (c.openHire || c.openBooking) {
      const attr = c.openHire ? 'data-open-hire' : 'data-open-booking';
      return `
    <button type="button" class="contact-card" ${attr} aria-label="${t(c.nameKey)} — ${c.value}">
      <div class="contact-icon">${c.icon}</div>
      <div class="contact-name">${t(c.nameKey)}</div>
      <div class="contact-value">${c.value}</div>
    </button>`;
    }
    return `
    <a class="contact-card" href="${c.href}" target="_blank" rel="noopener">
      <div class="contact-icon">${c.icon}</div>
      <div class="contact-name">${t(c.nameKey)}</div>
      <div class="contact-value">${c.value}</div>
    </a>`;
  }).join('');
  $$('.contact-card', wrap).forEach((el, i) => observeReveal(el, i * 70));
}
