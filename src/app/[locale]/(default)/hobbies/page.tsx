import { Metadata } from 'next'

import { PageLocaleProp } from '@/types/page'

import { getDictionary } from '@/utils/dictionaries'
import {
  getPageMetadata,
  truncateMetaDescription,
} from '@/utils/metadata-utils'

import HobbiesPage from '@/features/hobbies/hobbies-page'

import { siteSettings } from '@/config/site-config'

export async function generateMetadata(
  props: PageLocaleProp,
): Promise<Metadata> {
  const { locale } = await props.params

  const dict = await getDictionary(locale)
  return getPageMetadata({
    locale,
    path: '/hobbies',
    title: `${dict.hobbies.headline} — 3D Printing, RC & DIY | ${siteSettings.name}`,
    description: truncateMetaDescription(
      `${dict.hobbies.intro} ${dict.hobbies.print3d.description}`,
    ),
  })
}

export default async function Page(props: PageLocaleProp) {
  const { locale } = await props.params
  const dict = await getDictionary(locale)

  return <HobbiesPage dict={dict} />
}
