import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/booking/*/upload'],
      },
    ],
    sitemap: 'https://www.medreliefservices.com/sitemap.xml',
    host: 'https://www.medreliefservices.com',
  }
}

