import { t } from 'i18next'
import { Metadata } from 'next'
import { Robots } from 'next/dist/lib/metadata/types/metadata-types'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

export const siteHostname = 'andycao.me'
export const siteUrl = `https://${siteHostname}`

export const GoogleAnalyticsID = 'G-L8EFRS04CF'

export const siteSettings = {
  name: t('siteName'),
  url: siteUrl,
  title: t('siteTitle'),
  description: t('siteDescription'),
  keywords: t('siteKeywords'),
  author: 'Andy Cao',
  creator: '@andycaonz@gmail.com'
}

// Add icon image in public folder
const icons = {
  icon: '/icon.png',
  shortcut: '/icon.png',
  apple: '/apple-icon.png'
}

// TODO: add bing bot
const robots: Robots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    'max-video-preview': -1,
    'max-image-preview': 'large'
  }
}

export const openGraph: OpenGraph = {
  type: 'website',
  url: siteUrl,
  title: siteSettings.title,
  description: siteSettings.description,
  siteName: siteSettings.name,
  images: [
    {
      url: '/og-image.png'
    }
  ]
}

export const twitter: Twitter = {
  card: 'summary_large_image',
  site: siteSettings.creator,
  creator: siteSettings.creator,
  title: siteSettings.title,
  description: siteSettings.description,
  images: ['/og-image.png']
}

export const siteMetadata: Metadata = {
  // https://dequeuniversity.com/rules/axe/4.7/meta-viewport
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 3
  },
  category: 'technology',
  title: siteSettings.title,
  description: siteSettings.description,
  keywords: siteSettings.keywords,
  publisher: siteSettings.creator,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/'
  },
  icons,
  robots,
  openGraph,
  twitter,
  verification: {
    other: {
      // 'msvalidate.01': '8C4A5C5044C69129C4355BCC538281EC',
    }
  }
}
