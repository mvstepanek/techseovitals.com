import React from 'react';
import Badge from '../ui/Badge';
import ConvertKitForm from '../forms/ConvertKitForm';
import OptimizedImage from '../common/OptimizedImage';
import { COMMON_STYLES } from '../../_data/constants';

interface NewsletterSectionProps {
  className?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ className }) => {
  return (
    <section
      className={`relative py-24 ${COMMON_STYLES.gradientBgTriple} overflow-hidden ${className}`}
    >
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-2xl rotate-45 opacity-20" />
        <div className="absolute top-16 right-1/4 w-20 h-20 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-3xl rotate-12 opacity-15" />
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-white/8 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-2xl rotate-45 opacity-25" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge
            variant="newsletter"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22.0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5A2 2 0 003 7v10a2 2 0 002 2z"
                />
              </svg>
            }
          >
            Newsletter
          </Badge>

          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Get{' '}
            <span className="text-transparent bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text">
              Biweekly
            </span>{' '}
            Technical SEO Insights
          </h2>

          <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Get actionable strategies that help business owners and developers create exceptional user experiences,
            optimize technical SEO and performance, and drive revenue growth.
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
              <OptimizedImage
                src="/assets/images/testimonials/aleyda-solis.jpg"
                alt="Aleyda Solis"
                className="w-10 h-10 rounded-full border-2 border-white/80 object-cover"
              />
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
