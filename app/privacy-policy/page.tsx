import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Privacy Policy - TechSEO Vitals',
  description: 'Privacy policy for TechSEO Vitals - how we collect, use, and protect your personal information.',
}, '/privacy-policy/');

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Last Updated: May 12, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Introduction</h2>
              <p className="mb-4">Welcome to TechSEO Vitals ("we," "our," or "us").</p>
              <p className="mb-8">This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit www.techseovitals.com or www.technickeseo.sk (the "Website") or engage with our services.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Company Information</h2>
              <div className="mb-8">
                <p className="mb-2"><strong>mountain explorer, s. r. o.</strong></p>
                <p className="mb-2">Karpatske namestie 7770/10A</p>
                <p className="mb-2">83106 Bratislava</p>
                <p className="mb-2">Slovakia (European Union)</p>
                <p className="mb-4"><strong>ID:</strong> 53226119</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3.1 Information You Provide to Us</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Name and email address when subscribing to newsletter</li>
                <li>Contact information when communicating with us</li>
                <li>Website access credentials and analytics data when providing services</li>
                <li>Technical data from your website and related platforms</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3.2 Information We Collect Automatically</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Usage data (pages visited, time spent on pages, etc.)</li>
                <li>Device information (browser type, IP address, device type)</li>
                <li>Cookie data</li>
                <li>Analytics data through Google Analytics</li>
                <li>Social media data and interactions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3.3 Information From Third Parties</h3>
              <p className="mb-4">We may receive information about you from:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>Google Analytics</li>
                <li>Ahrefs Web Analytics</li>
                <li>Akismet</li>
                <li>Kit</li>
                <li>Google Search Console</li>
                <li>Social media platforms when you interact with our content</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>Provide and improve our services</li>
                <li>Send newsletters and marketing communications (with consent)</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Analyze website usage and performance</li>
                <li>Comply with legal obligations</li>
                <li>Detect and prevent fraud or security issues</li>
                <li>Process AI and machine learning algorithms for content improvement</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Legal Basis for Processing (GDPR)</h2>
              <p className="mb-4">We process your data based on:</p>
              <ul className="list-disc pl-6 mb-8">
                <li><strong>Consent:</strong> For newsletters and marketing communications</li>
                <li><strong>Legitimate Interest:</strong> For website analytics and service improvement</li>
                <li><strong>Contract:</strong> When providing professional services</li>
                <li><strong>Legal Obligation:</strong> For compliance requirements</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Information Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell your personal information. We may share information with:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>Service providers (email marketing, analytics, hosting)</li>
                <li>Legal authorities when required by law</li>
                <li>Business successors in case of merger or acquisition</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Cookies and Tracking</h2>
              <p className="mb-4">We use cookies for:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Essential website functionality</li>
                <li>Analytics and performance monitoring</li>
                <li>Marketing and advertising (with consent)</li>
              </ul>
              <p className="mb-8">You can control cookies through your browser settings or our cookie consent banner.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">8. Data Retention</h2>
              <p className="mb-4">We retain your information:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>Newsletter subscribers: Until you unsubscribe</li>
                <li>Contact inquiries: 3 years</li>
                <li>Analytics data: 26 months (Google Analytics default)</li>
                <li>Service-related data: Duration of engagement plus 3 years</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">9. Your Privacy Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-8">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your data</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Object:</strong> Object to processing based on legitimate interest</li>
                <li><strong>Withdraw consent:</strong> For marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">10. California Privacy Rights (CCPA)</h2>
              <p className="mb-4">California residents have additional rights:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>Right to know what personal information is collected</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of sale (we don't sell data)</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">11. Data Security</h2>
              <p className="mb-8">We implement industry-standard security measures including encryption, secure servers, and regular security assessments. However, no internet transmission is 100% secure.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">12. International Data Transfers</h2>
              <p className="mb-8">Your data may be processed in the US, EU, or other countries. We ensure appropriate safeguards are in place for international transfers.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">13. Children's Privacy</h2>
              <p className="mb-8">Our services are not intended for children under 16. We do not knowingly collect data from children under 16.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">14. Changes to This Policy</h2>
              <p className="mb-8">We may update this policy periodically. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of changes.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">15. Contact Us</h2>
              <p className="mb-4">For privacy-related questions or to exercise your rights, contact us:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>Email: <a href="mailto:martin@techseovitals.com" className="text-primary hover:text-primary-dark">martin@techseovitals.com</a></li>
                <li>Contact Form: <Link href="/contact/" className="text-primary hover:text-primary-dark">www.techseovitals.com/contact/</Link></li>
                <li>Mail: mountain explorer, s. r. o., Karpatske namestie 7770/10A, 83106 Bratislava, Slovakia</li>
              </ul>

              <div className="mt-16 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  This privacy policy is governed by Slovak law and any disputes will be resolved in Slovak courts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}