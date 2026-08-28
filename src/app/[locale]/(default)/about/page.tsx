import { Metadata } from 'next'

import { PageLocaleProp } from '@/types/page'

import { getDictionary } from '@/utils/dictionaries'

import SmallText from '@/components/sections/about-section'
import PageHero from '@/components/sections/hero-image'
import PageTitle from '@/components/sections/page-title'
import PageRows from '@/components/shared/page-rows'

import { getAge } from '@/features/about/utils/date.utils'

import { getPageMetadata, truncateMetaDescription } from '@/utils/metadata-utils'
import { siteSettings } from '@/config/site-config'

import AndyImage from '@/assets/images/about-andy-illustration.png'
import ComputerImage from '@/assets/images/about-computer-illustration.png'
import FamilyImage from '@/assets/images/about-family-illustration.png'
import HeroImage from '@/assets/images/about-hero-image.png'

export async function generateMetadata(props: PageLocaleProp): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  const dict = await getDictionary(locale)
  return getPageMetadata({
    locale,
    path: '/about',
    title: `${dict.about.headline} Andy Cao — Software Developer | ${siteSettings.name}`,
    description: truncateMetaDescription(
      `${dict.about.description} ${dict.about.whoIsAndyDescription}`,
    ),
  })
}

export default async function About(props) {
  const params = await props.params;

  const {
    locale
  } = params;

  const dict = await getDictionary(locale)

  return (
    <>
      <PageRows withMargin>
        <PageHero image={HeroImage} alt="Illustration of Andy Cao" />

        <div className="container">
          <PageTitle
            title={dict.about.headline}
            description={dict.about.description}
          />
          <SmallText
            image={AndyImage}
            title={dict.about.whoIsAndyTitle}
            description={dict.about.whoIsAndyDescription}
          />
          <SmallText
            image={ComputerImage}
            title={dict.about.whatAndyDoTitle}
            description={dict.about.whatAndyDoDescription}
          />
          <SmallText
            image={FamilyImage}
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
