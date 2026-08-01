/* ============================================================
   Developer Portfolio — Viktor Bozzay
   Vanilla JS · no frameworks · ES Modules
   View script: renders all content from data/portfolio-data.js + data/locales/*-page.js.
   (Mirrors the CV project's scripts/ architecture.)
   ============================================================ */

import { PROJECTS, TIMELINE, SKILLS, CONTACT } from '../data/portfolio-data.js';
import { locale, AVAILABLE_LANGS } from './locale.js';
import {
  THEME_KEY,
  THEME_DARK,
  THEME_LIGHT,
  FORMSPREE_ENDPOINT,
  TURNSTILE_SITEKEY,
  CHECK_EMAIL_DOMAIN,
  BOOKING_SCRIPT_URL,
} from './config.js';

/* ------------------------------------------------------------
   CATEGORY METADATA
   ------------------------------------------------------------ */
const CATEGORY_ICONS = {
  library: '📦',
  game: '🎮',
  app: '🛠️',
  api: '🔌',
  website: '🌐'
};

/* UI language (BCP-47) → Open Graph locale (e.g. en → en_US).
   Keeps the og:locale meta in sync with the selected UI language. */
const OG_LOCALES = {
  en: 'en_US',
  de: 'de_DE',
  hu: 'hu_HU',
  fr: 'fr_FR',
  it: 'it_IT',
  es: 'es_ES'
};

/* Tech icon lookup — maps a label shown on cards/skills to its file in assets/images/tech/ */
const TECH_ICONS = {
  React: 'react.svg',
  TypeScript: 'typescript.svg',
  'Vanilla JS': 'js.svg',
  'VS Code': 'vscode.svg',
  Vite: 'vite.svg',
  Vitest: 'vitest.svg',
  Jest: 'jest.svg',
  Webpack: 'webpack.svg',
  HTML: 'html.svg',
  CSS: 'css.svg',
  JavaScript: 'javascript.svg',
  'Node.js': 'nodejs.svg',
  Express: 'express.svg',
  Swagger: 'swagger.svg',
  npm: 'npm.svg',
  PHP: 'php.svg',
  MySQL: 'mysql.svg',
  'TensorFlow.js': 'Tensorflow.svg'
};

const LINK_ICONS = {
  repo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  demo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  npm: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.76 1.76h20.48v20.48H1.76z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 6.24H5.52v11.52H12V9.6h2.88v8.16h2.88V6.24z"/></svg>'
};

/* ------------------------------------------------------------
   STATE
   ------------------------------------------------------------ */
const state = {
  lang: locale.lang,
  theme: THEME_DARK,
  filter: 'all',
  tabs: {} // per-card tab memory: { [projectId]: 'functional' | 'technical' }
};

function tabFor(id) {
  return state.tabs[id] || 'functional';
}

/* ------------------------------------------------------------
   HELPERS
   ------------------------------------------------------------ */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const t = (key) => locale.t(key);

function detectTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === THEME_LIGHT || stored === THEME_DARK) return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? THEME_LIGHT : THEME_DARK;
}

/* ------------------------------------------------------------
   THEME
   ------------------------------------------------------------ */
function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  localStorage.setItem(THEME_KEY, state.theme);
  // Keep the browser chrome color (theme-color meta) in sync with the manual toggle.
  const color = state.theme === THEME_LIGHT ? '#f6f7fb' : '#0b0d1a';
  $$('meta[name="theme-color"]').forEach((el) => el.setAttribute('content', color));
}

/* ------------------------------------------------------------
   TYPED EFFECT
   ------------------------------------------------------------ */
let typeIndex = 0, charIndex = 0, deleting = false, typeTimer = null;

function typeLoop() {
  clearTimeout(typeTimer);
  const el = $('#typed');
  if (!el) return;
  const roles = t('roles');
  const current = roles[typeIndex % roles.length];

  if (!deleting) {
    el.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      typeTimer = setTimeout(typeLoop, 1800);
      return;
    }
    typeTimer = setTimeout(typeLoop, 55);
  } else {
    el.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      typeIndex++;
      typeTimer = setTimeout(typeLoop, 400);
      return;
    }
    typeTimer = setTimeout(typeLoop, 30);
  }
}

/* ------------------------------------------------------------
   STAT COUNTERS (values computed from the data)
   ------------------------------------------------------------ */
function computeStats() {
  return {
    projects: PROJECTS.length,
    languages: AVAILABLE_LANGS.length,
    npm: PROJECTS.filter((p) => p.links.npm).length,
    demos: PROJECTS.filter((p) => p.links.demo).length
  };
}

function animateCounters() {
  $$('.stat-num[data-count]').forEach((el) => {
    const target = +el.dataset.count;
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

/* ------------------------------------------------------------
   RENDER PROJECTS
   ------------------------------------------------------------ */
function projectCard(p, index) {
  const d = p.desc[state.lang];
  const title = (p.nameL10n && p.nameL10n[state.lang]) || p.name;
  const icons = CATEGORY_ICONS[p.category] || '📁';
  const links = Object.entries(p.links).map(([type, url]) => {
    if (!url) return '';
    return `<a class="card-link ${type === 'demo' ? 'primary' : ''}" href="${url}" target="_blank" rel="noopener" aria-label="${title} — ${t('link.' + type)}">
      ${LINK_ICONS[type] || ''}${t('link.' + type)}
    </a>`;
  }).join('');

  const activeTab = tabFor(p.id);
  // Cards render the small/ thumbnail; the lightbox opens the large/ original.
  const smallImg = p.image.replace('/large/', '/small/');
  return `
    <article class="project-card" data-category="${p.category}" data-id="${p.id}" style="animation-delay:${index * 60}ms">
      <div class="card-media">
        <button type="button" class="card-media-btn" data-img-src="${p.image}" data-img-alt="${title}" aria-label="${title} — ${t('image.zoomAria')}">
          <img src="${smallImg}" alt="${title}" loading="lazy">
          <span class="card-category">${icons} ${t('filters.' + p.category)}</span>
          <span class="card-zoom" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
          </span>
        </button>
      </div>
      <div class="card-body">
        <div class="card-head">
          <h3 class="card-title">${title}</h3>
        </div>
        <div class="card-tabs" role="tablist">
          <button class="card-tab ${activeTab === 'functional' ? 'active' : ''}" data-tab="functional" role="tab" id="tab-func-${p.id}" aria-controls="desc-${p.id}" aria-selected="${activeTab === 'functional'}">${t('tab.functional')}</button>
          <button class="card-tab ${activeTab === 'technical' ? 'active' : ''}" data-tab="technical" role="tab" id="tab-tech-${p.id}" aria-controls="desc-${p.id}" aria-selected="${activeTab === 'technical'}">${t('tab.technical')}</button>
        </div>
        <p class="card-desc" id="desc-${p.id}" role="tabpanel">${d[activeTab]}</p>
        <div class="card-tech">${p.tech.map((x) => `<span class="tech-tag">${TECH_ICONS[x] ? `<img src="assets/images/tech/${TECH_ICONS[x]}" alt="" loading="lazy">` : ''}${x}</span>`).join('')}</div>
        <div class="card-links">${links}</div>
      </div>
    </article>`;
}

function renderProjects() {
  const grid = $('#projects-grid');
  const filtered = state.filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === state.filter);

  grid.innerHTML = filtered.map(projectCard).join('');
}

/* ------------------------------------------------------------
   RENDER TIMELINE
   ------------------------------------------------------------ */
function timelineItem(item) {
  const period = item.period[state.lang] || item.period.en;
  const title = item.title[state.lang] || item.title.en;
  const desc = item.desc[state.lang] || item.desc.en;
  const badge = item.current ? `<span class="timeline-badge">${t('timeline.current')}</span>` : '';
  return `
    <div class="timeline-item">
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-card">
        <div class="timeline-head">
          <span class="timeline-period">${period}</span>
          ${badge}
        </div>
        <h3 class="timeline-role">${title}</h3>
        <div class="timeline-company">${item.company}</div>
        <p class="timeline-desc">${desc}</p>
      </div>
    </div>`;
}

function renderTimeline() {
  const list = $('#timeline-list');
  if (!list) return;
  list.innerHTML = TIMELINE.map(timelineItem).join('');
  // Reveal animation — re-wired on every render so cards also animate on language switch
  $$('.timeline-card', list).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 2 === 0 ? 0 : 120) + 'ms';
    revealObserver.observe(el);
  });
}

/* ------------------------------------------------------------
   RENDER SKILLS
   ------------------------------------------------------------ */
function renderSkills() {
  const wrap = $('#skills-groups');
  if (!wrap) return;
  wrap.innerHTML = SKILLS.map((group) => `
    <div class="skill-group">
      <h3 class="skill-group-title">${t(group.titleKey)}</h3>
      <div class="skill-chips">
        ${group.chips.map((chip) => `<span class="chip">${chip.icon ? `<img src="${chip.icon}" alt="" loading="lazy">` : ''}${chip.label}</span>`).join('')}
      </div>
    </div>`).join('') + `
    <p class="skill-note">${t('skills.noteKey')} ${t('skills.noteValue')} ${t('skills.noteComment')}</p>`;
  $$('.skill-group', wrap).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 2 === 0 ? 0 : 60) + 'ms';
    revealObserver.observe(el);
  });
}

/* ------------------------------------------------------------
   RENDER CONTACT
   ------------------------------------------------------------ */
function renderContact() {
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
  $$('.contact-card', wrap).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 70) + 'ms';
    revealObserver.observe(el);
  });
}

/* ------------------------------------------------------------
   RENDER HERO TERMINAL (data-driven decorative lines)
   ------------------------------------------------------------ */
function renderTerminal() {
  const line1 = $('#terminal-ls1');
  const line2 = $('#terminal-ls2');
  const statsLine = $('#terminal-stats');
  // Keep the decorative `ls` compact: show a data-driven subset, '… +N' hints at the rest.
  const folders = PROJECTS.map((p) => p.id).slice(0, 9);
  if (line1) {
    line1.innerHTML = folders.slice(0, 4).join('&nbsp;&nbsp;');
  }
  if (line2) {
    const hidden = PROJECTS.length - 9;
    line2.innerHTML = folders.slice(4, 9).join('&nbsp;&nbsp;') + (hidden > 0 ? `&nbsp;&nbsp;… +${hidden}` : '');
  }
  if (statsLine) {
    const s = computeStats();
    statsLine.textContent = `✓ ${s.projects} projects · ${s.languages} languages · ${s.npm} npm packages · ${s.demos} demos`;
  }
}

/* ------------------------------------------------------------
   HIRE MODAL — email form (ported from the CV repo's initHireModal)
   Formspree POST + Cloudflare Turnstile + MX-domain check + 24h cooldown
   ------------------------------------------------------------ */
const HIRE_COOLDOWN_KEY = 'hire_sent_ts';
const HIRE_COOLDOWN_MS = 24 * 60 * 60 * 1000;
const HIRE_MIN_FILL_MS = 2500;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let hireTurnstileWidgetId = null;
let hireTurnstileToken = '';
let hireOpenedAt = 0;

function loadTurnstileScript() {
  if (window.turnstile || document.getElementById('cf-turnstile-script')) return;
  const s = document.createElement('script');
  s.id = 'cf-turnstile-script';
  s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
  s.async = true;
  s.defer = true;
  document.head.appendChild(s);
}

function ensureHireTurnstile() {
  if (hireTurnstileWidgetId !== null) return;
  const container = $('#hire-turnstile');
  if (!container) return;
  const submitBtn = $('#hire-submit');
  if (submitBtn) submitBtn.classList.add('is-loading');
  if (!window.turnstile || !window.turnstile.render) {
    setTimeout(ensureHireTurnstile, 300);
    return;
  }
  hireTurnstileWidgetId = window.turnstile.render(container, {
    sitekey: TURNSTILE_SITEKEY,
    callback: (token) => {
      hireTurnstileToken = token;
      updateHireSubmit();
    },
    'expired-callback': () => {
      hireTurnstileToken = '';
      updateHireSubmit();
    },
    'error-callback': () => {
      hireTurnstileToken = '';
      updateHireSubmit();
    },
  });
  setTimeout(() => { if (submitBtn) submitBtn.classList.remove('is-loading'); }, 400);
}

function resetHireTurnstile() {
  hireTurnstileToken = '';
  if (hireTurnstileWidgetId !== null && window.turnstile) {
    window.turnstile.reset(hireTurnstileWidgetId);
  }
}

function updateHireSubmit() {
  const btn = $('#hire-submit');
  if (btn) btn.disabled = !hireTurnstileToken;
}

function hireIsOnCooldown() {
  const ts = parseInt(localStorage.getItem(HIRE_COOLDOWN_KEY) || '0', 10);
  return ts > 0 && Date.now() - ts < HIRE_COOLDOWN_MS;
}

async function checkEmailDomain(email) {
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

function clearHireFieldErrors() {
  ['name', 'email', 'msg'].forEach((id) => {
    const el = document.getElementById('hire-' + id + '-err');
    if (el) el.textContent = '';
  });
}

function openHireModal() {
  hireOpenedAt = Date.now();
  const modal = $('#hire-modal');
  const form = $('#hire-form');
  const success = $('#hire-success');
  const cooldown = $('#hire-cooldown');
  const err = $('#hire-error');
  const submitBtn = $('#hire-submit');

  success.hidden = true;
  cooldown.hidden = true;
  err.hidden = true;
  err.textContent = '';

  if (hireIsOnCooldown()) {
    form.hidden = true;
    cooldown.hidden = false;
  } else {
    cooldown.hidden = true;
    form.hidden = false;
    form.reset();
    clearHireFieldErrors();
    resetHireTurnstile();
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t('hire.send');
    }
    ensureHireTurnstile();
  }

  modal.hidden = false;
  document.body.classList.add('modal-open');
  setTimeout(() => {
    if (!$('#hire-form').hidden && $('#hire-name')) $('#hire-name').focus();
  }, 80);
}

function closeHireModal() {
  const modal = $('#hire-modal');
  const submitBtn = $('#hire-submit');
  if (submitBtn) submitBtn.classList.remove('is-loading');
  if (modal) modal.hidden = true;
  document.body.classList.remove('modal-open');
}

async function submitHireForm(e) {
  e.preventDefault();

  // Bots submit faster than a human can fill the form.
  if (hireOpenedAt && Date.now() - hireOpenedAt < HIRE_MIN_FILL_MS) return;

  const nameVal = $('#hire-name').value.trim();
  const emailVal = $('#hire-email').value.trim();
  const msgVal = $('#hire-message').value.trim();
  const emailOk = EMAIL_RE.test(emailVal);
  const wordCount = msgVal.split(/\s+/).filter(Boolean).length;

  $('#hire-name-err').textContent = nameVal ? '' : t('hire.errRequired');
  $('#hire-email-err').textContent = emailOk ? '' : t('hire.errEmail');
  $('#hire-msg-err').textContent =
    msgVal.length >= 20 && wordCount >= 4 ? '' : t('hire.errTooShort');

  if (!nameVal || !emailOk || msgVal.length < 20 || wordCount < 4) return;

  const submitBtn = $('#hire-submit');
  const emailErr = $('#hire-email-err');
  if (submitBtn) submitBtn.disabled = true;

  if (CHECK_EMAIL_DOMAIN) {
    emailErr.textContent = t('hire.errVerifying');
    const domainOk = await checkEmailDomain(emailVal);
    if (!domainOk) {
      emailErr.textContent = t('hire.errNoMx');
      if (submitBtn) submitBtn.disabled = false;
      return;
    }
    emailErr.textContent = '';
  }

  if (!hireTurnstileToken) {
    const errEl = $('#hire-error');
    errEl.hidden = false;
    errEl.textContent = t('hire.errCaptcha');
    if (submitBtn) submitBtn.disabled = false;
    return;
  }

  const formData = new FormData(e.target);
  formData.set('cf-turnstile-response', hireTurnstileToken);

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      localStorage.setItem(HIRE_COOLDOWN_KEY, Date.now().toString());
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
    resetHireTurnstile();
    updateHireSubmit();
  }
}

/* ------------------------------------------------------------
   BOOKING MODAL — appointment scheduling (ported from the CV repo)
   Google Apps Script backend + Turnstile + 3-step wizard
   ------------------------------------------------------------ */
const BK_COOLDOWN_KEY = 'booking_sent_ts';
const BK_COOLDOWN_MS = 48 * 60 * 60 * 1000;
const BK_MIN_FILL_MS = 2500;

const BK_ERROR_KEYS = {
  MISSING_FIELDS: 'book.errMissingFields',
  INVALID_EMAIL: 'hire.errEmail',
  SLOT_UNAVAILABLE: 'book.errSlotUnavailable',
  RATE_LIMITED: 'book.errRateLimited',
  DAILY_CAP_REACHED: 'book.errDailyCap',
  CAPTCHA_FAILED: 'book.errCaptcha',
  BOOKING_FAILED: 'book.failed',
};

const BK_SCREENS = [
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

let bkAllSlots = [];
let bkSelectedSlot = null;
let bkFormShownAt = 0;
let bkLastErrorCode = null;
let bkTurnstileWidgetId = null;
let bkTurnstileToken = '';

function bkIntlLang() {
  try {
    return Intl.DateTimeFormat.supportedLocalesOf([locale.lang]).length > 0 ? locale.lang : 'en';
  } catch (e) {
    return 'en';
  }
}

function bkShow(id) {
  BK_SCREENS.forEach((sid) => {
    const el = document.getElementById(sid);
    if (el) el.hidden = sid !== id;
  });
}

function bkUpdateSubmit() {
  const btn = $('#bk-submit');
  if (btn) btn.disabled = !bkTurnstileToken;
}

function bkEnsureTurnstile() {
  if (bkTurnstileWidgetId !== null) return;
  const container = $('#bk-turnstile');
  if (!container) return;
  const submitBtn = $('#bk-submit');
  if (submitBtn) submitBtn.classList.add('is-loading');
  if (!window.turnstile || !window.turnstile.render) {
    setTimeout(bkEnsureTurnstile, 300);
    return;
  }
  bkTurnstileWidgetId = window.turnstile.render(container, {
    sitekey: TURNSTILE_SITEKEY,
    callback: (token) => {
      bkTurnstileToken = token;
      bkUpdateSubmit();
    },
    'expired-callback': () => {
      bkTurnstileToken = '';
      bkUpdateSubmit();
    },
    'error-callback': () => {
      bkTurnstileToken = '';
      bkUpdateSubmit();
    },
  });
  setTimeout(() => { if (submitBtn) submitBtn.classList.remove('is-loading'); }, 400);
}

function bkResetTurnstile() {
  bkTurnstileToken = '';
  if (bkTurnstileWidgetId !== null && window.turnstile) {
    window.turnstile.reset(bkTurnstileWidgetId);
  }
}

function bkIsOnCooldown() {
  const ts = parseInt(localStorage.getItem(BK_COOLDOWN_KEY) || '0', 10);
  return ts > 0 && Date.now() - ts < BK_COOLDOWN_MS;
}

function bkFormatDay(date) {
  return new Intl.DateTimeFormat(bkIntlLang(), { weekday: 'long' }).format(date);
}
function bkFormatDate(date) {
  return new Intl.DateTimeFormat(bkIntlLang(), { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
}
function bkFormatTime(date) {
  return String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');
}
function bkFormatSlot(start, end) {
  return bkFormatDay(start) + ', ' + bkFormatDate(start) + '  |  ' + bkFormatTime(start) + ' – ' + bkFormatTime(end);
}

function bkGroupByDate(slots) {
  const map = {};
  slots.forEach((slot) => {
    const key = slot.start.slice(0, 10);
    if (!map[key]) map[key] = [];
    map[key].push(slot);
  });
  return map;
}

function bkLoadSlots() {
  bkShow('bk-loading');
  fetch(BOOKING_SCRIPT_URL)
    .then((res) => { if (!res.ok) throw new Error(); return res.json(); })
    .then((data) => {
      bkAllSlots = data.slots || [];
      if (bkAllSlots.length === 0) {
        bkShow('bk-empty');
        return;
      }
      bkRenderDates();
      bkShow('bk-step-date');
    })
    .catch(() => bkShow('bk-error'));
}

function bkRenderDates() {
  const grouped = bkGroupByDate(bkAllSlots);
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
    btn.setAttribute('aria-label', bkFormatDay(date) + ', ' + bkFormatDate(date) + ' — ' + n + ' ' + slotWord);
    btn.innerHTML =
      '<span class="bk-date-day">' + bkFormatDay(date) + '</span>' +
      '<span class="bk-date-date">' + bkFormatDate(date) + '</span>' +
      '<span class="bk-date-count">' + n + ' ' + slotWord + '</span>';
    btn.addEventListener('click', () => {
      $('#bk-date-badge').textContent = bkFormatDay(date) + ', ' + bkFormatDate(date);
      bkRenderSlots(slots);
      bkShow('bk-step-time');
    });
    grid.appendChild(btn);
  });
}

function bkRenderSlots(slots) {
  const grid = $('#bk-slots');
  grid.innerHTML = '';
  slots.forEach((slot) => {
    const start = new Date(slot.start);
    const end = new Date(slot.end);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'bk-slot-btn';
    btn.setAttribute('role', 'listitem');
    const timeLabel = bkFormatTime(start) + ' – ' + bkFormatTime(end);
    btn.textContent = timeLabel;
    btn.setAttribute('aria-label', t('book.ariaSlot') + ': ' + timeLabel);
    btn.addEventListener('click', () => {
      bkSelectedSlot = slot;
      bkFormShownAt = Date.now();
      $('#bk-slot-badge').textContent = bkFormatSlot(start, end);
      bkShow('bk-step-form');
      bkEnsureTurnstile();
      bkUpdateSubmit();
    });
    grid.appendChild(btn);
  });
}

function bkErrorMessage(code) {
  return t(BK_ERROR_KEYS[code] || 'book.failed');
}

function openBookingModal() {
  const modal = $('#booking-modal');
  modal.hidden = false;
  document.body.classList.add('modal-open');
  if (bkIsOnCooldown()) {
    bkShow('bk-cooldown');
  } else {
    bkLoadSlots();
  }
}

function closeBookingModal() {
  const modal = $('#booking-modal');
  const sb = $('#bk-submit');
  if (sb) sb.classList.remove('is-loading');
  if (modal) modal.hidden = true;
  document.body.classList.remove('modal-open');
}

async function submitBookingForm(e) {
  e.preventDefault();
  if ($('#bk-hp').value) return;

  // Bots submit faster than a human can fill the form.
  if (bkFormShownAt && Date.now() - bkFormShownAt < BK_MIN_FILL_MS) return;

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

  if (CHECK_EMAIL_DOMAIN) {
    emailErr.textContent = t('hire.errVerifying');
    const domainOk = await checkEmailDomain(emailVal);
    if (!domainOk) {
      emailErr.textContent = t('hire.errNoMx');
      submitBtn.disabled = false;
      return;
    }
    emailErr.textContent = '';
  }

  // Require a Turnstile token (the GAS verifies it server-side).
  if (!bkTurnstileToken) {
    bkLastErrorCode = 'CAPTCHA_FAILED';
    $('#bk-error-msg').textContent = bkErrorMessage(bkLastErrorCode);
    submitBtn.disabled = false;
    bkShow('bk-step-error');
    return;
  }

  submitBtn.textContent = t('book.sending');

  const params = new URLSearchParams({
    action: 'book',
    name: nameVal,
    email: emailVal,
    topic: topicVal,
    start: bkSelectedSlot.start,
    end: bkSelectedSlot.end,
    token: bkTurnstileToken,
  });

  try {
    const res = await fetch(BOOKING_SCRIPT_URL + '?' + params.toString());
    if (!res.ok) throw new Error();
    const data = await res.json();
    if (data.success) {
      localStorage.setItem(BK_COOLDOWN_KEY, Date.now().toString());
      const start = new Date(bkSelectedSlot.start);
      const end = new Date(bkSelectedSlot.end);
      $('#bk-confirm-detail').textContent = bkFormatSlot(start, end);
      bkShow('bk-step-confirm');
    } else {
      bkLastErrorCode = (data && data.error) || 'BOOKING_FAILED';
      $('#bk-error-msg').textContent = bkErrorMessage(bkLastErrorCode);
      bkResetTurnstile();
      submitBtn.disabled = false;
      submitBtn.textContent = t('book.submit');
      bkShow('bk-step-error');
    }
  } catch (_) {
    bkLastErrorCode = 'BOOKING_FAILED';
    $('#bk-error-msg').textContent = bkErrorMessage(bkLastErrorCode);
    bkResetTurnstile();
    submitBtn.disabled = false;
    submitBtn.textContent = t('book.submit');
    bkShow('bk-step-error');
  }
}

function bkUpdateText() {
  // Re-translate the dynamic error message if the error screen is visible.
  const errorScreen = $('#bk-step-error');
  if (bkLastErrorCode && errorScreen && !errorScreen.hidden) {
    $('#bk-error-msg').textContent = bkErrorMessage(bkLastErrorCode);
  }
  if (bkAllSlots.length > 0) bkRenderDates();
}

/* ------------------------------------------------------------
   IMAGE MODAL — lightbox (same pattern as hire/booking, ported from the CV repo)
   Opens the large/ version of a project image in a modal.
   ------------------------------------------------------------ */
let imageModalTrigger = null;

function openImageModal(src, alt, trigger) {
  const modal = $('#image-modal');
  const img = $('#image-modal-img');
  const caption = $('#image-modal-caption');
  imageModalTrigger = trigger || (document.activeElement instanceof HTMLElement ? document.activeElement : null);
  img.src = src;
  img.alt = alt;
  img.classList.remove('is-error');
  img.classList.add('is-loading'); // shown once the load event fires
  if (caption) caption.textContent = alt;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  // Move keyboard focus into the dialog (consistent with the hire modal focusing its first field)
  setTimeout(() => { const close = $('#image-close'); if (close) close.focus(); }, 60);
}

function closeImageModal() {
  const modal = $('#image-modal');
  if (modal) modal.hidden = true;
  document.body.classList.remove('modal-open');
  // Return focus to the card button that opened the lightbox
  if (imageModalTrigger && imageModalTrigger.isConnected) imageModalTrigger.focus();
}

/* ------------------------------------------------------------
   APPLY UI TRANSLATIONS
   ------------------------------------------------------------ */
function applyTranslations() {
  document.documentElement.lang = state.lang;
  const ogLocale = $('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', OG_LOCALES[state.lang] || OG_LOCALES.en);
  $$('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (el.tagName === 'META') {
      el.setAttribute('content', t(key));
    } else if (el.tagName === 'TITLE') {
      el.textContent = t(key);
    } else {
      el.innerHTML = t(key);
    }
  });
  $$('.lang-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === state.lang));
  $$('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  $$('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  renderProjects();
  renderTimeline();
  renderSkills();
  renderContact();
  renderTerminal();
  bkUpdateText();
  // restart typing with new roles (cancel any in-flight loop first)
  charIndex = 0;
  deleting = false;
  typeLoop();
}

/* ------------------------------------------------------------
   FILTERS
   ------------------------------------------------------------ */
function applyFilter(filter) {
  state.filter = filter;
  $$('.filter-chip').forEach((c) => {
    const active = c.dataset.filter === filter;
    c.classList.toggle('active', active);
    c.setAttribute('aria-pressed', active);
  });
  renderProjects();
}

/* ------------------------------------------------------------
   SCROLL REVEAL + BACK TO TOP
   ------------------------------------------------------------ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function setupReveal() {
  $$('.section-head, .hero-grid').forEach((el) => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}

function onScroll() {
  const btn = $('#back-to-top');
  btn.classList.toggle('visible', window.scrollY > 500);
}

/* ------------------------------------------------------------
   INIT
   ------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  state.theme = detectTheme();
  document.documentElement.dataset.theme = state.theme;
  applyTranslations();

  /* Data-driven section stats (Projects section) — values always computed from the data */
  const stats = computeStats();
  $$('.stat-num[data-stat]').forEach((el) => {
    el.dataset.count = stats[el.dataset.stat] ?? 0;
  });
  animateCounters();
  setupReveal();
  // Footer copyright: "© 2026 …" while the current year is 2026, then "© 2026-2027 …" from 2027 on.
  const yearStart = 2026;
  const yearNow = new Date().getFullYear();
  $('#year').textContent = yearNow > yearStart ? `${yearStart}-${yearNow}` : String(yearStart);

  /* Theme toggle */
  $('#theme-toggle').addEventListener('click', () => {
    state.theme = state.theme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    applyTheme();
  });

  /* Language buttons */
  $$('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.lang = btn.dataset.lang;
      locale.setLang(state.lang);
      applyTranslations();
    });
  });

  /* Filters */
  $$('.filter-chip').forEach((chip) => {
    chip.addEventListener('click', () => applyFilter(chip.dataset.filter));
  });

  /* Card tabs + image lightbox (event delegation) */
  $('#projects-grid').addEventListener('click', (e) => {
    const zoom = e.target.closest('.card-media-btn');
    if (zoom) {
      openImageModal(zoom.dataset.imgSrc, zoom.dataset.imgAlt, zoom);
      return;
    }
    const tab = e.target.closest('.card-tab');
    if (!tab) return;
    const card = tab.closest('.project-card');
    const project = PROJECTS.find((p) => p.id === card.dataset.id);
    state.tabs[project.id] = tab.dataset.tab;
    $$('.card-tab', card).forEach((b) => {
      b.classList.toggle('active', b === tab);
      b.setAttribute('aria-selected', b === tab);
    });
    const desc = $('.card-desc', card);
    desc.textContent = project.desc[state.lang][tab.dataset.tab];
    desc.classList.remove('fade-in');
    void desc.offsetWidth; // restart animation
    desc.classList.add('fade-in');
  });

  /* Hamburger */
  $('#hamburger').addEventListener('click', () => {
    const open = $('#nav-links').classList.toggle('open');
    $('#hamburger').classList.toggle('open', open);
    $('#hamburger').setAttribute('aria-expanded', open);
  });
  $$('#nav-links a').forEach((a) => a.addEventListener('click', () => {
    $('#nav-links').classList.remove('open');
    $('#hamburger').classList.remove('open');
  }));

  /* Back to top */
  $('#back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Hire + booking modals — opening is delegated so JS-rendered cards work too */
  loadTurnstileScript();
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-open-hire]')) openHireModal();
    if (e.target.closest('[data-open-booking]')) openBookingModal();
  });
  $('#hire-close').addEventListener('click', closeHireModal);
  $('#hire-backdrop').addEventListener('click', closeHireModal);
  $('#booking-close').addEventListener('click', closeBookingModal);
  $('#booking-backdrop').addEventListener('click', closeBookingModal);
  $('#image-close').addEventListener('click', closeImageModal);
  $('#image-backdrop').addEventListener('click', closeImageModal);
  const imageModalImg = $('#image-modal-img');
  imageModalImg.addEventListener('load', () => imageModalImg.classList.remove('is-loading'));
  imageModalImg.addEventListener('error', () => {
    imageModalImg.classList.remove('is-loading');
    imageModalImg.classList.add('is-error');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!$('#image-modal').hidden) {
      closeImageModal();
    } else if (!$('#booking-modal').hidden) {
      closeBookingModal();
    } else if (!$('#hire-modal').hidden) {
      closeHireModal();
    }
  });
  $('#hire-form').addEventListener('submit', submitHireForm);

  /* Booking modal wiring */
  $('#bk-form').addEventListener('submit', submitBookingForm);
  $('#bk-retry').addEventListener('click', bkLoadSlots);
  $('#bk-back-date').addEventListener('click', () => bkShow('bk-step-date'));
  $('#bk-back-time').addEventListener('click', () => bkShow('bk-step-time'));
  $('#bk-error-back').addEventListener('click', () => {
    bkResetTurnstile();
    // Go back to time slot selection so the user can pick a different slot
    bkShow('bk-step-time');
  });
  $('#bk-new').addEventListener('click', () => {
    bkSelectedSlot = null;
    $('#bk-form').reset();
    $('#bk-email-err').textContent = '';
    $('#bk-topic-err').textContent = '';
    bkResetTurnstile();
    if (bkIsOnCooldown()) {
      bkShow('bk-cooldown');
    } else {
      bkLoadSlots();
    }
  });

  if (CHECK_EMAIL_DOMAIN) {
    $('#hire-email').addEventListener('blur', async () => {
      const emailVal = $('#hire-email').value.trim();
      const emailErr = $('#hire-email-err');
      if (!EMAIL_RE.test(emailVal)) return;
      const domain = emailVal.split('@')[1].toLowerCase();
      if (sessionStorage.getItem('mx_' + domain) !== null) return;
      emailErr.textContent = t('hire.errVerifying');
      const ok = await checkEmailDomain(emailVal);
      if ($('#hire-email').value.trim() === emailVal) {
        emailErr.textContent = ok ? '' : t('hire.errNoMx');
      }
    });
    $('#bk-email').addEventListener('blur', async () => {
      const emailVal = $('#bk-email').value.trim();
      const emailErr = $('#bk-email-err');
      if (!EMAIL_RE.test(emailVal)) return;
      const domain = emailVal.split('@')[1].toLowerCase();
      if (sessionStorage.getItem('mx_' + domain) !== null) return;
      emailErr.textContent = t('hire.errVerifying');
      const ok = await checkEmailDomain(emailVal);
      if ($('#bk-email').value.trim() === emailVal) {
        emailErr.textContent = ok ? '' : t('hire.errNoMx');
      }
    });
  }
});
