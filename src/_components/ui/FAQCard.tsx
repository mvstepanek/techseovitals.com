import React from 'react';

interface FAQCardProps {
  question: string;
  answer: string;
  className?: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ question, answer, className = '' }) => (
  <div className={`bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 ${className}`}>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{question}</h3>
    <p className="text-gray-600 leading-relaxed">{answer}</p>
  </div>
);

export default FAQCard;
