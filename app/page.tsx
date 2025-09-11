import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import HeroSection from '@/components/sections/hero-section';
import TrustedBySection from '@/components/sections/trusted-by-section';
import WhyTechnicalSEOSection from '@/components/sections/why-technical-seo-section';
import StatisticsSection from '@/components/sections/statistics-section';
import WhyMeSection from '@/components/sections/why-me-section';
import WhyAuditSection from '@/components/sections/why-audit-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import FinalCTASection from '@/components/sections/final-cta-section';
import BlogPreviewSection from '@/components/sections/blog-preview-section';
import NewsletterSection from '@/components/sections/newsletter-section';
import { generatePageSEO, generateOrganizationJsonLd } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'TechSEO Vitals - Increase your Revenue with Technical SEO',
  description: 'Unlock your full business potential through faster, well-optimized website with better user experience. Technical SEO consultant specializing in Core Web Vitals and page speed optimization.',
  jsonLd: generateOrganizationJsonLd(),
}, '/');

export default function Home() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <HeroSection
          badge="10+ Years Making Websites Better"
          badgeIcon={<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
          title={
            <>
              Turn Your Website Into a{' '}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Revenue Machine
              </span>
            </>
          }
          description="Stop losing customers to slow, hard-to-crawl, and poorly optimized websites. Get expert Technical SEO that fixes indexing issues, boosts performance, and drives real revenue growth."
          primaryCTA={{
            text: "Get Free Website Check",
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

        {/* Why Technical SEO? */}
        <WhyTechnicalSEOSection
          badge="Why Technical SEO?"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          title={
            <>
              Turn Visitors Into <span className="text-primary">Paying Customers</span>
            </>
          }
          description="Technical SEO and web performance fixes the invisible problems that are silently killing your conversions and search rankings."
          primaryCTA={{
            text: "Start Your Transformation",
            href: "/book-consultation/"
          }}
          secondaryCTA={
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span className="text-sm">✓ Free consultation</span>
              <span className="text-sm">✓ No commitment</span>
            </div>
          }
          benefits={[
            {
              icon: <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-green-500 to-green-600",
              hoverBorderColor: "green",
              title: "Increase Revenue",
              description: "Page load speed and technical optimization directly impact sales and revenue. Fast, well-optimized websites keep users engaged longer, leading to better business outcomes.",
              metric: "Proven impact on business results",
              metricColor: "green"
            },
            {
              icon: <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-blue-500 to-blue-600",
              hoverBorderColor: "blue",
              title: "Better Conversions",
              description: "Studies show Core Web Vitals optimization correlates with better conversion rates. Major companies have documented significant improvements in user engagement after optimization.",
              metric: "Measurable conversion improvements",
              metricColor: "blue"
            },
            {
              icon: <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-purple-500 to-purple-600",
              hoverBorderColor: "purple",
              title: "Improved Visibility",
              description: "Technical SEO factors are crucial for search engines, LLMs, and AI tools. Proper indexing, crawlability, and site structure help these systems understand and show your content effectively.",
              metric: "Improved search & AI visibility",
              metricColor: "purple"
            }
          ]}
        />

        {/* Statistics Section */}
        <StatisticsSection
          title={
            <>
              The <span className="text-red-500">Brutal Truth</span> About Website Performance
            </>
          }
          description="These industry studies reveal how much money slow websites are costing businesses every single day."
          stats={[
            {
              source: "Amazon Study",
              sourceColor: "red",
              value: "1%",
              valueColor: "red",
              metric: "Revenue lost per 100ms delay",
              title: "Every Millisecond Matters",
              description: "Amazon found that for every 100 milliseconds of page load delay, they lose 1% in sales. For a $1M/year business, that's $10,000 lost annually per 100ms."
            },
            {
              source: "Google Study",
              sourceColor: "orange",
              value: "50%",
              valueColor: "orange",
              metric: "Mobile users abandon slow sites",
              title: "The 3-Second Rule",
              description: "Google research shows that 53% of mobile users abandon sites that take longer than 3 seconds to load. They never even see your offer."
            },
            {
              source: "Industry Research",
              sourceColor: "purple",
              value: "79%",
              valueColor: "purple",
              metric: "Won't buy from slow sites again",
              title: "Lost Customers Forever",
              description: "Nearly 4 out of 5 shoppers who experience performance issues won't return to your site. Poor performance kills customer lifetime value."
            }
          ]}
          ctaText="Don't Let a Slow Website Kill Your Business"
          ctaHref="/book-consultation/"
          ctaIcon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          }
        />

        {/* Why Me? Section */}
        <WhyMeSection
          badge="Why Me?"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
          title={
            <>
              Track Record That <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Speaks for Itself</span>
            </>
          }
          description="10+ years of hands-on experience turning slow, underperforming websites into revenue-generating machines."
          expertise={[
            {
              icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>,
              iconGradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
              title: "Developer Background",
              description: "10+ years as a web developer gives me deep technical knowledge that most SEO consultants lack. I understand code, not just theory."
            },
            {
              icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>,
              iconGradient: "bg-gradient-to-r from-purple-500 to-pink-500",
              title: "Technical SEO Specialist",
              description: "4+ years focused exclusively on technical SEO and Core Web Vitals optimization for high-traffic websites."
            },
            {
              icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>,
              iconGradient: "bg-gradient-to-r from-green-500 to-teal-500",
              title: "Proven Results",
              description: "Consistently delivered significant revenue increases and meaningful conversion improvements for clients across industries."
            }
          ]}
          image={{
            src: "/images/martin-stepanek-mountains.jpg",
            alt: "Martin Štěpánek - Technical SEO Expert in the Mountains",
            width: 500,
            height: 600
          }}
          imageBadge={{
            icon: <div className="w-4 h-4 bg-green-400 rounded-full"></div>,
            title: "50+ Websites",
            subtitle: "Successfully optimized"
          }}
          testimonial={{
            text: "Under Martin's leadership, our team significantly enhanced the performance of two high-traffic websites. His methodical approach to technical SEO and aptitude for conveying complex technical concepts have consistently yielded remarkable results.",
            link: {
              text: "LinkedIn Recommendation",
              href: "https://www.linkedin.com/in/techseovitals/#recommendations"
            }
          }}
        />

        {/* Why Start with an Audit? */}
        <WhyAuditSection
          badge="Why Start with an Audit?"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          }
          title={
            <>
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Knowledge</span> before Action
            </>
          }
          description="You can't fix what you can't measure. Every successful optimization starts with understanding exactly what's broken, what's working, and what opportunities exist."
          primaryCTA={{
            text: "Get Free Website Check",
            href: "/book-consultation/"
          }}
          secondaryCTA={
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span className="text-sm">✓ Free consultation</span>
              <span className="text-sm">✓ No commitment</span>
            </div>
          }
          benefits={[
            {
              icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-blue-500 to-blue-600",
              hoverBorderColor: "blue",
              title: "Identify Hidden Problems",
              description: "Discover the invisible technical issues that are quietly sabotaging your rankings and conversions.",
              metric: "Complete diagnosis",
              metricColor: "blue"
            },
            {
              icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-green-500 to-green-600",
              hoverBorderColor: "green",
              title: "Prioritize Quick Wins",
              description: "Get a roadmap that focuses on high-impact fixes first, maximizing your ROI from day one.",
              metric: "Immediate results",
              metricColor: "green"
            },
            {
              icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-purple-500 to-purple-600",
              hoverBorderColor: "purple",
              title: "Delight Your Users",
              description: "Create lightning-fast experiences that keep visitors engaged and convert them into loyal customers.",
              metric: "Higher satisfaction",
              metricColor: "purple"
            }
          ]}
        />

        {/* How Does It Work? */}
        <HowItWorksSection
          badge="How Does It Work?"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          title={
            <>
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">3 Simple Steps</span> to Success
            </>
          }
          description="Investing in optimization today creates remarkable returns tomorrow."
          steps={[
            {
              number: "1",
              label: "START",
              bgGradient: "bg-gradient-to-r from-blue-500 to-blue-600",
              title: "Free Discovery Call",
              description: "30-minute consultation to understand your goals, current challenges, and growth opportunities. No sales pressure, just honest insights.",
              features: ["100% free", "No commitment"],
              featureColor: "blue"
            },
            {
              number: "2",
              label: "ANALYZE",
              bgGradient: "bg-gradient-to-r from-green-500 to-green-600",
              title: "Deep Technical Audit",
              description: "Comprehensive analysis of your site's technical health, performance bottlenecks, and SEO opportunities.",
              features: ["50+ data points", "Prioritized roadmap"],
              featureColor: "green"
            },
            {
              number: "3",
              label: "IMPLEMENT",
              bgGradient: "bg-gradient-to-r from-purple-500 to-purple-600",
              title: "Implementation Support",
              description: "Detailed action plan with ongoing support to ensure successful implementation and measurable results.",
              features: ["Expert guidance", "Proven results"],
              featureColor: "purple"
            }
          ]}
          ctaText="Schedule Free Consultation"
          ctaHref="/book-consultation/"
        />

        {/* Testimonials */}
        <TestimonialsSection
          badge="Client Success Stories"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          }
          title={
            <>
              Real Results from <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Real Clients</span>
            </>
          }
          description="See how I've helped businesses transform their websites into high-performing revenue machines."
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
          socialProof={{
            icon: <div className="flex text-yellow-400 text-sm">
              {'★'.repeat(5)}
            </div>,
            text: "50+ businesses trust me"
          }}
        />

        {/* Section Separator */}
        <div className="border-t border-gray-200"></div>

        {/* Final CTA */}
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
          description="Stop losing customers to poor performance, search, and AI visibility. Get a comprehensive technical SEO audit and discover exactly how to boost your conversions and revenue."
          primaryCTA={{
            text: "Get Free Website Check",
            href: "/book-consultation/"
          }}
          secondaryCTA={{
            text: "Contact Me Directly",
            href: "/contact/",
            icon: <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          }}
          benefits={[
            {
              icon: <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-green-500 to-green-600",
              title: "100% Free",
              description: "Website check with no hidden costs"
            },
            {
              icon: <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-blue-500 to-blue-600",
              title: "30 Minutes",
              description: "Quick call to discuss your biggest opportunities"
            },
            {
              icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-purple-500 to-purple-600",
              title: "Immediate Value",
              description: "Actionable insights you can implement today"
            }
          ]}
          socialProof={{
            icon: <div className="flex text-yellow-400 text-sm">
              {'★'.repeat(5)}
            </div>,
            text: "50+ businesses trust me"
          }}
        />

        {/* Blog Preview */}
        <BlogPreviewSection
          badge="Expert Insights"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          }
          title={
            <>
              Latest <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Technical SEO</span> Insights
            </>
          }
          description="Stay ahead with actionable technical SEO strategies, performance optimization tips, and industry best practices."
          posts={[
            {
              href: "/blog/why-you-should-care-about-your-ttfb-technical-seo-guide-to-optimization/",
              thumbnail: {
                src: "/images/blog-thumbnails/ttfb-thumbnail.jpg",
                alt: "TTFB Technical SEO Guide"
              },
              title: "Why You Should Care About Your TTFB: A Technical SEO Guide to Optimization",
              excerpt: "Time to First Byte, commonly known as TTFB, stands as the most critical metric in technical SEO and overall web performance."
            },
            {
              href: "/blog/multilingual-website-essentials-technical-seo-guide/",
              thumbnail: {
                src: "/images/blog-thumbnails/multilingual-thumbnail.jpg",
                alt: "Multilingual Website Technical SEO Guide"
              },
              title: "Multilingual Website Essentials: A Technical SEO Guide",
              excerpt: "A multilingual website allows visitors to experience your content in their native language, creating trust and connection that drives conversions."
            },
            {
              href: "/blog/improving-crawlability-help-google-and-chatgpt-find-your-business-website/",
              thumbnail: {
                src: "/images/blog-thumbnails/crawlability-thumbnail.jpg",
                alt: "Improving Crawlability Guide"
              },
              title: "Improving Crawlability: Help Google and ChatGPT Find Your Business Website",
              excerpt: "Crawlability has become a critical challenge as the number of web crawlers and their requirements grow exponentially."
            }
          ]}
          viewAllText="View All Articles"
          viewAllHref="/blog/"
          viewAllIcon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          }
        />

        {/* Newsletter CTA */}
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