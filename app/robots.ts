import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://falakeg.com/sitemap.xml',
    host: 'https://falakeg.com',
  }
}
