import React from 'react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import OptimizedImage from '../common/OptimizedImage';
import { COMMON_STYLES } from '../../_data/constants';
import BackgroundDecorations from '../ui/BackgroundDecorations';

interface HeroSectionProps {
  badge: {
    icon?: React.ReactNode;
    text: string;
  };
  title: React.ReactNode | string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
    target?: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  successBadge?: {
    text: string;
    icon?: React.ReactNode;
  };
  image: {
    src: string;
    alt: string;
    loading?: 'lazy';
  };
  rating?: {
    show: boolean;
    text?: string;
    isTestimonial?: boolean;
    source?: string;
    sourceLink?: string;
  };
  statusBadge?: {
    show: boolean;
    text?: string;
  };
  layout?: 'default' | 'centered';
  buttonVariant?: 'primary' | 'secondary';
}

const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  successBadge,
  image,
  rating = { show: true, text: 'Trused by 50+ businesses' },
  statusBadge = { show: true, text: 'Available for projects' },
  layout = 'default',
  buttonVariant = 'primary',
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 sm:py-16 lg:py-28">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <BackgroundDecorations variant="centered" />

      <div className={COMMON_STYLES.containerWidth}>
        <div className={`grid gap-8 sm:gap-12 lg:gap-16 items-center ${layout === 'centered' ? 'grid-cols-1 justify-center text-center' : 'grid-cols-1 lg:grid-cols-2'}`}>
          <div className={layout === 'centered' ? 'max-w-6xl mx-auto text-center' : 'max-w-4xl text-center lg:text-left'}>
            <Badge icon={badge.icon}>{badge.text}</Badge>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-gray-900 leading-tight mt-4 sm:mt-6 ${layout === 'centered' ? 'text-center' : 'text-center lg:text-left'}`}
              {...(typeof title === 'string' && title.includes('<') ? { dangerouslySetInnerHTML: { __html: title } } : { children: title })}
            />

            <p
              className={`mt-6 sm:mt-8 text-lg sm:text-lg text-gray-600 leading-relaxed ${layout === 'centered' ? 'max-w-4xl mx-auto text-center' : 'max-w-lg text-center lg:text-left'}`}
            >
              {description}
            </p>

            {primaryCta && (
              <div className={`mt-8 sm:mt-10 ${layout === 'centered' ? 'text-center' : ''}`}>
                <div className={`flex flex-col sm:flex-row gap-4 ${layout === 'centered' ? 'justify-center items-center' : 'justify-center lg:justify-start items-center'}`}>
                  <Button href={primaryCta.href} target={primaryCta.target} variant={buttonVariant}>
                    {primaryCta.text}
                  </Button>

                  {secondaryCta && (
                    <a
                      href={secondaryCta.href}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-gray-300 font-semibold text-gray-700 hover:border-primary-500 hover:text-primary-500 transition-all"
                    >
                      {secondaryCta.icon}
                      {secondaryCta.text}
                    </a>
                  )}

                  {successBadge && (
                    <div className="inline-flex items-center gap-2 text-gray-600">
                      {successBadge.icon}
                      <span className="text-sm font-medium">{successBadge.text}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {rating?.show && (
              <div className={`mt-8 ${layout === 'centered' ? 'text-center' : ''}`}>
                {rating.isTestimonial ? (
                  <div className={`${COMMON_STYLES.gradientBgVeryLight} rounded-lg p-3 border-l-4 border-purple-500 inline-block`}>
                    <p className="text-sm font-medium text-gray-800">
                      &quot;{rating.text}&quot;
                      {rating.source && (
                        <span className="text-gray-600 ml-1">
                          –{' '}
                          {rating.sourceLink ? (
                            <a
                              href={rating.sourceLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-purple-600 hover:text-purple-700 underline underline-offset-2"
                            >
                              {rating.source}
                            </a>
                          ) : (
                            <span className="font-semibold">{rating.source}</span>
                          )}
                        </span>
                      )}
                    </p>
                  </div>
                ) : (
                  <div className={`flex items-center gap-3 ${layout === 'centered' ? 'justify-center' : 'justify-center sm:justify-start'}`}>
                    <div className="flex text-yellow-400 text-sm">★★★★★</div>
                    <span className="text-sm font-normal text-gray-600">{rating.text}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {layout !== 'centered' && (
            <div className="relative lg:ml-8">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-brand-600/20 to-brand-700/20 rounded-3xl blur-2xl opacity-30" />
              <div className="relative">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={800}
                  className="w-full rounded-3xl shadow-2xl border-4 border-white"
                  loading={image.loading}
                  responsive={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {statusBadge?.show && (
                  <div className="absolute -bottom-3 left-4 right-4 sm:-bottom-8 sm:-right-8 sm:left-auto bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100 sm:mx-0 sm:max-w-xs w-fit sm:w-auto mx-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                      <span className="text-sm sm:text-sm font-bold text-gray-800">{statusBadge.text}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
