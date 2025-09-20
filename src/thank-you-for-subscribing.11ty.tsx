import React from 'react';
import HeroSection from './_components/sections/HeroSection';
import { COMMON_STYLES } from './_data/constants';

export const data = {
  title: 'Thank You for Subscribing!',
  description: 'Thank you for subscribing to TechSEO Vitals newsletter. Check your email to confirm your subscription.',
  permalink: '/thank-you-for-subscribing/',
  layout: 'base',
  eleventyExcludeFromCollections: true,
  robots: 'noindex, nofollow',
};

const ThankYouForSubscribingPage: React.FC = () => (
  <main className="flex-1">
    <HeroSection
      badge={{
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2A9 9 0 113 12a9 9 0 0118 0z"
            />
          </svg>
        ),
        text: 'Newsletter Subscription Confirmed',
      }}
      title={
        <>
          Thank You for{' '}
          <span className={COMMON_STYLES.gradientText}>
            Subscribing!
          </span>
        </>
      }
      description={
        <>
          Your email has been confirmed and you're now subscribed to TechSEO Vitals newsletter. You'll receive expert analysis of technical SEO trends, actionable step-by-step guides, and the latest industry updates on algorithm changes and AI developments.
          <div className="mt-6 inline-block bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 font-medium">
            If you subscribed to receive a free copy of the checklist, you'll get the link in your inbox soon!
          </div>
        </>
      }
      primaryCta={{
        text: 'Explore Technical SEO Services',
        href: '/technical-seo-services/',
        target: '_self',
      }}
      secondaryCta={{
        text: 'Read Latest Blog Posts',
        href: '/blog/',
        target: '_self',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
      }}
      rating={{ show: false }}
      layout="centered"
    />
  </main>
);

export default ThankYouForSubscribingPage;