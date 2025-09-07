import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Terms and Conditions - TechSEO Vitals',
  description: 'Terms and conditions for TechSEO Vitals services - understand the terms of use for our technical SEO consulting services.',
}, '/terms-and-conditions/');

export default function TermsAndConditions() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Terms and Conditions
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Effective Date: May 12, 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Definitions</h2>
              <ul className="list-disc pl-6 mb-8">
                <li><strong>"Company"</strong> refers to mountain explorer, s. r. o., a Slovak company.</li>
                <li><strong>"Content"</strong> refers to text, images, graphics, and other materials on the Site.</li>
                <li><strong>"Services"</strong> refers to all services offered by the Company.</li>
                <li><strong>"Site"</strong> refers to the website www.techseovitals.com.</li>
                <li><strong>"User"</strong> or <strong>"You"</strong> refers to the person or entity using our Services.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Company Information</h2>
              <div className="mb-8">
                <p className="mb-2"><strong>mountain explorer, s. r. o.</strong></p>
                <p className="mb-2">Karpatske namestie 7770/10A</p>
                <p className="mb-2">83106 Bratislava</p>
                <p className="mb-2">Slovakia (European Union)</p>
                <p className="mb-4"><strong>ID:</strong> 53226119</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Services</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3.1 Paid Services</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Technical SEO Audit:</strong> Analysis of your website's technical performance</li>
                <li><strong>Consulting Services:</strong> Ongoing technical SEO guidance and support</li>
                <li><strong>Migration Support:</strong> Website migration planning and execution guidance</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3.2 Free Services</h3>
              <ul className="list-disc pl-6 mb-8">
                <li><strong>TechSEO Vitals Newsletter:</strong> Free bi-weekly technical SEO insights</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Payment Terms</h2>
              <ul className="list-disc pl-6 mb-8">
                <li>Payment is due within 7 days of invoice date</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>Services may be suspended for accounts with overdue payments</li>
                <li>Prices are subject to change with 30 days notice</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Data Usage and Confidentiality</h2>
              <p className="mb-4">We may:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Use anonymized client data for research and content creation</li>
                <li>Reference general project outcomes without identifying clients</li>
                <li>Process data through AI and machine learning systems with appropriate safeguards</li>
              </ul>
              <p className="mb-8">All confidential business information shared during engagements will be protected and not disclosed without permission.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Limitation of Liability</h2>
              <p className="mb-4">Our services are advisory in nature. We cannot guarantee:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Specific search engine ranking improvements</li>
                <li>Specific traffic or revenue increases</li>
                <li>Immunity from search engine algorithm changes</li>
              </ul>
              <p className="mb-8">Our total liability is limited to the amount paid for services in the 12 months preceding any claim.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Client Responsibilities</h2>
              <p className="mb-4">Clients must:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>Provide accurate information about their website and business</li>
                <li>Implement recommendations properly and in a timely manner</li>
                <li>Grant necessary access to tools and platforms as required</li>
                <li>Communicate concerns or questions promptly</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">8. Intellectual Property</h2>
              <p className="mb-8">Our methodologies, tools, and processes remain our intellectual property. Clients receive usage rights for their specific implementation but may not resell or redistribute our proprietary methods.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">9. Termination</h2>
              <p className="mb-8">Either party may terminate services with 30 days written notice. Outstanding work will be completed, and final payment is due within 7 days of termination.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">10. Force Majeure</h2>
              <p className="mb-8">Neither party is liable for delays or failures caused by circumstances beyond reasonable control, including natural disasters, government actions, or technical failures.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">11. Governing Law</h2>
              <p className="mb-8">These terms are governed by Slovak law. Disputes will be resolved in the courts of Bratislava, Slovakia.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">12. Privacy Policy</h2>
              <p className="mb-8">Your use of our services is also governed by our Privacy Policy, which explains how we collect and use your information.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">13. Changes to Terms</h2>
              <p className="mb-8">We may update these terms periodically. Changes will be posted on this page with an updated effective date. Continued use constitutes acceptance of updated terms.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">14. Severability</h2>
              <p className="mb-8">If any provision is found unenforceable, it will be modified to the minimum extent necessary, and the remainder of these terms will remain in effect.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">15. Contact Information</h2>
              <p className="mb-4">For questions about these terms:</p>
              <ul className="list-disc pl-6 mb-8">
                <li>Email: <a href="mailto:martin@techseovitals.com" className="text-primary hover:text-primary-dark">martin@techseovitals.com</a></li>
                <li>Contact Form: <Link href="/contact/" className="text-primary hover:text-primary-dark">www.techseovitals.com/contact/</Link></li>
                <li>Mail: mountain explorer, s. r. o., Karpatske namestie 7770/10A, 83106 Bratislava, Slovakia</li>
              </ul>

              <div className="mt-16 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  By using our services, you acknowledge that you have read and agree to these terms and conditions.
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