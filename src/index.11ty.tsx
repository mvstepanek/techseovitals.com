import React from 'react';
import HeroSection from './_components/sections/HeroSection';
import TrustedCompaniesSection from './_components/sections/TrustedCompaniesSection';
import CTASection from './_components/sections/CTASection';
import TestimonialsSection from './_components/sections/TestimonialsSection';
import BlogCardsSection from './_components/sections/BlogCardsSection';
import NewsletterSection from './_components/sections/NewsletterSection';
import FeatureGrid from './_components/business/FeatureGrid';
import BrutalTruthSection from './_components/sections/BrutalTruthSection';
import WhyChooseMeSection from './_components/sections/WhyChooseMeSection';
import WhyAuditSection from './_components/sections/WhyAuditSection';
import { DEFAULT_CTA_FEATURES } from './_data/cta-features';
import BadgeIcons from './_components/ui/BadgeIcons';
import Icons from './_components/ui/Icons';

export const data = {
  layout: 'base',
  eleventyComputed: {
    title: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['meta.home.title'] || 'TechSEO Vitals - Technical SEO Expert';
    },
    description: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['meta.home.description'] || 'Expert technical SEO services to improve your website performance and search visibility.';
    },
  },
};

interface EleventyData {
  collections: {
    blog: Array<{
      data: {
        title: string;
        description: string;
        permalink: string;
        date: string;
        image?: string;
      };
      content: string;
    }>;
  };
  t: (key: string) => string;
}

const HomePage: React.FC<{ collections: EleventyData['collections']; t?: (key: string) => string }> = ({ collections, t = (key) => key }) => {
  // Get latest 3 blog posts (sorted by date, newest first)
  const sortedPosts = [...collections.blog].sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  const latestPosts = sortedPosts.slice(0, 3).map((post) => {
    const permalink =
      post.data.permalink ||
      `/blog/${post.data.title
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')}/`;
    const fallbackImage = `/assets/images/blog/${permalink
      .split('/')
      .filter((p) => p)
      .pop()}.jpg`;
    return {
      title: post.data.title,
      href: permalink,
      image: post.data.image || fallbackImage,
      date: new Date(post.data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      dateTime: post.data.date,
      excerpt: post.data.description,
    };
  });

  return (
    <>
      <HeroSection
        badge={{
          icon: BadgeIcons.checkCircle,
          text: t('hero.badge.expertise'),
        }}
        title={t('hero.title')}
        description={t('hero.description')}
        primaryCta={{
          text: t('hero.cta.primary'),
          href: t('url.contact'),
        }}
        image={{
          src: '/assets/images/martin-stepanek-6.jpg',
          alt: 'Martin Stepanek - Technical SEO Expert',
        }}
        rating={{
          show: true,
          text: t('hero.testimonial'),
          isTestimonial: true,
          source: t('hero.testimonial.source'),
          sourceLink: 'https://www.linkedin.com/in/techseovitals/details/recommendations/',
        }}
        statusBadge={{
          show: true,
          text: t('hero.status.available'),
        }}
      />

      <TrustedCompaniesSection t={t} />

      <FeatureGrid
        badge={{
          icon: BadgeIcons.pulsingDot,
          text: t('features.badge'),
        }}
        title={t('features.title')}
        subtitle={t('features.subtitle')}
        cta={{
          text: t('cta.free-check'),
          href: t('url.contact'),
          trustSignals: [t('trust.free-consultation'), t('trust.no-commitment')],
        }}
        backgroundColor="gray"
        columns={3}
        features={[
          {
            icon: <Icons.growth className="w-8 h-8 text-white" />,
            title: t('features.visitors-to-customers.title'),
            description: t('features.visitors-to-customers.description'),
            color: 'blue',
          },
          {
            icon: <Icons.monitor className="w-8 h-8 text-white" />,
            title: t('features.remove-friction.title'),
            description: t('features.remove-friction.description'),
            color: 'green',
          },
          {
            icon: <Icons.eye className="w-8 h-8 text-white" />,
            title: t('features.maximize-visibility.title'),
            description: t('features.maximize-visibility.description'),
            color: 'purple',
          },
        ]}
      />

      <BrutalTruthSection t={t} />

      <WhyChooseMeSection t={t} />

      <WhyAuditSection t={t} />

      <TestimonialsSection backgroundColor="bg-gray-50" t={t} />

      <CTASection
        badge={{
          icon: BadgeIcons.lightning,
          text: t('cta.badge'),
        }}
        title={t('cta.title')}
        description={t('cta.description')}
        primaryCta={{
          text: t('cta.start-transformation'),
          href: t('url.contact'),
        }}
        trustSignals={[t('trust.free-consultation'), t('trust.no-commitment')]}
        features={DEFAULT_CTA_FEATURES}
        t={t}
      />

      <BlogCardsSection posts={latestPosts} t={t} />

      <NewsletterSection t={t} />
    </>
  );
};

export default function IndexTemplate(data: EleventyData & { t: (key: string) => string }) {
  return <HomePage collections={data.collections} t={data.t} />;
}
