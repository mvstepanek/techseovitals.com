import React from 'react';
import Icons from '../ui/Icons';
import SectionHeader from '../ui/SectionHeader';
import CardDecoration from '../ui/CardDecoration';
import IconContainer from '../ui/IconContainer';
import CTAWithTrustSignals from '../cta/CTAWithTrustSignals';

const WhyAuditSection: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge={{
          icon: <Icons.badge className="w-4 h-4" />,
          text: 'Why You Need an Audit',
        }}
        title={
          <>
            Stop Guessing. <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Start Knowing</span>
          </>
        }
        subtitle="You can't fix what you can't see. My audit reveals the hidden technical issues killing your conversions and revenue with a clear roadmap to fix them."
      />
      <CTAWithTrustSignals text="Get Free Website Check" href="/contact/" trustSignals={['Free consultation', 'No commitment']} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
          <CardDecoration color="blue" />
          <IconContainer icon={<Icons.checkCircle className="w-8 h-8 text-white" />} color="blue" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Uncover Revenue Killers</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Find the technical issues that are silently costing you money. Discover exactly what&apos;s preventing visitors from converting and completing purchases.
          </p>
          <div className="flex items-center gap-2 font-semibold text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
            Full technical analysis
          </div>
        </div>

        <div className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
          <CardDecoration color="green" />
          <IconContainer icon={<Icons.lightning className="w-8 h-8 text-white" />} color="green" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Maximize Revenue Impact</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Focus on what matters most. I prioritize fixes by revenue impact, addressing high-conversion opportunities first to see faster ROI.
          </p>
          <div className="flex items-center gap-2 font-semibold text-green-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
            Revenue opportunities found
          </div>
        </div>

        <div className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
          <CardDecoration color="purple" />
          <IconContainer icon={<Icons.heart className="w-8 h-8 text-white" />} color="purple" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Capture Lost Revenue</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Identify where competitors are stealing your customers and get the technical improvements that help you win back market share and revenue.
          </p>
          <div className="flex items-center gap-2 font-semibold text-purple-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
            Competitive advantage
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyAuditSection;
