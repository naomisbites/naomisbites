import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
    ],
    sitemap: 'https://naomisbites.vercel.app/sitemap.xml',
    host: 'https://naomisbites.vercel.app',
  }
}
