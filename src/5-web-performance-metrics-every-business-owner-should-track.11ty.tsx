import React from 'react';
import PerformanceHeroSection from './_components/sections/PerformanceHeroSection';
import BenefitsSection from './_components/sections/BenefitsSection';
import AboutSection from './_components/sections/AboutSection';
import { PERFORMANCE_BENEFITS } from './_data/benefits';

export const data = {
  title: '5 Web Performance Metrics Every Business Owner Should Track',
  description: 'Learn the 5 web performance metrics that drive conversions. Track user experience indicators that boost customer satisfaction and search rankings.',
  permalink: '/5-web-performance-metrics-every-business-owner-should-track/',
  layout: 'base',
};

const WebPerformanceMetricsPage: React.FC = () => (
  <main className="flex-1">
    <PerformanceHeroSection />
    <div className="border-t border-gray-200">
      <BenefitsSection {...PERFORMANCE_BENEFITS} />
    </div>

    <AboutSection />
  </main>
);

export default WebPerformanceMetricsPage;
