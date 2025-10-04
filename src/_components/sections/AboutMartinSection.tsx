import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';
import ExperienceSection from './ExperienceSection';
import BadgeIcons from '../ui/BadgeIcons';
import Icons from '../ui/Icons';

const AboutMartinSection: React.FC = () => (
  <div className="border-t border-gray-200">
    <ExperienceSection
      badge={{
        icon: BadgeIcons.pulsingDot,
        text: 'About Martin',
      }}
      title={
        <>
          What Makes Me <span>Different</span>
        </>
      }
      subtitle="I specialize in delivering measurable improvements that drive real business growth. 10+ years of experience optimizing websites for both search engines and exceptional user experiences."
      experiencePoints={[
        {
          icon: <Icons.badge className="w-6 h-6 text-white" />,
          title: 'Professional Web Development Skills',
          description:
            'I combine development expertise with SEO knowledge. Deep understanding of technical aspects and architecture enables me to solve complex challenges.',
          color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
        },
        {
          icon: <Icons.lightning className="w-6 h-6 text-white" />,
          title: 'Comprehensive Technical Approach',
          description:
            "I specialize in both technical SEO and performance optimization. Every aspect of your site's technical foundation works together to maximize visibility across search engines and AI platforms.",
          color: 'bg-gradient-to-br from-green-500 to-emerald-600',
        },
        {
          icon: <Icons.monitor className="w-6 h-6 text-white" />,
          title: 'Measurable Business Results',
          description:
            'From enterprise migrations to startup growth, I have helped businesses significantly increase revenue and organic traffic by solving complex technical SEO challenges.',
          color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
        },
      ]}
      image={{
        src: '/assets/images/martin-stepanek-5.jpg',
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
    />
  </div>
);

export default AboutMartinSection;
