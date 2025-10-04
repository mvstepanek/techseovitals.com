import React from 'react';
import Badge from '../ui/Badge';
import ConvertKitForm from '../forms/ConvertKitForm';
import OptimizedImage from '../common/OptimizedImage';
import { COMMON_STYLES } from '../../_data/constants';
import BackgroundDecorations from '../ui/BackgroundDecorations';
import Icons from '../ui/Icons';

interface NewsletterSectionProps {
  className?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ className }) => {
  return (
    <section className={`relative py-24 ${COMMON_STYLES.gradientBgTriple} overflow-hidden ${className}`}>
      <BackgroundDecorations variant="newsletter" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="newsletter" icon={<Icons.email className="w-4 h-4" />}>
            Newsletter
          </Badge>

          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Get <span className="text-transparent bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text">Biweekly</span> Technical SEO Insights
          </h2>

          <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Get actionable strategies that help business owners and developers create exceptional user experiences, optimize technical SEO and performance, and drive revenue
            growth.
          </p>

          <div className="max-w-3xl mx-auto mb-8">
            <ConvertKitForm formType="newsletter-section" buttonText="Subscribe" design="newsletter" />
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
            <span className="text-sm font-medium text-white/90">Recommended by industry leaders</span>
          </div>

          <p className="text-sm text-purple-300 mb-2">No spam, ever. Unsubscribe at any time.</p>

          <p className="text-xs text-purple-300">
            By subscribing, I agree to the{' '}
            <a className="underline hover:text-white transition-colors" href="/privacy-policy/">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a className="underline hover:text-white transition-colors" href="/terms-and-conditions/">
              Terms and Conditions
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
