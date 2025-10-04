import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { COMMON_STYLES, TESTIMONIALS } from '../../_data/constants';
import SectionHeader from '../ui/SectionHeader';

const RealResultsSection: React.FC = () => (
  <section className="py-24 bg-white">
    <div className={COMMON_STYLES.containerWidth}>
      <SectionHeader
        title={
          <>
            Real Results from <span>Real Clients</span>
          </>
        }
      />
      <div className={COMMON_STYLES.twoColumnGrid}>
        <TestimonialCard name={TESTIMONIALS.VIKTOR_ZEMAN.name} position="CEO" company="LiveAgent & Post Affiliate Pro" text={TESTIMONIALS.VIKTOR_ZEMAN.quote} image={TESTIMONIALS.VIKTOR_ZEMAN.image} />

        <TestimonialCard name={TESTIMONIALS.DANIEL_PISON.name} position="CMO" company="Quality Unit" text={TESTIMONIALS.DANIEL_PISON.quote} image={TESTIMONIALS.DANIEL_PISON.image} />
      </div>
      <div className="text-center mt-12">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <div className="flex text-yellow-400 text-sm">★★★★★</div>
          <span className="text-sm font-normal">Trused by 50+ businesses</span>
        </div>
      </div>
    </div>
  </section>
);

export default RealResultsSection;
