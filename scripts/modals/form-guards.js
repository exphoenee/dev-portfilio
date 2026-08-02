/* ============================================================
   FORM GUARDS, the anti-spam / validation bits both forms share:
   email shape, MX-record domain check and the send cooldown.
   ============================================================ */

import { $, t } from '../dom.js';
import { CHECK_EMAIL_DOMAIN } from '../config.js';

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Bots submit faster than a human can fill a form. */
export const MIN_FILL_MS = 2500;

export function createCooldown(storageKey, windowMs) {
  return {
    isActive() {
      const ts = parseInt(localStorage.getItem(storageKey) || '0', 10);
      return ts > 0 && Date.now() - ts < windowMs;
    },
    stamp() {
      localStorage.setItem(storageKey, Date.now().toString());
    }
  };
}

/* Resolve the domain's MX records over DNS-over-HTTPS.
   Fails open: a network error must never block a real visitor. */
export async function checkEmailDomain(email) {
  const domain = email.split('@')[1].toLowerCase();
  const cacheKey = 'mx_' + domain;
  const cached = sessionStorage.getItem(cacheKey);
  if (cached === '1') return true;
  if (cached === '0') return false;
  try {
    const url = 'https://1.1.1.1/dns-query?name=' + encodeURIComponent(domain) + '&type=MX';
    const res = await fetch(url, { headers: { Accept: 'application/dns-json' } });
    if (!res.ok) return true;
    const data = await res.json();
    const valid = data.Status === 0 && Array.isArray(data.Answer) && data.Answer.length > 0;
    sessionStorage.setItem(cacheKey, valid ? '1' : '0');
    return valid;
  } catch (_) {
    return true;
  }
}

/* Verify the domain on blur so the visitor sees the problem before submitting. */
export function attachEmailDomainCheck(inputSel, errSel) {
  if (!CHECK_EMAIL_DOMAIN) return;
  const input = $(inputSel);
  if (!input) return;
  input.addEventListener('blur', async () => {
    const emailVal = input.value.trim();
    const emailErr = $(errSel);
    if (!EMAIL_RE.test(emailVal)) return;
    const domain = emailVal.split('@')[1].toLowerCase();
    if (sessionStorage.getItem('mx_' + domain) !== null) return;
    emailErr.textContent = t('hire.errVerifying');
    const ok = await checkEmailDomain(emailVal);
    // Ignore the result if the visitor kept typing meanwhile.
    if (input.value.trim() === emailVal) {
      emailErr.textContent = ok ? '' : t('hire.errNoMx');
    }
  });
}

/* Shared submit-time domain gate. Returns true when it is safe to continue. */
export async function verifyEmailDomain(emailVal, errEl) {
  if (!CHECK_EMAIL_DOMAIN) return true;
  errEl.textContent = t('hire.errVerifying');
  const ok = await checkEmailDomain(emailVal);
  errEl.textContent = ok ? '' : t('hire.errNoMx');
  return ok;
}
