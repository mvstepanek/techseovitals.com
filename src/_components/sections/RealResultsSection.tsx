import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { COMMON_STYLES } from '../../_data/constants';
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
        <TestimonialCard
          name="Viktor Zeman"
          position="CEO"
          company="LiveAgent & Post Affiliate Pro"
          text="Martin's development background established a foundation for implementing sophisticated strategies, particularly technical SEO initiatives. With him, our team significantly enhanced the performance of two high-traffic websites."
          image="/assets/images/testimonials/viktor-zeman.jpg"
        />

        <TestimonialCard
          name="Daniel Pison"
          position="CMO"
          company="Quality Unit"
          text="Thanks in particular to Martin’s skills and expertise, we have long been able to compete with much stronger competitors in terms of website quality. I consider him one of the greatest technical SEO experts on the market."
          image="/assets/images/testimonials/daniel-pison.jpg"
        />
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
