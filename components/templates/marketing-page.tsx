import React from 'react';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import HeroSection from '@/components/sections/hero-section';
import FinalCTASection from '@/components/sections/final-cta-section';
import type { SEOData } from '@/lib/seo';
// Define HeroSectionProps inline for now
interface HeroSectionProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  statusBadge?: {
    text: string;
    icon: React.ReactNode;
  };
}


interface MarketingPageProps {
  seo: SEOData;
  hero: HeroSectionProps;
  children: React.ReactNode;
  finalCTA?: {
    badge?: string;
    badgeIcon?: React.ReactNode;
    title: React.ReactNode;
    description: string;
    primaryCTA?: {
      text: string;
      href: string;
    };
    secondaryCTA?: {
      text: string;
      href: string;
      icon?: React.ReactNode;
    } | React.ReactNode;
    benefits?: {
      icon: React.ReactNode;
      iconGradient: string;
      title: string;
      description: string;
    }[];
    socialProof?: {
      icon: React.ReactNode;
      text: string;
    };
  };
}

export function MarketingPage({
  seo,
  hero,
  children,
  finalCTA
}: MarketingPageProps) {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <HeroSection {...hero} />
        
        {/* Content Sections */}
        {children}
        
        {/* Final CTA Section */}
        {finalCTA && <FinalCTASection {...finalCTA} />}
        
        <CookieConsent />
      </MainLayout>
    </>
  );
}