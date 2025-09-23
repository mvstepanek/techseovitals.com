import React from 'react';
import Badge from '../ui/Badge';

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

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  badge,
  title,
  subtitle,
  experiencePoints,
  image,
  statsBadge,
  testimonial,
  backgroundColor = 'gray',
}) => {
  const bgClasses = backgroundColor === 'gray' ? 'bg-gradient-to-br from-gray-50 to-slate-100' : 'bg-white';

  return (
    <section className={`relative overflow-hidden py-24 ${bgClasses}`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-32 right-24 w-24 h-24 bg-indigo-300 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-25" />
        <div className="absolute bottom-20 right-16 w-28 h-28 bg-slate-300 rounded-full blur-3xl opacity-35" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge icon={badge.icon}>{badge.text}</Badge>

          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">{title}</h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="space-y-8">
              {experiencePoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`w-16 h-16 ${point.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl" />
            <div className="relative">
              <img
                src={image.src}
                alt={image.alt}
                width="800"
                height="800"
                className="w-full rounded-3xl shadow-2xl border-4 border-white"
                loading="lazy"
                decoding="async"
              />
              {statsBadge && (
                <div className="absolute -bottom-3 left-4 right-4 sm:-bottom-6 sm:-left-6 sm:right-auto bg-white rounded-2xl p-4 shadow-xl border border-gray-100 w-fit mx-auto sm:mx-0 sm:max-w-none">
                  <div className="flex items-center gap-3">
                    {statsBadge.showIcon !== false &&
                      (statsBadge.icon || <div className="w-4 h-4 bg-green-400 rounded-full" />)}
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
