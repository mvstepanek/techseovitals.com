import React from 'react';
import PerformanceHeroSection from './_components/sections/PerformanceHeroSection';
import BenefitsSection from './_components/sections/BenefitsSection';
import AboutSection from './_components/sections/AboutSection';
import { getPerformanceBenefits } from './_data/benefits';

export const data = {
  layout: 'base',
  eleventyComputed: {
    permalink: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || {};
      return translations['url.performance-metrics'];
    },
    title: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || {};
      return translations['meta.performance-metrics.title'];
    },
    description: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || {};
      return translations['meta.performance-metrics.description'];
    },
  },
};

interface Props {
  t?: (key: string) => string;
}

const WebPerformanceMetricsPage: React.FC<Props> = ({ t = (key) => key }) => {

  return (
  <main className="flex-1">
    <PerformanceHeroSection t={t} />
    <div className="border-t border-gray-200">
      <BenefitsSection {...getPerformanceBenefits(t)} />
    </div>

    <AboutSection t={t} />
  </main>
  );
};

export default function WebPerformanceMetricsTemplate(data: any & { t: (key: string) => string }) {
  return <WebPerformanceMetricsPage t={data.t} />;
}
