import { siteSettings } from '@/config/site-config'
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteSettings.name,
    short_name: siteSettings.name,
    description: siteSettings.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#ffcc00',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}
