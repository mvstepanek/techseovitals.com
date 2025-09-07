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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-secondary py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Terms and Conditions
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Last updated: January 1, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-primary mx-auto">
              <h2>Agreement to Terms</h2>
              <p>
                By accessing and using the TechSEO Vitals website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2>Services</h2>
              <p>TechSEO Vitals provides technical SEO consulting services, including but not limited to:</p>
              <ul>
                <li>Technical SEO audits and analysis</li>
                <li>Website performance optimization recommendations</li>
                <li>Core Web Vitals improvement strategies</li>
                <li>Website migration planning and support</li>
                <li>Ongoing technical SEO monitoring</li>
                <li>Training and educational resources</li>
              </ul>

              <h2>Service Agreement</h2>
              <h3>Scope of Work</h3>
              <p>
                All services will be provided according to the scope of work agreed upon in writing between TechSEO Vitals and the client. Any changes to the scope of work must be agreed upon in writing by both parties.
              </p>
              
              <h3>Payment Terms</h3>
              <ul>
                <li>Payment is due according to the terms specified in the service agreement</li>
                <li>All prices are in USD unless otherwise specified</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are provided according to our refund policy</li>
              </ul>

              <h3>Delivery</h3>
              <p>
                Services will be delivered according to the timeline agreed upon in the service agreement. While we strive to meet all deadlines, delivery times are estimates and may be subject to change based on project complexity and client responsiveness.
              </p>

              <h2>Client Responsibilities</h2>
              <p>Clients are responsible for:</p>
              <ul>
                <li>Providing accurate and complete information about their website and business</li>
                <li>Providing timely access to necessary systems, accounts, and personnel</li>
                <li>Reviewing and implementing recommendations in a timely manner</li>
                <li>Communicating any concerns or questions promptly</li>
                <li>Making payment according to agreed terms</li>
              </ul>

              <h2>Intellectual Property</h2>
              <p>
                All methodologies, tools, templates, and processes developed by TechSEO Vitals remain the intellectual property of TechSEO Vitals. Clients receive a license to use deliverables for their specific website and business operations.
              </p>

              <h2>Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of the engagement. This includes but is not limited to business strategies, technical implementations, and performance data.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                TechSEO Vitals provides recommendations and guidance based on industry best practices and experience. However, we cannot guarantee specific outcomes or results. Our liability is limited to the amount paid for services.
              </p>

              <h2>Results Disclaimer</h2>
              <p>
                While we use proven strategies and best practices, search engine optimization results can vary based on numerous factors including but not limited to:
              </p>
              <ul>
                <li>Industry competition</li>
                <li>Website implementation quality</li>
                <li>Search engine algorithm changes</li>
                <li>Market conditions</li>
                <li>Timeline for implementation</li>
              </ul>

              <h2>Termination</h2>
              <p>
                Either party may terminate the agreement with written notice according to the terms specified in the service agreement. Upon termination, all work completed to date will be delivered, and payment for completed work is due.
              </p>

              <h2>Force Majeure</h2>
              <p>
                Neither party will be liable for any failure or delay in performance under this Agreement which is due to an event of Force Majeure. Force Majeure means any cause beyond a party's control including but not limited to acts of God, natural disasters, war, or government regulations.
              </p>

              <h2>Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where TechSEO Vitals operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>

              <h2>Privacy</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website and services, to understand our practices.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service constitutes acceptance of any changes.
              </p>

              <h2>Severability</h2>
              <p>
                If any provision of these terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remainder of these terms will remain in full force and effect.
              </p>

              <h2>Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <ul>
                <li>Email: martin@techseovitals.com</li>
                <li>Website: <a href="/contact/">Contact Form</a></li>
              </ul>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}