import { Metadata } from 'next'

import { PageLocaleProp } from '@/types/page'
import Link from 'next/link'

import { getDictionary } from '@/utils/dictionaries'

import PageHero from '@/components/sections/hero-image'
import SandwichHero from '@/components/sections/hero-sandwich'
import PageRows from '@/components/shared/page-rows'
import { Button } from '@/components/ui/button'

import { localizedPath } from '@/utils/locale-path'
import { getPageMetadata, truncateMetaDescription } from '@/utils/metadata-utils'
import { siteSettings } from '@/config/site-config'

import AndyBubbleImage from '@/assets/images/homepage-andy-bubbles.png'
import StudioImage from '@/assets/images/homepage-studio.png'

export async function generateMetadata(props: PageLocaleProp): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  const dict = await getDictionary(locale)
  return getPageMetadata({
    locale,
    path: '/home',
    title: `${dict.home.intro.greeting} — ${dict.home.intro.role} | ${siteSettings.name}`,
    description: truncateMetaDescription(dict.home.intro.description),
  })
}

export default async function Page(props) {
  const params = await props.params;

  const {
    locale
  } = params;

  const dict = await getDictionary(locale)

  return (
    <>
      <PageRows withMargin>
        <PageHero image={StudioImage} alt="Andy's studio" />
        <div className="container">
          <SandwichHero
            className="mb-16 md:mb-24"
            image={AndyBubbleImage}
            title={dict.home.intro.greeting}
            subtitle={dict.home.intro.role}
            description={dict.home.intro.description}
            headingLevel={1}
            imageAlt="Andy Cao illustrated portrait"
            buttons={
              <div className="flex gap-x-6">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground">
                  <Link href={localizedPath(locale, '/about')}>
                    {dict.home.intro.button1}
                  </Link>
                </Button>
                <Button asChild variant={'default'}>
                  <Link href={localizedPath(locale, '/project')}>
                    {dict.home.intro.button2}
                  </Link>
                </Button>
              </div>
            }
          />
        </div>
      </PageRows>
    </>
  )
}
