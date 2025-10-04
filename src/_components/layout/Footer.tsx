import React from 'react';
import OptimizedImage from '../common/OptimizedImage';
import Icons from '../ui/Icons';

const Footer: React.FC = () => (
  <footer className="bg-gray-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-6 sm:space-y-8 xl:col-span-1">
          <a className="block max-w-[180px] sm:max-w-[200px]" href="/" aria-label="TechSEO Vitals Home">
            <OptimizedImage alt="TechSEO Vitals" width={200} height={50} className="h-auto w-auto" src="/assets/techseovitals-logo-white.svg" aria-hidden="true" />
          </a>
          <p className="text-sm leading-6 text-gray-300 max-w-md" style={{ fontSize: '0.9375rem' }}>
            Experienced technical SEO and web performance consultant with over a decade of web development experience.
          </p>
          <div className="flex space-x-3 sm:space-x-4" style={{ marginLeft: '-5px' }}>
            <a
              href="https://www.linkedin.com/in/techseovitals/"
              className="text-gray-400 hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <span className="sr-only">LinkedIn</span>
              <Icons.linkedin className="h-10 w-10" aria-hidden="true" />
            </a>
            <a
              href="https://bsky.app/profile/techseovitals.com"
              className="text-gray-400 hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bluesky Profile"
            >
              <span className="sr-only">Bluesky</span>
              <Icons.bluesky className="h-10 w-10" aria-hidden="true" />
            </a>
            <a
              href="https://youtube.com/@techseovitals"
              className="text-gray-400 hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
            >
              <span className="sr-only">YouTube</span>
              <Icons.youtube className="h-10 w-10" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-bold leading-6 text-white">TechSEO Vitals</h3>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href="/technical-seo-consultant/">
                  About
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href="/customers/">
                  Customers
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href="/blog/">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href="/newsletter/">
                  Newsletter
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href="/contact/">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold leading-6 text-white">Services</h3>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href="/technical-seo-services/#technical-seo-audit">
                  Technical SEO Audit
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href="/technical-seo-services/#technical-seo-monitoring">
                  Technical SEO Monitoring
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href="/technical-seo-services/#website-migration-plan">
                  Website Migration Plan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold leading-6 text-white">Free Resources</h3>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href="/technical-seo-checklist/">
                  Technical SEO Checklist
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href="/website-migration-checklist/">
                  Website Migration Checklist
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href="/5-web-performance-metrics-every-business-owner-should-track/">
                  5 Web Performance Metrics Every Business Owner Should Track
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <p className="text-xs leading-5 text-gray-400">© 2024 - {new Date().getFullYear()} TechSEO Vitals. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a className="text-xs leading-5 text-gray-400 hover:text-gray-300 transition-colors" href="/privacy-policy/">
              Privacy Policy
            </a>
            <a className="text-xs leading-5 text-gray-400 hover:text-gray-300 transition-colors" href="/terms-and-conditions/">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
