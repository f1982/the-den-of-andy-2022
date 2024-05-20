import React from 'react'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import PageRows from '@/components/atoms/page-rows'
import Prose from '@/components/atoms/prose'
import PageHero from '@/components/page/hero-image'
import SandwichHero from '@/components/page/hero-sandwich'
import { Button } from '@/components/ui/button'

import LatestProjectItemView from '@/features/project/components/latest-project-item'
import ProjectWorkingOn from '@/features/project/components/project-working-on'

import { YouTubeURL } from '@/config/links'
import { siteMetadata } from '@/config/site-config'

export const metadata = { ...siteMetadata }

const LatestProjectImageURL =
  'https://raw.githubusercontent.com/f1982/planet-of-images/main/img/latest-project-wfh-setup-2022.png'

const LastProjects: React.FC = () => {
  const t = useTranslations('home')
  return (
    <div className="container">
      <Prose>
        <h2>{t('p2.title')}</h2>
        <p>{t('p2.description')}</p>
      </Prose>
      <Link id="test" href="/blog/my-wfh-desk-setups-2022" legacyBehavior>
        <LatestProjectItemView
          title="My desktop setups for WFH 2022"
          cover={LatestProjectImageURL}
          description="Last year, I was WFH for most of time, that made me to reconsider my desktop setups and working environment at  I did some research, DIY some gadgets, bought some LED strips, two monitors, monitor stands, mechanical keyboard and new mouse. Iteratively to change the layout and re-organize the cables. It was a such great time to rethinking how the setups and arrangements can affect my daily work and productivity."
          platform="Article,Video"
        />
      </Link>
    </div>
  )
}

const YouTubeChannelSection: React.FC = () => (
  <div className="flex flex-col items-center text-center">
    <Prose>
      <h2>My YouTube Channel</h2>
      <p>
        I setup my YouTube channel for recording something I have learnt and
        share something interesting
      </p>
    </Prose>
    <div className="mt-8">
      <a
        href={YouTubeURL}
        aria-label="youtube channel"
        title="Andy YouTube Channel">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M107.715 32.49C110 41.4 110 60 110 60C110 60 110 78.6 107.715 87.51C106.445 92.435 102.73 96.31 98.025 97.62C89.48 100 60 100 60 100C60 100 30.535 100 21.975 97.62C17.25 96.29 13.54 92.42 12.285 87.51C10 78.6 10 60 10 60C10 60 10 41.4 12.285 32.49C13.555 27.565 17.27 23.69 21.975 22.38C30.535 20 60 20 60 20C60 20 89.48 20 98.025 22.38C102.75 23.71 106.46 27.58 107.715 32.49V32.49ZM50 77.5L80 60L50 42.5V77.5Z"
            fill="#DD0000"
          />
        </svg>
      </a>
    </div>
  </div>
)

const Home: React.FC = () => {
  const t = useTranslations('home')
  return (
    <>
      <PageRows withMargin>
        <PageHero image="/static/images/page-hero-workspace.png" />
        <div className="container">
          <SandwichHero
            className="mb-16 md:mb-24"
            image="/static/images/andy-with-bubbles.png"
            title={t('intro.greeting')}
            subtitle={t('intro.role')}
            description={t('intro.description')}
            buttons={
              <div className="flex gap-x-6">
                <Link href="/about" passHref legacyBehavior>
                  <Button className="bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground">
                    {t('intro.button1')}
                  </Button>
                </Link>
                <Link href="/project" passHref legacyBehavior>
                  <Button variant={'default'}>{t('intro.button2')}</Button>
                </Link>
              </div>
            }
          />
        </div>

        <LastProjects />
        <ProjectWorkingOn />

        <YouTubeChannelSection />
      </PageRows>
    </>
  )
}

export default Home
