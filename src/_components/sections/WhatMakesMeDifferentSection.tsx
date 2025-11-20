import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';
import Icons from '../ui/Icons';
import SectionHeader from '../ui/SectionHeader';

interface WhatMakesMeDifferentSectionProps {
  t?: (key: string) => string;
  locale?: string;
  bgColor?: 'white' | 'grey';
}

const defaultT = (key: string) => key;

const WhatMakesMeDifferentSection: React.FC<WhatMakesMeDifferentSectionProps> = ({ t = defaultT, locale = 'en', bgColor = 'white' }) => {
  // Hide card4 for Slovak locale
  const showCard4 = locale !== 'sk';
  const gridClass = showCard4
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12"
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12";

  return (
  <section className={`py-16 sm:py-20 lg:py-24 ${bgColor === 'grey' ? 'bg-gray-50' : 'bg-white'}`}>
    <div className={COMMON_STYLES.containerWidth}>
      <SectionHeader
        badge={{ icon: <Icons.badge className="w-3 sm:w-4 h-3 sm:h-4" />, text: t('what-makes-me.badge') }}
        title={t('what-makes-me.title')}
        subtitle={t('what-makes-me.subtitle')}
      />
      <div className={gridClass}>
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6">
            <Icons.badge className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">{t('what-makes-me.card1.title')}</h3>
          <p className="text-gray-600 leading-relaxed">{t('what-makes-me.card1.description')}</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6">
            <Icons.document className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">{t('what-makes-me.card2.title')}</h3>
          <p className="text-gray-600 leading-relaxed">{t('what-makes-me.card2.description')}</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className={`w-16 h-16 ${COMMON_STYLES.gradientBgVeryLight} rounded-2xl flex items-center justify-center mb-6`}>
            <Icons.heart className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">{t('what-makes-me.card3.title')}</h3>
          <p className="text-gray-600 leading-relaxed">{t('what-makes-me.card3.description')}</p>
        </div>
        {showCard4 && (
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center mb-6">
            <Icons.users className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">{t('what-makes-me.card4.title')}</h3>
          <p className="text-gray-600 leading-relaxed">{t('what-makes-me.card4.description')}</p>
        </div>
        )}
      </div>
    </div>
  </section>
  );
};

export default WhatMakesMeDifferentSection;
