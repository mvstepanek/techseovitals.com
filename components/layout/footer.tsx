import Link from 'next/link';
import Logo from '@/components/ui/logo';
import { footerNavigation } from '@/lib/navigation';

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'linkedin':
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'youtube':
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9.555 7.168A1 1 0 008 8.108v3.784a1 1 0 001.555.832l3.1-1.892a1 1 0 000-1.664l-3.1-1.892z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'bluesky':
      return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.018-.276.037-.415.056-2.67-.296-5.568.628-6.383 3.364C.378 17.702 0 22.661 0 23.351c0 .688.139 1.86.902 2.203.659.299 1.664.621 3.3-.24C6.954 23.372 9.913 19.433 11 17.319 12.087 19.433 15.046 23.372 17.798 25.314c1.636.861 2.641.539 3.3.24.763-.343.902-1.515.902-2.203 0-.69-.378-5.649-.624-6.479-.815-2.736-3.713-3.66-6.383-3.364-.139.019-.277.038-.415.056.138-.017.276-.036.415-.056 2.67.296 5.568-.628 6.383-3.364.246-.829.624-5.789.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-3.3.24C15.046 4.747 12.087 8.686 11 10.8z"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Logo variant="dark" className="max-w-[200px]" />
            <p className="text-sm leading-6 text-gray-300">
              Experienced technical SEO and web performance consultant with over a decade of web development experience.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <SocialIcon icon={item.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">TechSEO Vitals</h3>
              <ul className="mt-6 space-y-4">
                {footerNavigation.techseoVitals.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
              <ul className="mt-6 space-y-4">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Free Resources</h3>
              <ul className="mt-6 space-y-4">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2024 - 2025 TechSEO Vitals. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0 flex space-x-6">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs leading-5 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}