import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';

const CalendlySection: React.FC = () => (
  <section id="schedule" className="py-20 bg-white relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-150 to-indigo-150 rounded-full blur-3xl opacity-50" />
    </div>
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${COMMON_STYLES.gradientBg} text-white shadow-lg mb-6`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Start Your Transformation
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Book Your <span className={COMMON_STYLES.gradientText}>Free Consultation</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choose a time that works best for you to discuss your website&apos;s technical SEO needs and opportunities for
          growth.
        </p>
      </div>

      {/* Calendly Appointment Form */}
      <div>
        {/* Calendly inline widget begin */}
        <div
          className="calendly-inline-widget h-[1300px] lg:h-[785px]"
          data-url="https://calendly.com/techseovitals/free-initial-consultation?primary_color=9333ea"
          style={{ minWidth: '320px' }}
        />
        {/* Calendly inline widget end */}
      </div>
    </div>
  </section>
);

export default CalendlySection;
