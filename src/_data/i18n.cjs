/**
 * i18n configuration - Modular structure
 * Translations are organized in separate files by domain
 */

const path = require('path');
const fs = require('fs');

// Get locale from environment variable or default to English
const LOCALE = process.env.LOCALE || 'en';

/**
 * Dynamically import all translation modules for a locale
 */
function loadTranslations(locale) {
  const translations = {};
  const localeDir = path.join(__dirname, 'i18n', locale);

  if (!fs.existsSync(localeDir)) {
    console.warn(`[i18n] Warning: Locale directory not found: ${localeDir}`);
    return translations;
  }

  const files = fs.readdirSync(localeDir).filter(f => f.endsWith('.cjs'));

  for (const file of files) {
    const module = require(path.join(localeDir, file));
    Object.assign(translations, module);
  }

  return translations;
}

// Load translations for both locales
const enTranslations = loadTranslations('en');
const skTranslations = loadTranslations('sk');

module.exports = {
  // Current active locale
  locale: LOCALE,

  // Available locales
  locales: ['en', 'sk'],

  // Locale configuration
  config: {
    en: {
      domain: 'https://techseovitals.com',
      htmlLang: 'en',
      label: 'English',
    },
    sk: {
      domain: 'https://www.technickeseo.sk',
      htmlLang: 'sk',
      label: 'Slovenčina',
    },
  },

  // All translations
  translations: {
    en: enTranslations,
    sk: skTranslations,
  },
};
