import React from 'react';
import ConvertKitForm from '../forms/ConvertKitForm';
import Badge from '../ui/Badge';
import BackgroundDecorations from '../ui/BackgroundDecorations';

const PerformanceHeroSection: React.FC = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">
    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
    <BackgroundDecorations variant="centered" />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl text-center sm:text-left">
          <Badge icon={<div className="w-2 h-2 bg-white rounded-full animate-pulse" />}>Stop Losing Customers to Slow Sites</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight text-left sm:text-left">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">5 Performance Metrics</span> That Actually Drive Business Results
          </h1>
          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-lg text-left sm:text-left">
            Discover which performance metrics directly impact customer satisfaction and revenue. Learn to track what drives conversions.
          </p>
          <div className="mt-10 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-gray-600 justify-start">
              <div className="flex text-yellow-400 text-sm">★★★★★</div>
              <span className="text-sm font-semibold text-left">50+ businesses improving their business results</span>
            </div>
          </div>
        </div>
        <div className="relative lg:ml-8">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-3xl blur-2xl opacity-30" />
          <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-white p-8">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-3">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Grab Your Free Ebook</span>
              </h3>
              <p className="text-gray-600 text-lg">Get the ebook delivered to your inbox</p>
            </div>
            <ConvertKitForm formType="5-web-performance-metrics" buttonText="Get Your Free Ebook" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PerformanceHeroSection;
