import React from 'react';
import OptimizedImage from '../common/OptimizedImage';
import { TestimonialCardProps } from '../../_types/common';

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  company,
  text,
  linkedinUrl,
  image,
  className,
}) => {
  return (
    <div className={`group relative ${className}`}>
      <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">

        {/* Author Info */}
        <div className="flex items-start gap-6 mb-6">
          <div className="relative">
            {image && (
              <OptimizedImage
                alt={name}
                width={64}
                height={64}
                className="rounded-2xl"
                src={image}
              />
            )}
            <svg
              className="absolute -bottom-2 -right-2 w-7 h-7 text-green-600 bg-white rounded-full"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-display font-bold text-gray-900 text-lg">{name}</h4>
              <div className="flex text-yellow-400">★★★★★</div>
            </div>
            <p className="text-gray-600 text-sm font-normal">
              {position}{company && `, ${company}`}
            </p>
          </div>
        </div>

        {/* Testimonial Text */}
        <div className="relative">
          <div className="absolute -left-2 -top-2 text-6xl text-purple-600/20 font-serif">&quot;</div>
          <blockquote className="text-gray-700 leading-relaxed pl-6">
            {text}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;