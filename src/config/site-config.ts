import { Metadata } from 'next'

import { Robots } from 'next/dist/lib/metadata/types/metadata-types'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

export const siteHostname = 'andycao.me'
export const siteUrl = `https://${siteHostname}`
export const cdnUrl = `https://raw.githubusercontent.com/f1982/planet-of-images/main/andycao-24`

export const slogan = `Open to everything and attach to nothing`

export const socialProfiles = [
  'https://twitter.com/iandycao',
  'https://www.youtube.com/channel/UCja8b7EiKdWoSKeUicboVhg',
  'https://www.instagram.com/iandycao/',
  'https://www.facebook.com/andycao1982',
]

export const siteSettings = {
  name: 'The Den of Andy',
  url: siteUrl,
  title: 'The Den of Andy',
  description:
    'The personal website and blog of Andy Cao, a software developer in Auckland, New Zealand.',
  keywords:
    'Andy Cao, software developer Auckland, frontend developer, React, React Native, TypeScript, JavaScript, web development, mobile apps, 3D printing, RC hobbies, DIY, open source',
  author: 'Andy Cao',
  creator: 'Andy Cao',
  email: 'caojundan@gmail.com',
}

// Add icon image in public folder
const icons = {
  icon: '/favicon-32x32.png',
  shortcut: '/favicon.ico',
  apple: '/apple-touch-icon.png',
  favicon: '/favicon.ico',
}

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
  locale: 'en_NZ',
  images: [
    {
      url: `${siteUrl}/og-image-1200x627.png`,
      width: 1200,
      height: 627,
      alt: 'The Den of Andy — the personal website of Andy Cao',
    },
  ],
}

export const twitter: Twitter = {
  card: 'summary_large_image',
  site: '@iandycao',
  creator: '@iandycao',
  title: siteSettings.title,
  description: siteSettings.description,
  images: [`${siteUrl}/og-image-1200x627.png`],
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
  authors: [{ name: siteSettings.author, url: siteUrl }],
  creator: siteSettings.creator,
  publisher: siteSettings.author,
  metadataBase: new URL(siteUrl),
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
