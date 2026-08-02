/* ============================================================
   RENDER CONTACT
   Cards that open a modal render as <button>, the rest as <a>.
   ============================================================ */

import { $, $$, t, esc } from '../dom.js';
import { CONTACT } from '../../data/portfolio-data.js';
import { observeReveal } from '../ui/reveal.js';

/* Most values are identifiers (an address, a handle) and stay as they are;
   a card carrying prose declares valueKey and gets translated instead. */
const cardValue = (c) => (c.valueKey ? t(c.valueKey) : c.value);

export function renderContact() {
  const wrap = $('#contact-cards');
  if (!wrap) return;
  wrap.innerHTML = CONTACT.map((c) => {
    const value = cardValue(c);
    if (c.openHire || c.openBooking) {
      const attr = c.openHire ? 'data-open-hire' : 'data-open-booking';
      // c.icon is deliberate markup (an <img> or inline SVG) — it stays raw.
      return `
    <button type="button" class="contact-card" ${attr} aria-label="${esc(t(c.nameKey))} — ${esc(value)}">
      <div class="contact-icon">${c.icon}</div>
      <div class="contact-name">${esc(t(c.nameKey))}</div>
      <div class="contact-value">${esc(value)}</div>
    </button>`;
    }
    return `
    <a class="contact-card" href="${esc(c.href)}" target="_blank" rel="noopener">
      <div class="contact-icon">${c.icon}</div>
      <div class="contact-name">${esc(t(c.nameKey))}</div>
      <div class="contact-value">${esc(value)}</div>
    </a>`;
  }).join('');
  $$('.contact-card', wrap).forEach((el, i) => observeReveal(el, i * 70));
}

/* Language switch: the card name, plus the value of any card that declared a
   valueKey, plus the aria-label built from both. Icon and href are
   language-independent. */
export function updateContactText() {
  const wrap = $('#contact-cards');
  if (!wrap) return;
  $$('.contact-card', wrap).forEach((card, i) => {
    const c = CONTACT[i];
    if (!c) return;
    const value = cardValue(c);
    $('.contact-name', card).textContent = t(c.nameKey);
    if (c.valueKey) $('.contact-value', card).textContent = value;
    if (card.tagName === 'BUTTON') {
      card.setAttribute('aria-label', `${t(c.nameKey)} — ${value}`);
    }
  });
}
