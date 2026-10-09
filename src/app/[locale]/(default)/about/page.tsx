import { Metadata } from 'next'

import { PageLocaleProp } from '@/types/page'

import { getDictionary } from '@/utils/dictionaries'
import {
  getPageMetadata,
  truncateMetaDescription,
} from '@/utils/metadata-utils'

import {
  FamilyChapter,
  WhatChapter,
  WhoChapter,
} from '@/features/about/components/about-chapters'
import { AboutContact } from '@/features/about/components/about-contact'
import { AboutHero } from '@/features/about/components/about-hero'
import { AboutStats } from '@/features/about/components/about-stats'
import { HistoryRuler } from '@/features/about/components/history-ruler'
import { getAge } from '@/features/about/utils/date.utils'

export async function generateMetadata(
  props: PageLocaleProp,
): Promise<Metadata> {
  const { locale } = await props.params
  const dict = await getDictionary(locale)
  const meta = dict.den.about.meta

  return getPageMetadata({
    locale,
    path: '/about',
    title: meta.title,
    description: truncateMetaDescription(meta.description),
  })
}

export default async function About(props: PageLocaleProp) {
  const { locale } = await props.params
  const dict = await getDictionary(locale)
  const about = dict.den.about

  return (
    <div className="overflow-x-clip">
      <AboutHero copy={about} />

      <div className="page-wrap">
        <AboutStats copy={about.stats} />
        <WhoChapter copy={about.who} />
        <WhatChapter
          copy={about.what}
          terminalTitle={dict.den.common.terminalTitle}
        />
        <FamilyChapter copy={about.family} zoeAge={getAge('2016-06-01')} />
        <HistoryRuler copy={about.history} />
      </div>

      <AboutContact
        copy={about.contact}
        opensInNewTab={dict.den.common.opensInNewTab}
        compactTitle={locale === 'zh-CN'}
      />
    </div>
  )
}
