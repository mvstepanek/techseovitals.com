// Add translation function and locale to all pages
module.exports = {
  locale: (data) => {
    const i18nData = require('./i18n.cjs');
    return i18nData.locale;
  },
  t: (data) => {
    const i18nData = require('./i18n.cjs');
    const locale = i18nData.locale;
    const translations = i18nData.translations[locale] || i18nData.translations.en;

    return function(key) {
      const value = translations[key];

      // Warn in development if translation is missing
      if (!value && process.env.NODE_ENV !== 'production') {
        console.warn(`[i18n] Missing translation for key: "${key}" in locale: "${locale}"`);
      }

      return value || key;
    };
  },
  eleventyExcludeFromCollections: (data) => {
    const i18nData = require('./i18n.cjs');
    const currentLocale = i18nData.locale;

    // If page has no lang specified (like .11ty.tsx files), include it
    if (!data.lang) return false;

    // Exclude if lang doesn't match current locale
    return data.lang !== currentLocale;
  },
};
