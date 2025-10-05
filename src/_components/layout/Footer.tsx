import React from 'react';
import OptimizedImage from '../common/OptimizedImage';
import Icons from '../ui/Icons';

interface FooterProps {
  t?: (key: string) => string;
}

const Footer: React.FC<FooterProps> = ({ t = (key) => key }) => (
  <footer className="bg-gray-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">
      {t('footer.heading')}
    </h2>
    <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-6 sm:space-y-8 xl:col-span-1">
          <a className="block max-w-[180px] sm:max-w-[200px]" href="/" aria-label={t('common.aria.home')}>
            <OptimizedImage alt={t('common.alt.logo')} width={200} height={50} className="h-auto w-auto" src="/assets/techseovitals-logo-white.svg" aria-hidden="true" />
          </a>
          <p className="text-[0.9375rem] leading-6 text-gray-300 max-w-md">
            {t('footer.description')}
          </p>
          <div className="flex space-x-3 sm:space-x-4 -ml-[5px]">
            <a
              href="https://www.linkedin.com/in/techseovitals/"
              className="text-gray-400 hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('footer.social.linkedin')}
            >
              <span className="sr-only">{t('footer.social.linkedin')}</span>
              <Icons.linkedin className="h-10 w-10" aria-hidden="true" />
            </a>
            <a
              href="https://bsky.app/profile/techseovitals.com"
              className="text-gray-400 hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('footer.social.bluesky')}
            >
              <span className="sr-only">{t('footer.social.bluesky')}</span>
              <Icons.bluesky className="h-10 w-10" aria-hidden="true" />
            </a>
            <a
              href="https://youtube.com/@techseovitals"
              className="text-gray-400 hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('footer.social.youtube')}
            >
              <span className="sr-only">{t('footer.social.youtube')}</span>
              <Icons.youtube className="h-10 w-10" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-bold leading-6 text-white">{t('site.name')}</h3>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href={t('url.consultant')}>
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href={t('url.customers')}>
                  {t('nav.customers')}
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href={t('url.blog')}>
                  {t('nav.blog')}
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href={t('url.newsletter')}>
                  {t('nav.newsletter')}
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href={t('url.contact')}>
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold leading-6 text-white">{t('footer.services')}</h3>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href={`${t('url.services')}#technical-seo-audit`}>
                  {t('services.audit.title')}
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href={`${t('url.services')}#technical-seo-monitoring`}>
                  {t('services.monitoring.title')}
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href={`${t('url.services')}#website-migration-plan`}>
                  {t('services.migration.title')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold leading-6 text-white">{t('footer.resources')}</h3>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href={t('url.checklist')}>
                  {t('topbar.technical-seo-checklist')}
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href={t('url.migration')}>
                  {t('topbar.website-migration-checklist')}
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href={t('url.performance-metrics')}>
                  {t('topbar.web-performance-metrics')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <p className="text-xs leading-5 text-gray-400">{t('footer.copyright')}</p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a className="text-xs leading-5 text-gray-400 hover:text-gray-300 transition-colors" href={t('url.privacy-policy')}>
              {t('footer.privacy')}
            </a>
            <a className="text-xs leading-5 text-gray-400 hover:text-gray-300 transition-colors" href={t('url.terms')}>
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
