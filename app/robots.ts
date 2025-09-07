import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/thank-you-for-subscribing/',
        '/youre-registered/',
      ],
    },
    sitemap: 'https://www.techseovitals.com/sitemap.xml',
    host: 'https://www.techseovitals.com',
  }
}