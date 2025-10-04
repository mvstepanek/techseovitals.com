import React from 'react';
import Icons from '../ui/Icons';

const WorkProcessSection: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-6">
          <Icons.lightning className="w-4 h-4" />
          Simple Process
        </div>
        <h2 className="text-4xl sm:text-5xl font-sans font-bold text-gray-900 mb-6">
          How I{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Work With You
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          My proven 3-step process transforms technical barriers into competitive advantages that users love
        </p>
      </div>
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
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
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
