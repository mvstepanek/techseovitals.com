#!/usr/bin/env node

/**
 * Check i18n translation coverage
 * Verifies that all translation keys exist in both English and Slovak
 */

const i18n = require('../src/_data/i18n.cjs');

const enKeys = new Set(Object.keys(i18n.translations.en));
const skKeys = new Set(Object.keys(i18n.translations.sk));

// Keys that are intentionally Slovak-only (e.g., "Newsletter is only in English" notices)
const allowedSkOnlyKeys = [
  'newsletter.section.english-only',
  'performance-metrics.form.english-only',
  'checklist.form.english-only',
];

// Keys that may be English-only (future translations not yet needed)
const allowedEnOnlyKeys = [];

const missingInSk = [...enKeys].filter(k => !skKeys.has(k) && !allowedEnOnlyKeys.includes(k));
const missingInEn = [...skKeys].filter(k => !enKeys.has(k) && !allowedSkOnlyKeys.includes(k));

let hasErrors = false;

console.log('\n🔍 Checking i18n translation coverage...\n');

if (missingInSk.length > 0) {
  console.error('❌ Missing in Slovak (%d keys):', missingInSk.length);
  missingInSk.forEach(k => console.error(`  - ${k}`));
  console.error('');
  hasErrors = true;
}

if (missingInEn.length > 0) {
  console.error('❌ Missing in English (%d keys):', missingInEn.length);
  missingInEn.forEach(k => console.error(`  - ${k}`));
  console.error('');
  hasErrors = true;
}

if (!hasErrors) {
  console.log('✅ All translations are present in both languages');
  console.log(`📊 Total keys: ${enKeys.size}`);
  console.log(`📝 English: ${enKeys.size} keys`);
  console.log(`📝 Slovak: ${skKeys.size} keys`);
  console.log('');
  process.exit(0);
} else {
  console.error('💥 Translation coverage check failed!\n');
  process.exit(1);
}
