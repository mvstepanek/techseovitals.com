// Hreflang configuration for alternate language URLs
module.exports = function() {
  const i18nData = require('./i18n.cjs');
  const locale = i18nData.locale;

  return {
    // Current locale
    currentLocale: locale,

    // Get alternate URL for a given path
    getAlternateUrl: function(path, targetLocale) {
      const config = i18nData.config[targetLocale];
      if (!config) return null;

      // Normalize path - ensure it starts with /
      let cleanPath = path;
      if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;

      // Remove trailing slash except for root
      if (cleanPath.endsWith('/') && cleanPath !== '/') {
        cleanPath = cleanPath.slice(0, -1);
      }

      // For root path, it already has trailing slash
      if (cleanPath === '/') {
        return `${config.domain}/`;
      }

      // For other paths, add trailing slash
      return `${config.domain}${cleanPath}/`;
    },

    // Get all alternate URLs for a path
    getAlternates: function(path) {
      return i18nData.locales.map(loc => ({
        locale: loc,
        url: this.getAlternateUrl(path, loc),
        lang: i18nData.config[loc].htmlLang,
      }));
    },

    // Get current domain
    getCurrentDomain: function() {
      return i18nData.config[locale].domain;
    },
  };
};
