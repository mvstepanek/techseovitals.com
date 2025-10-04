import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';

const BrutalTruthSection: React.FC = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/30" />
    <div className={`${COMMON_STYLES.containerWidth} relative`}>
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
          The <span className="text-red-500">Brutal Truth</span> About Your Website
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Technical issues destroy user trust. Slow pages, broken navigation, and poor structure frustrate real customers trying to use your site. When users struggle, your
          business suffers.
        </p>
      </div>
      <div className={COMMON_STYLES.threeColumnGrid}>
        <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
          <div className="mb-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-red-100 text-red-700">Amazon Study</div>
            <div className="text-4xl font-bold mb-2 text-red-500">1%</div>
            <div className="text-sm text-gray-500 mb-4">Revenue lost per 100ms delay</div>
          </div>
          <h3 className="text-xl font-display font-bold text-gray-900 mb-3">Users Feel Every Delay</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Amazon discovered users perceive even 100ms delays. When frustrated by slow performance, they abandon purchases - costing businesses 1% revenue per 100ms delay.
          </p>
        </div>

        <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
          <div className="mb-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-orange-100 text-orange-700">Google Study</div>
            <div className="text-4xl font-bold mb-2 text-orange-500">53%</div>
            <div className="text-sm text-gray-500 mb-4">Mobile users abandon slow sites</div>
          </div>
          <h3 className="text-xl font-display font-bold text-gray-900 mb-3">Patience Has Limits</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Users give you exactly 3 seconds before deciding your site is not worth their time. Google found 53% of customers leave after those 3 seconds, taking their business
            elsewhere.
          </p>
        </div>

        <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
          <div className="mb-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-purple-100 text-purple-700">User Experience</div>
            <div className="text-4xl font-bold mb-2 text-purple-500">79%</div>
            <div className="text-sm text-gray-500 mb-4">Won&apos;t return after bad experience</div>
          </div>
          <h3 className="text-xl font-display font-bold text-gray-900 mb-3">First Impressions Matter</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            79% of users who faced a poor website experience won&apos;t give you a second chance. Sarch engines and AI platforms rely on the same signals that create good user
            experiences.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default BrutalTruthSection;
