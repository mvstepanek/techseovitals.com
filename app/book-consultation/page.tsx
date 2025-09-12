import Link from 'next/link';
import { MarketingPage } from '@/components/templates/marketing-page';
import { Icons } from '@/components/ui';
import { ctaContent } from '@/data/cta-content';
import { generatePageSEO, generateOrganizationJsonLd } from '@/lib/seo';
import { designTokens } from '@/lib/design-tokens';

const seo = generatePageSEO({
  title: 'Schedule Your Free Initial Consultation | TechSEO Vitals',
  description: 'Book a free technical SEO and web performance consultation for your business.',
  jsonLd: generateOrganizationJsonLd(),
}, '/book-consultation/');

export default function BookConsultation() {
  return (
    <MarketingPage
      seo={seo}
      hero={{
        badge: "Free Consultation",
        badgeIcon: <Icons.Calendar size="sm" />,
        title: (
          <>
            Schedule Your{' '}
            <span className={designTokens.gradients.primaryText}>Free Initial</span>{' '}
            Consultation
          </>
        ),
        description: "Book a free technical SEO and web performance consultation for your business. Get personalized insights and actionable recommendations.",
        primaryCTA: {
          text: "Book Now",
          href: "#booking-form"
        }
      }}
      finalCTA={ctaContent.primary}
    >

        <section id="booking-form" className={`${designTokens.containers.section} bg-white`}>
          <div className={designTokens.containers.maxWidth}>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <div className={`${designTokens.badge.primary} mb-6`}>
                  <Icons.Document size="sm" />
                  Consultation Form
                </div>
                <h2 className={`${designTokens.typography.sectionTitle} mb-6`}>
                  Tell Me About Your Project
                </h2>
                <p className={designTokens.typography.description}>
                  Please provide your website URL and relevant information. This will help me prepare thoroughly and make the most of our time together.
                </p>
              </div>
              
              <form className="space-y-6" action="/thank-you-for-booking/" method="POST">
                <div>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-lg shadow-sm"
                    placeholder="Please provide your website URL and relevant information about your business and technical SEO needs..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30 w-full"
                >
                  <span className="relative z-10">Submit Consultation Request</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-500">
                    By submitting the form, I agree to the{' '}
                    <Link href="/privacy-policy/" className="text-primary hover:text-primary-dark transition-colors">
                      Privacy Policy
                    </Link>
                    {' '}and{' '}
                    <Link href="/terms-and-conditions/" className="text-primary hover:text-primary-dark transition-colors">
                      Terms and Conditions
                    </Link>
                    .
                  </p>
                  <p className="text-sm text-gray-500">
                    We reserve the right to reschedule or cancel the booking.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
    </MarketingPage>
  );
}