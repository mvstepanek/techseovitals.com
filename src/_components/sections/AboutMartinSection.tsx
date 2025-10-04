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
        icon: <Icons.star className="w-5 h-5 text-yellow-400" />,
        title: '50+ Successful Projects',
        subtitle: 'Trusted by businesses worldwide',
      }}
    />
  </div>
);

export default AboutMartinSection;
