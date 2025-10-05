import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import OptimizedImage from '../common/OptimizedImage';
import BackgroundDecorations from '../ui/BackgroundDecorations';
import { COMMON_STYLES } from '../../_data/constants';
import FeaturePoint from '../ui/FeaturePoint';
import TestimonialQuoteBox from '../ui/TestimonialQuoteBox';

interface ExperiencePoint {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface StatsBadge {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  showIcon?: boolean;
}

interface Testimonial {
  quote: string;
  source?: string;
  linkText?: string;
  linkHref?: string;
}

interface ExperienceSectionProps {
  badge: {
    text: string;
    icon?: React.ReactNode;
  };
  title: React.ReactNode | string;
  subtitle: string;
  experiencePoints: ExperiencePoint[];
  image: {
    src: string;
    alt: string;
  };
  statsBadge?: StatsBadge;
  testimonial?: Testimonial;
  backgroundColor?: 'gray' | 'white';
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ badge, title, subtitle, experiencePoints, image, statsBadge, testimonial, backgroundColor = 'gray' }) => {
  const bgClasses = backgroundColor === 'gray' ? 'bg-gradient-to-br from-gray-50 to-slate-100' : 'bg-white';

  return (
    <section className={`relative overflow-hidden py-24 ${bgClasses}`}>
      <BackgroundDecorations variant="simple" />

      <div className={`${COMMON_STYLES.containerWidth} relative z-10`}>
        <SectionHeader badge={{ icon: badge.icon, text: badge.text }} title={title} subtitle={subtitle} />

        <div className={`${COMMON_STYLES.twoColumnGrid} items-center mb-16`}>
          <div>
            <div className="space-y-8">
              {experiencePoints.map((point) => (
                <FeaturePoint key={point.title} icon={point.icon} title={point.title} description={point.description} color={point.color} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl" />
            <div className="relative">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                width={800}
                height={800}
                className="w-full rounded-3xl shadow-2xl border-4 border-white"
                responsive={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {statsBadge && (
                <div className="absolute -bottom-3 left-4 right-4 sm:-bottom-6 sm:-left-6 sm:right-auto bg-white rounded-2xl p-4 shadow-xl border border-gray-100 w-fit mx-auto sm:mx-0 sm:max-w-none">
                  <div className="flex items-center gap-3">
                    {statsBadge.showIcon !== false && (statsBadge.icon || <div className="w-4 h-4 bg-green-400 rounded-full" />)}
                    <div>
                      <div className="text-sm font-bold text-gray-900">{statsBadge.title}</div>
                      <div className="text-xs text-gray-500">{statsBadge.subtitle}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {testimonial && <TestimonialQuoteBox quote={testimonial.quote} source={testimonial.source} sourceLink="https://www.linkedin.com/in/techseovitals/#recommendations" />}
      </div>
    </section>
  );
};

export default ExperienceSection;
