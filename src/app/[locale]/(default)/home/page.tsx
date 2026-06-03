import { Metadata } from 'next'

import { PageLocaleProp } from '@/types/page'
import Link from 'next/link'

import { getDictionary } from '@/utils/dictionaries'

import PageHero from '@/components/sections/hero-image'
import SandwichHero from '@/components/sections/hero-sandwich'
import PageRows from '@/components/shared/page-rows'
import { Button } from '@/components/ui/button'

import { getLocalPrefix } from '@/config/i18n'
import { siteMetadata } from '@/config/site-config'

import AndyBubbleImage from '@/assets/images/homepage-andy-bubbles.png'
import StudioImage from '@/assets/images/homepage-studio.png'

export async function generateMetadata(props: PageLocaleProp): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  return {
    ...siteMetadata,
    title: 'Home',
    alternates: {
      canonical: getLocalPrefix(locale) + '/home',
    },
  }
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
        <PageHero image={StudioImage} />
        <div className="container">
          <SandwichHero
            className="mb-16 md:mb-24"
            image={AndyBubbleImage}
            title={dict.home.intro.greeting}
            subtitle={dict.home.intro.role}
            description={dict.home.intro.description}
            buttons={
              <div className="flex gap-x-6">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground">
                  <Link href="/about">{dict.home.intro.button1}</Link>
                </Button>
                <Button asChild variant={'default'}>
                  <Link href="/project">{dict.home.intro.button2}</Link>
                </Button>
              </div>
            }
          />
        </div>
      </PageRows>
    </>
  )
}
