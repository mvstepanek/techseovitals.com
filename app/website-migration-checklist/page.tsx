import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import ConvertKitForm from '@/components/ui/convertkit-form';
import HeroSection from '@/components/sections/hero-section';
import WhyTechnicalSEOSection from '@/components/sections/why-technical-seo-section';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Website Migration Checklist | TechSEO Vitals With Martin Stepanek',
  description: 'Download our comprehensive website migration checklist with over 45 tasks across 8 major areas. Don\'t let your website migration turn into a nightmare!',
}, '/website-migration-checklist/');

export default function WebsiteMigrationChecklist() {
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
                  Don't Let Your Migration Turn Into a Nightmare
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight">
                  Get Your <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Website Migration</span> Checklist
                </h1>
                <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-lg">
                  Comprehensive roadmap based on 10+ years of professional experience. Protect your search rankings during website migrations.
                </p>
                <div className="mt-10 flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-sm font-medium">Trusted by migration experts</span>
                  </div>
                </div>
              </div>
              
              {/* Form Section (replacing image) */}
              <div className="relative lg:ml-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-white p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Get Instant Access</span>
                    </h3>
                    <p className="text-gray-600">Enter your details to download immediately</p>
                  </div>
                  
                  <ConvertKitForm
                    formId="1b414d8dc5"
                    firstNamePlaceholder="First name"
                    emailPlaceholder="Business email"
                    buttonText="Download Free Checklist"
                    className=""
                  />
                  
                  <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
                    <span>✓ Instant access</span>
                    <span>✓ Free forever</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Checklist Section - Using the homepage WhyTechnicalSEO pattern */}
        <WhyTechnicalSEOSection
          badge="What's Inside"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          }
          title={
            <>
              Transform Your Migration Into a <span className="text-primary">Success Story</span>
            </>
          }
          description="This checklist contains the exact steps that ensure safe website migrations while protecting your search rankings and traffic."
          secondaryCTA={
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span className="text-sm">✓ 45+ actionable tasks</span>
              <span className="text-sm">✓ 8 major areas covered</span>
            </div>
          }
          benefits={[
            {
              icon: <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-yellow-500 to-yellow-600",
              hoverBorderColor: "yellow",
              title: "Having Knowledge",
              description: "Provides necessary knowledge for most website migrations. Covers all critical migration aspects that matter for SEO success.",
              metric: "Complete migration guide",
              metricColor: "yellow"
            },
            {
              icon: <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-green-500 to-green-600",
              hoverBorderColor: "green",
              title: "Being Confident",
              description: "Knowledge from years of experience builds confidence. Migrations are complex and challenging - but manageable with the right approach.",
              metric: "10+ years experience",
              metricColor: "green"
            },
            {
              icon: <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-red-500 to-red-600",
              hoverBorderColor: "red",
              title: "Staying Safe",
              description: "Following the checklist helps ensure website safety during migration. Avoid the 60% traffic loss that hits poorly planned migrations.",
              metric: "Zero ranking loss",
              metricColor: "red"
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
                Migration Success Stories
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Migrations Are Getting <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Real Results</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join dozens of businesses that have successfully migrated their websites using this checklist
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">45+</div>
                <div className="text-gray-600 font-semibold">Critical Tasks</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">0%</div>
                <div className="text-gray-600 font-semibold">Ranking Loss</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">8</div>
                <div className="text-gray-600 font-semibold">Major Areas</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 text-lg">
                  "Following Martin's migration checklist, we not only avoided traffic loss but actually saw a 15% increase in organic traffic within the first month. The detailed pre-planning made all the difference."
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Miller</div>
                    <div className="text-sm text-gray-600">Marketing Director at TechCorp</div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 text-lg">
                  "The comprehensive approach and systematic checklist helped us avoid the common migration pitfalls. Every critical aspect was covered - from redirects to performance monitoring."
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">David Chen</div>
                    <div className="text-sm text-gray-600">CTO</div>
                  </div>
                </div>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Protect Your Website Migration
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Get Your Free <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Migration Checklist</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                Join dozens of businesses that have safely migrated their websites. Don't let your migration turn into a nightmare.
              </p>
              
              {/* ConvertKit Form */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 rounded-3xl shadow-xl border border-gray-200">
                  <ConvertKitForm
                    formId="1b414d8dc5"
                    firstNamePlaceholder="First name"
                    emailPlaceholder="Business email"
                    buttonText="Download Your Free Checklist Now"
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