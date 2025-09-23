import React from 'react';
import PerformanceHeroSection from './_components/sections/PerformanceHeroSection';
import PerformanceBenefitsSection from './_components/sections/PerformanceBenefitsSection';
import AboutMartinSection from './_components/sections/AboutMartinSection';

export const data = {
  title: '5 Web Performance Metrics Every Business Owner Should Track',
  description:
    'Learn the 5 web performance metrics that drive conversions. Track user experience indicators that boost customer satisfaction and search rankings.',
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
