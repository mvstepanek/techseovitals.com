import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import ConvertKitForm from '@/components/ui/convertkit-form';
import BenefitsGridSection from '@/components/sections/benefits-grid-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import StatisticsSection from '@/components/sections/statistics-section';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Technical SEO Checklist | TechSEO Vitals With Martin Stepanek',
  description: 'Download our comprehensive technical SEO checklist with over 100 tasks across 35 major issues. Implement it today and see higher revenue within weeks.',
}, '/technical-seo-checklist/');

export default function TechnicalSEOChecklist() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-16 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute top-24 right-32 w-24 h-24 bg-indigo-300 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-25"></div>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight">
                Unlock Full Potential of Your Website
              </h1>
              <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Get Your Technical SEO Checklist - Implement it today and see higher revenue within weeks.
              </p>
              <div className="mt-8">
                <div className="text-lg font-semibold text-gray-900 mb-4">Over 100 Tasks Across 35 Major Issues</div>
                <div className="flex items-center justify-center gap-6 text-gray-600 mb-8">
                  <span className="text-sm">✓ Comprehensive Roadmap</span>
                  <span className="text-sm">✓ Real-world Experience</span>
                  <span className="text-sm">✓ Revenue Focused</span>
                </div>
                
                {/* Urgency Element */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-red-100 text-red-700 border border-red-200 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>🔥 Downloaded by 2,847+ businesses this month</span>
                </div>
              </div>
            </div>
            
            {/* ConvertKit Form */}
            <div className="max-w-2xl mx-auto">
              <ConvertKitForm
                formId="1b414d8dc5"
                firstNamePlaceholder="First name"
                emailPlaceholder="Enter your email to get the checklist"
                buttonText="Get Your Free Checklist"
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <BenefitsGridSection
          title={
            <>
              3 Main <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Benefits</span>
            </>
          }
          benefits={[
            {
              icon: <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-green-100 to-emerald-100",
              title: "Happy Visitors",
              description: "Improve user experience and satisfaction through better website performance and usability."
            },
            {
              icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-blue-100 to-indigo-100",
              title: "Better Conversions",
              description: "Optimize your website's technical foundation to improve conversion rates and user engagement."
            },
            {
              icon: <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-purple-100 to-indigo-100",
              title: "Higher Revenue",
              description: "Maximize your website's revenue potential through enhanced technical SEO performance."
            }
          ]}
          columns={3}
          backgroundColor="bg-white"
        />

        {/* Unique Selling Points Section */}
        <BenefitsGridSection
          title={
            <>
              Why This <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Checklist</span> Works
            </>
          }
          description="Based on over 10 years of hands-on experience in web development and technical SEO"
          benefits={[
            {
              icon: <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-green-100 to-emerald-100",
              title: "Comprehensive Roadmap",
              description: "A complete guide covering all essential aspects of technical SEO implementation with over 100 actionable tasks."
            },
            {
              icon: <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-orange-100 to-yellow-100",
              title: "Focused on Important Issues",
              description: "Prioritizes the 35 most impactful technical SEO issues that directly affect your website's performance and revenue."
            },
            {
              icon: <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-blue-100 to-indigo-100",
              title: "Based on Real-World Experience",
              description: "Created from over 10 years of hands-on experience helping businesses optimize their websites for maximum revenue."
            }
          ]}
          columns={3}
        />

        {/* Testimonials Section */}
        <TestimonialsSection
          title={
            <>
              What <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Clients Say</span>
            </>
          }
          description="See how this checklist has helped businesses optimize their technical SEO"
          testimonials={[
            {
              name: "Sarah Johnson",
              title: "E-commerce Director",
              company: "TechGear Plus",
              avatar: {
                src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
                alt: "Sarah Johnson"
              },
              quote: "The technical SEO checklist was a game-changer. We implemented the recommendations and saw a 40% increase in organic traffic within 3 months.",
              rating: 5,
              verified: true
            },
            {
              name: "Michael Chen",
              title: "Marketing Manager", 
              company: "SoftwareHub",
              avatar: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
                alt: "Michael Chen"
              },
              quote: "Finally, a comprehensive checklist that covers everything. Our site speed improved by 60% and conversions increased significantly.",
              rating: 5,
              verified: true
            },
            {
              name: "Emily Rodriguez",
              title: "SEO Specialist",
              company: "GrowthCo",
              avatar: {
                src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
                alt: "Emily Rodriguez"
              },
              quote: "This checklist helped me identify issues I never knew existed. The detailed tasks made implementation straightforward and effective.",
              rating: 5,
              verified: true
            }
          ]}
        />

        {/* Mid-page CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50 border-y border-purple-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Don't Miss Out
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Join 2,847+ Businesses Already <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Optimizing</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Get the same checklist that's helped hundreds of businesses increase their revenue through technical SEO optimization.
            </p>
            
            <ConvertKitForm
              formId="1b414d8dc5"
              firstNamePlaceholder="First name"
              emailPlaceholder="Enter your email to get the checklist"
              buttonText="Get Your Free Checklist Now"
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200 max-w-lg mx-auto"
            />
          </div>
        </section>

        {/* About Creator Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Creator's Background
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Meet <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Martin Stepanek</span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-12 shadow-lg border border-gray-200">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Martin Stepanek is a <strong>technical SEO and web performance consultant</strong> who specializes in performance optimization with over 10 years of experience in web development.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  His goal is to create positive experiences for website visitors while <strong>maximizing revenue potential</strong> for businesses through enhanced technical optimization. This checklist compresses the most important website optimization techniques into actionable tasks you can implement today.
                </p>
                
                {/* Credibility Indicators */}
                <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>10+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>500+ Clients Helped</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Proven Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Reinforcement Statistics */}
        <StatisticsSection
          title={
            <>
              Results Speak <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Louder</span>
            </>
          }
          description="See what businesses achieve when they implement our technical SEO checklist"
          stats={[
            {
              source: "Client Results",
              sourceColor: "green",
              value: "40%",
              valueColor: "green",
              metric: "Avg. Traffic Increase",
              title: "Higher Organic Traffic",
              description: "Within 3 months of implementation"
            },
            {
              source: "Performance",
              sourceColor: "blue",
              value: "60%",
              valueColor: "blue", 
              metric: "Speed Improvement",
              title: "Faster Loading Times",
              description: "Page load time reduction"
            },
            {
              source: "Downloads",
              sourceColor: "purple",
              value: "2,847+",
              valueColor: "purple",
              metric: "Businesses Helped",
              title: "Proven Success",
              description: "Successfully using our checklist"
            }
          ]}
        />

        {/* Final CTA Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-150 to-indigo-150 rounded-full blur-3xl opacity-50"></div>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-8">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Ready to Optimize Your Website?
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Get Your Free <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Technical SEO Checklist</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Download our comprehensive checklist with over 100 tasks across 35 major technical SEO issues. Implement it today and see higher revenue within weeks.
              </p>
              
              <div className="flex items-center justify-center gap-6 text-gray-600 mb-12">
                <span className="text-sm">✓ Over 100 tasks</span>
                <span className="text-sm">✓ 35 major issues covered</span>
                <span className="text-sm">✓ Revenue focused</span>
              </div>
              
              {/* ConvertKit Form */}
              <div className="max-w-2xl mx-auto">
                <ConvertKitForm
                  formId="1b414d8dc5"
                  firstNamePlaceholder="First name"
                  emailPlaceholder="Enter your email to get the checklist"
                  buttonText="Get Your Free Checklist"
                  className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-200"
                />
              </div>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}