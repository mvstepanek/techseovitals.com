import React from 'react';
import ExperienceSection from './ExperienceSection';
import BadgeIcons from '../ui/BadgeIcons';
import Icons from '../ui/Icons';
import { getAboutContent } from '../../_data/about-content';

interface AboutSectionProps {
  t?: (key: string) => string;
}

const defaultT = (key: string) => key;

const AboutSection: React.FC<AboutSectionProps> = ({ t = defaultT }) => {
  const aboutContent = getAboutContent(t);

  return (
    <div className="border-t border-gray-200">
      <ExperienceSection
        badge={{
          icon: BadgeIcons.pulsingDot,
          text: t('about-section.badge'),
        }}
        title={t('about-section.title')}
        subtitle={aboutContent.subtitle}
        experiencePoints={aboutContent.experiencePoints.map(point => ({
          icon: point.icon,
          title: point.title,
          description: point.description,
          color: point.color,
        }))}
        image={{
          src: '/assets/images/martin-stepanek-5.jpg',
          alt: 'Martin Stepanek',
        }}
        statsBadge={{
          icon: <Icons.star className="w-5 h-5 text-yellow-400" />,
          title: aboutContent.statsBadge.title,
          subtitle: aboutContent.statsBadge.subtitle,
        }}
      />
    </div>
  );
};

export default AboutSection;
