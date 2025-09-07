import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO, generateOrganizationJsonLd } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Newsletter Signup - TechSEO Vitals | Get Weekly Technical SEO Tips',
  description: 'Join thousands of businesses getting weekly technical SEO insights, performance optimization tips, and Core Web Vitals updates from Martin Štěpánek.',
  jsonLd: generateOrganizationJsonLd(),
}, '/newsletter/');

export default function Newsletter() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                TechSEO Vitals Newsletter
              </h1>
              <p className="mt-8 text-xl text-gray-600 leading-8 max-w-3xl mx-auto">
                Improve your website's performance where it counts. Every two weeks, I share actionable technical SEO and web performance insights and strategies that can directly affect your business revenue, along with the most important and interesting industry updates.
              </p>
            </div>
          </div>
        </section>

        {/* What Can You Expect Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                What Can You Expect?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Every Second Wednesday Directly in Your Inbox
              </p>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                Through the newsletter, I share the most valuable knowledge I've gained over my 10-year career in web development and technical SEO.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">In-Depth Content</h3>
                <p className="text-gray-600">
                  Each newsletter focuses on a specific topic, exploring details and research in depth.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Free Tips</h3>
                <p className="text-gray-600">
                  Every episode includes a special actionable tip that can immediately help your business grow.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Latest News</h3>
                <p className="text-gray-600">
                  Always up-to-date news from the technical SEO and web performance industry that deserves your attention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Subscribe Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Should You Subscribe?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                3 Benefits You Can Expect
              </p>
              <p className="mt-6 text-lg text-gray-600 italic">
                "Your website deserves your attention."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gaining New Knowledge</h3>
                <p className="text-gray-600">
                  Learning new information is crucial for both personal and business growth.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Staying Up-to-Date</h3>
                <p className="text-gray-600">
                  Keeping current with recent industry changes is critical for the decisions you need to make.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Getting Better Website</h3>
                <p className="text-gray-600">
                  Implementing knowledge from the newsletter will help your website grow, attract more visitors, and increase revenue over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Martin
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Over 10 Years of Industry Experience
            </p>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                I'm Martin Stepanek, a technical SEO and web performance consultant with over 10 years of experience in web development. I specialize in web performance optimization to maximize every website's revenue potential through enhanced user experience.
              </p>
              <p>
                After years of developing websites and designing their architectures, I discovered my passion for performance optimization and technical SEO, as I can create positive experiences for millions of website visitors.
              </p>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}