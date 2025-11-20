import React from 'react';
import ServicesCardsSection from './ServicesCardsSection';
import Icons from '../ui/Icons';
import SectionHeader from '../ui/SectionHeader';
import { COMMON_STYLES } from '../../_data/constants';

interface ServicesSectionProps {
  title?: React.ReactNode | string;
  badge?: {
    icon?: React.ReactNode;
    text?: string;
  };
  subtitle?: string;
  t?: (key: string) => string;
}

const defaultT = (key: string) => key;

const ServicesSection: React.FC<ServicesSectionProps> = ({ title, badge, subtitle, t = defaultT }) => (
  <section className="py-16 sm:py-20 lg:py-24">
    <div className={COMMON_STYLES.containerWidth}>
      <SectionHeader
        badge={{
          icon: badge?.icon || <Icons.star className="w-4 sm:w-5 h-4 sm:h-5" />,
          text: badge?.text || t('services.section.badge'),
        }}
        title={title || t('services.section.title')}
        subtitle={subtitle || t('services.section.subtitle')}
        className="mb-4"
      />
      <ServicesCardsSection t={t} />
    </div>
  </section>
);

export default ServicesSection;
