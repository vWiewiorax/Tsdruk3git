import { MetadataRoute } from 'next'
import { COPIER_BRANDS, PRINTER_BRANDS } from '@/lib/serwis'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tsdruk.pl'

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/serwis`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/serwis/drukarki`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/serwis/kserokopiarki`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...PRINTER_BRANDS.map((b) => ({
      url: `${baseUrl}/serwis/drukarki/${b.slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    ...COPIER_BRANDS.map((b) => ({
      url: `${baseUrl}/serwis/kserokopiarki/${b.slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ]
}
