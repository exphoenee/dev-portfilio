/* ============================================================
   Syntax gate — parses every JS source with `node --check`.
   Everything is data-driven and there is no build step, so a syntax
   error in any module breaks the whole page at runtime. Walks the
   tree instead of listing files, so new modules are covered
   automatically. Used by `npm run check` and by the deploy workflow.
   ============================================================ */

import { execFileSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOTS = ['scripts', 'data'];

function collect(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) collect(p, out);
    else if (entry.name.endsWith('.js')) out.push(p);
  }
  return out;
}

const files = ROOTS.flatMap((r) => collect(r));
let failed = 0;

for (const file of files) {
  try {
    execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' });
    console.log(`ok   ${file}`);
  } catch (err) {
    failed++;
    console.error(`FAIL ${file}`);
    console.error(String(err.stderr || err.message).trim());
  }
}

console.log(`\n${files.length - failed}/${files.length} files parsed`);
process.exit(failed === 0 ? 0 : 1);
