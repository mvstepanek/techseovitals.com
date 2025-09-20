import React from 'react';

const FAQSection: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          FAQ
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
          Frequently Asked{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to know about creating exceptional website experiences that drive real results
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">How is pricing determined?</h3>
          <p className="text-gray-600 leading-relaxed">
            Pricing varies by site complexity and specific requirements. I provide transparent pricing after
            understanding your unique situation and goals.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">How quickly will users notice improvements?</h3>
          <p className="text-gray-600 leading-relaxed">
            Users feel performance improvements immediately. Business metrics improve within weeks as better experiences
            lead to higher engagement and conversions.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Are there long-term commitments?</h3>
          <p className="text-gray-600 leading-relaxed">
            No long-term commitments required, except for monitoring services which have a 3-month minimum to ensure
            meaningful results.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">What makes the biggest impact?</h3>
          <p className="text-gray-600 leading-relaxed">
            Focusing on user experience first creates lasting value. I prioritize improvements that visitors actually
            feel, naturally driving better business outcomes.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FAQSection;
