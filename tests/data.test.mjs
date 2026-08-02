/* ============================================================
   Data + asset integrity tests.

   Uses node:test and node:assert only, the project ships zero runtime
   and zero build dependencies, and the test layer keeps that property.
   Run with `npm test`.
   ============================================================ */

import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

import { PROJECTS, TIMELINE, SKILLS, CONTACT } from '../data/portfolio-data.js';
import { AVAILABLE_LANGS } from '../scripts/locale.js';

import { EN_PAGE } from '../data/locales/en-page.js';
import { DE_PAGE } from '../data/locales/de-page.js';
import { HU_PAGE } from '../data/locales/hu-page.js';
import { FR_PAGE } from '../data/locales/fr-page.js';
import { IT_PAGE } from '../data/locales/it-page.js';
import { ES_PAGE } from '../data/locales/es-page.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const LOCALES = { en: EN_PAGE, de: DE_PAGE, hu: HU_PAGE, fr: FR_PAGE, it: IT_PAGE, es: ES_PAGE };

const assetExists = (p) => existsSync(join(ROOT, p));

/* ---------- locales ---------- */

test('every UI language has the same set of keys as English', () => {
  const reference = Object.keys(EN_PAGE.labels).sort();
  for (const [lang, page] of Object.entries(LOCALES)) {
    const keys = Object.keys(page.labels).sort();
    const missing = reference.filter((k) => !keys.includes(k));
    const extra = keys.filter((k) => !reference.includes(k));
    assert.deepEqual(missing, [], `${lang} is missing keys`);
    assert.deepEqual(extra, [], `${lang} has keys English does not`);
  }
});

test('AVAILABLE_LANGS matches the locale modules that exist', () => {
  assert.deepEqual([...AVAILABLE_LANGS].sort(), Object.keys(LOCALES).sort());
});

test('no UI label is left empty', () => {
  for (const [lang, page] of Object.entries(LOCALES)) {
    for (const [key, value] of Object.entries(page.labels)) {
      // hero.greetingEnd is intentionally empty in most languages.
      if (key === 'hero.greetingEnd') continue;
      const filled = Array.isArray(value) ? value.length > 0 : String(value).trim().length > 0;
      assert.ok(filled, `${lang}.${key} is empty`);
    }
  }
});

/* ---------- projects ---------- */

test('project ids are unique', () => {
  const ids = PROJECTS.map((p) => p.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('every project has both descriptions in every language', () => {
  for (const p of PROJECTS) {
    for (const lang of AVAILABLE_LANGS) {
      const d = p.desc[lang];
      assert.ok(d, `${p.id} has no ${lang} description`);
      assert.ok(d.functional?.trim(), `${p.id}.${lang}.functional is empty`);
      assert.ok(d.technical?.trim(), `${p.id}.${lang}.technical is empty`);
    }
  }
});

test('every project category has a filter chip translation', () => {
  for (const p of PROJECTS) {
    assert.ok(EN_PAGE.labels['filters.' + p.category], `no filter label for "${p.category}"`);
  }
});

test('project images exist in all three sizes', () => {
  for (const p of PROJECTS) {
    assert.ok(p.image.includes('/large/'), `${p.id} image is not a large/ path`);
    assert.ok(assetExists(p.image), `missing ${p.image}`);
    assert.ok(assetExists(p.image.replace('/large/', '/small/')), `missing small/ variant for ${p.id}`);
  }
});

/* ---------- timeline, skills, contact ---------- */

test('every timeline entry is translated into every language', () => {
  for (const item of TIMELINE) {
    for (const lang of AVAILABLE_LANGS) {
      for (const field of ['period', 'title', 'desc']) {
        assert.ok(item[field][lang]?.trim(), `timeline "${item.company}" has no ${lang}.${field}`);
      }
    }
  }
});

test('skill group titles resolve to a locale key, and chip icons exist', () => {
  for (const group of SKILLS) {
    assert.ok(EN_PAGE.labels[group.titleKey], `no label for ${group.titleKey}`);
    for (const chip of group.chips) {
      if (chip.icon) assert.ok(assetExists(chip.icon), `missing ${chip.icon}`);
    }
  }
});

test('contact cards resolve to a locale key and have a target', () => {
  for (const c of CONTACT) {
    assert.ok(EN_PAGE.labels[c.nameKey], `no label for ${c.nameKey}`);
    assert.ok(c.href || c.openHire || c.openBooking, `${c.nameKey} goes nowhere`);
  }
});

/* ---------- assets referenced from markup ---------- */

test('tech icon files are all referenced, and referenced files all exist', async () => {
  const source = await import('node:fs/promises').then((fs) =>
    fs.readFile(join(ROOT, 'scripts/render/projects.js'), 'utf8'));
  const mapped = [...source.matchAll(/:\s*'([\w.-]+\.(?:svg|png))'/g)].map((m) => m[1]);
  assert.ok(mapped.length > 0, 'TECH_ICONS looks empty');
  for (const file of mapped) {
    assert.ok(assetExists(join('assets/images/tech', file)), `TECH_ICONS points at missing ${file}`);
  }
});

test('no project image directory is empty', () => {
  for (const size of ['small', 'large', 'og']) {
    const dir = join(ROOT, 'assets/images/projects', size);
    assert.ok(readdirSync(dir).length > 1, `${size}/ looks empty`);
  }
});
