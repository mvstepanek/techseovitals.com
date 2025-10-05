import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import TestimonialCard from '../ui/TestimonialCard';
import { TESTIMONIALS, COMMON_STYLES } from '../../_data/constants';
import Icons from '../ui/Icons';

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  showBadge?: boolean;
  badgeText?: string;
  showTrustSignals?: boolean;
  trustText?: string;
  backgroundColor?: string;
  t?: (key: string) => string;
}

const defaultT = (key: string) => key;

const TestimonialsSection: React.FC<TestimonialsProps> = ({
  title,
  subtitle,
  showBadge = true,
  badgeText,
  showTrustSignals = true,
  trustText: _trustText,
  backgroundColor = 'bg-white',
  t = defaultT,
}) => {
  const actualTitle = title || t('testimonials.default.title');
  const actualSubtitle = subtitle || t('testimonials.default.subtitle');
  const actualBadgeText = badgeText || t('testimonials.default.badge');
  const actualTrustText = _trustText || t('testimonials.default.trust-text');
  return (
    <section className={`${backgroundColor} py-24`}>
      <div className={COMMON_STYLES.containerWidth}>
        <SectionHeader
          badge={showBadge ? { icon: <Icons.heart className="w-4 h-4" />, text: actualBadgeText } : undefined}
          title={actualTitle}
          subtitle={actualSubtitle}
        />

        <div className={COMMON_STYLES.twoColumnGrid}>
          <TestimonialCard
            name={TESTIMONIALS.VIKTOR_ZEMAN.name}
            position={t('testimonials.position.ceo')}
            company={t('testimonials.company.liveagent')}
            text={TESTIMONIALS.VIKTOR_ZEMAN.quote}
            image="/assets/images/testimonials/viktor-zeman.jpg"
          />

          <TestimonialCard
            name={TESTIMONIALS.DANIEL_PISON.name}
            position={t('testimonials.position.cmo')}
            company={t('testimonials.company.quality-unit')}
            text={TESTIMONIALS.DANIEL_PISON.quote}
            image="/assets/images/testimonials/daniel-pison.jpg"
          />
        </div>

        {showTrustSignals && (
          <div className="text-center mt-12">
            <a
              href={t('url.customers')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              {t('testimonials.default.cta')}
              <Icons.arrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
