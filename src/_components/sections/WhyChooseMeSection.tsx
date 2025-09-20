import React from 'react';

const WhyChooseMeSection: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7A4 4 0 118 7a4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Why Me?
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
          Track Record That{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Speaks for Itself
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          10+ years transforming frustrated user experiences into delightful interactions that naturally drive business
          growth.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42.0 001.946-.806 3.42 3.42.0 014.438.0 3.42 3.42.0 001.946.806 3.42 3.42.0 013.138 3.138 3.42 3.42.0 00.806 1.946 3.42 3.42.0 010 4.438 3.42 3.42.0 00-.806 1.946 3.42 3.42.0 01-3.138 3.138 3.42 3.42.0 00-1.946.806 3.42 3.42.0 01-4.438.0 3.42 3.42.0 00-1.946-.806 3.42 3.42.0 01-3.138-3.138 3.42 3.42.0 00-.806-1.946 3.42 3.42.0 010-4.438 3.42 3.42.0 00.806-1.946 3.42 3.42.0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Developer-Led Expertise</h3>
                <p className="text-gray-600">
                  10+ years building websites gives me insights most consultants lack. I understand both user
                  frustrations and technical solutions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">User Experience Focus</h3>
                <p className="text-gray-600">
                  4+ years optimizing websites that users love to use - where performance improvements create
                  competitive advantages.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">
                  Consistently delivered significant revenue increases and meaningful conversion improvements for
                  clients across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl" />
          <div className="relative">
            <img
              src="/assets/images/martin-stepanek-mountains.jpg"
              alt="Martin Stepanek - Technical SEO Expert in the Mountains"
              width="800"
              height="800"
              className="w-full rounded-3xl shadow-2xl border-4 border-white"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-sm font-bold text-gray-900">50+ Websites Successfully Optimized</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863.0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
              &quot;Under Martin&apos;s leadership, our team significantly enhanced the performance of two high-traffic
              websites. His methodical approach to technical SEO and aptitude for conveying complex technical concepts
              have consistently yielded remarkable results.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  href="https://www.linkedin.com/in/techseovitals/#recommendations"
                >
                  LinkedIn Recommendation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseMeSection;
