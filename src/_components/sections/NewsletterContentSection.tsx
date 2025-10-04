import React from 'react';
import Badge from '../ui/Badge';
import CardDecoration from '../ui/CardDecoration';
import IconContainer from '../ui/IconContainer';
import Icons from '../ui/Icons';
import { COMMON_STYLES } from '../../_data/constants';

const NewsletterContentSection: React.FC = () => {
  return (
    <div className="border-t border-gray-200">
      <section className="py-24 bg-white">
        <div className={COMMON_STYLES.containerWidth}>
          <div className="text-center mb-6">
            <Badge icon={<Icons.email className="w-4 h-4" />}>What You&apos;ll Get</Badge>
          </div>
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What&apos;s in Each <span>Episode</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Actionable technical SEO and performance strategies that help you create better user experiences while improving your search rankings and AI visibility.
            </p>
          </div>
          <div className={COMMON_STYLES.threeColumnGrid}>
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
              <CardDecoration color="blue" size="lg" />
              <IconContainer icon={<Icons.document className="w-8 h-8 text-white" />} color="blue" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Analysis</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Deep dives into technical SEO trends, case studies from real websites, and performance optimization techniques that actually move the needle.
              </p>
              <div className="flex items-center gap-2 font-semibold text-blue-600">
                <Icons.arrowTrendUp className="w-5 h-5" />
                Deep insights
              </div>
            </div>
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
              <CardDecoration color="green" size="lg" />
              <IconContainer icon={<Icons.checkCircle className="w-8 h-8 text-white" />} color="green" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Actionable Guides</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Step-by-step guides you can implement immediately. No fluff, just practical instructions with clear before-and-after examples.
              </p>
              <div className="flex items-center gap-2 font-semibold text-green-600">
                <Icons.arrowTrendUp className="w-5 h-5" />
                Ready to use
              </div>
            </div>
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
              <CardDecoration color="purple" size="lg" />
              <IconContainer icon={<Icons.clock className="w-8 h-8 text-white" />} color="purple" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Trends</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Latest updates on search algorithm changes, AI developments, and emerging optimization opportunities you need to know about.
              </p>
              <div className="flex items-center gap-2 font-semibold text-purple-600">
                <Icons.arrowTrendUp className="w-5 h-5" />
                Stay current
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterContentSection;
