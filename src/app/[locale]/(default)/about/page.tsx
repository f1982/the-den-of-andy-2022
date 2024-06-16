import { getDictionary } from '@/utils/dictionaries'

import PageRows from '@/components/atoms/page-rows'
import SmallText from '@/components/page/SmallText'
import PageHero from '@/components/page/hero-image'
import PageTitle from '@/components/page/page-title'

import { getAge } from '@/features/about/utils/date.utils'

import AndyImage from '@/assets/images/about-andy.jpg'
import ComputerImage from '@/assets/images/about-computer.jpg'
import FamilyImage from '@/assets/images/about-family.jpg'
import HeroImage from '@/assets/images/about-hero-image.png'

export default async function About({ params: { locale } }) {
  const dict = await getDictionary(locale)

  return (
    <>
      <PageRows withMargin>
        <PageHero image={HeroImage} />

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
