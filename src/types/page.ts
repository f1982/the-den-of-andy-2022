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
  params: Promise<{ slug: string }>
}

export interface PageIdProps {
  params: Promise<{ slug: string }>
}

export interface PageLocaleProp {
  params: Promise<{ locale: string }>
}

export interface PageLocaleSlugProp {
  params: Promise<{ locale: string; slug: string }>
}
