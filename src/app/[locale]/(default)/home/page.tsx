import { Metadata } from 'next'

import { PageLocaleProp } from '@/types/page'

import { getDictionary } from '@/utils/dictionaries'
import {
  getPageMetadata,
  truncateMetaDescription,
} from '@/utils/metadata-utils'

import { HomePage } from '@/features/home/home-page'

export async function generateMetadata(
  props: PageLocaleProp,
): Promise<Metadata> {
  const { locale } = await props.params

  const dict = await getDictionary(locale)
  return getPageMetadata({
    locale,
    path: '/home',
    title: dict.den.home.meta.title,
    description: truncateMetaDescription(dict.den.home.meta.description),
  })
}

export default async function Page(props: PageLocaleProp) {
  const { locale } = await props.params

  return <HomePage locale={locale} />
}
