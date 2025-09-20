import React from 'react';

const PublicSpeechesSection: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl opacity-25" />
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-20" />
    </div>
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          Speaking
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Public{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Speaking</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Sharing knowledge and insights at industry conferences and events
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-6 shadow-xl border border-gray-200">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/XUgiA17sMK4?si=5uspHyBCvqLjQDco"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                <a
                  href="https://www.youtube.com/watch?v=XUgiA17sMK4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-purple-600 transition-colors"
                >
                  #seocharity - Crawl Budget From the Other Side
                </a>
              </h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-6 shadow-xl border border-gray-200 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">More Soon...</h3>
              <p className="text-gray-600 text-sm">Additional speaking engagements and presentations coming up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PublicSpeechesSection;
