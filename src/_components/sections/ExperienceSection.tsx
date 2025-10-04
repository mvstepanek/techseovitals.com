import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import OptimizedImage from '../common/OptimizedImage';
import BackgroundDecorations from '../ui/BackgroundDecorations';
import { COMMON_STYLES } from '../../_data/constants';
import FeaturePoint from '../ui/FeaturePoint';

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
  title: React.ReactNode;
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

        <div className={COMMON_STYLES.twoColumnGrid} style={{ alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <div className="space-y-8">
              {experiencePoints.map((point, index) => (
                <FeaturePoint key={index} icon={point.icon} title={point.title} description={point.description} color={point.color} />
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

        {testimonial && (
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                      href="https://www.linkedin.com/in/techseovitals/#recommendations"
                    >
                      {testimonial.source}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
