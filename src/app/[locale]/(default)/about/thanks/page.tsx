import { getDictionary } from '@/app/[locale]/dictionaries'

import PageRows from '@/components/atoms/page-rows'
import PageHero from '@/components/page/hero-image'
import PageTitle from '@/components/page/page-title'

import { imageUrl } from '@/config/site-config'

export default async function Thanks({ params: { locale } }) {
  const dict = await getDictionary(locale) // en
  return (
    <>
      <PageRows withMargin>
        <PageHero
          image={imageUrl + '/Newsletter--5ec7b84201d0360016d49078.png'}
        />

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
