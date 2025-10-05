import React from 'react';
import Icons from '../ui/Icons';
import SectionHeader from '../ui/SectionHeader';
import BackgroundDecorations from '../ui/BackgroundDecorations';
import { COMMON_STYLES } from '../../_data/constants';

interface CalendlySectionProps {
  t?: (key: string) => string;
}

const CalendlySection: React.FC<CalendlySectionProps> = ({ t = (key) => key }) => (
  <section id="schedule" className={`${COMMON_STYLES.sectionPadding} bg-white relative overflow-hidden`}>
    <BackgroundDecorations variant="default" />
    <div className={`relative ${COMMON_STYLES.containerWidth}`}>
      <SectionHeader
        badge={{
          icon: <Icons.lightning className="w-4 h-4" />,
          text: t('cta.start-transformation'),
        }}
        title={t('calendly.title')}
        subtitle={t('calendly.subtitle')}
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
