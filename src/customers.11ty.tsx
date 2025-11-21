import React from 'react';
import HeroSection from './_components/sections/HeroSection';
import TrustedCompaniesSection from './_components/sections/TrustedCompaniesSection';
import TestimonialCard from './_components/ui/TestimonialCard';
import OptimizedImage from './_components/common/OptimizedImage';
import Button from './_components/ui/Button';
import { COMMON_STYLES } from './_data/constants';
import SectionHeader from './_components/ui/SectionHeader';
import BackgroundDecorations from './_components/ui/BackgroundDecorations';
import Icons from './_components/ui/Icons';
import IconContainer from './_components/ui/IconContainer';
import TrustSignalsList from './_components/ui/TrustSignalsList';

export const data = {
  layout: 'base',
  eleventyComputed: {
    permalink: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || {};
      return translations['url.customers'];
    },
    title: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || {};
      return translations['meta.customers.title'];
    },
    description: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || {};
      return translations['meta.customers.description'];
    },
  },
};

interface Props {
  t?: (key: string) => string;
}

const CustomersPage: React.FC<Props> = ({ t = (key) => key }) => (
  <main className="flex-1">
    <HeroSection
      badge={{
        icon: <Icons.checkCircle className="w-4 h-4" />,
        text: t('customers.hero.badge'),
      }}
      title={t('customers.hero.title')}
      description={t('customers.hero.description')}
      primaryCta={{
        text: t('customers.hero.cta'),
        href: t('url.contact'),
      }}
      image={{
        src: '/assets/images/martin-stepanek-6.jpg',
        alt: t('common.alt.martin-expert'),
      }}
      layout="centered"
      rating={{
        show: true,
        stars: 5,
        text: t('customers.hero.rating'),
        isTestimonial: false,
        center: true,
      }}
    />

    <TrustedCompaniesSection t={t} />

    {/* Case Studies Section */}
    <section id="case-studies" className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className={COMMON_STYLES.containerWidth}>
        <SectionHeader
          badge={{
            icon: <Icons.document className="w-4 h-4" />,
            text: t('customers.case-studies.badge'),
          }}
          title={t('customers.case-studies.title')}
          subtitle={t('customers.case-studies.subtitle')}
        />

        <div className={COMMON_STYLES.twoColumnGrid}>
          {/* TOUCHIT Case Study */}
          <a href={t('url.case-study.touchit')} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-visible block">
            <div className="p-8">
              <div className="flex items-start justify-start mb-6">
                <OptimizedImage src="/assets/images/clients/logo-touchit.png" alt={t('customers.touchit.alt')} className="h-12 w-auto object-contain" />
              </div>
              <p className="text-purple-600 font-semibold mb-2">{t('customers.touchit.category')}</p>
              <p className="text-gray-600 mb-6">{t('customers.touchit.description')}</p>

              {/* Success Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-1">-{t('customers.touchit.metric1.value')}</div>
                  <div className="text-xs text-gray-600 font-medium">{t('customers.touchit.metric1.label')}</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-1">-{t('customers.touchit.metric2.value')}</div>
                  <div className="text-xs text-gray-600 font-medium">{t('customers.touchit.metric2.label')}</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600 mb-1">+{t('customers.touchit.metric3.value')}</div>
                  <div className="text-xs text-gray-600 font-medium">{t('customers.touchit.metric3.label')}</div>
                </div>
              </div>

              <div className={`space-y-4 ${COMMON_STYLES.gradientBgVeryLight} p-6 rounded-xl border border-purple-100`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 min-w-8 ${COMMON_STYLES.gradientBgDiagonal} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">{t('customers.touchit.feature1')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 min-w-8 ${COMMON_STYLES.gradientBgDiagonal} rounded-lg flex items-center justify-center`}>
                    <Icons.lightning className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-base font-semibold text-gray-900">{t('customers.touchit.feature2')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 min-w-8 ${COMMON_STYLES.gradientBgDiagonal} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">{t('customers.touchit.feature3')}</span>
                </div>
              </div>

              <div className="group relative overflow-hidden transition-all duration-300 font-bold rounded-xl inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl hover:scale-105 hover:shadow-2xl px-4 py-2.5 text-sm sm:px-5 sm:py-3 mt-6">
                <span className="relative z-10">{t('common.read-case-study')}</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            </div>
          </a>

          {/* expertise.ai Case Study - Non-clickable */}
          <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-visible">
            <div className="p-8">
              <div className="flex items-start justify-start mb-6">
                <OptimizedImage src="/assets/images/clients/logo-expertiseai.svg" alt={t('customers.expertiseai.alt')} className="h-12 w-auto object-contain" />
              </div>
              <p className="text-purple-600 font-semibold mb-2">{t('customers.expertiseai.category')}</p>
              <p className="text-gray-600 mb-6">{t('customers.expertiseai.description')}</p>
              <div className={`space-y-4 ${COMMON_STYLES.gradientBgVeryLight} p-6 rounded-xl border border-purple-100`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 min-w-8 ${COMMON_STYLES.gradientBgDiagonal} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">{t('customers.expertiseai.feature1')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 min-w-8 ${COMMON_STYLES.gradientBgDiagonal} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">{t('customers.expertiseai.feature2')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 min-w-8 ${COMMON_STYLES.gradientBgDiagonal} rounded-lg flex items-center justify-center`}>
                    <Icons.lightning className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-base font-semibold text-gray-900">{t('customers.expertiseai.feature3')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Full Testimonials Section */}
    <section className="py-24 bg-white">
      <div className={COMMON_STYLES.containerWidth}>
        <SectionHeader
          badge={{
            icon: <Icons.chat className="w-4 h-4" />,
            text: t('customers.testimonials.badge'),
          }}
          title={t('customers.testimonials.title')}
          subtitle={t('customers.testimonials.subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          <TestimonialCard
            name={t('customers.testimonial.pison.name')}
            position={t('customers.testimonial.pison.position')}
            company={t('customers.testimonial.pison.company')}
            text={t('customers.testimonial.pison.text')}
            image={t('customers.testimonial.pison.image')}
          />

          <TestimonialCard
            name={t('customers.testimonial.buransky.name')}
            position={t('customers.testimonial.buransky.position')}
            company={t('customers.testimonial.buransky.company')}
            text={t('customers.testimonial.buransky.text')}
            image={t('customers.testimonial.buransky.image')}
          />

          <TestimonialCard
            name={t('customers.testimonial.zeman.name')}
            position={t('customers.testimonial.zeman.position')}
            company={t('customers.testimonial.zeman.company')}
            text={t('customers.testimonial.zeman.text')}
            image={t('customers.testimonial.zeman.image')}
          />
        </div>
      </div>
    </section>

    {/* Trust Building CTA Section */}
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-200">
      <BackgroundDecorations variant="default" />
      <div className={`relative ${COMMON_STYLES.containerWidth}`}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            badge={{
              icon: <Icons.checkCircle className="w-4 h-4" />,
              text: t('customers.cta.badge'),
            }}
            title={t('customers.cta.title')}
            subtitle={t('customers.cta.subtitle')}
            className="mb-12"
          />
          <div className="flex flex-col items-center gap-4 mb-12">
            <Button href={t('url.contact')}>{t('customers.cta.button')}</Button>
            <TrustSignalsList signals={[t('customers.cta.trust.free'), t('customers.cta.trust.commitment')]} />
          </div>

          <div className={`${COMMON_STYLES.threeColumnGrid} max-w-4xl mx-auto`}>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/50 border border-gray-200">
              <IconContainer icon={<Icons.checkCircle className="w-8 h-8 text-white" />} color="blue" size="md" className="mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('customers.cta.feature1.title')}</h3>
              <p className="text-gray-600 text-center">{t('customers.cta.feature1.description')}</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/50 border border-gray-200">
              <IconContainer icon={<Icons.clock className="w-8 h-8 text-white" />} color="green" size="md" className="mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('customers.cta.feature2.title')}</h3>
              <p className="text-gray-600 text-center">{t('customers.cta.feature2.description')}</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/50 border border-gray-200">
              <IconContainer icon={<Icons.star className="w-8 h-8 text-white" />} color="purple" size="md" className="mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('customers.cta.feature3.title')}</h3>
              <p className="text-gray-600 text-center">{t('customers.cta.feature3.description')}</p>
            </div>
          </div>
          <div className="mb-16" />
        </div>
      </div>
    </section>
  </main>
);

export default function CustomersTemplate(data: any & { t: (key: string) => string }) {
  return <CustomersPage t={data.t} />;
}
