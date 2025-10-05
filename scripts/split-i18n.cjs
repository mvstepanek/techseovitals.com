#!/usr/bin/env node

/**
 * Split i18n.cjs into modular files
 * Automatically organizes translations by namespace
 */

const fs = require('fs');
const path = require('path');

const i18n = require('../src/_data/i18n.cjs');

// Define the module structure - which keys go into which module
const modules = {
  common: ['cta\\.', 'common\\.', 'trust\\.'],
  meta: ['meta\\.'],
  navigation: ['nav\\.', 'header\\.', 'footer\\.'],
  hero: ['hero\\.'],
  features: ['features\\.'],
  services: ['services\\.', 'service-'],
  blog: ['blog\\.', 'blog-'],
  forms: ['form\\.'],
  newsletter: ['newsletter\\.'],
  customers: ['customers\\.'],
  consultant: ['consultant\\.'],
  contact: ['contact\\.', 'calendly\\.', 'business-info\\.'],
  about: ['about\\.', 'why-choose-me\\.', 'why-me\\.', 'what-makes-me\\.', 'why-audit\\.'],
  testimonials: ['testimonials\\.', 'testimonial\\.'],
  brutal: ['brutal-truth\\.'],
  checklist: ['checklist\\.', 'migration-checklist\\.'],
  performance: ['performance-metrics\\.'],
  speaking: ['speaking\\.'],
};

function getModuleForKey(key) {
  for (const [moduleName, patterns] of Object.entries(modules)) {
    for (const pattern of patterns) {
      if (new RegExp(`^${pattern}`).test(key)) {
        return moduleName;
      }
    }
  }
  return 'misc'; // Fallback for unmatched keys
}

function splitTranslations(locale) {
  const translations = i18n.translations[locale];
  const grouped = {};

  // Group keys by module
  for (const [key, value] of Object.entries(translations)) {
    const module = getModuleForKey(key);
    if (!grouped[module]) {
      grouped[module] = {};
    }
    grouped[module][key] = value;
  }

  // Write module files
  const outputDir = path.join(__dirname, '../src/_data/i18n', locale);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const [moduleName, keys] of Object.entries(grouped)) {
    const filePath = path.join(outputDir, `${moduleName}.cjs`);
    const content = `/**
 * ${moduleName.charAt(0).toUpperCase() + moduleName.slice(1)} translations - ${locale.toUpperCase()}
 * Auto-generated from split-i18n.cjs script
 */

module.exports = ${JSON.stringify(keys, null, 2)};
`;

    fs.writeFileSync(filePath, content);
    console.log(`✅ Created ${locale}/${moduleName}.cjs (${Object.keys(keys).length} keys)`);
  }

  return grouped;
}

console.log('\n📦 Splitting i18n translations into modules...\n');

const enModules = splitTranslations('en');
const skModules = splitTranslations('sk');

console.log('\n✨ Split complete!\n');
console.log(`📊 English: ${Object.keys(enModules).length} modules`);
console.log(`📊 Slovak: ${Object.keys(skModules).length} modules`);
console.log('');
