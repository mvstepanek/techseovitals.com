import { SITE_CONFIG, SOCIAL_MEDIA } from './constants';

export interface EleventyData {
  title?: string;
  description?: string;
  permalink?: string;
  ogImage?: string;
  articleData?: {
    publishDate?: string;
    modifiedDate?: string;
    author?: string;
  };
}

type TranslationFunction = (key: string) => string | string[];

export class SchemaFactory {
  private static getCanonicalUrl(permalink: string, domain?: string): string {
    return `${domain || SITE_CONFIG.DOMAIN}${permalink}`;
  }

  // Organization schema - base for all pages
  static organization(t: TranslationFunction = (key) => key, domain?: string) {
    const siteDomain = domain || SITE_CONFIG.DOMAIN;
    const consultantUrl = t('url.consultant') as string;
    const contactUrl = t('url.contact') as string;

    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'TechSEO Vitals',
      url: siteDomain,
      logo: `${siteDomain}/assets/techseovitals-logo.svg`,
      description: t('schema.organization.description') as string,
      founder: {
        '@type': 'Person',
        name: 'Martin Stepanek',
        jobTitle: t('schema.jobTitle') as string,
        url: `${siteDomain}${consultantUrl}`,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: t('schema.contactType') as string,
        url: `${siteDomain}${contactUrl}`,
      },
      sameAs: [SOCIAL_MEDIA.LINKEDIN_PROFILE, SOCIAL_MEDIA.BLUESKY, SOCIAL_MEDIA.YOUTUBE],
    };
  }

  // Article schema for blog posts
  static article(data: EleventyData, t: TranslationFunction = (key) => key, domain?: string) {
    if (!data.articleData) return null;
    const siteDomain = domain || SITE_CONFIG.DOMAIN;
    const consultantUrl = t('url.consultant') as string;

    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.description,
      url: this.getCanonicalUrl(data.permalink || '/', siteDomain),
      datePublished: data.articleData.publishDate,
      dateModified: data.articleData.modifiedDate || data.articleData.publishDate,
      author: {
        '@type': 'Person',
        name: data.articleData.author || 'Martin Stepanek',
        url: `${siteDomain}${consultantUrl}`,
      },
      publisher: {
        '@type': 'Organization',
        name: 'TechSEO Vitals',
        logo: {
          '@type': 'ImageObject',
          url: `${siteDomain}/assets/techseovitals-logo.svg`,
          width: 200,
          height: 50,
        },
      },
    };
  }

  // Breadcrumb schema
  static breadcrumb(data: EleventyData, t: TranslationFunction = (key) => key, domain?: string) {
    if (!data.permalink || data.permalink === '/') return null;
    const siteDomain = domain || SITE_CONFIG.DOMAIN;

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: t('schema.breadcrumb.home') as string,
          item: siteDomain,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: data.title,
          item: this.getCanonicalUrl(data.permalink, siteDomain),
        },
      ],
    };
  }

  // Website schema for homepage
  static website(data: EleventyData, t: TranslationFunction = (key) => key, domain?: string) {
    if (data.permalink !== '/') return null;
    const siteDomain = domain || SITE_CONFIG.DOMAIN;
    const blogUrl = t('url.blog') as string;

    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'TechSEO Vitals',
      url: siteDomain,
      description: t('schema.website.description') as string,
      publisher: {
        '@type': 'Organization',
        name: 'TechSEO Vitals',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteDomain}${blogUrl}?search={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    };
  }

  // WebPage schema for all pages
  static webPage(data: EleventyData, t: TranslationFunction = (key) => key, domain?: string) {
    const siteDomain = domain || SITE_CONFIG.DOMAIN;
    const consultantUrl = t('url.consultant') as string;

    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: data.title,
      description: data.description,
      url: this.getCanonicalUrl(data.permalink || '/', siteDomain),
      isPartOf: {
        '@type': 'WebSite',
        name: 'TechSEO Vitals',
        url: siteDomain,
      },
      author: {
        '@type': 'Person',
        name: 'Martin Stepanek',
        url: `${siteDomain}${consultantUrl}`,
      },
      publisher: {
        '@type': 'Organization',
        name: 'TechSEO Vitals',
      },
      primaryImageOfPage: data.ogImage
        ? {
            '@type': 'ImageObject',
            url: data.ogImage,
            name: data.title,
            width: 1200,
            height: 630,
          }
        : null,
    };
  }

  // Person schema for Martin Stepanek
  static person(t: TranslationFunction = (key) => key, domain?: string) {
    const siteDomain = domain || SITE_CONFIG.DOMAIN;
    const consultantUrl = t('url.consultant') as string;
    const knowsAboutRaw = t('schema.person.knowsAbout') as string | string[];

    // Ensure knowsAbout is an array and deduplicate
    const knowsAboutArray = Array.isArray(knowsAboutRaw) ? knowsAboutRaw : [knowsAboutRaw];
    const knowsAbout = [...new Set(knowsAboutArray)]; // Deduplicate using Set

    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Martin Stepanek',
      jobTitle: t('schema.jobTitle') as string,
      url: `${siteDomain}${consultantUrl}`,
      worksFor: {
        '@type': 'Organization',
        name: 'TechSEO Vitals',
      },
      knowsAbout,
      sameAs: [SOCIAL_MEDIA.LINKEDIN_PROFILE, SOCIAL_MEDIA.BLUESKY, SOCIAL_MEDIA.YOUTUBE],
    };
  }

  // Blog schema
  static blog(data: EleventyData, t: TranslationFunction = (key) => key, domain?: string) {
    const blogUrl = t('url.blog') as string;
    if (data.permalink !== blogUrl) return null;
    const siteDomain = domain || SITE_CONFIG.DOMAIN;

    return {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'TechSEO Vitals Blog',
      description: t('schema.blog.description') as string,
      url: `${siteDomain}${blogUrl}`,
      author: {
        '@type': 'Person',
        name: 'Martin Stepanek',
      },
      publisher: {
        '@type': 'Organization',
        name: 'TechSEO Vitals',
      },
    };
  }

  // Newsletter schema
  static newsletter(data: EleventyData, t: TranslationFunction = (key) => key, domain?: string) {
    const newsletterUrl = t('url.newsletter') as string;
    if (data.permalink !== newsletterUrl) return null;
    const siteDomain = domain || SITE_CONFIG.DOMAIN;

    return {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      '@id': `${siteDomain}${newsletterUrl}`,
      name: 'TechSEO Vitals Newsletter',
      description: t('schema.newsletter.description') as string,
      author: {
        '@type': 'Person',
        name: 'Martin Stepanek',
      },
      publisher: {
        '@type': 'Organization',
        name: 'TechSEO Vitals',
      },
      creativeWorkStatus: 'Published',
      audience: {
        '@type': 'Audience',
        audienceType: t('schema.newsletter.audience') as string,
      },
    };
  }

  // Contact Page schema
  static contactPage(data: EleventyData, t: TranslationFunction = (key) => key, domain?: string) {
    const contactUrl = t('url.contact') as string;
    if (data.permalink !== contactUrl) return null;
    const siteDomain = domain || SITE_CONFIG.DOMAIN;

    return {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: t('schema.contact.name') as string,
      description: t('schema.contact.description') as string,
      url: `${siteDomain}${contactUrl}`,
      mainEntity: {
        '@type': 'Organization',
        name: 'TechSEO Vitals',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: t('schema.contactType') as string,
          url: `${siteDomain}${contactUrl}`,
        },
      },
    };
  }

  // Generate all schemas for a page
  static generateSchemas(data: EleventyData, t: TranslationFunction = (key) => key, domain?: string) {
    const schemas = [this.organization(t, domain), this.webPage(data, t, domain), this.person(t, domain)];

    // Add conditional schemas
    const conditionalSchemas = [
      this.article(data, t, domain),
      this.breadcrumb(data, t, domain),
      this.website(data, t, domain),
      this.blog(data, t, domain),
      this.newsletter(data, t, domain),
      this.contactPage(data, t, domain),
    ];

    conditionalSchemas.forEach((schema) => {
      if (schema) schemas.push(schema);
    });

    return schemas;
  }

  // Generate schema script tags for HTML
  static generateSchemaScripts(data: EleventyData, t: TranslationFunction = (key) => key, domain?: string) {
    const schemas = this.generateSchemas(data, t, domain);
    return schemas.map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join('\n');
  }
}
