import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import TestimonialsSection from '@/components/sections/testimonials-section';
import NewsletterSection from '@/components/sections/newsletter-section';
import FinalCTASection from '@/components/sections/final-cta-section';
import { generatePageSEO, generateOrganizationJsonLd } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Contact Martin Štěpánek - Technical SEO Consultant | Get In Touch',
  description: 'Contact Martin Štěpánek for technical SEO consulting, website performance optimization, and Core Web Vitals improvement. Multiple ways to get in touch for your project needs.',
  jsonLd: generateOrganizationJsonLd(),
}, '/contact/');

export default function Contact() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-white to-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Let's Work Together
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Get In Touch With{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Martin
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-8 mb-8">
                  Ready to transform your website's performance? Let's discuss how I can help your business succeed with technical SEO and web performance optimization.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/book-consultation/"
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30"
                  >
                    <span className="relative z-10">Schedule Free Consultation</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </Link>
                  
                  <a
                    href="mailto:martin@techseovitals.com"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-gray-300 font-semibold text-gray-700 hover:border-primary hover:text-primary transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Email
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative">
                  <Image
                    src="/images/martin-stepanek-mountains.jpg"
                    alt="Martin Stepanek - Technical SEO Expert"
                    width={600}
                    height={600}
                    priority
                    fetchPriority="high"
                    className="rounded-3xl shadow-2xl border-4 border-white"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-800">Available for Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Multiple Ways to Connect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the method that works best for you to get in touch and start your project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
                <p className="text-gray-600 mb-4">Direct and professional communication</p>
                <a href="mailto:martin@techseovitals.com" className="text-primary hover:text-primary-dark font-semibold">
                  martin@techseovitals.com
                </a>
              </div>

              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">LinkedIn</h3>
                <p className="text-gray-600 mb-4">Professional networking and insights</p>
                <a href="https://linkedin.com/in/techseovitals" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-semibold">
                  /in/techseovitals
                </a>
              </div>

              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bluesky</h3>
                <p className="text-gray-600 mb-4">Latest updates and SEO insights</p>
                <a href="https://bsky.app/profile/techseovitals.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-semibold">
                  @techseovitals.com
                </a>
              </div>

              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">YouTube</h3>
                <p className="text-gray-600 mb-4">Technical SEO tutorials and insights</p>
                <a href="https://youtube.com/@techseovitals" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark font-semibold">
                  @techseovitals
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* Business Information Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Business Information
              </h2>
              <p className="text-xl text-gray-600">
                Official business details for invoicing and contracts
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Company Details</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Business Name:</span> mountain explorer, s. r. o.</p>
                    <p><span className="font-semibold">Business ID:</span> 53226119</p>
                    <p><span className="font-semibold">VAT ID:</span> SK2121306704</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Address</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Karpatske namestie 7770/10A</p>
                    <p>83106 Bratislava</p>
                    <p>Slovakia (European Union)</p>
                  </div>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-1l-4 4z" />
              </svg>
            }
            title={
              <>
                What <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Clients Say</span>
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
                quote: "Martin's development background established a foundation for implementing sophisticated strategies, particularly technical SEO initiatives. With him, our team significantly enhanced the performance of two high-traffic websites.",
                rating: 5,
                verified: true
              },
              {
                avatar: {
                  src: "/images/testimonials/daniel-pison.jpeg",
                  alt: "Daniel Pison"
                },
                name: "Daniel Pison",
                title: "CMO",
                company: "Quality Unit",
                quote: "Thanks in particular to Martin's skills and expertise, we have long been able to compete with much stronger competitors in website quality. I consider him one of the greatest technical SEO experts on the market.",
                rating: 5,
                verified: true
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

        {/* Final CTA Section */}
        <FinalCTASection
          badge="Ready to Get Started?"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          title={
            <>
              Let's Transform Your Website Into a <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Revenue Engine</span>
            </>
          }
          description="Don't let technical issues hold your business back. Get expert technical SEO guidance and turn your website into your most powerful sales tool."
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
              Improve Conversions and <span className="text-transparent bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text">Increase Revenue</span>
            </>
          }
          description="Get free insights to help you maximize your website's potential through technical SEO and performance optimization."
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