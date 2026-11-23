import { MetadataRoute } from 'next';
import { personalInfo } from '@/lib/data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/projects/', '/about', '/contact'],
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: ['GPTBot', 'CCBot'],
        disallow: '/',
      },
    ],
    sitemap: `${personalInfo.siteUrl}/sitemap.xml`,
    host: personalInfo.siteUrl,
  };
}
