import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';
import ExperienceSection from './ExperienceSection';

const AboutMartinSection: React.FC = () => (
  <div className="border-t border-gray-200">
    <ExperienceSection
      badge={{
        icon: <div className="w-2 h-2 bg-white rounded-full animate-pulse" />,
        text: 'About Martin',
      }}
      title={
        <>
          What Makes Me <span className={COMMON_STYLES.gradientText}>Different</span>
        </>
      }
      subtitle="I specialize in delivering measurable improvements that drive real business growth. 10+ years of experience optimizing websites for both search engines and exceptional user experiences."
      experiencePoints={[
        {
          icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42.0 001.946-.806 3.42 3.42.0 014.438.0 3.42 3.42.0 001.946.806 3.42 3.42.0 013.138 3.138 3.42 3.42.0 00.806 1.946 3.42 3.42.0 010 4.438 3.42 3.42.0 00-.806 1.946 3.42 3.42.0 01-3.138 3.138 3.42 3.42.0 00-1.946.806 3.42 3.42.0 01-4.438.0 3.42 3.42.0 00-1.946-.806 3.42 3.42.0 01-3.138-3.138 3.42 3.42.0 00-.806-1.946 3.42 3.42.0 010-4.438 3.42 3.42.0 00.806-1.946 3.42 3.42.0 013.138-3.138z"
              />
            </svg>
          ),
          title: 'Developer-Level Technical Skills',
          description:
            'I combine development expertise with SEO knowledge. Deep understanding of technical aspects and architecture enables me to solve complex challenges.',
          color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
        },
        {
          icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          title: 'Comprehensive Technical Approach',
          description:
            "I specialize in both technical SEO and performance optimization. Every aspect of your site's technical foundation works together to maximize visibility across search engines and AI platforms.",
          color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
        },
        {
          icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          ),
          title: 'Measurable Business Results',
          description:
            'From enterprise migrations to startup growth, I&apos;ve helped businesses significantly increase revenue and organic traffic by solving complex technical SEO challenges.',
          color: 'bg-gradient-to-br from-green-500 to-emerald-600',
        },
      ]}
      image={{
        src: '/assets/images/martinstepanek-techseo-4.jpg',
        alt: 'Martin Stepanek - Technical SEO Consultant',
      }}
      statsBadge={{
        icon: (
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ),
        title: '50+ Successful Projects',
        subtitle: 'Trusted by businesses worldwide',
      }}
      backgroundColor="white"
    />
  </div>
);

export default AboutMartinSection;
