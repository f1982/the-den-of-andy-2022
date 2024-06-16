import PageRows from '@/components/atoms/page-rows'
import SmallText from '@/components/page/SmallText'
import PageHero from '@/components/page/hero-image'
import PageTitle from '@/components/page/page-title'

import { getAge } from '@/features/about/utils/date.utils'

import { imageUrl } from '@/config/site-config'

import { getDictionary } from '../../dictionaries'

export default async function About({ params: { locale } }) {
  const dict = await getDictionary(locale)

  return (
    <>
      <PageRows withMargin>
        <PageHero image={imageUrl + '/Search--5ec7b86001d0360016d490a6.png'} />

        <div className="container">
          <PageTitle
            title={dict.about.headline}
            description={dict.about.description}
          />
          <SmallText
            image={imageUrl + '/about-andy-back.jpg'}
            title={dict.about.whoIsAndyTitle}
            description={dict.about.whoIsAndyDescription}
          />
          <SmallText
            image={imageUrl + '/about-computer.jpg'}
            title={dict.about.whatAndyDoTitle}
            description={dict.about.whatAndyDoDescription}
          />
          <SmallText
            image={imageUrl + '/about-andy-family.jpg'}
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
