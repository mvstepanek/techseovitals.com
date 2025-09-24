import React from 'react';

const RealResultsSection: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Real Results from{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Real Clients
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="group relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  src="/assets/images/testimonials/viktor-zeman-real.jpg"
                />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white" />
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
                Martin&apos;s development background established a foundation for implementing sophisticated strategies,
                particularly technical SEO initiatives. With him, our team significantly enhanced the performance of two
                high-traffic websites.
              </blockquote>
            </div>
          </div>
        </div>
        <div className="group relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  src="/assets/images/testimonials/daniel-pison.jpg"
                />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white" />
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
                Thanks in particular to Martin&apos;s skills and expertise, we have long been able to compete with much
                stronger competitors in website quality. I consider him one of the greatest technical SEO experts on the
                market.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <div className="flex text-yellow-400 text-sm">★★★★★</div>
          <span className="text-sm font-normal">50+ businesses trust me</span>
        </div>
      </div>
    </div>
  </section>
);

export default RealResultsSection;
