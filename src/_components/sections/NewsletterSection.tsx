import React from 'react';
import Badge from '../ui/Badge';
import ConvertKitForm from '../forms/ConvertKitForm';
import OptimizedImage from '../common/OptimizedImage';
import { COMMON_STYLES } from '../../_data/constants';
import BackgroundDecorations from '../ui/BackgroundDecorations';
import Icons from '../ui/Icons';

interface NewsletterSectionProps {
  className?: string;
  t?: (key: string) => string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ className, t = (key) => key }) => {
  return (
    <section className={`relative py-24 ${COMMON_STYLES.gradientBgTriple} overflow-hidden ${className}`}>
      <BackgroundDecorations variant="newsletter" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="newsletter" icon={<Icons.email className="w-4 h-4" />}>
            {t('newsletter.badge')}
          </Badge>

          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t('newsletter.section.title.part1') }} />

          <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            {t('newsletter.section.description')}
          </p>

          {t('newsletter.section.english-only') !== 'newsletter.section.english-only' && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 mb-8">
              <span className="text-xs font-medium text-purple-200">{t('newsletter.section.english-only')}</span>
            </div>
          )}

          <div className="max-w-3xl mx-auto mb-8">
            <ConvertKitForm formType="newsletter-section" buttonText={t('newsletter.subscribe')} design="newsletter" t={t} />
          </div>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex -space-x-3">
              <OptimizedImage
                src="/assets/images/testimonials/mersudin-forbes.jpg"
                alt="Mersudin Forbes"
                className="w-10 h-10 rounded-full border-2 border-white/80 object-cover"
              />
              <OptimizedImage
                src="/assets/images/testimonials/mark-williams-cook.jpg"
                alt="Mark Williams-Cook"
                className="w-10 h-10 rounded-full border-2 border-white/80 object-cover"
              />
              <OptimizedImage src="/assets/images/testimonials/aleyda-solis.jpg" alt="Aleyda Solis" className="w-10 h-10 rounded-full border-2 border-white/80 object-cover" />
            </div>
            <span className="text-sm font-medium text-white/90">{t('newsletter.section.recommended')}</span>
          </div>

          <p className="text-sm text-purple-300 mb-2">{t('newsletter.section.no-spam')}</p>

          <p className="text-xs text-purple-300">
            {t('newsletter.section.consent')}{' '}
            <a className="underline hover:text-white transition-colors" href={t('url.privacy-policy')}>
              {t('footer.privacy')}
            </a>{' '}
            {t('newsletter.section.and')}{' '}
            <a className="underline hover:text-white transition-colors" href={t('url.terms')}>
              {t('footer.terms')}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
