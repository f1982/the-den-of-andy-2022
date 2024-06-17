import { Icons } from 'next/dist/lib/metadata/types/metadata-types'

export type SiteSetting = {
  name: string
  url: string
  title: string
  description: string
  author: string
  creator: string
}

export type PageSetting = {
  route: string
  name: string
  title: string
  description: string
  keywords: string
  url: string
  icons?: Icons
  image?: string
}

export type PageSlugProp = {
  params: { slug: string }
}

export interface PageIdProps {
  params: { slug: string }
}
