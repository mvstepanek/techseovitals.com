import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';
import SectionHeader from '../ui/SectionHeader';
import BackgroundDecorations from '../ui/BackgroundDecorations';
import Icons from '../ui/Icons';

const SimpleStepsSection: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
    <BackgroundDecorations variant="centered" />

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <SectionHeader
        badge={{
          icon: <div className="w-2 h-2 bg-white rounded-full animate-pulse" />,
          text: 'How Does It Work?'
        }}
        title={<><span>
            3 Simple Steps
          </span>
          <br />
          to Success</>}
        subtitle="Transform your website into the exceptional experience your users deserve."
        className="mb-20"
      />

      <div className="relative">
        {/* Connection lines for desktop */}
        <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <svg className="w-full h-8" viewBox="0 0 800 32" fill="none">
            <path
              d="M100 16 L350 16 M450 16 L700 16"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="8,8"
              opacity="0.5"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Step 1 */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">01</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Free Discovery Call</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                30-minute conversation about your users&apos; needs, pain points, and how we can create better
                experiences that drive business growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                  <Icons.checkCircle className="w-4 h-4" />
                  100% free
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                  <Icons.checkCircle className="w-4 h-4" />
                  No commitment
                </span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">02</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">User Experience Analysis</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Deep dive into how users experience your site, identifying friction points and opportunities for
                delightful improvements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700">
                  <Icons.checkCircle className="w-4 h-4" />
                  50+ data points
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700">
                  <Icons.checkCircle className="w-4 h-4" />
                  Prioritized roadmap
                </span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">03</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Transform & Optimize</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Clear roadmap to create exceptional experiences, with support to ensure your users feel the improvements
                immediately.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-purple-50 text-purple-700">
                  <Icons.checkCircle className="w-4 h-4" />
                  Expert guidance
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-purple-50 text-purple-700">
                  <Icons.checkCircle className="w-4 h-4" />
                  Proven results
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-16">
        <a
          className={COMMON_STYLES.buttonPrimary}
          href="/contact/"
        >
          <span className="relative z-10">Get Free Website Check</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </a>
      </div>
    </div>
  </section>
);

export default SimpleStepsSection;
