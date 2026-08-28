import { Metadata } from 'next'

import { getLocalizedAlternates, getLocalPrefix } from '@/config/i18n'
import {
  openGraph,
  siteMetadata,
  siteSettings,
  siteUrl,
  twitter,
} from '@/config/site-config'

type PageMetadataOptions = {
  locale: string
  path: string
  title: string
  description: string
  keywords?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString()
}

function absoluteImageUrl(image: string) {
  return absoluteUrl(image)
}

/**
 * Build route-aware metadata so canonical, Open Graph, Twitter and hreflang
 * all refer to the same localized URL.
 */
export function getPageMetadata({
  locale,
  path,
  title,
  description,
  keywords,
  image = '/og-image-1200x627.png',
  type = 'website',
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const localizedUrl = absoluteUrl(
    `${getLocalPrefix(locale)}${path === '/' ? '' : path}`,
  )
  const imageUrl = absoluteImageUrl(image)

  return {
    ...siteMetadata,
    title: { absolute: title },
    description,
    ...(keywords ? { keywords } : {}),
    alternates: getLocalizedAlternates(locale, path),
    openGraph: {
      ...openGraph,
      type,
      url: localizedUrl,
      title,
      description,
      locale: locale === 'zh-CN' ? 'zh_CN' : 'en_NZ',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 627,
          alt: `${title} — ${siteSettings.name}`,
        },
      ],
      ...(type === 'article'
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            authors: [siteSettings.author],
          }
        : {}),
    },
    twitter: {
      ...twitter,
      title,
      description,
      images: [imageUrl],
    },
  }
}

export function truncateMetaDescription(value: string, maxLength = 160) {
  const normalized = value.replace(/\s+/g, ' ').trim()
  if (normalized.length <= maxLength) return normalized
  return `${normalized.slice(0, maxLength - 1).trimEnd()}…`
}
