import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

import PageRows from '@/components/atoms/page-rows'
import SmallText from '@/components/page/SmallText'
import PageHero from '@/components/page/hero-image'
import PageTitle from '@/components/page/page-title'

import { getAge } from '@/features/about/utils/date.utils'

import { getDictionary } from '../../dictionaries'

export default async function About({ params: { locale } }) {
  const dict = await getDictionary(locale) // en
  return (
    <>
      <PageRows withMargin>
        <PageHero image="/static/images/Search--5ec7b86001d0360016d490a6.png" />

        <div className="container">
          <PageTitle
            title={dict.about.headline}
            description={dict.about.description}
          />
          <SmallText
            image="/static/images/about-andy-back.jpg"
            title={dict.about.whoIsAndyTitle}
            description={dict.about.whoIsAndyDescription}
          />
          <SmallText
            image="/static/images/about-computer.jpg"
            title={dict.about.whatAndyDoTitle}
            description={dict.about.whatAndyDoDescription}
          />
          <SmallText
            image="/static/images/about-andy-family.jpg"
            title={dict.about.familyTitle}
            description={String(dict.about.familyDescription).replace(
              '$AGE_OF_ZOE$',
              getAge('2016-06-01').toString(),
            )}
          />
        </div>
      </PageRows>
    </>
  )
}
