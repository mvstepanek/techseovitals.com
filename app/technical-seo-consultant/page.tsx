import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import HeroSection from '@/components/sections/hero-section';
import WhyMeSection from '@/components/sections/why-me-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import FinalCTASection from '@/components/sections/final-cta-section';
import NewsletterSection from '@/components/sections/newsletter-section';
import { generatePageSEO, generatePersonJsonLd } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'About Martin Stepanek - Technical SEO & Web Performance Consultant',
  description: 'Meet Martin Stepanek, expert Technical SEO consultant with 10+ years experience. Specializing in Core Web Vitals, page speed optimization, and helping businesses grow through better website performance.',
  jsonLd: generatePersonJsonLd(),
}, '/technical-seo-consultant/');

export default function TechnicalSEOConsultant() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <HeroSection
          badge="10+ Years Technical SEO Experience"
          badgeIcon={<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
          title={
            <>
              Meet Martin Stepanek,{' '}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Technical SEO Expert
              </span>
            </>
          }
          description="Technical SEO and web performance consultant with over 10 years of web development experience. I specialize in web performance optimization to maximize website revenue potential through enhanced user experience."
          primaryCTA={{
            text: "Schedule Free Consultation",
            href: "/book-consultation/"
          }}
          secondaryCTA={
            <div className="flex items-center gap-3 text-gray-600">
              <div className="flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
              <span className="text-sm font-medium">50+ businesses trust me</span>
            </div>
          }
          image={{
            src: "/images/martin-stepanek-seo.jpg",
            alt: "Martin Stepanek - Technical SEO Expert",
            width: 600,
            height: 600
          }}
          statusBadge={{
            icon: <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>,
            text: "Available for Projects"
          }}
        />

        {/* Why Me Section */}
        <div className="border-t border-gray-200">
        <WhyMeSection
          badge="Why Choose Martin"
          badgeIcon={<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
          title={
            <>
              What Makes Me <span className="text-primary">Different</span>
            </>
          }
          description="I combine deep technical expertise with business acumen to deliver SEO strategies that directly impact your bottom line."
          expertise={[
            {
              icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
              title: "10+ Years of Experience",
              description: "Over a decade of hands-on web development and technical SEO expertise, working with businesses of all sizes."
            },
            {
              icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
              title: "Actionable Task Lists",
              description: "Detailed, prioritized action items with step-by-step guidance tailored to your internal resources and capabilities."
            },
            {
              icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-green-500 to-emerald-600",
              title: "Revenue-Focused Approach",
              description: "Every optimization targets real business impact. I focus on improvements that directly increase conversions and revenue."
            }
          ]}
          image={{
            src: "/images/martin-stepanek-violet.jpeg",
            alt: "Martin Stepanek - Technical SEO Consultant",
            width: 500,
            height: 500
          }}
          imageBadge={{
            icon: <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>,
            title: "50+ Successful Projects",
            subtitle: "Trusted by businesses worldwide"
          }}
          testimonial={{
            text: "Martin's development background established a foundation for implementing sophisticated strategies, particularly technical SEO initiatives.",
            author: "Viktor Zeman, CEO at LiveAgent"
          }}
        />
        </div>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Choose Your Service
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                How I Can <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Help Your Business</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions tailored to your business needs and goals
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Technical SEO Audit */}
              <div className="relative group">
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Technical SEO Audit</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-gray-900">$2,500</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Get a comprehensive analysis of your website's technical SEO performance with actionable recommendations that drive real results.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Comprehensive Technical Analysis</h4>
                      <p className="text-sm text-gray-600">Full audit covering crawlability, indexability, site speed, and technical issues.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Actionable Implementation Plan</h4>
                      <p className="text-sm text-gray-600">Detailed task list with priority ranking and step-by-step guidance.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900">60-Minute Strategy Consultation</h4>
                      <p className="text-sm text-gray-600">One-on-one call to review findings and plan implementation.</p>
                    </div>
                  </div>
                  
                  <Link href="/book-consultation/" className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all">
                    Get Your Audit
                  </Link>
                </div>
              </div>
              
              {/* Technical SEO Monitoring */}
              <div className="relative group">
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Technical SEO Monitoring</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-gray-900">$2,000</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Continuous website monitoring to maintain optimal performance and catch issues before they impact your revenue.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Continuous Website Monitoring</h4>
                      <p className="text-sm text-gray-600">24/7 monitoring of your website's technical health and performance.</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Monthly Optimization Reports</h4>
                      <p className="text-sm text-gray-600">Detailed reports with actionable tasks and optimization opportunities.</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Priority Support & Consultation</h4>
                      <p className="text-sm text-gray-600">60-minute monthly calls plus priority email support.</p>
                    </div>
                  </div>
                  
                  <Link href="/book-consultation/" className="block w-full bg-gradient-to-r from-orange-600 to-yellow-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-orange-700 hover:to-yellow-700 transition-all">
                    Start Monitoring
                  </Link>
                </div>
              </div>
              
              {/* Website Migration Planning */}
              <div className="relative group">
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Website Migration Planning</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-gray-900">$4,500</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Protect your SEO value during migrations with comprehensive planning and post-migration support.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Comprehensive Migration Strategy</h4>
                      <p className="text-sm text-gray-600">Detailed plan covering all technical aspects and risk mitigation.</p>
                    </div>
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Post-Migration Audit & Support</h4>
                      <p className="text-sm text-gray-600">Complete audit after migration with ongoing support during transition.</p>
                    </div>
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h4 className="font-semibold text-gray-900">SEO Value Preservation</h4>
                      <p className="text-sm text-gray-600">Ensure zero loss in rankings and organic traffic during migration.</p>
                    </div>
                  </div>
                  
                  <Link href="/book-consultation/" className="block w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-indigo-800 transition-all">
                    Plan Your Migration
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <div className="border-t border-gray-200">
        <TestimonialsSection
          badge="Client Success Stories"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          title={
            <>
              What <span className="text-primary">Clients Say</span> About Working With Me
            </>
          }
          description="Real feedback from business leaders who've transformed their websites with my technical SEO expertise."
          testimonials={[
            {
              avatar: {
                src: "/images/testimonials/viktor-zeman-real.webp",
                alt: "Viktor Zeman"
              },
              name: "Viktor Zeman",
              title: "CEO",
              company: "LiveAgent & Post Affiliate Pro",
              quote: "Martin's development background established a foundation for implementing sophisticated strategies, particularly technical SEO initiatives that drove significant improvements in our organic search performance.",
              rating: 5
            },
            {
              avatar: {
                src: "/images/testimonials/daniel-pison.jpeg",
                alt: "Daniel Pison"
              },
              name: "Daniel Pison",
              title: "CMO",
              company: "Quality Unit",
              quote: "Thanks in particular to Martin's skills and expertise, we have long been able to compete with much stronger competitors in website quality and search visibility.",
              rating: 5
            }
          ]}
          socialProof={{
            icon: <div className="flex text-yellow-400">
              {'★'.repeat(5)}
            </div>,
            text: "50+ successful projects completed"
          }}
        />
        </div>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about my technical SEO services
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  How is pricing determined?
                </h3>
                <p className="text-gray-600">
                  Pricing varies by site complexity and specific requirements. I provide transparent pricing after understanding your unique situation and goals.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  How long does it take to see results?
                </h3>
                <p className="text-gray-600">
                  Results typically take weeks to months, depending on the complexity of implementations and various internal/external factors affecting your website.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Are there long-term commitments?
                </h3>
                <p className="text-gray-600">
                  No long-term commitments required, except for monitoring services which have a 3-month minimum to ensure meaningful results.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What determines strategy success?
                </h3>
                <p className="text-gray-600">
                  Client implementation is crucial to strategy success. I provide detailed guidance and prioritize tasks based on your internal resources to maximize success rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <FinalCTASection
          badge="Ready to Transform Your Business?"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          title={
            <>
              Turn Your Website Into a <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Revenue Engine</span>
            </>
          }
          description="Stop losing customers to poor performance, search, and AI visibility. Get a comprehensive technical SEO audit and discover exactly how I can boost your conversions and revenue."
          primaryCTA={{
            text: "Schedule Free Consultation",
            href: "/book-consultation/"
          }}
          secondaryCTA={
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span className="text-sm">✓ Free consultation</span>
              <span className="text-sm">✓ No commitment</span>
            </div>
          }
        />

        {/* Newsletter Section */}
        <NewsletterSection
          badge="Newsletter"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
          title={
            <>
              Get <span className="text-transparent bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text">Biweekly</span> Technical SEO Insights
            </>
          }
          description="Join business owners, marketers, SEO professionals, and developers who receive actionable technical SEO strategies, performance optimization tips, and revenue-boosting insights every two weeks."
          socialProof={{
            icon: <div className="flex text-yellow-300 text-sm">
              {'★'.repeat(5)}
            </div>,
            text: "250+ people trust this newsletter"
          }}
          disclaimer="No spam, ever. Unsubscribe at any time."
          privacyLink={{
            text: "Privacy Policy",
            href: "/privacy-policy/"
          }}
          termsLink={{
            text: "Terms and Conditions",
            href: "/terms-and-conditions/"
          }}
        />

        <CookieConsent />
      </MainLayout>
    </>
  );
}