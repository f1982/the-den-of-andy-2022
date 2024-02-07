import YouTubeIcon from '../../../../../src-backup/components/atoms/Icons/YouTubeIcon'
import Button from '../../../../../src-backup/components/atoms/buttons/Button'
import Typography from '../../../../../src-backup/components/atoms/typography/Typography'
import Hero from '../../../../../src-backup/components/organisms/blocks/Hero'
import LatestProject from '../../../../../src-backup/features/Project/LatestProject'
import PageHero from '../../../../components/page/PageHero'
import { YouTubeURL } from '../../../../config/links'
import { t } from 'i18next'
import Link from 'next/link'
import React from 'react'

// lazy load 3d model and library will save about 5m
// const ModelWithContainer = dynamic<any>(
//   () => import('../components/organisms/3d/RoomModel'),
//   {
//     ssr: false
//   }
// )

const WorkingOn: React.FC = () => (
  <div className="flex flex-col items-center text-center">
    <Typography variant="h2">Working on</Typography>
    <div className="flex flex-row justify-center">
      <div className="w-6 mr-2">
        <YouTubeIcon />
      </div>
      <Typography variant="body">
        Video: How I build my WFH setups tour 2022
      </Typography>
    </div>
  </div>
)

const LatestProjectImageURL =
  'https://raw.githubusercontent.com/f1982/planet-of-images/main/img/latest-project-wfh-setup-2022.png'

const LastProjects: React.FC = () => (
  <>
    <Typography
      variant="h2"
      className="text-center"
      style={{ marginBottom: '2rem' }}>
      Latest Projects
    </Typography>
    <div className="flex flex-col items-center">
      <Link id="test" href="/blog/my-wfh-desk-setups-2022" legacyBehavior>
        <button aria-label="last project" type="button">
          <LatestProject
            title="My desktop setups for WFH 2022"
            cover={LatestProjectImageURL}
            description="Last year, I was WFH for most of time, that made me to reconsider my desktop setups and working environment at home. I did some research, DIY some gadgets, bought some LED strips, two monitors, monitor stands, mechanical keyboard and new mouse. Iteratively to change the layout and reorganise the cables. It was a such great time to rethinking how the setups and arrangements can affect my daily work and productivity."
            platform="Article,Video"
          />
        </button>
      </Link>
      {/* can add other one */}
    </div>
  </>
)

const YouTubeChannelSection: React.FC = () => (
  <div className="flex flex-col items-center text-center">
    <Typography variant="h2">My YouTube Channel</Typography>
    <Typography variant="body" className="w-full md:w-1/2">
      I setup my YouTube channel for recording something I have learnt and share
      something interesting
    </Typography>
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

const Home: React.FC = () => (
  <>
    <h1>home</h1>
    {/* <TabTitle pageTitle={t('home.pageTitle')} /> */}
    {/* <ModelWithContainer /> */}
    <PageHero
      image="/static/images/page-hero-workspace.png"
      className="mb-8 md:mb-16"
    />
    <Hero
      className="mb-16 md:mb-24"
      image="/static/images/andy-with-bubbles.png"
      title={t('home.intro.greeting')}
      subtitle={t('home.intro.role')}
      description={t('home.intro.description')}
      buttons={
        <div className="flex gap-x-3">
          <Link href="/about" passHref legacyBehavior>
            <Button type="primary">{t('home.intro.button1')}</Button>
          </Link>
          <Link href="/project" passHref legacyBehavior>
            <Button type="secondary">{t('home.intro.button2')}</Button>
          </Link>
        </div>
      }
    />
    <div className="container mx-auto mb-16 md:mb-24">
      <LastProjects />
    </div>
    <div className="container mx-auto mb-16 md:mb-24">
      <WorkingOn />
    </div>
    <div className="container mx-auto mb-16 md:mb-24">
      <YouTubeChannelSection />
    </div>
  </>
)

export default Home
