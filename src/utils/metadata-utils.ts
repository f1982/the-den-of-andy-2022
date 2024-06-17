import { Metadata } from 'next'

import { PageSetting } from '@/types/page'
import { Icons } from 'next/dist/lib/metadata/types/metadata-types'

// Mix site settings and page sittings together for a page
export async function getPageMetadata(
  siteMetadata: Metadata,
  pageSetting: PageSetting,
): Promise<Metadata> {
  const metadata = {
    ...siteMetadata,
    title: pageSetting.title,
    description: pageSetting.description,
    keywords: pageSetting.keywords,
    icons: {
      ...(siteMetadata.icons as Icons),
      ...pageSetting.icons,
    },
    alternates: {
      canonical: pageSetting.url,
    },
    twitter: {
      ...siteMetadata.twitter,
      title: pageSetting.title,
      description: pageSetting.description,
      images: pageSetting.image,
    },
    openGraph: {
      ...siteMetadata.openGraph,
      title: pageSetting.title,
      description: pageSetting.description,
      images: pageSetting.image,
    },
  }
  return metadata
}
