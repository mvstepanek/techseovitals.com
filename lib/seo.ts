export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image';
    title?: string;
    description?: string;
    image?: string;
  };
  jsonLd?: Record<string, unknown>;
  keywords?: string;
  robots?: string;
  alternates?: {
    canonical?: string;
  };
}

export const defaultSEO: SEOData = {
  title: 'TechSEO Vitals - Technical SEO & Web Performance Consultant',
  description: 'Expert Technical SEO consultant specializing in Core Web Vitals, page speed optimization, and search rankings. Get faster websites that rank higher in Google.',
  canonical: 'https://www.techseovitals.com',
  openGraph: {
    title: 'TechSEO Vitals - Technical SEO & Web Performance Consultant',
    description: 'Expert Technical SEO consultant specializing in Core Web Vitals, page speed optimization, and search rankings. Get faster websites that rank higher in Google.',
    image: 'https://www.techseovitals.com/images/og-default.jpg',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechSEO Vitals - Technical SEO & Web Performance Consultant',
    description: 'Expert Technical SEO consultant specializing in Core Web Vitals, page speed optimization, and search rankings.',
    image: 'https://www.techseovitals.com/images/og-default.jpg',
  },
  keywords: 'technical SEO consultant, core web vitals, page speed optimization, website performance, SEO audit, search rankings',
  robots: 'index, follow',
};

export function generatePageSEO(pageSEO: Partial<SEOData>, basePath = ''): SEOData {
  const canonical = pageSEO.canonical || `https://www.techseovitals.com${basePath}`;
  
  return {
    ...defaultSEO,
    ...pageSEO,
    canonical,
    alternates: {
      canonical,
      ...pageSEO.alternates,
    },
    openGraph: {
      ...defaultSEO.openGraph,
      ...pageSEO.openGraph,
    },
    twitter: {
      ...defaultSEO.twitter,
      ...pageSEO.twitter,
    },
  };
}

export function generateBlogPostJsonLd(post: {
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
  slug: string;
  author: string;
  image?: string;
  tags?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image ? [`https://www.techseovitals.com${post.image}`] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://www.techseovitals.com/technical-seo-consultant/',
    },
    publisher: {
      '@type': 'Person',
      name: 'Martin Stepanek',
      url: 'https://www.techseovitals.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.techseovitals.com/images/logos/logo-light.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.techseovitals.com/blog/${post.slug}/`,
    },
    keywords: post.tags?.join(', '),
  };
}

export function generatePersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Martin Stepanek',
    jobTitle: 'Technical SEO & Web Performance Consultant',
    description: 'Expert Technical SEO consultant specializing in Core Web Vitals, page speed optimization, and search rankings.',
    url: 'https://www.techseovitals.com/technical-seo-consultant/',
    image: 'https://www.techseovitals.com/images/martin-stepanek.jpg',
    sameAs: [
      'https://linkedin.com/in/martin-stepanek-techseo/',
      'https://bsky.app/profile/techseovitals.com',
      'https://youtube.com/@techseovitals',
    ],
    knowsAbout: [
      'Technical SEO',
      'Web Performance',
      'Core Web Vitals',
      'Page Speed Optimization',
      'Search Engine Optimization',
      'Website Migration',
      'SEO Auditing',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'TechSEO Vitals',
      url: 'https://www.techseovitals.com/',
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'TechSEO Vitals',
    description: 'Technical SEO and Web Performance consulting services to help businesses improve search rankings and website speed.',
    url: 'https://www.techseovitals.com/',
    logo: 'https://www.techseovitals.com/images/logos/logo-light.svg',
    image: 'https://www.techseovitals.com/images/og-default.jpg',
    founder: {
      '@type': 'Person',
      name: 'Martin Stepanek',
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Technical SEO Consulting',
      'Web Performance Optimization',
      'Core Web Vitals Improvement',
      'SEO Auditing',
      'Website Migration Support',
    ],
    sameAs: [
      'https://linkedin.com/in/martin-stepanek-techseo/',
      'https://bsky.app/profile/techseovitals.com',
      'https://youtube.com/@techseovitals',
    ],
  };
}