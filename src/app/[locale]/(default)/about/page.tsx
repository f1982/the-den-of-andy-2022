import PageTitle from '@/components/organisms/blocks/PageTitle'
import SmallText from '@/components/organisms/blocks/SmallText'
import PageHero from '@/components/page/hero-image'
import { getAge } from '@/features/about/utils/date.utils'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('about')
  return (
    <>
      <PageHero image="/static/images/page-hero-memoji.png" />
      <div className="container mx-auto">
        <PageTitle title={t('headline')} description={t('description')} />
        <SmallText
          image="/static/images/about-andy-back.jpg"
          title={t('whoIsAndyTitle')}
          description={t('whoIsAndyDescription')}
        />
        <SmallText
          image="/static/images/about-computer.jpg"
          title={t('whatAndyDoTitle')}
          description={t('whatAndyDoDescription')}
        />
        <SmallText
          image="/static/images/about-andy-family.jpg"
          title={t('familyTitle')}
          description={String(t('familyDescription')).replace(
            '$AGE_OF_ZOE$',
            getAge('2016-06-01').toString(),
          )}
        />
      </div>
    </>
  )
}
