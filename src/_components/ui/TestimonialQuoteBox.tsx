import React from 'react';
import Icons from './Icons';

interface TestimonialQuoteBoxProps {
  quote: string;
  source?: string;
  sourceLink?: string;
  icon?: React.ReactNode;
  className?: string;
}

const TestimonialQuoteBox: React.FC<TestimonialQuoteBoxProps> = ({ quote, source, sourceLink, icon, className = '' }) => (
  <div className={`bg-white p-8 rounded-3xl shadow-lg border border-gray-200 ${className}`}>
    <div className="flex items-start gap-6">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
        {icon || <Icons.chat className="w-8 h-8 text-blue-600" />}
      </div>
      <div className="flex-1">
        <p className="text-lg text-gray-700 leading-relaxed italic mb-4">&quot;{quote}&quot;</p>
        {source && (
          <div className="flex items-center gap-4">
            <div>
              <a target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors" href={sourceLink || '#'}>
                {source}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default TestimonialQuoteBox;
