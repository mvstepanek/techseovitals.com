import { MarketingPage } from '@/components/templates/marketing-page';
import { Icons, GradientText } from '@/components/ui';
import { testimonials } from '@/data/testimonials';
import { ctaContent, socialProof } from '@/data/cta-content';
import { companyLogos, badges } from '@/data/constants';
import { generatePageSEO, generateOrganizationJsonLd } from '@/lib/seo';
import ServicesGridSection from '@/components/sections/services-grid-section';
import BenefitsGridSection from '@/components/sections/benefits-grid-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import TrustedBySection from '@/components/sections/trusted-by-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';

const seo = generatePageSEO({
  title: 'Technical SEO Services | TechSEO Vitals With Martin Stepanek',
  description: 'Expert Technical SEO services including comprehensive audits, monitoring, and website migration planning. Fast and well-optimized websites are key to delivering positive user experiences.',
  jsonLd: generateOrganizationJsonLd(),
}, '/technical-seo-services/');

export default function TechnicalSEOServices() {
  return (
    <MarketingPage
      seo={seo}
      hero={{
        badge: "Expert Technical SEO Services",
        badgeIcon: <Icons.Lightning size="sm" />,
        title: (
          <>
            Technical SEO Services That Drive{' '}
            <GradientText>Real Revenue</GradientText>
          </>
        ),
        description: "Comprehensive Technical SEO audits, monitoring, and migration planning for agencies, e-commerce, and business websites. Transform your website into a revenue-generating machine.",
        primaryCTA: {
          text: "Schedule Free Consultation",
          href: "/book-consultation/"
        },
        secondaryCTA: (
          <div className="flex items-center gap-3 text-gray-600">
            {socialProof.businesses.icon}
            <span className="text-sm font-medium">{socialProof.businesses.text}</span>
          </div>
        ),
        image: {
          src: "/images/martin-stepanek-seo.jpg",
          alt: "Martin Štěpánek - Technical SEO Expert",
          width: 500,
          height: 500
        },
        statusBadge: {
          text: badges.available.text,
          icon: <div className={badges.available.className}></div>
        }
      }}
      finalCTA={ctaContent.primary}
    >

        <ServicesGridSection
          badge="Choose Your Service"
          badgeIcon={<Icons.Document size="sm" />}
          title={
            <>
              Technical SEO <GradientText>Services</GradientText>
            </>
          }
          description="Comprehensive solutions tailored to your business needs and goals"
          services={[
            {
              icon: <Icons.CheckCircle className="text-white" />,
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
              icon: <Icons.TrendingUp className="text-white" />,
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
              icon: <Icons.ArrowRight className="text-white" />,
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

        <BenefitsGridSection
          badge="Why Choose TechSEO Vitals"
          badgeIcon={<Icons.Shield size="sm" />}
          title={
            <>
              What Makes Me <GradientText>Different</GradientText>
            </>
          }
          description="10+ years of proven experience delivering measurable results for businesses like yours"
          benefits={[
            {
              icon: <Icons.Shield className="text-purple-600" />,
              iconGradient: "bg-gradient-to-br from-purple-100 to-indigo-100",
              title: "10+ Years Experience",
              description: "Proven track record delivering tangible results across industries and website types."
            },
            {
              icon: <Icons.CheckCircle className="text-green-600" />,
              iconGradient: "bg-gradient-to-br from-green-100 to-emerald-100",
              title: "Tailored & Actionable Tasks",
              description: "Detailed, customized task lists that your team can implement immediately for results."
            },
            {
              icon: <Icons.Document className="text-blue-600" />,
              iconGradient: "bg-gradient-to-br from-blue-100 to-indigo-100",
              title: "Detailed Implementation Guidance",
              description: "Step-by-step instructions and best practices for successful implementation."
            },
            {
              icon: <Icons.Chat className="text-orange-600" />,
              iconGradient: "bg-gradient-to-br from-orange-100 to-yellow-100",
              title: "Support For Internal Teams",
              description: "Comprehensive guidance and ongoing support for your development and marketing teams."
            }
          ]}
        />

        <TestimonialsSection
          badge="Client Success Stories"
          badgeIcon={<Icons.Chat size="sm" />}
          title={
            <>
              Real Results from <GradientText>Real Clients</GradientText>
            </>
          }
          description=""
          testimonials={[testimonials.viktor, testimonials.daniel]}
        />

        <TrustedBySection logos={companyLogos.main} />

        <HowItWorksSection
          badge="Simple Process"
          badgeIcon={<Icons.Lightning size="sm" />}
          title={
            <>
              How I <GradientText>Work With You</GradientText>
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

    </MarketingPage>
  );
}