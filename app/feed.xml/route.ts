import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  const baseUrl = 'https://www.techseovitals.com'
  const currentDate = new Date().toISOString()
  
  const feedData = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TechSEO Vitals Blog - Technical SEO and Web Performance</title>
    <description>Expert insights on Technical SEO, Core Web Vitals, and web performance optimization to help your business increase revenue through faster, better-optimized websites.</description>
    <link>${baseUrl}/blog/</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <managingEditor>martin@techseovitals.com (Martin Štěpánek)</managingEditor>
    <webMaster>martin@techseovitals.com (Martin Štěpánek)</webMaster>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/images/logos/logo-light.svg</url>
      <title>TechSEO Vitals</title>
      <link>${baseUrl}/</link>
      <width>200</width>
      <height>50</height>
    </image>
    
    <item>
      <title>Why You Should Care About Your TTFB</title>
      <description>Time to First Byte (TTFB) is a crucial web performance metric that directly impacts user experience and SEO rankings. Learn how to optimize your TTFB for better Core Web Vitals scores.</description>
      <link>${baseUrl}/blog/why-you-should-care-about-your-ttfb/</link>
      <guid>${baseUrl}/blog/why-you-should-care-about-your-ttfb/</guid>
      <pubDate>${new Date('2024-02-15').toISOString()}</pubDate>
      <author>martin@techseovitals.com (Martin Štěpánek)</author>
      <category>Core Web Vitals</category>
      <category>Web Performance</category>
    </item>
    
    <item>
      <title>Multilingual Website Essentials</title>
      <description>Complete guide to technical SEO for multilingual websites. Learn about hreflang implementation, URL structure, and avoiding common internationalization mistakes.</description>
      <link>${baseUrl}/blog/multilingual-website-essentials/</link>
      <guid>${baseUrl}/blog/multilingual-website-essentials/</guid>
      <pubDate>${new Date('2024-02-01').toISOString()}</pubDate>
      <author>martin@techseovitals.com (Martin Štěpánek)</author>
      <category>Technical SEO</category>
      <category>Internationalization</category>
    </item>
    
    <item>
      <title>Improving Crawlability</title>
      <description>How to make your website more crawlable for search engines. Technical SEO strategies for better indexation, crawl budget optimization, and site architecture.</description>
      <link>${baseUrl}/blog/improving-crawlability/</link>
      <guid>${baseUrl}/blog/improving-crawlability/</guid>
      <pubDate>${new Date('2024-01-15').toISOString()}</pubDate>
      <author>martin@techseovitals.com (Martin Štěpánek)</author>
      <category>Technical SEO</category>
      <category>Crawling</category>
    </item>
    
    <item>
      <title>Core Web Vitals Optimization Guide</title>
      <description>Comprehensive guide to optimizing Core Web Vitals - LCP, FID, and CLS. Learn practical techniques to improve your website's performance scores and search rankings.</description>
      <link>${baseUrl}/blog/core-web-vitals-optimization-guide/</link>
      <guid>${baseUrl}/blog/core-web-vitals-optimization-guide/</guid>
      <pubDate>${new Date('2024-01-01').toISOString()}</pubDate>
      <author>martin@techseovitals.com (Martin Štěpánek)</author>
      <category>Core Web Vitals</category>
      <category>SEO</category>
    </item>
    
  </channel>
</rss>`

  return new NextResponse(feedData, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}