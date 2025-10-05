import React from 'react';
import Badge from '../ui/Badge';
import CardDecoration from '../ui/CardDecoration';
import IconContainer from '../ui/IconContainer';
import Icons from '../ui/Icons';
import { COMMON_STYLES } from '../../_data/constants';

interface NewsletterContentSectionProps {
  t?: (key: string) => string;
}

const NewsletterContentSection: React.FC<NewsletterContentSectionProps> = ({ t = (key) => key }) => {
  return (
    <div className="border-t border-gray-200">
      <section className="py-24 bg-white">
        <div className={COMMON_STYLES.containerWidth}>
          <div className="text-center mb-6">
            <Badge icon={<Icons.email className="w-4 h-4" />}>{t('newsletter-content.badge')}</Badge>
          </div>
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6" dangerouslySetInnerHTML={{ __html: t('newsletter-content.title') }} />
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              {t('newsletter-content.subtitle')}
            </p>
          </div>
          <div className={COMMON_STYLES.threeColumnGrid}>
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
              <CardDecoration color="blue" size="lg" />
              <IconContainer icon={<Icons.document className="w-8 h-8 text-white" />} color="blue" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('newsletter-content.card1.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('newsletter-content.card1.description')}
              </p>
              <div className="flex items-center gap-2 font-semibold text-blue-600">
                <Icons.arrowTrendUp className="w-5 h-5" />
                {t('newsletter-content.card1.label')}
              </div>
            </div>
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
              <CardDecoration color="green" size="lg" />
              <IconContainer icon={<Icons.checkCircle className="w-8 h-8 text-white" />} color="green" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('newsletter-content.card2.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('newsletter-content.card2.description')}
              </p>
              <div className="flex items-center gap-2 font-semibold text-green-600">
                <Icons.arrowTrendUp className="w-5 h-5" />
                {t('newsletter-content.card2.label')}
              </div>
            </div>
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
              <CardDecoration color="purple" size="lg" />
              <IconContainer icon={<Icons.clock className="w-8 h-8 text-white" />} color="purple" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('newsletter-content.card3.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('newsletter-content.card3.description')}
              </p>
              <div className="flex items-center gap-2 font-semibold text-purple-600">
                <Icons.arrowTrendUp className="w-5 h-5" />
                {t('newsletter-content.card3.label')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterContentSection;
