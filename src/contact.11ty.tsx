import React from 'react';
import { COMMON_STYLES } from './_data/constants';
import HeroSection from './_components/sections/HeroSection';
import CalendlySection from './_components/sections/CalendlySection';
import ContactMethodsSection from './_components/sections/ContactMethodsSection';
import BusinessInfoSection from './_components/sections/BusinessInfoSection';
import TestimonialsSection from './_components/sections/TestimonialsSection';
import NewsletterSection from './_components/sections/NewsletterSection';

export const data = {
  title: 'Contact | TechSEO Vitals',
  description:
    'Transform technical barriers into competitive advantages. Schedule a free consultation to discuss your user experience strategy with developer-led technical SEO expertise.',
  permalink: '/contact/',
  layout: 'base',
};

const ContactPage: React.FC = () => (
  <main className="flex-1">
    <HeroSection
      badge={{
        icon: <div className="w-2 h-2 bg-white rounded-full animate-pulse" />,
        text: "Let's Work Together",
      }}
      title={
        <>
          Get In Touch With <span className={COMMON_STYLES.gradientText}>Martin</span>
        </>
      }
      description="What's your user experience strategy? Let's discuss how to transform technical barriers into competitive advantages that delight users and drive revenue."
      primaryCta={{
        text: 'Start Your Transformation',
        href: '#appointment-form',
      }}
      image={{
        src: '/assets/images/martinstepanek-techseo-2.jpg',
        alt: 'Martin Stepanek - Technical SEO Expert',
        loading: 'eager',
      }}
      rating={{ show: false }}
      statusBadge={{
        show: true,
        text: 'Available for Projects',
      }}
    />
    <CalendlySection />
    <ContactMethodsSection />
    <TestimonialsSection backgroundColor="bg-gray-50" />
    <BusinessInfoSection backgroundColor="bg-white" />
    <NewsletterSection />
  </main>
);

export default ContactPage;
