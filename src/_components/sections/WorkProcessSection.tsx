import React from 'react';
import Icons from '../ui/Icons';
import SectionHeader from '../ui/SectionHeader';

const WorkProcessSection: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge={{
          icon: <Icons.lightning className="w-4 h-4" />,
          text: 'Simple Process'
        }}
        title={<>How I{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Work With You
          </span></>}
        subtitle="My proven 3-step process transforms technical barriers into competitive advantages that users love"
      />
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                <Icons.chat className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Initial Consultation</h3>
            <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
              Free consultation to understand your users&apos; needs and identify technical barriers preventing optimal
              experiences.
            </p>
          </div>
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                <Icons.settings className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Preparation and Execution</h3>
            <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
              Deep analysis reveals user friction points and creates actionable roadmap for immediate improvements.
            </p>
          </div>
          <div className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                <Icons.target className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Ongoing Support and Optimization</h3>
            <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
              Present results with prioritized task lists. Provide strategic guidance to maximize ROI while avoiding
              resource drain. Ongoing consultations available.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WorkProcessSection;
