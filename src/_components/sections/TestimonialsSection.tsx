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
}

const TestimonialsSection: React.FC<TestimonialsProps> = ({
  title = 'Real Results from Real Clients',
  subtitle = 'Discover how technical excellence drives real business results.',
  showBadge = true,
  badgeText = 'Client Success Stories',
  showTrustSignals = true,
  trustText: _trustText = 'Trused by 50+ businesses',
  backgroundColor = 'bg-white',
}) => {
  return (
    <section className={`${backgroundColor} py-24`}>
      <div className={COMMON_STYLES.containerWidth}>
        <SectionHeader
          badge={showBadge ? { icon: <Icons.heart className="w-4 h-4" />, text: badgeText } : undefined}
          title={
            title.includes('Real Clients') ? (
              <>
                Real Results from <span>Real Clients</span>
              </>
            ) : (
              title
            )
          }
          subtitle={subtitle}
        />

        <div className={COMMON_STYLES.twoColumnGrid}>
          <TestimonialCard
            name={TESTIMONIALS.VIKTOR_ZEMAN.name}
            position="CEO"
            company="LiveAgent & Post Affiliate Pro"
            text={TESTIMONIALS.VIKTOR_ZEMAN.quote}
            image="/assets/images/testimonials/viktor-zeman.jpg"
          />

          <TestimonialCard
            name={TESTIMONIALS.DANIEL_PISON.name}
            position="CMO"
            company="Quality Unit"
            text={TESTIMONIALS.DANIEL_PISON.quote}
            image="/assets/images/testimonials/daniel-pison.jpg"
          />
        </div>

        {showTrustSignals && (
          <div className="text-center mt-12">
            <a
              href="/customers/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              More success stories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
