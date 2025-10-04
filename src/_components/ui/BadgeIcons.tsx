import React from 'react';
import Icons from './Icons';

export const BadgeIcons = {
  lightning: <Icons.lightning className="w-4 h-4" />,
  checkCircle: <Icons.checkCircle className="w-4 h-4" />,
  star: <Icons.star className="w-4 sm:w-5 h-4 sm:h-5" />,
  pulsingDot: <div className="w-2 h-2 bg-white rounded-full animate-pulse" />,
  badge: <Icons.badge className="w-4 h-4" />,
  chat: <Icons.chat className="w-4 h-4" />,
  settings: <Icons.settings className="w-4 h-4" />,
};

export default BadgeIcons;
