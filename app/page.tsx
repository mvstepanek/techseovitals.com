import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
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
        <section className="bg-gradient-to-br from-primary/5 via-white to-secondary py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                  10+ years of industry experience
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Increase your{' '}
                  <span className="text-primary">Revenue</span> with{' '}
                  <span className="text-primary">Technical SEO</span>
                </h1>
                <p className="mt-6 text-xl text-gray-600 leading-8">
                  Unlock your full business potential through faster, well-optimized website with better user experience.
                </p>
                <div className="mt-10">
                  <Link
                    href="/book-consultation/"
                    className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                  >
                    Schedule Free Consultation
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/martin-stepanek-violet.jpeg"
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

        {/* Some Unique Brands I've Worked With */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold text-gray-900 mb-8">
              Some Unique Brands I've Worked With
            </h2>
            <div className="flex justify-center items-center gap-12 grayscale opacity-60">
              <Image
                src="/images/company-logos/touchit-logo.png"
                alt="TOUCHIT"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <Image
                src="/images/company-logos/post-affiliate-pro-logo.png"
                alt="Post Affiliate Pro"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <Image
                src="/images/company-logos/liveagent-logo.png"
                alt="LiveAgent"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
          </div>
        </section>

        {/* Why Technical SEO? */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Why Technical SEO?
              </div>
            </div>
            <div className="text-center mb-16">
              <h3 className="text-2xl font-semibold text-gray-900">
                Happy Visitors Increase Conversions
              </h3>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Technical SEO together with web performance optimizations creates a stable foundation for your website that will convert happy users into your customers.
              </p>
              <div className="mt-8">
                <Link
                  href="/book-consultation/"
                  className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                >
                  Schedule Free Consultation
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Higher Revenue</h3>
                <p className="text-gray-600">
                  Fast and well-optimized websites make users more engaged, staying longer and leading to higher revenue.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Better Conversions</h3>
                <p className="text-gray-600">
                  Passing Core Web Vitals is the key to unlocking your website's full potential with significantly higher conversions.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Improved SEO</h3>
                <p className="text-gray-600">
                  Well-optimized websites are naturally more appealing to both users and search engines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-lg font-medium text-gray-900 mb-2">Amazon Study</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Milliseconds Cost you Revenue</h3>
                <p className="text-gray-600">
                  With every 100 milliseconds of delay, you can lose up to 1% in revenue. Imagine how much more money you can make with a faster website.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-lg font-medium text-gray-900 mb-2">Google Study</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3 Second is Everything you Have</h3>
                <p className="text-gray-600">
                  Over 50% of mobile visits are abandoned when a website takes longer than 3 seconds to load. They didn't even have time to see what you offer.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-lg font-medium text-gray-900 mb-2">Neil Patel Study</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Shoppers Hate Slow Websites</h3>
                <p className="text-gray-600">
                  79% of shoppers who experience performance issues are less likely to purchase from the same site again. That's basically losing customers forever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Me? Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Why Me?
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  10+ Years of Experience with Proven Results
                </h3>
                <p className="text-xl text-gray-600">
                  I've been working with websites for over ten years. I spent most of that time as a web developer focusing on web performance and designing site architecture. For the last four years, I've worked as a technical SEO specialist optimizing websites to get their maximum potential.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/martin-stepanek-mountains.jpg"
                  alt="Martin Štěpánek - Mountain Explorer and Technical SEO Consultant"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
            <div className="mt-12 bg-gray-50 p-8 rounded-xl">
              <p className="text-gray-700 italic">
                "Under Martin's leadership, our team significantly enhanced the performance of two high-traffic websites. His methodical approach to technical SEO and aptitude for conveying complex technical concepts have consistently yielded remarkable results."
              </p>
              <p className="text-gray-600 mt-4">— LinkedIn</p>
            </div>
          </div>
        </section>

        {/* Why Start With Audit? */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Why Start With Audit?
              </div>
            </div>
            <div className="text-center mb-16">
              <h3 className="text-2xl font-semibold text-gray-900">
                Every Optimization Starts with Knowing the Current State
              </h3>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                The essential thing before starting any technical SEO and web performance optimization is to know the current state. That's why we must always start with a comprehensive audit of the website to gather as much information as possible.
              </p>
              <div className="mt-8">
                <Link
                  href="/book-consultation/"
                  className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                >
                  Schedule Free Consultation
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Identifying What is Holding You Back</h3>
                <p className="text-gray-600">
                  The first step is always to know what is holding your website back from reaching its maximum potential.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Improving Web Performance</h3>
                <p className="text-gray-600">
                  Focus on increasing site speed and passing Core Web Vitals for better user experience and web performance.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 000-5H9V10m0 0H7m2 0v5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Increasing User Satisfaction</h3>
                <p className="text-gray-600">
                  Better web performance increase user satisfaction, leading to better conversion rates and higher revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Does It Work? */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                How Does It Work?
              </div>
            </div>
            <div className="text-center mb-16">
              <h3 className="text-2xl font-semibold text-gray-900">
                3 Simple Steps for Higher Revenue
              </h3>
              <p className="mt-4 text-xl text-gray-600 italic">
                "Investing in optimization today creates remarkable returns tomorrow."
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Start with Free Consultation</h3>
                <p className="text-gray-600">
                  Schedule your free initial consultation where we'll discuss your expectations, business and website. You decide whether to continue or not.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Discussion and Audit</h3>
                <p className="text-gray-600">
                  After formalizing our partnership, we'll discuss our objectives thoroughly and begin the process of auditing.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Receive Audit Results</h3>
                <p className="text-gray-600">
                  The final deliverable is an actionable list of issues for your team to implement. Issues are prioritized based on your available resources, ensuring the most important items are addressed first. Consultations are available throughout the implementation process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Testimonials
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                I've helped multiple companies get the maximum from their websites.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <Image
                    src="/images/testimonials/viktor-zeman-real.webp"
                    alt="Viktor Zeman"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Viktor Zeman</div>
                    <div className="text-gray-600">CEO, LiveAgent & Post Affiliate Pro</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &ldquo;Martin's development background established a foundation for implementing sophisticated strategies, particularly technical SEO initiatives. With him, our team significantly enhanced the performance of two high-traffic websites.&rdquo;
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <Image
                    src="/images/testimonials/daniel-pison.jpeg"
                    alt="Daniel Pison"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Daniel Pison</div>
                    <div className="text-gray-600">CMO, Quality Unit</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &ldquo;Thanks in particular to Martin's skills and expertise, we have long been able to compete with much stronger competitors in terms of website quality. I consider him one of the greatest technical SEO experts on the market.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Get the Maximum from Your Website?
            </h2>
            <p className="mt-4 text-xl text-purple-100 max-w-2xl mx-auto">
              Let's discuss your website and how we can work together to resolve technical SEO issues and increase your revenue.
            </p>
            <div className="mt-10">
              <Link
                href="/book-consultation/"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-md hover:bg-gray-50 transition-all"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Blog
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Would you like to know more about technical SEO, web performance, and their importance? Check out some of my blog posts.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/blog-thumbnails/ttfb-thumbnail.jpg"
                    alt="TTFB Technical SEO Guide"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why You Should Care About Your TTFB: A Technical SEO Guide to Optimization</h3>
                  <p className="text-gray-600 mb-4">
                    Time to First Byte, commonly known as TTFB, stands as the most critical metric in technical SEO and overall web performance.
                  </p>
                  <Link href="/blog/why-you-should-care-about-your-ttfb-technical-seo-guide-to-optimization/" className="text-primary font-medium hover:text-primary-dark">
                    Read More →
                  </Link>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/blog-thumbnails/multilingual-thumbnail.jpg"
                    alt="Multilingual Website Technical SEO Guide"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Multilingual Website Essentials: A Technical SEO Guide</h3>
                  <p className="text-gray-600 mb-4">
                    A multilingual website allows visitors to experience your content in their native language, creating trust and connection that drives conversions.
                  </p>
                  <Link href="/blog/multilingual-website-essentials-technical-seo-guide/" className="text-primary font-medium hover:text-primary-dark">
                    Read More →
                  </Link>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/blog-thumbnails/crawlability-thumbnail.jpg"
                    alt="Improving Crawlability Guide"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Improving Crawlability: Help Google and ChatGPT Find Your Business Website</h3>
                  <p className="text-gray-600 mb-4">
                    Crawlability has become a critical challenge as the number of web crawlers and their requirements grow exponentially.
                  </p>
                  <Link href="/blog/improving-crawlability-help-google-and-chatgpt-find-your-business-website/" className="text-primary font-medium hover:text-primary-dark">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                TechSEO Vitals Newsletter
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Improve conversions and increase your revenue through your website! Get free insights to help you maximize your website's potential.
              </p>
              
              <div className="max-w-md mx-auto">
                <form action="/thank-you-for-subscribing/" method="POST" className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-4 focus:ring-primary/20"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}