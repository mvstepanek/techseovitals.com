import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import ConvertKitForm from '@/components/ui/convertkit-form';
import WhyTechnicalSEOSection from '@/components/sections/why-technical-seo-section';
import { generatePageSEO, generateOrganizationJsonLd } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Newsletter Signup - TechSEO Vitals | Get Weekly Technical SEO Tips',
  description: 'Improve your website\'s performance where it counts. Every two weeks, actionable technical SEO strategies that directly impact business revenue.',
  jsonLd: generateOrganizationJsonLd(),
}, '/newsletter/');

export default function Newsletter() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section - Using homepage hero pattern with form instead of image */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-16 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute top-24 right-32 w-24 h-24 bg-indigo-300 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-25"></div>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Every Two Weeks in Your Inbox
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight">
                  Join <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">TechSEO Vitals</span> Newsletter
                </h1>
                <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-lg">
                  Improve your website's performance where it counts. Actionable technical SEO strategies that directly impact business revenue.
                </p>
                <div className="mt-10 flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-sm font-medium">Trusted by website owners worldwide</span>
                  </div>
                </div>
              </div>
              
              {/* Form Section (replacing image) */}
              <div className="relative lg:ml-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-white p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Subscribe Now</span>
                    </h3>
                    <p className="text-gray-600">Get actionable insights every two weeks</p>
                  </div>
                  
                  <ConvertKitForm
                    formId="1b414d8dc5"
                    firstNamePlaceholder="First name"
                    emailPlaceholder="Your email address"
                    buttonText="Subscribe to Newsletter"
                    className=""
                  />
                  
                  <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
                    <span>✓ Free forever</span>
                    <span>✓ Unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Get Section - Using the homepage WhyTechnicalSEO pattern */}
        <WhyTechnicalSEOSection
          badge="What You'll Get"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
          title={
            <>
              Maximize Your Website's <span className="text-primary">Revenue Potential</span>
            </>
          }
          description="Through the newsletter, I share the most valuable knowledge I've gained over my 10-year career in web development and technical SEO."
          secondaryCTA={
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span className="text-sm">✓ Every two weeks</span>
              <span className="text-sm">✓ Actionable insights</span>
            </div>
          }
          benefits={[
            {
              icon: <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-blue-500 to-blue-600",
              hoverBorderColor: "blue",
              title: "In-Depth Content",
              description: "Each newsletter focuses on a specific topic, exploring details and research in depth. Get comprehensive insights you won't find elsewhere.",
              metric: "Deep technical insights",
              metricColor: "blue"
            },
            {
              icon: <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-green-500 to-green-600",
              hoverBorderColor: "green",
              title: "Actionable Tips",
              description: "Every episode includes a special actionable tip that can immediately help your business grow and improve your website performance.",
              metric: "Immediate business impact",
              metricColor: "green"
            },
            {
              icon: <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-purple-500 to-purple-600",
              hoverBorderColor: "purple",
              title: "Latest Industry News",
              description: "Always up-to-date news from the technical SEO and web performance industry that deserves your attention and strategic consideration.",
              metric: "Stay ahead of trends",
              metricColor: "purple"
            }
          ]}
        />

        {/* Success Stories Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Why Subscribers Love It
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Join Website Owners Getting <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Real Results</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                "Your website deserves your attention." - 3 benefits you can expect from subscribing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">10+</div>
                <div className="text-gray-600 font-semibold">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">2x</div>
                <div className="text-gray-600 font-semibold">Monthly Frequency</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-gray-600 font-semibold">Actionable Content</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gaining New Knowledge</h3>
                <p className="text-gray-600 mb-6">
                  Learning new information is crucial for both personal and business growth. Stay ahead of the competition.
                </p>
              </div>

              <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Staying Up-to-Date</h3>
                <p className="text-gray-600 mb-6">
                  Keeping current with recent industry changes is critical for the strategic decisions you need to make.
                </p>
              </div>

              <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-purple-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Getting Better Website</h3>
                <p className="text-gray-600 mb-6">
                  Implementing knowledge from the newsletter will help your website grow, attract more visitors, and increase revenue over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Homepage Style */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                About Martin Stepanek
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Start Your <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Performance Journey</span> Today
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                I'm Martin Stepanek, a technical SEO and web performance consultant with over 10 years of experience. I specialize in web performance optimization to maximize every website's revenue potential through enhanced user experience.
              </p>

              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
                After years of developing websites, I discovered my passion for creating positive experiences for millions of website visitors through performance optimization and technical SEO.
              </p>
              
              {/* ConvertKit Form */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 rounded-3xl shadow-xl border border-gray-200">
                  <ConvertKitForm
                    formId="1b414d8dc5"
                    firstNamePlaceholder="First name"
                    emailPlaceholder="Your email address"
                    buttonText="Subscribe to TechSEO Vitals"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}