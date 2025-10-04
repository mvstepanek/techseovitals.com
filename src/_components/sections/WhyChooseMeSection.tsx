import React from 'react';
import OptimizedImage from '../common/OptimizedImage';
import SectionHeader from '../ui/SectionHeader';
import Icons from '../ui/Icons';
import { COMMON_STYLES } from '../../_data/constants';
import FeaturePoint from '../ui/FeaturePoint';
import TestimonialQuoteBox from '../ui/TestimonialQuoteBox';

const WhyChooseMeSection: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
    <div className={COMMON_STYLES.containerWidth}>
      <SectionHeader
        badge={{
          icon: <Icons.user className="w-4 h-4" />,
          text: 'Why Me?',
        }}
        title={
          <>
            Technical SEO Expert Who <span>Delivers Real Results</span>
          </>
        }
        subtitle={
          <>
            I specialize in delivering measurable improvements that drive real business growth.
            <br /> 10+ years of experience optimizing websites for both search engines and exceptional user experiences.
          </>
        }
        maxWidth="4xl"
      />
      <div className={COMMON_STYLES.twoColumnGrid} style={{ alignItems: 'center', marginBottom: '4rem' }}>
        <div>
          <div className="space-y-8">
            <FeaturePoint
              icon={<Icons.badge className="w-6 h-6 text-white" />}
              title="Professional Web Development Skills"
              description="I combine development expertise with SEO knowledge. Deep understanding of technical aspects and architecture enables me to solve complex challenges."
              color="bg-gradient-to-br from-blue-500 to-blue-600"
            />
            <FeaturePoint
              icon={<Icons.lightning className="w-6 h-6 text-white" />}
              title="Comprehensive Technical Approach"
              description="I specialize in both technical SEO and performance optimization. Every aspect of your site's technical foundation works together to maximize visibility across search engines and AI platforms."
              color="bg-gradient-to-br from-green-500 to-green-600"
            />
            <FeaturePoint
              icon={<Icons.monitor className="w-6 h-6 text-white" />}
              title="Measurable Business Results"
              description="From enterprise migrations to startup growth, I've helped businesses significantly increase revenue and organic traffic by solving complex technical SEO challenges."
              color="bg-gradient-to-br from-purple-500 to-purple-600"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl" />
          <div className="relative">
            <OptimizedImage
              src="/assets/images/martin-stepanek-1.jpg"
              alt="Martin Stepanek - Technical SEO Expert in the Mountains"
              width={800}
              height={800}
              className="w-full rounded-3xl shadow-2xl border-4 border-white"
              responsive={true}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute -bottom-4 left-4 right-4 sm:-bottom-6 sm:-left-6 sm:right-auto bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100 w-fit mx-auto sm:mx-0 sm:max-w-none">
              <div className="flex items-center gap-2 sm:gap-3">
                <Icons.badge className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <div className="text-sm sm:text-sm font-bold text-gray-900">50+ Websites Successfully Optimized</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialQuoteBox
        quote="Under Martin's leadership, our team significantly enhanced the performance of two high-traffic websites. His methodical approach to technical SEO and aptitude for conveying complex technical concepts have consistently yielded remarkable results."
        source="LinkedIn Recommendation"
        sourceLink="https://www.linkedin.com/in/techseovitals/#recommendations"
      />
    </div>
  </section>
);

export default WhyChooseMeSection;
