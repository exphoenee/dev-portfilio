/* ============================================================
   RENDER PROJECTS — cards, category filter and card interactions.
   The icon maps below are view-only decoration for the cards.
   ============================================================ */

import { $, $$, t } from '../dom.js';
import { locale } from '../locale.js';
import { state, tabFor } from '../state.js';
import { PROJECTS } from '../../data/portfolio-data.js';
import { openImageModal } from '../modals/image.js';

const CATEGORY_ICONS = {
  library: '📦',
  game: '🎮',
  app: '🛠️',
  api: '🔌',
  website: '🌐'
};

/* Tech icon lookup — maps a label shown on cards to its file in assets/images/tech/ */
const TECH_ICONS = {
  React: 'react.svg',
  TypeScript: 'typescript.svg',
  'Vanilla JS': 'js.svg',
  'VS Code': 'vscode.svg',
  Vite: 'vite.svg',
  Vitest: 'vitest.svg',
  Jest: 'jest.svg',
  Mocha: 'mocha.svg',
  Webpack: 'webpack.svg',
  HTML: 'html.svg',
  CSS: 'css.svg',
  JavaScript: 'javascript.svg',
  'Node.js': 'nodejs.svg',
  Express: 'express.svg',
  Swagger: 'swagger.svg',
  npm: 'npm.svg',
  PNPM: 'pnpm.svg',
  Redux: 'Redux.svg',
  PHP: 'php.svg',
  MySQL: 'mysql.svg',
  'TensorFlow.js': 'Tensorflow.svg'
};

const LINK_ICONS = {
  repo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  demo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  npm: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.76 1.76h20.48v20.48H1.76z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 6.24H5.52v11.52H12V9.6h2.88v8.16h2.88V6.24z"/></svg>'
};

function cardTitle(p) {
  return (p.nameL10n && p.nameL10n[locale.lang]) || p.name;
}

function projectCard(p, index) {
  const d = p.desc[locale.lang];
  const title = cardTitle(p);
  const icons = CATEGORY_ICONS[p.category] || '📁';
  // The label sits in its own span so a language switch can patch the text
  // without touching the inline SVG next to it.
  const links = Object.entries(p.links).map(([type, url]) => {
    if (!url) return '';
    return `<a class="card-link ${type === 'demo' ? 'primary' : ''}" data-link-type="${type}" href="${url}" target="_blank" rel="noopener" aria-label="${title} — ${t('link.' + type)}">
      ${LINK_ICONS[type] || ''}<span class="card-link-label">${t('link.' + type)}</span>
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
          <span class="card-category">${icons} <span class="card-category-label">${t('filters.' + p.category)}</span></span>
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

export function renderProjects() {
  const grid = $('#projects-grid');
  if (!grid) return;
  const filtered = state.filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === state.filter);

  grid.innerHTML = filtered.map(projectCard).join('');
}

/* Language switch: patch the text in place instead of rebuilding 21 cards.
   Keeps focus, scroll position, the reveal state and the loaded <img> nodes. */
export function updateProjectsText() {
  const grid = $('#projects-grid');
  if (!grid) return;
  $$('.project-card', grid).forEach((card) => {
    const p = PROJECTS.find((x) => x.id === card.dataset.id);
    if (!p) return;
    const title = cardTitle(p);
    const activeTab = tabFor(p.id);

    $('.card-title', card).textContent = title;
    $('.card-category-label', card).textContent = t('filters.' + p.category);
    $('.card-desc', card).textContent = p.desc[locale.lang][activeTab];

    $$('.card-tab', card).forEach((tab) => {
      tab.textContent = t('tab.' + tab.dataset.tab);
    });

    $$('.card-link', card).forEach((link) => {
      const type = link.dataset.linkType;
      $('.card-link-label', link).textContent = t('link.' + type);
      link.setAttribute('aria-label', `${title} — ${t('link.' + type)}`);
    });

    const media = $('.card-media-btn', card);
    media.dataset.imgAlt = title;
    media.setAttribute('aria-label', `${title} — ${t('image.zoomAria')}`);
    $('img', media).alt = title;
  });
}

export function applyFilter(filter) {
  state.filter = filter;
  $$('.filter-chip').forEach((c) => {
    const active = c.dataset.filter === filter;
    c.classList.toggle('active', active);
    c.setAttribute('aria-pressed', active);
  });
  renderProjects();
}

/* Card tabs + image lightbox, wired once via event delegation so
   re-rendered cards (filter, language switch) keep working. */
export function initProjectCards() {
  const grid = $('#projects-grid');
  if (!grid) return;
  grid.addEventListener('click', (e) => {
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
    desc.textContent = project.desc[locale.lang][tab.dataset.tab];
    desc.classList.remove('fade-in');
    void desc.offsetWidth; // restart animation
    desc.classList.add('fade-in');
  });

  $$('.filter-chip').forEach((chip) => {
    chip.addEventListener('click', () => applyFilter(chip.dataset.filter));
  });
}
