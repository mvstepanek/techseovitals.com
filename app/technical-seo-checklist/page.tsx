import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Free Technical SEO Checklist - 50+ Essential Items | TechSEO Vitals',
  description: 'Download our comprehensive technical SEO checklist with 50+ actionable items to improve your website\'s search performance, Core Web Vitals, and user experience.',
}, '/technical-seo-checklist/');

export default function TechnicalSEOChecklist() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Technical SEO Checklist by Martin Stepanek
              </h1>
              <p className="mt-8 text-xl text-gray-600 leading-8 max-w-3xl mx-auto">
                Over 100 tasks across 35 major issues. Created by Martin Stepanek, a technical SEO consultant with 10+ years of experience, focused on maximizing website revenue potential.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                3 Main Benefits
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Happy Visitors</h3>
                <p className="text-gray-600">
                  Improve user experience and satisfaction through better website performance and usability.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Better Conversions</h3>
                <p className="text-gray-600">
                  Optimize your website's technical foundation to improve conversion rates and user engagement.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Higher Revenue</h3>
                <p className="text-gray-600">
                  Maximize your website's revenue potential through enhanced technical SEO performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Selling Points Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Unique Selling Points
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Roadmap</h3>
                <p className="text-gray-600">
                  A complete guide covering all essential aspects of technical SEO implementation.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Focused on Important Issues</h3>
                <p className="text-gray-600">
                  Prioritizes the most impactful technical SEO issues that affect your website's performance.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Based on Real-World Experience</h3>
                <p className="text-gray-600">
                  Created from over 10 years of hands-on experience in web development and technical SEO.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Creator Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Creator's Background
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-lg mb-6">
                Martin Stepanek is a technical SEO and web performance consultant who specializes in performance optimization.
              </p>
              <p className="text-lg">
                His goal is to create positive experiences for website visitors while maximizing revenue potential for businesses through enhanced technical optimization.
              </p>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}