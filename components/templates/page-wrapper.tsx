import React from 'react';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import type { SEOData } from '@/lib/seo';

interface PageWrapperProps {
  seo: SEOData;
  children: React.ReactNode;
  includeCookieConsent?: boolean;
}

export function PageWrapper({
  seo,
  children,
  includeCookieConsent = true
}: PageWrapperProps) {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {children}
        {includeCookieConsent && <CookieConsent />}
      </MainLayout>
    </>
  );
}

// Specialized page wrapper for marketing pages
export function MarketingPageWrapper({
  seo,
  children,
  includeCookieConsent = true
}: PageWrapperProps) {
  return (
    <PageWrapper
      seo={seo}
      includeCookieConsent={includeCookieConsent}
    >
      {children}
    </PageWrapper>
  );
}

// Specialized page wrapper for blog pages
export function BlogPageWrapper({
  seo,
  children,
  includeCookieConsent = true
}: PageWrapperProps) {
  return (
    <PageWrapper
      seo={seo}
      includeCookieConsent={includeCookieConsent}
    >
      {children}
    </PageWrapper>
  );
}