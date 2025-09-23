import React from 'react';
import ConvertKitForm from '../forms/ConvertKitForm';

const PerformanceHeroSection: React.FC = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">
    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-16 left-16 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-24 right-32 w-24 h-24 bg-indigo-300 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-25" />
    </div>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Stop Losing Customers to Slow Sites
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              5 Performance Metrics
            </span>{' '}
            That Actually Drive Business Results
          </h1>
          <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-lg">
            Discover which performance metrics directly impact customer satisfaction and revenue. Learn to track what
            drives conversions.
          </p>
          <div className="mt-10 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-gray-600">
              <div className="flex text-yellow-400 text-sm">★★★★★</div>
              <span className="text-sm font-semibold">50+ businesses improving their business results</span>
            </div>
          </div>
        </div>
        <div className="relative lg:ml-8">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-3xl blur-2xl opacity-30" />
          <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-white p-8">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-3">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Grab Your Free Ebook
                </span>
              </h3>
              <p className="text-gray-600 text-lg">Get the ebook delivered to your inbox</p>
            </div>
            <ConvertKitForm formType="5-web-performance-metrics" buttonText="Get Your Free Ebook" design="checklist" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PerformanceHeroSection;
