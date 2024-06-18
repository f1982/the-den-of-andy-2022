import { Metadata } from 'next'

import { PageLocaleProp } from '@/types/page'
import Link from 'next/link'

import { getDictionary } from '@/utils/dictionaries'

import PageRows from '@/components/atoms/page-rows'
import PageHero from '@/components/page/hero-image'
import SandwichHero from '@/components/page/hero-sandwich'
import { Button } from '@/components/ui/button'

import { getLocalPrefix } from '@/config/i18n'
import { siteMetadata } from '@/config/site-config'

import AndyBubbleImage from '@/assets/images/homepage-andy-bubbles.png'
import StudioImage from '@/assets/images/homepage-studio.png'

export async function generateMetadata({
  params: { locale },
}: PageLocaleProp): Promise<Metadata> {
  return {
    ...siteMetadata,
    title: 'Home',
    alternates: {
      canonical: getLocalPrefix(locale) + '/home',
    },
  }
}

export default async function Page({ params: { locale } }) {
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
                <Link href="/about" passHref legacyBehavior>
                  <Button className="bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground">
                    {dict.home.intro.button1}
                  </Button>
                </Link>
                <Link href="/project" passHref legacyBehavior>
                  <Button variant={'default'}>{dict.home.intro.button2}</Button>
                </Link>
              </div>
            }
          />
        </div>
      </PageRows>
    </>
  )
}
