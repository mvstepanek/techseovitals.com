// Hreflang configuration for alternate language URLs
module.exports = function() {
  const i18nData = require('./i18n.cjs');
  const locale = i18nData.locale;

  // Translation mapping - maps translationKey to locale-specific permalinks
  const translationMap = {
    // Blog posts
    'multilingual-website-essentials': {
      en: '/blog/multilingual-website-essentials-technical-seo-guide/',
      sk: '/blog/ako-spravne-nastavit-viacjazycny-web-struktura-url-adries-hreflang-a-dostatocny-vykon/'
    },
    'lcp-transforms-bounce-rates-revenue': {
      en: '/blog/the-roi-of-faster-content-how-lcp-transforms-bounce-rates-and-revenue/',
      sk: '/blog/dobre-lcp-vie-priniest-az-14-percent-menej-okamzitych-odchodov-a-13-percent-viac-konverzii/'
    },
    'why-care-about-ttfb': {
      en: '/blog/why-you-should-care-about-your-ttfb-technical-seo-guide-to-optimization/',
      sk: '/blog/optimalizacia-ttfb-ako-dosiahnut-200ms-a-menej-a-zaroven-zvysit-konverzie/'
    }
  };

  // URL mappings for main pages (these use i18n translations)
  const urlMappings = {
    '/': { en: '/', sk: '/' },
    '/technical-seo-services/': { en: '/technical-seo-services/', sk: '/technicke-seo-sluzby/' },
    '/technicke-seo-sluzby/': { en: '/technical-seo-services/', sk: '/technicke-seo-sluzby/' },
    '/technical-seo-consultant/': { en: '/technical-seo-consultant/', sk: '/konzultant-technicke-seo/' },
    '/konzultant-technicke-seo/': { en: '/technical-seo-consultant/', sk: '/konzultant-technicke-seo/' },
    '/contact/': { en: '/contact/', sk: '/kontakt/' },
    '/kontakt/': { en: '/contact/', sk: '/kontakt/' },
    '/customers/': { en: '/customers/', sk: '/klienti/' },
    '/klienti/': { en: '/customers/', sk: '/klienti/' },
    '/blog/': { en: '/blog/', sk: '/blog/' },
    '/newsletter/': { en: '/newsletter/', sk: '/newsletter/' },
    '/technical-seo-checklist/': { en: '/technical-seo-checklist/', sk: '/technicky-seo-checklist/' },
    '/technicky-seo-checklist/': { en: '/technical-seo-checklist/', sk: '/technicky-seo-checklist/' },
    '/website-migration-checklist/': { en: '/website-migration-checklist/', sk: '/seo-migracny-checklist/' },
    '/seo-migracny-checklist/': { en: '/website-migration-checklist/', sk: '/seo-migracny-checklist/' },
    '/5-web-performance-metrics-every-business-owner-should-track/': {
      en: '/5-web-performance-metrics-every-business-owner-should-track/',
      sk: '/5-klucovych-webovych-metrik-pre-kazdeho-podnikatela/'
    },
    '/5-klucovych-webovych-metrik-pre-kazdeho-podnikatela/': {
      en: '/5-web-performance-metrics-every-business-owner-should-track/',
      sk: '/5-klucovych-webovych-metrik-pre-kazdeho-podnikatela/'
    },
    '/privacy-policy/': { en: '/privacy-policy/', sk: '/ochrana-osobnych-udajov/' },
    '/ochrana-osobnych-udajov/': { en: '/privacy-policy/', sk: '/ochrana-osobnych-udajov/' },
    '/terms-and-conditions/': { en: '/terms-and-conditions/', sk: '/obchodne-podmienky/' },
    '/obchodne-podmienky/': { en: '/terms-and-conditions/', sk: '/obchodne-podmienky/' },
    '/thank-you-for-subscribing/': { en: '/thank-you-for-subscribing/', sk: '/ste-prihlaseni/' },
    '/ste-prihlaseni/': { en: '/thank-you-for-subscribing/', sk: '/ste-prihlaseni/' }
  };

  return {
    // Current locale
    currentLocale: locale,

    // Get alternate URL for a given path
    getAlternateUrl: function(path, targetLocale, translationKey = null) {
      const config = i18nData.config[targetLocale];
      if (!config) return null;

      // If translationKey is provided, use the translation map
      if (translationKey && translationMap[translationKey]) {
        const translatedPath = translationMap[translationKey][targetLocale];
        if (translatedPath) {
          return `${config.domain}${translatedPath}`;
        }
        // If no translation exists for this locale, return null
        return null;
      }

      // Check if this path has a URL mapping
      if (urlMappings[path]) {
        const translatedPath = urlMappings[path][targetLocale];
        if (translatedPath) {
          return `${config.domain}${translatedPath}`;
        }
        return null;
      }

      // For unknown paths, return null (don't generate incorrect hreflang)
      return null;
    },

    // Get all alternate URLs for a path
    getAlternates: function(path, translationKey = null) {
      const alternates = [];

      // For blog posts without translationKey, don't return any alternates
      // (they don't have translations)
      // But allow the blog index page (/blog/) to have hreflang
      if (path.startsWith('/blog/') && path !== '/blog/' && !translationKey) {
        return alternates;
      }

      for (const loc of i18nData.locales) {
        const url = this.getAlternateUrl(path, loc, translationKey);
        // Only include if a valid URL is found
        if (url) {
          alternates.push({
            locale: loc,
            url: url,
            lang: i18nData.config[loc].htmlLang,
          });
        }
      }

      return alternates;
    },

    // Get current domain
    getCurrentDomain: function() {
      return i18nData.config[locale].domain;
    },
  };
};
