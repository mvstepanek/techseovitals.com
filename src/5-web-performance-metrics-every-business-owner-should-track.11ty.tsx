import React from 'react';
import { COMMON_STYLES } from './_data/constants';
import PerformanceHeroSection from './_components/sections/PerformanceHeroSection';
import PerformanceBenefitsSection from './_components/sections/PerformanceBenefitsSection';
import ExperienceSection from './_components/sections/ExperienceSection';

export const data = {
  title: '5 Web Performance Metrics Every Business Owner Should Track | TechSEO Vitals',
  description:
    'Learn which metrics truly reflect user satisfaction. Discover the 5 performance indicators that create delightful experiences and naturally drive business growth.',
  permalink: '/5-web-performance-metrics-every-business-owner-should-track/',
  layout: 'base',
};

const WebPerformanceMetricsPage: React.FC = () => (
  <main className="flex-1">
    <PerformanceHeroSection />
    <div className="border-t border-gray-200">
      <PerformanceBenefitsSection />
    </div>

    <div className="border-t border-gray-200">
      <ExperienceSection
        badge={{
          icon: <div className="w-2 h-2 bg-white rounded-full animate-pulse" />,
          text: 'About Martin',
        }}
        title={
          <>
            What Makes Me <span className={COMMON_STYLES.gradientText}>Different</span>
          </>
        }
        subtitle="I combine deep technical expertise with user-focused thinking to create experiences that delight visitors and naturally drive business growth."
        experiencePoints={[
          {
            icon: (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            title: '10+ Years Creating Better Experiences',
            description:
              'A decade perfecting the art of fast, accessible websites that users love and search engines naturally reward.',
            color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
          },
          {
            icon: (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7A2 2 0 005 7v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            ),
            title: 'User-First Improvements',
            description:
              'Every recommendation focuses on what matters most to your visitors, with clear steps your team can implement.',
            color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
          },
          {
            icon: (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8-8 8-4-4-6 6" />
              </svg>
            ),
            title: 'Experience Drives Revenue',
            description:
              'Happy users become customers. I focus on creating delightful experiences that naturally boost conversions.',
            color: 'bg-gradient-to-br from-green-500 to-emerald-600',
          },
        ]}
        image={{
          src: '/assets/images/martinstepanek-techseo-4.jpg',
          alt: 'Martin Stepanek - Technical SEO Consultant',
        }}
        statsBadge={{
          icon: (
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ),
          title: '50+ Successful Projects',
          subtitle: 'Trusted by businesses worldwide',
        }}
        backgroundColor="white"
      />
    </div>
  </main>
);

export default WebPerformanceMetricsPage;
