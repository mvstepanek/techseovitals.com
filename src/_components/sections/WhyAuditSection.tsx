import React from 'react';
import Icons from '../ui/Icons';
import SectionHeader from '../ui/SectionHeader';
import CardDecoration from '../ui/CardDecoration';
import IconContainer from '../ui/IconContainer';
import CTAWithTrustSignals from '../ui/CTAWithTrustSignals';
import { COMMON_STYLES } from '../../_data/constants';

interface WhyAuditSectionProps {
  t?: (key: string) => string;
}

const defaultT = (key: string) => key;

const WhyAuditSection: React.FC<WhyAuditSectionProps> = ({ t = defaultT }) => (
  <section className="py-24 bg-white">
    <div className={COMMON_STYLES.containerWidth}>
      <SectionHeader
        badge={{
          icon: <Icons.badge className="w-4 h-4" />,
          text: t('why-audit.badge'),
        }}
        title={t('why-audit.title')}
        subtitle={t('why-audit.subtitle')}
      />
      <CTAWithTrustSignals text={t('why-audit.cta')} href={t('url.contact')} trustSignals={[t('trust.free-consultation'), t('trust.no-commitment')]} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
          <CardDecoration color="blue" />
          <IconContainer icon={<Icons.checkCircle className="w-8 h-8 text-white" />} color="blue" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('why-audit.card1.title')}</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            {t('why-audit.card1.description')}
          </p>
          <div className="flex items-center gap-2 font-semibold text-blue-600">
            <Icons.arrowTrendUp className="w-5 h-5" />
            {t('why-audit.card1.badge')}
          </div>
        </div>

        <div className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
          <CardDecoration color="green" />
          <IconContainer icon={<Icons.lightning className="w-8 h-8 text-white" />} color="green" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('why-audit.card2.title')}</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            {t('why-audit.card2.description')}
          </p>
          <div className="flex items-center gap-2 font-semibold text-green-600">
            <Icons.arrowTrendUp className="w-5 h-5" />
            {t('why-audit.card2.badge')}
          </div>
        </div>

        <div className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
          <CardDecoration color="purple" />
          <IconContainer icon={<Icons.heart className="w-8 h-8 text-white" />} color="purple" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('why-audit.card3.title')}</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            {t('why-audit.card3.description')}
          </p>
          <div className="flex items-center gap-2 font-semibold text-purple-600">
            <Icons.arrowTrendUp className="w-5 h-5" />
            {t('why-audit.card3.badge')}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyAuditSection;
