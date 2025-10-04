import React from 'react';
import Icons from '../ui/Icons';

const BlogPostCTA: React.FC = () => (
  <section className="py-24 bg-white relative overflow-hidden border-t border-gray-200">
    <div className="absolute inset-0">
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-50" />
    </div>
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-8">
          <Icons.lightning className="w-4 h-4" />
          Ready to Get Started?
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Let&apos;s Transform Your Website Into a{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Revenue Engine
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          Don&apos;t let technical issues hold your business back. Get expert technical SEO guidance and turn your
          website into your most powerful sales tool.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a
            className="group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-8 py-4 text-lg rounded-xl hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl focus:ring-4 focus:ring-purple-500/30"
            href="/contact/"
          >
            <span className="relative z-10">Get Free Website Check</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>
          <div className="flex items-center justify-center gap-4 text-gray-600">
            <span className="text-sm">✓ Free consultation</span>
            <span className="text-sm">✓ No commitment</span>
          </div>
        </div>
        <div className="mb-16" />
      </div>
    </div>
  </section>
);

export default BlogPostCTA;
