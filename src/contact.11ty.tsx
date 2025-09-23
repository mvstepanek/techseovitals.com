import React from 'react';
import { COMMON_STYLES } from './_data/constants';
import HeroSection from './_components/sections/HeroSection';
import CalendlySection from './_components/sections/CalendlySection';
import ContactMethodsSection from './_components/sections/ContactMethodsSection';
import BusinessInfoSection from './_components/sections/BusinessInfoSection';
import NewsletterSection from './_components/sections/NewsletterSection';

export const data = {
  title: 'Contact | TechSEO Vitals',
  description:
    'Get technical SEO and performance expertise that puts users first. Schedule a free consultation to create experiences that delight visitors and naturally earn better search and AI visibility.',
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
      description="Ready to create experiences users actually love? Let's discuss how technical SEO and performance optimization can serve your visitors first while maximizing visibility in search engines and AI systems."
      primaryCta={{
        text: 'Schedule Free Consultation',
        href: '#schedule',
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
    <BusinessInfoSection backgroundColor="bg-white" />
    <NewsletterSection />
  </main>
);

export default ContactPage;
