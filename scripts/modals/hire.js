/* ============================================================
   HIRE MODAL, email form (ported from the CV repo's initHireModal)
   Formspree POST + Turnstile + MX-domain check + 24h cooldown
   ============================================================ */

import { $, t } from '../dom.js';
import { FORMSPREE_ENDPOINT } from '../config.js';
import { openModal, closeModal, registerModal } from './modal.js';
import { createTurnstile } from './turnstile.js';
import {
  EMAIL_RE,
  MIN_FILL_MS,
  createCooldown,
  attachEmailDomainCheck,
  verifyEmailDomain,
  findForbiddenWord,
} from './form-guards.js';

const MODAL_ID = 'hire-modal';
const COOLDOWN_KEY = 'hire_sent_ts';
const COOLDOWN_MS = 24 * 60 * 60 * 1000;

const cooldown = createCooldown(COOLDOWN_KEY, COOLDOWN_MS);
const turnstile = createTurnstile({ containerSel: '#hire-turnstile', submitSel: '#hire-submit' });

let openedAt = 0;

function clearFieldErrors() {
  ['name', 'email', 'msg'].forEach((id) => {
    const el = document.getElementById('hire-' + id + '-err');
    if (el) el.textContent = '';
  });
}

export function openHireModal() {
  openedAt = Date.now();
  const form = $('#hire-form');
  const success = $('#hire-success');
  const cooldownState = $('#hire-cooldown');
  const err = $('#hire-error');
  const submitBtn = $('#hire-submit');

  success.hidden = true;
  cooldownState.hidden = true;
  err.hidden = true;
  err.textContent = '';

  if (cooldown.isActive()) {
    form.hidden = true;
    cooldownState.hidden = false;
  } else {
    cooldownState.hidden = true;
    form.hidden = false;
    form.reset();
    clearFieldErrors();
    turnstile.reset();
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t('hire.send');
    }
    turnstile.ensure();
  }

  // On the cooldown screen there is no form to focus; openModal then falls
  // back to the first focusable element (the close button).
  openModal(MODAL_ID, { focus: cooldown.isActive() ? null : '#hire-name' });
}

export function closeHireModal() {
  turnstile.clearLoading();
  closeModal(MODAL_ID);
}

async function submitHireForm(e) {
  e.preventDefault();

  if (openedAt && Date.now() - openedAt < MIN_FILL_MS) return;

  const nameVal = $('#hire-name').value.trim();
  const emailVal = $('#hire-email').value.trim();
  const msgVal = $('#hire-message').value.trim();
  const emailOk = EMAIL_RE.test(emailVal);
  const wordCount = msgVal.split(/\s+/).filter(Boolean).length;
  const forbidden = findForbiddenWord(msgVal);

  $('#hire-name-err').textContent = nameVal ? '' : t('hire.errRequired');
  $('#hire-email-err').textContent = emailOk ? '' : t('hire.errEmail');
  $('#hire-msg-err').textContent = forbidden
    ? t('hire.errOffensive')
    : msgVal.length >= 20 && wordCount >= 4 ? '' : t('hire.errTooShort');

  if (!nameVal || !emailOk || forbidden || msgVal.length < 20 || wordCount < 4) return;

  const submitBtn = $('#hire-submit');
  const emailErr = $('#hire-email-err');
  if (submitBtn) submitBtn.disabled = true;

  if (!(await verifyEmailDomain(emailVal, emailErr))) {
    if (submitBtn) submitBtn.disabled = false;
    return;
  }

  if (!turnstile.token) {
    const errEl = $('#hire-error');
    errEl.hidden = false;
    errEl.textContent = t('hire.errCaptcha');
    if (submitBtn) submitBtn.disabled = false;
    return;
  }

  const formData = new FormData(e.target);
  formData.set('cf-turnstile-response', turnstile.token);

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      cooldown.stamp();
      e.target.hidden = true;
      $('#hire-success').hidden = false;
    } else {
      throw new Error('formspree ' + res.status);
    }
  } catch (_) {
    const errEl = $('#hire-error');
    errEl.hidden = false;
    errEl.textContent = t('hire.errSend');
    if (submitBtn) submitBtn.disabled = false;
    turnstile.reset();
    turnstile.syncSubmit();
  }
}

export function initHireModal() {
  registerModal({
    id: MODAL_ID,
    closeSel: '#hire-close',
    backdropSel: '#hire-backdrop',
    close: closeHireModal
  });
  $('#hire-form').addEventListener('submit', submitHireForm);
  attachEmailDomainCheck('#hire-email', '#hire-email-err');
}
