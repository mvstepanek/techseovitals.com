import React from 'react';
import OptimizedImage from '../common/OptimizedImage';
import { TestimonialCardProps } from '../../_types/common';
import Icons from '../ui/Icons';

const TestimonialCard = React.memo<TestimonialCardProps>(({ name, position, company, text, image, className }) => {
  return (
    <div className={`group relative ${className}`}>
      <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
        {/* Author Info */}
        <div className="flex items-start gap-6 mb-6">
          <div className="relative">
            {image && <OptimizedImage alt={name} width={64} height={64} className="rounded-2xl" src={image} />}
            <Icons.badge className="absolute -bottom-2 -right-2 w-7 h-7 text-green-600 bg-white rounded-full" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-display font-bold text-gray-900 text-lg">{name}</h4>
              <div className="flex text-yellow-400">★★★★★</div>
            </div>
            <p className="text-gray-600 text-sm font-normal">
              {position}
              {company && `, ${company}`}
            </p>
          </div>
        </div>

        {/* Testimonial Text */}
        <div className="relative">
          <div className="absolute -left-2 -top-2 text-6xl text-purple-600/20 font-serif">&quot;</div>
          <blockquote className="text-gray-700 leading-relaxed pl-6">{text}</blockquote>
        </div>
      </div>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;
