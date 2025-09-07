export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
}

export const mainNavigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/technical-seo-services/' },
  { name: 'Newsletter', href: '/newsletter/' },
  { name: 'Blog', href: '/blog/' },
  { name: 'About me', href: '/technical-seo-consultant/' },
  { name: 'Contact', href: '/contact/' },
  {
    name: 'Free Checklists',
    href: '#',
    children: [
      { name: 'Technical SEO Checklist', href: '/technical-seo-checklist/' },
      { name: 'Website Migration Checklist', href: '/website-migration-checklist/' },
      { name: '5 Web Performance Metrics Every Business Owner Should Track', href: '/5-web-performance-metrics-every-business-owner-should-track/' },
    ],
  },
];

export const footerNavigation = {
  services: [
    { name: 'Technical SEO Services', href: '/technical-seo-services/' },
    { name: 'Book Free Consultation', href: '/book-consultation/' },
  ],
  resources: [
    { name: 'Technical SEO Checklist', href: '/technical-seo-checklist/' },
    { name: 'Website Migration Checklist', href: '/website-migration-checklist/' },
    { name: '5 Web Performance Metrics', href: '/5-web-performance-metrics-every-business-owner-should-track/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Newsletter', href: '/newsletter/' },
  ],
  company: [
    { name: 'About Martin', href: '/technical-seo-consultant/' },
    { name: 'Contact', href: '/contact/' },
    { name: 'Privacy Policy', href: '/privacy-policy/' },
    { name: 'Terms and Conditions', href: '/terms-and-conditions/' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/martin-stepanek-techseo/',
      icon: 'linkedin',
    },
    {
      name: 'Bluesky',
      href: 'https://bsky.app/profile/techseovitals.com',
      icon: 'bluesky',
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@techseovitals',
      icon: 'youtube',
    },
  ],
};