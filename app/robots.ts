import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      crawlDelay: 10,
    },
    sitemap: 'https://medreliefservices.com/sitemap.xml',
    host: 'https://medreliefservices.com',
  }
}

