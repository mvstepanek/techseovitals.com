import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';
import Icons from '../ui/Icons';
import SectionHeader from '../ui/SectionHeader';

const WhatMakesMeDifferentSection: React.FC = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-white">
    <div className={COMMON_STYLES.containerWidth}>
      <SectionHeader
        badge={{ icon: <Icons.badge className="w-3 sm:w-4 h-3 sm:h-4" />, text: 'Why Choose Me' }}
        title={
          <>
            What Makes Me <span>Different</span>
          </>
        }
        subtitle="Developer-led technical SEO that transforms performance issues into competitive advantages. Actionable improvements that drive revenue."
        className="mb-0 sm:mb-4"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6">
            <Icons.badge className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">Web Development Expertise</h3>
          <p className="text-gray-600 leading-relaxed">10+ years experience with deep technical insight of website architecture and performance.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6">
            <Icons.document className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">Clear Action Plans</h3>
          <p className="text-gray-600 leading-relaxed">Get actionable task lists with step-by-step guidance your team can implement immediately.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className={`w-16 h-16 ${COMMON_STYLES.gradientBgVeryLight} rounded-2xl flex items-center justify-center mb-6`}>
            <Icons.heart className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">Making Teams Self-Sufficient</h3>
          <p className="text-gray-600 leading-relaxed">Get detailed guidance that empowers your team to maintain excellence long after our work together.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center mb-6">
            <Icons.users className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">Collaborative Approach</h3>
          <p className="text-gray-600 leading-relaxed">Partner with your teams to build lasting improvements with sustained impact for your users.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhatMakesMeDifferentSection;
