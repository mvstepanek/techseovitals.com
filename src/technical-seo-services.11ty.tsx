import React from 'react';
import HeroSection from './_components/sections/HeroSection';
import TrustedCompaniesSection from './_components/sections/TrustedCompaniesSection';
import TestimonialsSection from './_components/sections/TestimonialsSection';
import ServicesSection from './_components/sections/ServicesSection';
import WhatMakesMeDifferentSection from './_components/sections/WhatMakesMeDifferentSection';
import CTASection from './_components/sections/CTASection';
import { BUSINESS_CONSTANTS, COMMON_STYLES } from './_data/constants';

export const data = {
  title: 'Technical SEO Services | TechSEO Vitals',
  description:
    'Professional technical SEO services that deliver measurable results. From comprehensive audits to complex migrations, get the expertise that drives rankings, traffic, and revenue.',
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
        text: 'Results-Driven Technical SEO Services',
      }}
      title={
        <>
          Technical SEO That <span className={COMMON_STYLES.gradientText}>Drives Real Results</span>
        </>
      }
      description="Your website should work flawlessly for every visitor. Technical optimization eliminates barriers that frustrate users and hurt conversions, creating seamless experiences that turn visitors into customers while boosting your search and AI visibility."
      primaryCta={{
        text: 'Get Free Website Check',
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
        text: 'Currently taking new clients',
      }}
    />
    <TrustedCompaniesSection backgroundColor="white" />
    <ServicesSection />
    <WhatMakesMeDifferentSection />
    <TestimonialsSection backgroundColor="bg-gray-50" />
    <CTASection
      badge={{
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        text: 'Ready to Improve Your Website?',
      }}
      title={
        <>
          Turn Your Website Into a <span className={COMMON_STYLES.gradientText}>Revenue Engine</span>
        </>
      }
      description="Your competitors are getting ahead while technical issues cost you customers every day. Get the technical audit that reveals exactly how to fix what's broken and start converting more visitors into paying customers."
      primaryCta={{
        text: 'Get Free Website Check',
        href: BUSINESS_CONSTANTS.CONTACT_URL,
      }}
      trustSignals={['Free consultation', 'No commitment']}
      features={[
        {
          icon: (
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ),
          title: '100% Free',
          description: 'Website check with no hidden costs',
        },
        {
          icon: (
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
          ),
          title: '30 Minutes',
          description: 'Quick call to discuss your biggest opportunities',
        },
        {
          icon: (
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ),
          title: 'Immediate Value',
          description: 'Actionable insights you can implement today',
        },
      ]}
    />
  </main>
);

export default TechnicalSEOServicesPage;
