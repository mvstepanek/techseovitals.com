import React from 'react';
import ConvertKitForm from '../forms/ConvertKitForm';
import BackgroundDecorations from '../ui/BackgroundDecorations';

const PerformanceCTASection: React.FC = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <BackgroundDecorations variant="default" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          What&apos;s Your Performance Strategy?
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Get Your Free{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Performance Guide
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          Every millisecond shapes user perception. Learn which metrics reveal true user satisfaction and build
          performance strategies that create competitive advantages.
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 bg-opacity-30 p-8 rounded-3xl shadow-xl border border-gray-200">
            <ConvertKitForm formType="5-web-performance-metrics" buttonText="Get Your Free Ebook" design="checklist" />
            <p className="text-sm text-gray-500 text-center mt-4">
              No spam, ever. Unsubscribe at any time.
              <br />
              By subscribing, I agree to the{' '}
              <a href="/privacy-policy/" className="underline hover:no-underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms-and-conditions/" className="underline hover:no-underline">
                Terms and Conditions
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PerformanceCTASection;
