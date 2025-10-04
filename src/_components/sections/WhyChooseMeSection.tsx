import React from 'react';
import OptimizedImage from '../common/OptimizedImage';
import SectionHeader from '../ui/SectionHeader';
import Icons from '../ui/Icons';
import IconContainer from '../ui/IconContainer';

const WhyChooseMeSection: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge={{
          icon: <Icons.user className="w-4 h-4" />,
          text: 'Why Me?'
        }}
        title={<>Technical SEO Expert Who{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Delivers Real Results
          </span></>}
        subtitle={<>I specialize in delivering measurable improvements that drive real business growth.<br/> 10+ years of experience optimizing websites for both search engines and exceptional user experiences.</>}
        maxWidth="4xl"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <IconContainer icon={<Icons.badge className="w-6 h-6 text-white" />} color="blue" className="flex-shrink-0" />
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Professional Web Development Skills</h3>
                <p className="text-gray-600">
                  I combine development expertise with SEO knowledge. Deep understanding of technical aspects and
                  architecture enables me to solve complex challenges.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <IconContainer icon={<Icons.lightning className="w-6 h-6 text-white" />} color="green" className="flex-shrink-0" />
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Comprehensive Technical Approach</h3>
                <p className="text-gray-600">
                  I specialize in both technical SEO and performance optimization. Every aspect of your site&apos;s
                  technical foundation works together to maximize visibility across search engines and AI platforms.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <IconContainer icon={<Icons.monitor className="w-6 h-6 text-white" />} color="purple" className="flex-shrink-0" />
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Measurable Business Results</h3>
                <p className="text-gray-600">
                  From enterprise migrations to startup growth, I&apos;ve helped businesses significantly increase
                  revenue and organic traffic by solving complex technical SEO challenges.
                </p>
              </div>
            </div>
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
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Icons.chat className="w-8 h-8 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
              &quot;Under Martin&apos;s leadership, our team significantly enhanced the performance of two high-traffic
              websites. His methodical approach to technical SEO and aptitude for conveying complex technical concepts
              have consistently yielded remarkable results.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                  href="https://www.linkedin.com/in/techseovitals/#recommendations"
                >
                  LinkedIn Recommendation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseMeSection;
