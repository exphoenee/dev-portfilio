/* ============================================================
   BOOKING MODAL — appointment scheduling (ported from the CV repo)
   Google Apps Script backend + Turnstile + 3-step wizard.
   The GAS verifies the Turnstile token and rate-limits server-side;
   the localStorage cooldown below is convenience, not a control.
   ============================================================ */

import { $, t } from '../dom.js';
import { locale } from '../locale.js';
import { BOOKING_SCRIPT_URL } from '../config.js';
import { openModal, closeModal, registerModal } from './modal.js';
import { createTurnstile } from './turnstile.js';
import {
  EMAIL_RE,
  MIN_FILL_MS,
  createCooldown,
  attachEmailDomainCheck,
  verifyEmailDomain,
} from './form-guards.js';

const MODAL_ID = 'booking-modal';
const COOLDOWN_KEY = 'booking_sent_ts';
const COOLDOWN_MS = 48 * 60 * 60 * 1000;

const ERROR_KEYS = {
  MISSING_FIELDS: 'book.errMissingFields',
  INVALID_EMAIL: 'hire.errEmail',
  SLOT_UNAVAILABLE: 'book.errSlotUnavailable',
  RATE_LIMITED: 'book.errRateLimited',
  DAILY_CAP_REACHED: 'book.errDailyCap',
  CAPTCHA_FAILED: 'book.errCaptcha',
  BOOKING_FAILED: 'book.failed',
};

/* Every screen inside the dialog — showing one hides the rest. */
const SCREENS = [
  'bk-loading',
  'bk-error',
  'bk-empty',
  'bk-step-date',
  'bk-step-time',
  'bk-step-form',
  'bk-step-confirm',
  'bk-step-error',
  'bk-cooldown',
];

const cooldown = createCooldown(COOLDOWN_KEY, COOLDOWN_MS);
const turnstile = createTurnstile({ containerSel: '#bk-turnstile', submitSel: '#bk-submit' });

let allSlots = [];
let selectedSlot = null;
let formShownAt = 0;
let lastErrorCode = null;

function intlLang() {
  try {
    return Intl.DateTimeFormat.supportedLocalesOf([locale.lang]).length > 0 ? locale.lang : 'en';
  } catch (e) {
    return 'en';
  }
}

function show(id) {
  SCREENS.forEach((sid) => {
    const el = document.getElementById(sid);
    if (el) el.hidden = sid !== id;
  });
}

function formatDay(date) {
  return new Intl.DateTimeFormat(intlLang(), { weekday: 'long' }).format(date);
}
function formatDate(date) {
  return new Intl.DateTimeFormat(intlLang(), { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
}
function formatTime(date) {
  return String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');
}
function formatSlot(start, end) {
  return formatDay(start) + ', ' + formatDate(start) + '  |  ' + formatTime(start) + ' – ' + formatTime(end);
}

function groupByDate(slots) {
  const map = {};
  slots.forEach((slot) => {
    const key = slot.start.slice(0, 10);
    if (!map[key]) map[key] = [];
    map[key].push(slot);
  });
  return map;
}

function errorMessage(code) {
  return t(ERROR_KEYS[code] || 'book.failed');
}

function loadSlots() {
  show('bk-loading');
  fetch(BOOKING_SCRIPT_URL)
    .then((res) => { if (!res.ok) throw new Error(); return res.json(); })
    .then((data) => {
      allSlots = data.slots || [];
      if (allSlots.length === 0) {
        show('bk-empty');
        return;
      }
      renderDates();
      show('bk-step-date');
    })
    .catch(() => show('bk-error'));
}

function renderDates() {
  const grouped = groupByDate(allSlots);
  const grid = $('#bk-dates');
  grid.innerHTML = '';
  Object.keys(grouped).forEach((dateKey) => {
    const slots = grouped[dateKey];
    const date = new Date(slots[0].start);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'bk-date-btn';
    btn.setAttribute('role', 'listitem');
    const n = slots.length;
    const slotWord = t(n === 1 ? 'book.slot' : 'book.slots');
    btn.setAttribute('aria-label', formatDay(date) + ', ' + formatDate(date) + ' — ' + n + ' ' + slotWord);
    btn.innerHTML =
      '<span class="bk-date-day">' + formatDay(date) + '</span>' +
      '<span class="bk-date-date">' + formatDate(date) + '</span>' +
      '<span class="bk-date-count">' + n + ' ' + slotWord + '</span>';
    btn.addEventListener('click', () => {
      $('#bk-date-badge').textContent = formatDay(date) + ', ' + formatDate(date);
      renderSlots(slots);
      show('bk-step-time');
    });
    grid.appendChild(btn);
  });
}

function renderSlots(slots) {
  const grid = $('#bk-slots');
  grid.innerHTML = '';
  slots.forEach((slot) => {
    const start = new Date(slot.start);
    const end = new Date(slot.end);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'bk-slot-btn';
    btn.setAttribute('role', 'listitem');
    const timeLabel = formatTime(start) + ' – ' + formatTime(end);
    btn.textContent = timeLabel;
    btn.setAttribute('aria-label', t('book.ariaSlot') + ': ' + timeLabel);
    btn.addEventListener('click', () => {
      selectedSlot = slot;
      formShownAt = Date.now();
      $('#bk-slot-badge').textContent = formatSlot(start, end);
      show('bk-step-form');
      turnstile.ensure();
      turnstile.syncSubmit();
    });
    grid.appendChild(btn);
  });
}

export function openBookingModal() {
  openModal(MODAL_ID);
  if (cooldown.isActive()) {
    show('bk-cooldown');
  } else {
    loadSlots();
  }
}

export function closeBookingModal() {
  turnstile.clearLoading();
  closeModal(MODAL_ID);
}

async function submitBookingForm(e) {
  e.preventDefault();
  if ($('#bk-hp').value) return;

  if (formShownAt && Date.now() - formShownAt < MIN_FILL_MS) return;

  const nameVal = $('#bk-name').value.trim();
  const emailVal = $('#bk-email').value.trim();
  const topicVal = $('#bk-topic').value.trim();
  const emailOk = EMAIL_RE.test(emailVal);
  const topicWordCount = topicVal.split(/\s+/).filter(Boolean).length;
  const topicOk = topicVal.length >= 20 && topicWordCount >= 4;

  $('#bk-email-err').textContent = emailOk ? '' : t('hire.errEmail');
  $('#bk-topic-err').textContent = topicOk ? '' : t('hire.errTooShort');
  if (!nameVal || !emailOk || !topicOk) return;

  const submitBtn = $('#bk-submit');
  const emailErr = $('#bk-email-err');
  submitBtn.disabled = true;

  if (!(await verifyEmailDomain(emailVal, emailErr))) {
    submitBtn.disabled = false;
    return;
  }

  // Require a Turnstile token (the GAS verifies it server-side).
  if (!turnstile.token) {
    lastErrorCode = 'CAPTCHA_FAILED';
    $('#bk-error-msg').textContent = errorMessage(lastErrorCode);
    submitBtn.disabled = false;
    show('bk-step-error');
    return;
  }

  submitBtn.textContent = t('book.sending');

  const params = new URLSearchParams({
    action: 'book',
    name: nameVal,
    email: emailVal,
    topic: topicVal,
    start: selectedSlot.start,
    end: selectedSlot.end,
    token: turnstile.token,
  });

  try {
    const res = await fetch(BOOKING_SCRIPT_URL + '?' + params.toString());
    if (!res.ok) throw new Error();
    const data = await res.json();
    if (data.success) {
      cooldown.stamp();
      const start = new Date(selectedSlot.start);
      const end = new Date(selectedSlot.end);
      $('#bk-confirm-detail').textContent = formatSlot(start, end);
      show('bk-step-confirm');
    } else {
      failWith((data && data.error) || 'BOOKING_FAILED', submitBtn);
    }
  } catch (_) {
    failWith('BOOKING_FAILED', submitBtn);
  }
}

function failWith(code, submitBtn) {
  lastErrorCode = code;
  $('#bk-error-msg').textContent = errorMessage(lastErrorCode);
  turnstile.reset();
  submitBtn.disabled = false;
  submitBtn.textContent = t('book.submit');
  show('bk-step-error');
}

/* Re-translate the parts the generic [data-i18n] pass cannot reach. */
export function bkUpdateText() {
  const errorScreen = $('#bk-step-error');
  if (lastErrorCode && errorScreen && !errorScreen.hidden) {
    $('#bk-error-msg').textContent = errorMessage(lastErrorCode);
  }
  if (allSlots.length > 0) renderDates();
}

export function initBookingModal() {
  registerModal({
    id: MODAL_ID,
    closeSel: '#booking-close',
    backdropSel: '#booking-backdrop',
    close: closeBookingModal
  });

  $('#bk-form').addEventListener('submit', submitBookingForm);
  $('#bk-retry').addEventListener('click', loadSlots);
  $('#bk-back-date').addEventListener('click', () => show('bk-step-date'));
  $('#bk-back-time').addEventListener('click', () => show('bk-step-time'));
  $('#bk-error-back').addEventListener('click', () => {
    turnstile.reset();
    // Go back to time slot selection so the user can pick a different slot
    show('bk-step-time');
  });
  $('#bk-new').addEventListener('click', () => {
    selectedSlot = null;
    $('#bk-form').reset();
    $('#bk-email-err').textContent = '';
    $('#bk-topic-err').textContent = '';
    turnstile.reset();
    if (cooldown.isActive()) {
      show('bk-cooldown');
    } else {
      loadSlots();
    }
  });

  attachEmailDomainCheck('#bk-email', '#bk-email-err');
}
