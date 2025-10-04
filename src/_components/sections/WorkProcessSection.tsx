import React from 'react';
import Icons from '../ui/Icons';
import SectionHeader from '../ui/SectionHeader';
import { COMMON_STYLES } from '../../_data/constants';
import ProcessStepCard from '../ui/ProcessStepCard';

const WorkProcessSection: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
    <div className={COMMON_STYLES.containerWidth}>
      <SectionHeader
        badge={{
          icon: <Icons.lightning className="w-4 h-4" />,
          text: 'Simple Process',
        }}
        title={
          <>
            How I <span>Work With You</span>
          </>
        }
        subtitle="My proven 3-step process transforms technical barriers into competitive advantages that users love"
      />
      <div className="relative">
        <div className={COMMON_STYLES.threeColumnGrid}>
          <ProcessStepCard
            stepNumber={1}
            icon={<Icons.chat className="w-8 h-8 text-white" />}
            title="Initial Consultation"
            description="Free consultation to understand your users' needs and identify technical barriers preventing optimal experiences."
            color="bg-gradient-to-br from-purple-600 to-indigo-600"
          />
          <ProcessStepCard
            stepNumber={2}
            icon={<Icons.settings className="w-8 h-8 text-white" />}
            title="Preparation and Execution"
            description="Deep analysis reveals user friction points and creates actionable roadmap for immediate improvements."
            color="bg-gradient-to-br from-blue-600 to-blue-700"
          />
          <ProcessStepCard
            stepNumber={3}
            icon={<Icons.target className="w-8 h-8 text-white" />}
            title="Ongoing Support and Optimization"
            description="Present results with prioritized task lists. Provide strategic guidance to maximize ROI while avoiding resource drain. Ongoing consultations available."
            color="bg-gradient-to-br from-green-600 to-green-700"
          />
        </div>
      </div>
    </div>
  </section>
);

export default WorkProcessSection;
