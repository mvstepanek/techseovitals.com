import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';

interface BrutalTruthSectionProps {
  t?: (key: string) => string;
}

const BrutalTruthSection: React.FC<BrutalTruthSectionProps> = ({ t = (key) => key }) => (
  <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/30" />
    <div className={`${COMMON_STYLES.containerWidth} relative`}>
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: t('brutal-truth.title') }} />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('brutal-truth.subtitle')}
        </p>
      </div>
      <div className={COMMON_STYLES.threeColumnGrid}>
        <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
          <div className="mb-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-red-100 text-red-700">{t('brutal-truth.card1.badge')}</div>
            <div className="text-4xl font-bold mb-2 text-red-500">{t('brutal-truth.card1.stat')}</div>
            <div className="text-sm text-gray-500 mb-4">{t('brutal-truth.card1.stat-label')}</div>
          </div>
          <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{t('brutal-truth.card1.title')}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {t('brutal-truth.card1.description')}
          </p>
        </div>

        <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
          <div className="mb-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-orange-100 text-orange-700">{t('brutal-truth.card2.badge')}</div>
            <div className="text-4xl font-bold mb-2 text-orange-500">{t('brutal-truth.card2.stat')}</div>
            <div className="text-sm text-gray-500 mb-4">{t('brutal-truth.card2.stat-label')}</div>
          </div>
          <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{t('brutal-truth.card2.title')}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {t('brutal-truth.card2.description')}
          </p>
        </div>

        <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
          <div className="mb-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-purple-100 text-purple-700">{t('brutal-truth.card3.badge')}</div>
            <div className="text-4xl font-bold mb-2 text-purple-500">{t('brutal-truth.card3.stat')}</div>
            <div className="text-sm text-gray-500 mb-4">{t('brutal-truth.card3.stat-label')}</div>
          </div>
          <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{t('brutal-truth.card3.title')}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {t('brutal-truth.card3.description')}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default BrutalTruthSection;
