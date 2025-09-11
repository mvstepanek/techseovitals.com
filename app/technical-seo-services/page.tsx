import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import HeroSection from '@/components/sections/hero-section';
import ServicesGridSection from '@/components/sections/services-grid-section';
import BenefitsGridSection from '@/components/sections/benefits-grid-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import TrustedBySection from '@/components/sections/trusted-by-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import FinalCTASection from '@/components/sections/final-cta-section';
import { generatePageSEO, generateOrganizationJsonLd } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Technical SEO Services | TechSEO Vitals With Martin Stepanek',
  description: 'Expert Technical SEO services including comprehensive audits, monitoring, and website migration planning. Fast and well-optimized websites are key to delivering positive user experiences.',
  jsonLd: generateOrganizationJsonLd(),
}, '/technical-seo-services/');

export default function TechnicalSEOServices() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <HeroSection
          badge="Expert Technical SEO Services"
          badgeIcon={<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
          title={
            <>
              Technical SEO Services That Drive{' '}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Real Revenue
              </span>
            </>
          }
          description="Comprehensive Technical SEO audits, monitoring, and migration planning for agencies, e-commerce, and business websites. Transform your website into a revenue-generating machine."
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
            alt: "Martin Štěpánek - Technical SEO Expert",
            width: 500,
            height: 500
          }}
          statusBadge={{
            text: "Available for projects",
            icon: <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          }}
        />

        {/* Services Section */}
        <ServicesGridSection
          badge="Choose Your Service"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          }
          title={
            <>
              Technical SEO <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
            </>
          }
          description="Comprehensive solutions tailored to your business needs and goals"
          services={[
            {
              icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-green-500 to-green-600",
              decorativeColor: "bg-green-200",
              title: "Technical SEO Audit",
              price: "$2,500",
              description: "Get a comprehensive analysis of your website's technical SEO performance with actionable recommendations that drive real results.",
              features: [
                {
                  title: "Comprehensive Technical Analysis",
                  description: "Full audit covering crawlability, indexability, site speed, mobile-friendliness, and technical issues impacting your rankings."
                },
                {
                  title: "Actionable Implementation Plan",
                  description: "Detailed task list with priority ranking and step-by-step implementation guidance your team can follow."
                },
                {
                  title: "60-Minute Strategy Consultation",
                  description: "One-on-one call to review findings, discuss priorities, and plan implementation strategy."
                }
              ],
              ctaText: "Get Your Audit",
              ctaHref: "/book-consultation/",
              ctaGradient: "bg-gradient-to-r from-green-600 to-green-700"
            },
            {
              icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-orange-500 to-yellow-600",
              decorativeColor: "bg-orange-200",
              title: "Technical SEO Monitoring",
              price: "$2,000",
              priceUnit: "/month",
              description: "Continuous website monitoring to maintain optimal performance and catch issues before they impact your revenue.",
              features: [
                {
                  title: "Continuous Website Monitoring",
                  description: "24/7 monitoring of your website's technical health, performance metrics, and search engine visibility."
                },
                {
                  title: "Monthly Optimization Reports",
                  description: "Detailed monthly reports with actionable tasks and optimization opportunities to maximize revenue."
                },
                {
                  title: "Priority Support & Consultation",
                  description: "60-minute monthly strategy calls plus priority email support for urgent issues."
                }
              ],
              ctaText: "Start Monitoring",
              ctaHref: "/book-consultation/",
              ctaGradient: "bg-gradient-to-r from-orange-600 to-yellow-600"
            },
            {
              icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-indigo-500 to-indigo-600",
              decorativeColor: "bg-indigo-200",
              title: "Website Migration Planning",
              price: "$4,500",
              description: "Avoid common problems and ensure a smooth transition with a detailed migration strategy that protects your rankings and traffic.",
              features: [
                {
                  title: "Detailed Migration Strategy",
                  description: "Comprehensive plan with risk analysis, timeline, and step-by-step implementation guidance."
                },
                {
                  title: "Post-Migration Audit & Optimization",
                  description: "Complete technical SEO audit after migration with optimization tasks to maximize performance."
                },
                {
                  title: "Continuous Support & Monitoring",
                  description: "Ongoing support throughout the migration process plus 90-day monitoring period."
                }
              ],
              ctaText: "Plan Your Migration",
              ctaHref: "/book-consultation/",
              ctaGradient: "bg-gradient-to-r from-indigo-600 to-indigo-700"
            }
          ]}
        />

        {/* Why Choose Us Section */}
        <BenefitsGridSection
          badge="Why Choose TechSEO Vitals"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          }
          title={
            <>
              What Makes Me <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Different</span>
            </>
          }
          description="10+ years of proven experience delivering measurable results for businesses like yours"
          benefits={[
            {
              icon: <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-purple-100 to-indigo-100",
              title: "10+ Years Experience",
              description: "Proven track record delivering tangible results across industries and website types."
            },
            {
              icon: <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-green-100 to-emerald-100",
              title: "Tailored & Actionable Tasks",
              description: "Detailed, customized task lists that your team can implement immediately for results."
            },
            {
              icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-blue-100 to-indigo-100",
              title: "Detailed Implementation Guidance",
              description: "Step-by-step instructions and best practices for successful implementation."
            },
            {
              icon: <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-orange-100 to-yellow-100",
              title: "Support For Internal Teams",
              description: "Comprehensive guidance and ongoing support for your development and marketing teams."
            }
          ]}
        />

        {/* Testimonials Section */}
        <TestimonialsSection
          badge="Client Success Stories"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-1l-4 4z" />
            </svg>
          }
          title={
            <>
              Real Results from <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Real Clients</span>
            </>
          }
          description=""
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
              quote: "Thanks in particular to Martin's skills and expertise, we have long been able to compete with much stronger competitors in terms of website quality. I consider him one of the greatest technical SEO experts on the market.",
              rating: 5,
              verified: true
            }
          ]}
        />

        {/* Trusted By Section */}
        <TrustedBySection
          logos={[
            {
              src: "/images/company-logos/touchit-logo.png",
              alt: "TOUCHIT",
              width: 140,
              height: 50
            },
            {
              src: "/images/company-logos/post-affiliate-pro-logo.png",
              alt: "Post Affiliate Pro",
              width: 140,
              height: 50
            },
            {
              src: "/images/company-logos/liveagent-logo.png",
              alt: "LiveAgent",
              width: 140,
              height: 50
            }
          ]}
        />

        {/* Process Section */}
        <HowItWorksSection
          badge="Simple Process"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          title={
            <>
              How I <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Work With You</span>
            </>
          }
          description="My proven 3-step process ensures maximum impact and measurable results"
          steps={[
            {
              number: "1",
              label: "",
              bgGradient: "bg-gradient-to-br from-purple-600 to-indigo-600",
              title: "Initial Consultation",
              description: "Schedule free consultation to discuss your expectations, business goals, and website challenges. I formalize the partnership with a clear agreement.",
              features: [],
              featureColor: "purple"
            },
            {
              number: "2",
              label: "",
              bgGradient: "bg-gradient-to-br from-purple-600 to-indigo-600",
              title: "Preparation and Execution",
              description: "I obtain necessary access (like Google Search Console) and begin delivering results. Timeline depends on service type and website complexity.",
              features: [],
              featureColor: "purple"
            },
            {
              number: "3",
              label: "",
              bgGradient: "bg-gradient-to-br from-purple-600 to-indigo-600",
              title: "Ongoing Support and Optimization",
              description: "Present results with prioritized task lists. Provide strategic guidance to maximize ROI while avoiding resource drain. Ongoing consultations available.",
              features: [],
              featureColor: "purple"
            }
          ]}
        />

        {/* CTA Section */}
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

        <CookieConsent />
      </MainLayout>
    </>
  );
}