import React from 'react';
import { DESIGN_TOKENS } from '../../_data/constants';

const TopBar: React.FC = () => (
  <div className="text-white" style={{ backgroundColor: DESIGN_TOKENS.COLORS.TOPBAR_BG }}>
    <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center text-center text-xs sm:text-sm font-medium">
        <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-white bg-opacity-20 text-white mr-2 sm:mr-4 flex-shrink-0">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
          <span>Free Resources</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide">
          <a className="hover:underline text-xs sm:text-sm px-1 whitespace-nowrap" href="/technical-seo-checklist/">
            Technical SEO Checklist
          </a>
          <span className="text-purple-200">•</span>
          <a className="hover:underline text-xs sm:text-sm px-1 whitespace-nowrap" href="/website-migration-checklist/">
            Website Migration Checklist
          </a>
          <span className="text-purple-200">•</span>
          <a className="hover:underline text-xs sm:text-sm px-1 whitespace-nowrap" href="/5-web-performance-metrics-every-business-owner-should-track/">
            5 Web Performance Metrics For Business Owners
          </a>
        </div>
      </div>
    </div>
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `,
      }}
    />
  </div>
);

export default TopBar;
