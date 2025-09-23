import React from 'react';
import { COMMON_STYLES } from './_data/constants';
import PerformanceHeroSection from './_components/sections/PerformanceHeroSection';
import PerformanceBenefitsSection from './_components/sections/PerformanceBenefitsSection';
import AboutMartinSection from './_components/sections/AboutMartinSection';

export const data = {
  title: '5 Web Performance Metrics Every Business Owner Should Track | TechSEO Vitals',
  description:
    'Track the performance metrics that actually matter to users. Learn which 5 indicators measure real user experience and drive both satisfaction and search visibility.',
  permalink: '/5-web-performance-metrics-every-business-owner-should-track/',
  layout: 'base',
};

const WebPerformanceMetricsPage: React.FC = () => (
  <main className="flex-1">
    <PerformanceHeroSection />
    <div className="border-t border-gray-200">
      <PerformanceBenefitsSection />
    </div>

    <AboutMartinSection />
  </main>
);

export default WebPerformanceMetricsPage;
