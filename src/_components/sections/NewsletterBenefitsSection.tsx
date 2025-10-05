import React from 'react';
import StatsGrid from '../ui/StatsGrid';
import SectionHeader from '../ui/SectionHeader';
import Icons from '../ui/Icons';
import GridLayout from '../ui/GridLayout';
import { COMMON_STYLES } from '../../_data/constants';

interface NewsletterBenefitsSectionProps {
  t?: (key: string) => string;
}

const NewsletterBenefitsSection: React.FC<NewsletterBenefitsSectionProps> = ({ t = (key) => key }) => (
  <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
    <div className={COMMON_STYLES.containerWidth}>
      <SectionHeader
        badge={{
          icon: <Icons.checkCircle className="w-4 h-4" />,
          text: t('newsletter-benefits.badge'),
        }}
        title={t('newsletter-benefits.title')}
        subtitle={t('newsletter-benefits.subtitle')}
      />
      <StatsGrid
        stats={[
          {
            value: t('newsletter-benefits.stat1.value'),
            label: t('newsletter-benefits.stat1.label'),
            color: 'blue',
          },
          {
            value: t('newsletter-benefits.stat2.value'),
            label: t('newsletter-benefits.stat2.label'),
            color: 'green',
          },
          {
            value: t('newsletter-benefits.stat3.value'),
            label: t('newsletter-benefits.stat3.label'),
            color: 'purple',
          },
        ]}
      />
      <GridLayout columns={3}>
        <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
          <div className="mb-6">
            <Icons.lightbulb className="w-12 h-12 text-blue-500 mb-4" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t('newsletter-benefits.card1.title')}</h3>
          <p className="text-gray-600 mb-6">
            {t('newsletter-benefits.card1.description')}
          </p>
        </div>
        <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
          <div className="mb-6">
            <Icons.clock className="w-12 h-12 text-green-500 mb-4" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t('newsletter-benefits.card2.title')}</h3>
          <p className="text-gray-600 mb-6">
            {t('newsletter-benefits.card2.description')}
          </p>
        </div>
        <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
          <div className="mb-6">
            <Icons.growth className="w-12 h-12 text-purple-500 mb-4" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{t('newsletter-benefits.card3.title')}</h3>
          <p className="text-gray-600 mb-6">
            {t('newsletter-benefits.card3.description')}
          </p>
        </div>
      </GridLayout>
    </div>
  </section>
);

export default NewsletterBenefitsSection;
