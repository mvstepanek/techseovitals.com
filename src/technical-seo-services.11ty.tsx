import React from 'react';
import HeroSection from './_components/sections/HeroSection';
import TrustedCompaniesSection from './_components/sections/TrustedCompaniesSection';
import TestimonialsSection from './_components/sections/TestimonialsSection';
import ServicesSection from './_components/sections/ServicesSection';
import WhatMakesMeDifferentSection from './_components/sections/WhatMakesMeDifferentSection';
import CTASection from './_components/sections/CTASection';
import { BUSINESS_CONSTANTS } from './_data/constants';
import CTAFeatures from './_components/cta/CTAFeatures';
import BadgeIcons from './_components/ui/BadgeIcons';

export const data = {
  title: 'Technical SEO Services',
  description: 'Professional technical SEO services that boost rankings and revenue. Get expert audits, migrations, and optimization strategies for better conversions.',
  permalink: '/technical-seo-services/',
  layout: 'base',
};

const TechnicalSEOServicesPage: React.FC = () => (
  <main className="flex-1">
    <HeroSection
      badge={{
        icon: BadgeIcons.lightning,
        text: 'Results-Driven Technical SEO Services',
      }}
      title={
        <>
          Technical SEO That <span>Drives Real Results</span>
        </>
      }
      description="Your website should work flawlessly for every visitor. Technical optimization removes friction that kills conversions. Better user experience drives more sales and higher search rankings."
      primaryCta={{
        text: 'Get Free Website Check',
        href: '/contact/',
        target: '_self',
      }}
      image={{
        src: '/assets/images/martin-stepanek-2.jpg',
        alt: 'Martin Stepanek - Technical SEO Expert',
      }}
      rating={{
        show: true,
        text: 'Trused by 50+ businesses',
      }}
      statusBadge={{
        show: true,
        text: 'Currently taking new clients',
      }}
    />
    <TrustedCompaniesSection />
    <ServicesSection />
    <WhatMakesMeDifferentSection />
    <TestimonialsSection backgroundColor="bg-gray-50" />
    <CTASection
      badge={{
        icon: BadgeIcons.lightning,
        text: 'Ready to Improve Your Website?',
      }}
      title={
        <>
          Turn Your Website Into a <span>Revenue Engine</span>
        </>
      }
      description="Your competitors are getting ahead while technical issues cost you customers every day. Get the technical audit that reveals exactly how to fix what's broken and start converting more visitors into paying customers."
      primaryCta={{
        text: 'Get Free Website Check',
        href: BUSINESS_CONSTANTS.CONTACT_URL,
      }}
      trustSignals={['Free consultation', 'No commitment']}
      features={CTAFeatures({})}
    />
  </main>
);

export default TechnicalSEOServicesPage;
