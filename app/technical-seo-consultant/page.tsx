import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO, generatePersonJsonLd } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'About Martin Štěpánek - Technical SEO & Web Performance Consultant',
  description: 'Meet Martin Štěpánek, expert Technical SEO consultant with 10+ years experience. Specializing in Core Web Vitals, page speed optimization, and helping businesses grow through better website performance.',
  jsonLd: generatePersonJsonLd(),
}, '/technical-seo-consultant/');

export default function TechnicalSEOConsultant() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-secondary py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Hi, I'm{' '}
                  <span className="text-primary">Martin Štěpánek</span>
                </h1>
                <p className="mt-6 text-xl text-gray-600 leading-8">
                  Technical SEO & Web Performance Consultant helping businesses unlock their full potential through faster, better-optimized websites.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book-consultation/"
                    className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white text-center shadow-md hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                  >
                    Schedule Free Consultation
                  </Link>
                  <Link
                    href="/technical-seo-services/"
                    className="rounded-lg border-2 border-primary px-8 py-4 text-lg font-semibold text-primary text-center hover:bg-primary hover:text-white transition-all"
                  >
                    View Services
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <Image
                  src="/images/martin-stepanek.jpg"
                  alt="Martin Štěpánek - Technical SEO Consultant"
                  width={500}
                  height={500}
                  priority
                  fetchPriority="high"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  About Martin
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                  10+ years of experience helping businesses grow through technical SEO
                </p>
              </div>
              
              <div className="prose prose-lg prose-primary mx-auto">
                <p>
                  With over a decade of experience in technical SEO and web performance optimization, 
                  I've helped hundreds of businesses transform their websites into high-performing, 
                  search-engine-friendly platforms that drive real business results.
                </p>
                
                <p>
                  My journey in technical SEO began when I realized that even the best content and 
                  marketing strategies fail if a website is slow, poorly structured, or technically flawed. 
                  Since then, I've dedicated my career to mastering the technical aspects that make 
                  websites fast, accessible, and loved by both users and search engines.
                </p>
                
                <p>
                  I specialize in Core Web Vitals optimization, technical SEO audits, website migration 
                  planning, and performance monitoring. My approach is always data-driven and focused 
                  on delivering measurable business impact, not just better metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Experience & Expertise
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Core Web Vitals</h3>
                <p className="text-gray-600">
                  Expert in optimizing Largest Contentful Paint (LCP), First Input Delay (FID), 
                  and Cumulative Layout Shift (CLS) for better user experience and search rankings.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical SEO Audits</h3>
                <p className="text-gray-600">
                  Comprehensive website analysis identifying technical issues that impact search 
                  performance, with actionable recommendations for improvement.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Website Migrations</h3>
                <p className="text-gray-600">
                  Strategic planning and execution of website migrations, ensuring minimal impact 
                  on search rankings and maximum preservation of organic traffic.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Monitoring</h3>
                <p className="text-gray-600">
                  Continuous monitoring and optimization of website performance, catching issues 
                  before they impact user experience or search rankings.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Optimization</h3>
                <p className="text-gray-600">
                  Mobile-first optimization strategies ensuring excellent performance and user 
                  experience across all devices and connection speeds.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Team Training</h3>
                <p className="text-gray-600">
                  Training and supporting internal development teams to maintain and improve 
                  technical SEO standards long-term.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Professional Background
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
                  </div>
                  <div className="md:w-2/3">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">Computer Science & Information Systems</h4>
                        <p className="text-gray-600">Strong technical foundation in web development, databases, and system optimization</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Continuous Learning</h4>
                        <p className="text-gray-600">Staying up-to-date with latest SEO algorithm changes, web performance standards, and industry best practices</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Experience</h3>
                  </div>
                  <div className="md:w-2/3">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">10+ Years in Technical SEO</h4>
                        <p className="text-gray-600">Extensive experience working with businesses of all sizes, from startups to enterprise companies</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Notable Clients</h4>
                        <p className="text-gray-600">LiveAgent, Quality Unit, and dozens of other successful businesses across various industries</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Specializations</h3>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Technical SEO</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Core Web Vitals</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Page Speed Optimization</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Website Migration</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">SEO Auditing</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Performance Monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                What Clients Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div>
                    <div className="font-semibold text-gray-900">Viktor Zeman</div>
                    <div className="text-gray-600">CEO, LiveAgent</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Martin's technical SEO strategies have been instrumental in our online success. His deep understanding of search algorithms and website optimization helped us significantly improve our search rankings and organic traffic. His expertise is unmatched."
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div>
                    <div className="font-semibold text-gray-900">Daniel Pison</div>
                    <div className="text-gray-600">CMO, Quality Unit</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Working with Martin has been a game-changer for our business. His expertise in technical SEO has been invaluable in helping us compete with stronger competitors in our industry. The results speak for themselves."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
                My Approach
              </h2>
              <div className="prose prose-lg prose-primary mx-auto">
                <p>
                  I believe that technical SEO isn't just about pleasing search engines—it's about 
                  creating exceptional user experiences that drive business growth. Every optimization 
                  I recommend is backed by data and focused on delivering measurable results.
                </p>
                
                <p>
                  My approach is collaborative and educational. I don't just fix problems; I help 
                  your team understand why issues occur and how to prevent them in the future. 
                  This ensures long-term success and builds internal capabilities.
                </p>
                
                <p>
                  Whether you're launching a new website, migrating to a new platform, or looking 
                  to improve your existing site's performance, I'm here to help you achieve your goals 
                  through strategic technical SEO optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="mt-4 text-xl text-purple-100 max-w-2xl mx-auto">
              Let's discuss how technical SEO can help your business grow. Schedule a free consultation to explore opportunities for your website.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation/"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-md hover:bg-gray-50 transition-all"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/contact/"
                className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-primary transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}