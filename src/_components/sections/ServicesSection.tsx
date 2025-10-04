import React from 'react';
import ServicesCardsSection from './ServicesCardsSection';
import Icons from '../ui/Icons';
import SectionHeader from '../ui/SectionHeader';
import { COMMON_STYLES } from '../../_data/constants';

interface ServicesSectionProps {
  title?: React.ReactNode;
  badge?: {
    icon?: React.ReactNode;
    text?: string;
  };
  subtitle?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ title, badge, subtitle }) => (
  <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
    <div className={COMMON_STYLES.containerWidth}>
      <SectionHeader
        badge={{
          icon: badge?.icon || <Icons.star className="w-4 sm:w-5 h-4 sm:h-5" />,
          text: badge?.text || 'Choose Your Service',
        }}
        title={
          title || (
            <>
              Technical SEO <span>Services</span>
            </>
          )
        }
        subtitle={subtitle || 'Stop guessing. Start growing. Get the technical SEO expertise that turns your website into a revenue-generating machine.'}
        className="mb-4"
      />
      <ServicesCardsSection />
    </div>
  </section>
);

export default ServicesSection;
