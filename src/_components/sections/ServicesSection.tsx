import React from 'react';
import ServicesCards from '../cards/ServicesCards';
import Icons from '../ui/Icons';

interface ServicesSectionProps {
  title?: React.ReactNode;
  badge?: {
    icon?: React.ReactNode;
    text?: string;
  };
  subtitle?: string;
  colorScheme?: 'variant1' | 'variant2';
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  title,
  badge,
  subtitle,
  colorScheme = 'variant1'
}) => (
  <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-4 sm:mb-6">
          {badge?.icon || <Icons.star className="w-4 sm:w-5 h-4 sm:h-5" />}
          {badge?.text || 'Choose Your Service'}
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-gray-900 mb-4 sm:mb-6">
          {title || (
            <>
              Technical SEO{' '}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Services
              </span>
            </>
          )}
        </h2>
        <p className="text-lg sm:text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle || 'Stop guessing. Start growing. Get the technical SEO expertise that turns your website into a revenue-generating machine.'}
        </p>
      </div>
      <ServicesCards colorScheme={colorScheme} />
    </div>
  </section>
);

export default ServicesSection;
