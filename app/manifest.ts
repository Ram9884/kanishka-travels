import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo.config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.siteName,
    short_name: 'Kanishka Travels',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0B0D',
    theme_color: '#D4AF37',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
