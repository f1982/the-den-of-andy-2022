import Link from 'next/link'

import PageRows from '@/components/atoms/page-rows'
import PageHero from '@/components/page/hero-image'
import SandwichHero from '@/components/page/hero-sandwich'
import { Button } from '@/components/ui/button'

import { imageUrl, siteMetadata } from '@/config/site-config'

import { getDictionary } from '../../dictionaries'

export const metadata = { ...siteMetadata }

export default async function Page({ params: { locale } }) {
  const dict = await getDictionary(locale)
  return (
    <>
      <PageRows withMargin>
        <PageHero image={imageUrl + '/page-hero-workspace.png'} />
        <div className="container">
          <SandwichHero
            className="mb-16 md:mb-24"
            image={imageUrl + '/andy-with-bubbles.png'}
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

        {/* <ProjectWorkingOn /> */}

        {/* <YouTubeChannelSection /> */}
      </PageRows>
    </>
  )
}
