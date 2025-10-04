import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import BackgroundDecorations from '../ui/BackgroundDecorations';
import ProcessStepCard from '../ui/ProcessStepCard';

const SimpleStepsSection: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
    <BackgroundDecorations variant="centered" />

    <div className={`${COMMON_STYLES.containerWidth} relative`}>
      <SectionHeader
        badge={{
          icon: <div className="w-2 h-2 bg-white rounded-full animate-pulse" />,
          text: 'How Does It Work?',
        }}
        title={
          <>
            <span>3 Simple Steps</span>
            <br />
            to Success
          </>
        }
        subtitle="Transform your website into the exceptional experience your users deserve."
        className="mb-20"
      />

      <div className="relative">
        {/* Connection lines for desktop */}
        <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <svg className="w-full h-8" viewBox="0 0 800 32" fill="none">
            <path d="M100 16 L350 16 M450 16 L700 16" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="8,8" opacity="0.5" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className={COMMON_STYLES.threeColumnGrid}>
          <ProcessStepCard
            stepNumber={1}
            icon={<div className="text-2xl font-bold text-white">01</div>}
            title="Free Discovery Call"
            description="30-minute conversation about your users' needs, pain points, and how we can create better experiences that drive business growth."
            color="bg-gradient-to-br from-blue-500 to-blue-600"
            trustSignals={['100% free', 'No commitment']}
            trustSignalColor="blue"
          />
          <ProcessStepCard
            stepNumber={2}
            icon={<div className="text-2xl font-bold text-white">02</div>}
            title="User Experience Analysis"
            description="Deep dive into how users experience your site, identifying friction points and opportunities for delightful improvements."
            color="bg-gradient-to-br from-emerald-500 to-green-600"
            trustSignals={['50+ data points', 'Prioritized roadmap']}
            trustSignalColor="green"
          />
          <ProcessStepCard
            stepNumber={3}
            icon={<div className="text-2xl font-bold text-white">03</div>}
            title="Transform & Optimize"
            description="Clear roadmap to create exceptional experiences, with support to ensure your users feel the improvements immediately."
            color="bg-gradient-to-br from-purple-500 to-purple-600"
            trustSignals={['Expert guidance', 'Proven results']}
            trustSignalColor="purple"
          />
        </div>
      </div>

      <div className="text-center mt-16">
        <Button href="/contact/">Get Free Website Check</Button>
      </div>
    </div>
  </section>
);

export default SimpleStepsSection;
