import React from 'react';
import HeroSection from './_components/sections/HeroSection';
import ExperienceSection from './_components/sections/ExperienceSection';
import PublicSpeechesSection from './_components/sections/PublicSpeechesSection';
import NewsletterSection from './_components/sections/NewsletterSection';
import ServicesSection from './_components/sections/ServicesSection';
import TestimonialsSection from './_components/sections/TestimonialsSection';
import CTASection from './_components/sections/CTASection';
import { DEFAULT_CTA_FEATURES } from './_data/cta-features';
import BadgeIcons from './_components/ui/BadgeIcons';
import Icons from './_components/ui/Icons';

export const data = {
  layout: 'base',
  eleventyComputed: {
    permalink: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['url.consultant'] || '/technical-seo-consultant/';
    },
    title: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['meta.consultant.title'] || 'Technical SEO Consultant - TechSEO Vitals';
    },
    description: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['meta.consultant.description'] || 'Expert technical SEO consultant to help improve your website performance.';
    },
  },
};

interface Props {
  t?: (key: string) => string;
}

const TechnicalSEOConsultantPage: React.FC<Props> = ({ t = (key) => key }) => {

  return (
  <main className="flex-1">
    <HeroSection
      badge={{
        icon: BadgeIcons.pulsingDot,
        text: t('consultant.hero.badge'),
      }}
      title={t('consultant.hero.title')}
      description={t('consultant.hero.description')}
      primaryCta={{
        text: t('consultant.hero.cta'),
        href: '/contact/',
        target: '_self',
      }}
      image={{
        src: '/assets/images/martin-stepanek-4.jpg',
        alt: t('common.alt.martin-expert'),
      }}
      rating={{
        show: true,
        text: t('consultant.hero.testimonial'),
        isTestimonial: true,
        source: t('consultant.hero.testimonial.source'),
        sourceLink: 'https://www.linkedin.com/in/techseovitals/details/recommendations/',
      }}
      statusBadge={{
        show: true,
        text: t('consultant.hero.status'),
      }}
    />
    <TestimonialsSection t={t} />
    <div className="border-t border-gray-200">
      <ExperienceSection
        badge={{
          icon: BadgeIcons.pulsingDot,
          text: t('consultant.experience.badge'),
        }}
        title={t('consultant.experience.title')}
        subtitle={t('consultant.experience.subtitle')}
        experiencePoints={[
          {
            icon: <Icons.lightning className="w-6 h-6 text-white" />,
            title: t('consultant.experience.point1.title'),
            description: t('consultant.experience.point1.description'),
            color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
          },
          {
            icon: <Icons.badge className="w-6 h-6 text-white" />,
            title: t('consultant.experience.point2.title'),
            description: t('consultant.experience.point2.description'),
            color: 'bg-gradient-to-br from-green-500 to-emerald-600',
          },
          {
            icon: <Icons.growth className="w-6 h-6 text-white" />,
            title: t('consultant.experience.point3.title'),
            description: t('consultant.experience.point3.description'),
            color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
          },
        ]}
        image={{
          src: '/assets/images/martin-stepanek-1.jpg',
          alt: t('common.alt.martin-consultant'),
        }}
        statsBadge={{
          icon: <Icons.verifiedBadge className="w-5 h-5 text-green-600" />,
          title: t('consultant.experience.stats'),
          subtitle: '',
        }}
        testimonial={{
          quote: t('consultant.experience.testimonial'),
          source: t('consultant.experience.testimonial.source'),
        }}
        backgroundColor="gray"
      />
    </div>
    <PublicSpeechesSection t={t} />
    <ServicesSection
      title={t('consultant.services.title')}
      t={t}
    />
    <CTASection
      badge={{
        icon: BadgeIcons.lightning,
        text: t('consultant.cta.badge'),
      }}
      title={t('consultant.cta.title')}
      description={t('consultant.cta.description')}
      primaryCta={{
        text: t('consultant.cta.button'),
        href: '/contact/',
      }}
      trustSignals={[t('trust.free-consultation'), t('trust.no-commitment')]}
      features={DEFAULT_CTA_FEATURES}
      t={t}
    />
    <NewsletterSection t={t} />
  </main>
  );
};

export default function TechnicalSEOConsultantTemplate(data: any & { t: (key: string) => string }) {
  return <TechnicalSEOConsultantPage t={data.t} />;
}
