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
};
