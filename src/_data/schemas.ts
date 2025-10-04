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

export class SchemaFactory {
  private static getCanonicalUrl(permalink: string): string {
    return `${SITE_CONFIG.DOMAIN}${permalink}`;
  }

  // Organization schema - base for all pages
  static organization() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'TechSEO Vitals',
      url: SITE_CONFIG.DOMAIN,
      logo: `${SITE_CONFIG.DOMAIN}/assets/techseovitals-logo.svg`,
      description: 'Expert technical SEO and web performance consulting services',
      founder: {
        '@type': 'Person',
        name: 'Martin Stepanek',
        jobTitle: 'Technical SEO Consultant',
        url: `${SITE_CONFIG.DOMAIN}/technical-seo-consultant/`,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        url: `${SITE_CONFIG.DOMAIN}/contact/`,
      },
      sameAs: [SOCIAL_MEDIA.LINKEDIN_PROFILE, SOCIAL_MEDIA.BLUESKY, SOCIAL_MEDIA.YOUTUBE],
    };
  }

  // Article schema for blog posts
  static article(data: EleventyData) {
    if (!data.articleData) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.description,
      url: this.getCanonicalUrl(data.permalink || '/'),
      datePublished: data.articleData.publishDate,
      dateModified: data.articleData.modifiedDate || data.articleData.publishDate,
      author: {
        '@type': 'Person',
        name: data.articleData.author || 'Martin Stepanek',
        url: `${SITE_CONFIG.DOMAIN}/technical-seo-consultant/`,
      },
      publisher: {
        '@type': 'Organization',
        name: 'TechSEO Vitals',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_CONFIG.DOMAIN}/assets/techseovitals-logo.svg`,
        },
      },
    };
  }

  // Breadcrumb schema
  static breadcrumb(data: EleventyData) {
    if (!data.permalink || data.permalink === '/') return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_CONFIG.DOMAIN,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: data.title,
          item: this.getCanonicalUrl(data.permalink),
        },
      ],
    };
  }

  // Website schema for homepage
  static website(data: EleventyData) {
    if (data.permalink !== '/') return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'TechSEO Vitals',
      url: SITE_CONFIG.DOMAIN,
      description: 'Expert technical SEO and web performance consulting services',
      publisher: {
        '@type': 'Organization',
        name: 'TechSEO Vitals',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_CONFIG.DOMAIN}/blog/?search={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    };
  }

  // WebPage schema for all pages
  static webPage(data: EleventyData) {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: data.title,
      description: data.description,
      url: this.getCanonicalUrl(data.permalink || '/'),
      isPartOf: {
        '@type': 'WebSite',
        name: 'TechSEO Vitals',
        url: SITE_CONFIG.DOMAIN,
      },
      author: {
        '@type': 'Person',
        name: 'Martin Stepanek',
        url: `${SITE_CONFIG.DOMAIN}/technical-seo-consultant/`,
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
          }
        : null,
    };
  }

  // Person schema for Martin Stepanek
  static person() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Martin Stepanek',
      jobTitle: 'Technical SEO Consultant',
      url: `${SITE_CONFIG.DOMAIN}/technical-seo-consultant/`,
      worksFor: {
        '@type': 'Organization',
        name: 'TechSEO Vitals',
      },
      knowsAbout: ['Technical SEO', 'Web Performance', 'Core Web Vitals', 'Website Migration', 'Search Engine Optimization'],
      sameAs: [SOCIAL_MEDIA.LINKEDIN_PROFILE, SOCIAL_MEDIA.BLUESKY, SOCIAL_MEDIA.YOUTUBE],
    };
  }

  // Blog schema
  static blog(data: EleventyData) {
    if (data.permalink !== '/blog/') return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'TechSEO Vitals Blog',
      description: 'Expert technical SEO blog with actionable insights, tips, and strategies',
      url: `${SITE_CONFIG.DOMAIN}/blog/`,
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
  static newsletter(data: EleventyData) {
    if (data.permalink !== '/newsletter/') return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      '@id': `${SITE_CONFIG.DOMAIN}/newsletter/`,
      name: 'TechSEO Vitals Newsletter',
      description: 'Technical SEO insights and web performance strategies delivered every two weeks',
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
        audienceType: 'Business owners, SEO professionals, Web developers',
      },
    };
  }

  // Contact Page schema
  static contactPage(data: EleventyData) {
    if (data.permalink !== '/contact/') return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact TechSEO Vitals',
      description: 'Get in touch with Martin Stepanek for technical SEO consulting services',
      url: `${SITE_CONFIG.DOMAIN}/contact/`,
      mainEntity: {
        '@type': 'Organization',
        name: 'TechSEO Vitals',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          url: `${SITE_CONFIG.DOMAIN}/contact/`,
        },
      },
    };
  }

  // Generate all schemas for a page
  static generateSchemas(data: EleventyData) {
    const schemas = [this.organization(), this.webPage(data), this.person()];

    // Add conditional schemas
    const conditionalSchemas = [this.article(data), this.breadcrumb(data), this.website(data), this.blog(data), this.newsletter(data), this.contactPage(data)];

    conditionalSchemas.forEach((schema) => {
      if (schema) schemas.push(schema);
    });

    return schemas;
  }

  // Generate schema script tags for HTML
  static generateSchemaScripts(data: EleventyData) {
    const schemas = this.generateSchemas(data);
    return schemas.map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join('\n');
  }
}
