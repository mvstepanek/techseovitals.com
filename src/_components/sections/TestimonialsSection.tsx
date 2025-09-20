import React from 'react';
import Badge from '../ui/Badge';

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  showBadge?: boolean;
  badgeText?: string;
  showTrustSignals?: boolean;
  trustText?: string;
  backgroundColor?: string;
}

const TestimonialsSection: React.FC<TestimonialsProps> = ({
  title = 'Real Results from Real Clients',
  subtitle = "See how I've helped businesses transform their websites into high-performing revenue machines.",
  showBadge = true,
  badgeText = 'Client Success Stories',
  showTrustSignals = true,
  trustText: _trustText = '50+ businesses trust me',
  backgroundColor = 'bg-white',
}) => {
  return (
    <section className={`${backgroundColor} py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {showBadge && (
            <Badge
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5.0 000 6.364L12 20.364l7.682-7.682a4.5 4.5.0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5.0 00-6.364.0z"
                  />
                </svg>
              }
            >
              {badgeText}
            </Badge>
          )}

          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
            {title.includes('Real Clients') ? (
              <>
                Real Results from{' '}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Real Clients
                </span>
              </>
            ) : (
              title
            )}
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group relative">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                  <img
                    alt="Viktor Zeman"
                    loading="lazy"
                    width="64"
                    height="64"
                    decoding="async"
                    className="rounded-2xl"
                    src="/assets/images/testimonials/viktor-zeman-real.webp"
                  />
                  <svg
                    className="absolute -bottom-2 -right-2 w-7 h-7 text-green-600 bg-white rounded-full"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-display font-bold text-gray-900 text-lg">Viktor Zeman</h4>
                    <div className="flex text-yellow-400">★★★★★</div>
                  </div>
                  <p className="text-gray-600 text-sm font-normal">CEO, LiveAgent &amp; Post Affiliate Pro</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-2 -top-2 text-6xl text-brand-600/20 font-serif">&quot;</div>
                <blockquote className="text-gray-700 leading-relaxed pl-6">
                  Martin&apos;s development background established a foundation for implementing sophisticated
                  strategies, particularly technical SEO initiatives. With him, our team significantly enhanced the
                  performance of two high-traffic websites.
                </blockquote>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                  <img
                    alt="Daniel Pison"
                    loading="lazy"
                    width="64"
                    height="64"
                    decoding="async"
                    className="rounded-2xl"
                    src="/assets/images/testimonials/daniel-pison.jpeg"
                  />
                  <svg
                    className="absolute -bottom-2 -right-2 w-7 h-7 text-green-600 bg-white rounded-full"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-display font-bold text-gray-900 text-lg">Daniel Pison</h4>
                    <div className="flex text-yellow-400">★★★★★</div>
                  </div>
                  <p className="text-gray-600 text-sm font-normal">CMO, Quality Unit</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-2 -top-2 text-6xl text-brand-600/20 font-serif">&quot;</div>
                <blockquote className="text-gray-700 leading-relaxed pl-6">
                  Thanks in particular to Martin&apos;s skills and expertise, we have long been able to compete with
                  much stronger competitors in website quality. I consider him one of the greatest technical SEO experts
                  on the market.
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {showTrustSignals && (
          <div className="text-center mt-12">
            <a
              href="/customers/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              More success stories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
