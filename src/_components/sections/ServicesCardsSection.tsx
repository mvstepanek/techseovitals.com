import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import Icons from '../ui/Icons';

interface ServicesCardsSectionProps {
  t?: (key: string) => string;
}

const defaultT = (key: string) => key;

const ServicesCardsSection: React.FC<ServicesCardsSectionProps> = ({ t = defaultT }) => {
  return (
    <div className="space-y-12 sm:space-y-16">
      <ServiceCard
        icon={<Icons.document className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />}
        title={t('services.audit.title')}
        price={t('services.audit.price')}
        priceLabel={t('services.starting-at')}
        description={t('services.audit.description')}
        features={[
          {
            title: t('services.audit.feature1.title'),
            description: t('services.audit.feature1.description'),
          },
          {
            title: t('services.audit.feature2.title'),
            description: t('services.audit.feature2.description'),
          },
          {
            title: t('services.audit.feature3.title'),
            description: t('services.audit.feature3.description'),
          },
        ]}
        ctaText={t('services.audit.cta')}
        ctaHref={t('url.contact')}
        color="indigo"
        id="technical-seo-audit"
      />
      <ServiceCard
        icon={<Icons.monitor className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />}
        title={t('services.monitoring.title')}
        price={t('services.monitoring.price')}
        priceUnit={t('services.monitoring.price.unit')}
        priceLabel={t('services.starting-at')}
        description={t('services.monitoring.description')}
        features={[
          {
            title: t('services.monitoring.feature1.title'),
            description: t('services.monitoring.feature1.description'),
          },
          {
            title: t('services.monitoring.feature2.title'),
            description: t('services.monitoring.feature2.description'),
          },
          {
            title: t('services.monitoring.feature3.title'),
            description: t('services.monitoring.feature3.description'),
          },
        ]}
        ctaText={t('services.monitoring.cta')}
        ctaHref={t('url.contact')}
        color="green"
        id="technical-seo-monitoring"
        commitment={t('services.monitoring.commitment')}
      />
      <ServiceCard
        icon={<Icons.transfer className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />}
        title={t('services.migration.title')}
        price={t('services.migration.price')}
        priceLabel={t('services.starting-at')}
        description={t('services.migration.description')}
        features={[
          {
            title: t('services.migration.feature1.title'),
            description: t('services.migration.feature1.description'),
          },
          {
            title: t('services.migration.feature2.title'),
            description: t('services.migration.feature2.description'),
          },
          {
            title: t('services.migration.feature3.title'),
            description: t('services.migration.feature3.description'),
          },
        ]}
        ctaText={t('services.migration.cta')}
        ctaHref={t('url.contact')}
        color="purple"
        id="website-migration-plan"
      />
    </div>
  );
};

export default ServicesCardsSection;
