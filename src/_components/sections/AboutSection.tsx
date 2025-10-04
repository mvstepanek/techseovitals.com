import React from 'react';
import ExperienceSection from './ExperienceSection';
import BadgeIcons from '../ui/BadgeIcons';
import Icons from '../ui/Icons';
import { ABOUT_CONTENT } from '../../_data/about-content';

const AboutSection: React.FC = () => (
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
      subtitle={ABOUT_CONTENT.subtitle}
      experiencePoints={ABOUT_CONTENT.experiencePoints.map(point => ({
        icon: point.icon,
        title: point.title,
        description: point.description,
        color: point.color,
      }))}
      image={{
        src: '/assets/images/martin-stepanek-5.jpg',
        alt: 'Martin Stepanek - Technical SEO Consultant',
      }}
      statsBadge={{
        icon: <Icons.star className="w-5 h-5 text-yellow-400" />,
        title: ABOUT_CONTENT.statsBadge.title,
        subtitle: ABOUT_CONTENT.statsBadge.subtitle,
      }}
    />
  </div>
);

export default AboutSection;
