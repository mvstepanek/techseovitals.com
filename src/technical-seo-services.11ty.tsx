import React from 'react';
import HeroSection from './_components/sections/HeroSection';
import TrustedCompaniesSection from './_components/sections/TrustedCompaniesSection';
import TestimonialsSection from './_components/sections/TestimonialsSection';
import ServicesSection from './_components/sections/ServicesSection';
import WhatMakesMeDifferentSection from './_components/sections/WhatMakesMeDifferentSection';
import WorkProcessSection from './_components/sections/WorkProcessSection';
import CTASection from './_components/sections/CTASection';
import { BUSINESS_CONSTANTS, COMMON_STYLES } from './_data/constants';

export const data = {
  title: 'Technical SEO Services | TechSEO Vitals',
  description:
    'Create exceptional user experiences that naturally boost revenue. Expert technical optimization, performance monitoring, and seamless migrations for ambitious businesses.',
  permalink: '/technical-seo-services/',
  layout: 'base',
};

const TechnicalSEOServicesPage: React.FC = () => (
  <main className="flex-1">
    <HeroSection
      badge={{
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        text: 'User Experience Strategy & Technical Excellence',
      }}
      title={
        <>
          Technical SEO Services That Drive <span className={COMMON_STYLES.gradientText}>Real Revenue</span>
        </>
      }
      description="Performance issues are business risks. I help businesses eliminate technical barriers that frustrate users and transform them into competitive advantages that drive revenue."
      primaryCta={{
        text: 'Transform Your User Experience',
        href: '/contact/',
        target: '_self',
      }}
      image={{
        src: '/assets/images/martinstepanek-techseo-1.jpg',
        alt: 'Martin Stepanek - Technical SEO Expert',
        loading: 'eager',
      }}
      rating={{
        show: true,
        text: '50+ businesses trust me',
      }}
      statusBadge={{
        show: true,
        text: 'Available for projects',
      }}
    />
    <ServicesSection />
    <WhatMakesMeDifferentSection />
    <TestimonialsSection />
    <TrustedCompaniesSection backgroundColor="white" />
    <WorkProcessSection />
    <CTASection
      badge={{
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        text: BUSINESS_CONSTANTS.HEADLINES.UX_STRATEGY,
      }}
      title={
        <>
          {BUSINESS_CONSTANTS.HEADLINES.TRANSFORM_BARRIERS.split(' ').slice(0, 3).join(' ')}{' '}
          <span className={COMMON_STYLES.gradientText}>
            {BUSINESS_CONSTANTS.HEADLINES.TRANSFORM_BARRIERS.split(' ').slice(3).join(' ')}
          </span>
        </>
      }
      description="Performance issues are business risks. Get a comprehensive strategy that transforms technical barriers into competitive advantages your users will love."
      primaryCta={{
        text: BUSINESS_CONSTANTS.CTA_TEXT.SCHEDULE_CONSULTATION,
        href: BUSINESS_CONSTANTS.CONTACT_URL,
      }}
    />
  </main>
);

export default TechnicalSEOServicesPage;
