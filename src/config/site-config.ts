import { Metadata } from 'next'

import { Robots } from 'next/dist/lib/metadata/types/metadata-types'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

export const siteHostname = 'andycao.me'
export const siteUrl = `https://${siteHostname}`
export const cdnUrl = `https://raw.githubusercontent.com/f1982/planet-of-images/main/andycao-24`

export const slogan = `Open to everything and attach to nothing`

export const siteSettings = {
  name: 'The Den of Andy',
  url: siteUrl,
  title: 'The Den of Andy',
  description: 'This is my personal website and blog',
  keywords:
    'andy cao, personal website, blog, portfolio, web developer, app developer, javascript, typescript, react, nextjs, tailwindcss, rc hobbies, 3d printing, arduino, open source, open source enthusiast, open source software, open source software enthusiast',
  author: 'Andy Cao',
  creator: '@andycaonz@gmail.com',
}

// Add icon image in public folder
const icons = {
  icon: '/icon.png',
  shortcut: '/icon.png',
  apple: '/apple-icon.png',
  favicon: '/favicon.ico',
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
    'max-image-preview': 'large',
  },
}

export const openGraph: OpenGraph = {
  type: 'website',
  url: siteUrl,
  title: siteSettings.title,
  description: siteSettings.description,
  siteName: siteSettings.name,
  images: [
    {
      url: '/og-image.png',
    },
  ],
}

export const twitter: Twitter = {
  card: 'summary_large_image',
  site: siteSettings.creator,
  creator: siteSettings.creator,
  title: siteSettings.title,
  description: siteSettings.description,
  images: ['/og-image.png'],
}

export const siteMetadata: Metadata = {
  // https://dequeuniversity.com/rules/axe/4.7/meta-viewport
  // viewport: {
  //   width: 'device-width',
  //   initialScale: 1,
  //   maximumScale: 3
  // },
  category: 'technology',
  title: siteSettings.title,
  description: siteSettings.description,
  keywords: siteSettings.keywords,
  publisher: siteSettings.creator,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  icons,
  robots,
  openGraph,
  twitter,
  verification: {
    other: {
      'msvalidate.01': '8C4A5C5044C69129C4355BCC538281EC',
    },
  },
}

export const GoogleAnalyticsID = 'G-QSHYKJVT4S'
