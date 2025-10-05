import React from 'react';
import OptimizedImage from '../common/OptimizedImage';
import SectionHeader from '../ui/SectionHeader';
import Icons from '../ui/Icons';
import { COMMON_STYLES } from '../../_data/constants';
import FeaturePoint from '../ui/FeaturePoint';
import TestimonialQuoteBox from '../ui/TestimonialQuoteBox';
import { getAboutContent } from '../../_data/about-content';

interface WhyChooseMeSectionProps {
  t?: (key: string) => string;
}

const defaultT = (key: string) => key;

const WhyChooseMeSection: React.FC<WhyChooseMeSectionProps> = ({ t = defaultT }) => {
  const aboutContent = getAboutContent(t);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className={COMMON_STYLES.containerWidth}>
        <SectionHeader
          badge={{
            icon: <Icons.user className="w-4 h-4" />,
            text: t('why-choose-me.badge'),
          }}
          title={t('why-choose-me.title')}
          subtitle={
            <>
              {aboutContent.subtitle.split('. ')[0]}.
              <br /> {aboutContent.subtitle.split('. ')[1]}
            </>
          }
          maxWidth="4xl"
        />
        <div className={`${COMMON_STYLES.twoColumnGrid} items-center mb-16`}>
          <div>
            <div className="space-y-8">
              {aboutContent.experiencePoints.map((point) => (
                <FeaturePoint
                  key={point.title}
                  icon={point.icon}
                  title={point.title}
                  description={point.description}
                  color={point.colorAlt}
                />
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl" />
            <div className="relative">
              <OptimizedImage
                src="/assets/images/martin-stepanek-1.jpg"
                alt="Martin Stepanek"
                width={800}
                height={800}
                className="w-full rounded-3xl shadow-2xl border-4 border-white"
                responsive={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute -bottom-4 left-4 right-4 sm:-bottom-6 sm:-left-6 sm:right-auto bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100 w-fit mx-auto sm:mx-0 sm:max-w-none">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Icons.badge className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                  <div className="text-sm sm:text-sm font-bold text-gray-900">{aboutContent.statsBadge.title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TestimonialQuoteBox
          quote={t('why-me.testimonial')}
          source="LinkedIn Recommendation"
          sourceLink="https://www.linkedin.com/in/techseovitals/#recommendations"
        />
      </div>
    </section>
  );
};

export default WhyChooseMeSection;
