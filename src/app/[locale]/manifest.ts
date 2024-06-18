import { MetadataRoute } from 'next'

import { siteSettings } from '@/config/site-config'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteSettings.name,
    short_name: siteSettings.name,
    description: siteSettings.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
