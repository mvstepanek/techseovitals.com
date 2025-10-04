import React from 'react';
import StatsGrid from '../business/StatsGrid';
import SectionHeader from '../ui/SectionHeader';
import Icons from '../ui/Icons';
import { COMMON_STYLES } from '../../_data/constants';

const NewsletterBenefitsSection: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
    <div className={COMMON_STYLES.containerWidth}>
      <SectionHeader
        badge={{
          icon: <Icons.checkCircle className="w-4 h-4" />,
          text: 'Why Subscribe',
        }}
        title={
          <>
            Why Business Owners <span>Trust This Newsletter</span>
          </>
        }
        subtitle="A newsletter that transforms how you think about user experience and technical optimization."
      />
      <StatsGrid
        stats={[
          {
            value: '10+',
            label: 'Years Experience',
            color: 'blue',
          },
          {
            value: '2x',
            label: 'Monthly Frequency',
            color: 'green',
          },
          {
            value: '100%',
            label: 'Actionable Content',
            color: 'purple',
          },
        ]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
          <div className="mb-6">
            <Icons.lightbulb className="w-12 h-12 text-blue-500 mb-4" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Faster Decision Making</h3>
          <p className="text-gray-600 mb-6">
            Stop second-guessing your technical choices. Get clear guidance on what works, what doesn&apos;t, and why it matters for your specific situation.
          </p>
        </div>
        <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
          <div className="mb-6">
            <Icons.clock className="w-12 h-12 text-green-500 mb-4" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Advantage</h3>
          <p className="text-gray-600 mb-6">
            Learn optimization techniques most websites miss. Get ahead of changes before they impact your rankings and discover opportunities others overlook.
          </p>
        </div>
        <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
          <div className="mb-6">
            <Icons.growth className="w-12 h-12 text-purple-500 mb-4" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Measurable Growth</h3>
          <p className="text-gray-600 mb-6">
            Watch your website transform with better user engagement, improved search visibility, and increased revenue through proven optimization techniques.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default NewsletterBenefitsSection;
