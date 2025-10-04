import React from 'react';
import Icons from '../_components/ui/Icons';

export const ABOUT_CONTENT = {
  subtitle: 'I specialize in delivering measurable improvements that drive real business growth. 10+ years of experience optimizing websites for both search engines and exceptional user experiences.',

  experiencePoints: [
    {
      icon: <Icons.badge className="w-8 h-8 text-white" />,
      title: 'Professional Web Development Skills',
      description: 'I combine development expertise with SEO knowledge. Deep understanding of technical aspects and architecture enables me to solve complex challenges.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      colorAlt: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      icon: <Icons.lightning className="w-8 h-8 text-white" />,
      title: 'Comprehensive Technical Approach',
      description: "I specialize in both technical SEO and performance optimization. Every aspect of your site's technical foundation works together to maximize visibility across search engines and AI platforms.",
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      colorAlt: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    {
      icon: <Icons.monitor className="w-8 h-8 text-white" />,
      title: 'Measurable Business Results',
      description: 'From enterprise migrations to startup growth, I have helped businesses significantly increase revenue and organic traffic by solving complex technical SEO challenges.',
      descriptionAlt: "From enterprise migrations to startup growth, I've helped businesses significantly increase revenue and organic traffic by solving complex technical SEO challenges.",
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      colorAlt: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
  ],

  statsBadge: {
    title: '50+ Successful Projects',
    titleAlt: '50+ Websites Successfully Optimized',
    subtitle: 'Trusted by businesses worldwide',
  },
};
