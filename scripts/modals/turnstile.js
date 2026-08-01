/* ============================================================
   CLOUDFLARE TURNSTILE — one factory per form.
   The widget owns its token and keeps its submit button in sync.
   ============================================================ */

import { $ } from '../dom.js';
import { TURNSTILE_SITEKEY } from '../config.js';

export function loadTurnstileScript() {
  if (window.turnstile || document.getElementById('cf-turnstile-script')) return;
  const s = document.createElement('script');
  s.id = 'cf-turnstile-script';
  s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
  s.async = true;
  s.defer = true;
  document.head.appendChild(s);
}

export function createTurnstile({ containerSel, submitSel }) {
  let widgetId = null;
  let token = '';

  const submitBtn = () => $(submitSel);

  function syncSubmit() {
    const btn = submitBtn();
    if (btn) btn.disabled = !token;
  }

  function ensure() {
    if (widgetId !== null) return;
    const container = $(containerSel);
    if (!container) return;
    const btn = submitBtn();
    if (btn) btn.classList.add('is-loading');
    // The API script is loaded async — retry until turnstile.render exists.
    if (!window.turnstile || !window.turnstile.render) {
      setTimeout(ensure, 300);
      return;
    }
    widgetId = window.turnstile.render(container, {
      sitekey: TURNSTILE_SITEKEY,
      callback: (tk) => { token = tk; syncSubmit(); },
      'expired-callback': () => { token = ''; syncSubmit(); },
      'error-callback': () => { token = ''; syncSubmit(); },
    });
    setTimeout(clearLoading, 400);
  }

  function reset() {
    token = '';
    if (widgetId !== null && window.turnstile) window.turnstile.reset(widgetId);
  }

  function clearLoading() {
    const btn = submitBtn();
    if (btn) btn.classList.remove('is-loading');
  }

  return {
    ensure,
    reset,
    syncSubmit,
    clearLoading,
    get token() { return token; }
  };
}
