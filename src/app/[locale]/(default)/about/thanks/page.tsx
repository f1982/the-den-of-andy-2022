import PageRows from '@/components/atoms/page-rows'
import PageHero from '@/components/page/hero-image'
import PageTitle from '@/components/page/page-title'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Image from 'next/image'

export default function Thanks({ params: { locale } }) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('about')
  return (
    <>
      <PageRows withMargin>
        <PageHero image="/static/images/Newsletter--5ec7b84201d0360016d49078.png" />

        <div className="container">
          <PageTitle title={'Thanks'} description={'The resource I used.'} />
          <ul>
            <li>Libraries: Next.js</li>
            <li>
              Theme generator:
              https://zippystarter.com/tools/shadcn-ui-theme-generator
            </li>
            <li>
              Illustrations:
              https://www.figma.com/community/file/1085475586797122351/free-pixeltrue-illustrations-in-png-and-svg
            </li>
          </ul>
        </div>
      </PageRows>
    </>
  )
}