import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import FinalCTASection from '@/components/sections/final-cta-section';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Multilingual Website Essentials: A Technical SEO Guide | TechSEO Vitals',
  description: 'A multilingual website allows visitors to experience your content in their native language, creating trust and connection that drives conversions. Complete technical SEO guide.',
}, '/blog/multilingual-website-essentials-technical-seo-guide/');

export default function MultilingualGuide() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <article className="bg-gradient-to-br from-primary/5 via-white to-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-6">
                <time>July 23, 2025</time>
                <span className="text-gray-300">•</span>
                <span>10 min read</span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-8">
                Multilingual Website Essentials:{' '}
                <span className="text-primary">A Technical SEO Guide</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-8 max-w-3xl mx-auto">
                A multilingual website allows visitors to experience your content in their native language, creating trust and connection that drives conversions. Learn the technical SEO foundations for global success.
              </p>
            </div>
          </div>
        </article>

        {/* Article Content */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Choosing the Right URL Structure</h2>
              
              <p className="text-lg leading-8 text-gray-700 mb-6">
                From a technical perspective, everything starts with the correct URL structure. You have three main options to consider:
              </p>
              
              <ul className="space-y-2 text-gray-700 mb-8">
                <li>• Country-specific domains such as example.es</li>
                <li>• Subdomains with gTLD such as es.example.com</li>
                <li>• Subdirectories with gTLD such as example.com/es/</li>
              </ul>
              
              <p className="text-lg leading-8 text-gray-700 mb-6">
                The author personally prefers country-specific domains because they make technical processes smoother. The biggest advantage is the ability to run each language version on separate servers, improving performance and management flexibility.
              </p>
              
              <p className="text-lg leading-8 text-gray-700 mb-12">
                A critical rule is to "Never force visitors to a specific language version based solely on their IP address."
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Setting Up Hreflang with X-Default Tags</h2>
              
              <p className="text-lg leading-8 text-gray-700 mb-6">
                The most critical technical step is implementing hreflang tags in the HTML Head section. Hreflang tags link translated pages together, helping search engine crawlers discover translated versions.
              </p>
              
              <p className="text-lg leading-8 text-gray-700 mb-4">Example implementation:</p>
              
              <div className="bg-gray-900 text-gray-300 p-6 rounded-lg mb-6">
                <pre className="text-sm overflow-x-auto">
{`<link rel="alternate" hreflang="en" href="https://example.com/pricing/" />
<link rel="alternate" hreflang="es" href="https://example.es/tarifas/" />`}
                </pre>
              </div>
              
              <p className="text-lg leading-8 text-gray-700 mb-12">
                Include an x-default tag pointing to the main language website.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Web Performance and Core Web Vitals</h2>
              
              <p className="text-lg leading-8 text-gray-700 mb-6">
                International expansion reveals performance issues that might be hidden in the primary market. The author recommends resolving performance issues before expansion.
              </p>
              
              <p className="text-lg leading-8 text-gray-700 mb-4">Prioritize:</p>
              
              <ul className="space-y-2 text-gray-700 mb-12">
                <li>• Core Web Vitals</li>
                <li>• Time to First Byte (TTFB)</li>
                <li>• Implementing a Content Delivery Network (CDN)</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Accessibility and User Experience Considerations</h2>
              
              <p className="text-lg leading-8 text-gray-700 mb-4">When setting up language variations, consider:</p>
              
              <ul className="space-y-2 text-gray-700 mb-12">
                <li>• Accessibility requirements</li>
                <li>• Language-specific characteristics</li>
                <li>• Design modifications for right-to-left languages</li>
                <li>• Potential layout breaks with languages like German</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Conclusion</h2>
              
              <p className="text-lg leading-8 text-gray-700 mb-6">
                Successful multilingual websites require careful attention to technical foundations. Key considerations include:
              </p>
              
              <ul className="space-y-2 text-gray-700 mb-8">
                <li>• URL structure</li>
                <li>• Hreflang implementation</li>
                <li>• Performance optimization</li>
                <li>• Accessibility</li>
                <li>• User experience across different languages</li>
              </ul>
              
              <p className="text-lg leading-8 text-gray-700">
                The goal is to treat a multilingual website as a complex project, not just a translation of the current website.
              </p>

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

        <CookieConsent />
      </MainLayout>
    </>
  );
}