import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';
import Icons from '../ui/Icons';
import SectionHeader from '../ui/SectionHeader';
import BackgroundDecorations from '../ui/BackgroundDecorations';

const CalendlySection: React.FC = () => (
  <section id="schedule" className="py-20 bg-white relative overflow-hidden">
    <BackgroundDecorations variant="default" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge={{
          icon: <Icons.lightning className="w-4 h-4" />,
          text: 'Start Your Transformation'
        }}
        title={<>Book Your <span>Free Consultation</span></>}
        subtitle="Choose a time that works best for you to discuss your website's technical SEO needs and opportunities for growth."
      />

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
