import { t } from 'i18next';
import Link from 'next/link';
import React from 'react';
import MyButton from '../components/atoms/buttons/Button';
import YouTubeIcon from '../components/atoms/Icons/YouTubeIcon';
import Typography from '../components/atoms/typography/Typography';
import TabTitle from '../components/molecules/seo/SiteSEO';
import Hero from '../components/organisms/blocks/Hero';
import PageHero from '../components/organisms/blocks/PageHero';
import HighlightProjectItem from '../features/Project/HighlightProjectItem';

function LastProjects() {
  return (
    <>
      <Typography variant="h2" as="h1" className="text-center">Latest Projects</Typography>
      <div className="flex flex-col items-center" style={{ rowGap: '2rem', marginTop: '2rem' }}>
        <HighlightProjectItem
          id="114"
          title="Bluetooth Auto Blinder System"
          cover="https://raw.githubusercontent.com/f1982/planet-of-images/main/img/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg"
          type="test"
          description="Watch believe send must. Majority hit lay become impact opportunity ask. Story art single item."
          platform="iOS, web, Android, Other"
        />
      </div>
    </>
  );
}

function YouTubeChannelSection() {
  return (
    <div className="container mx-auto mb-20 flex flex-col items-center text-center">
      <Typography variant="h2">My YouTube Channel</Typography>
      <Typography variant="body" className="w-full md:w-1/2">I setup my YouTube channel for recording something I have learnt and share something interesting</Typography>
      <div className="mt-8">
        <a href="https://youtube.com/AndyCaoisme" title="Andy YouTube Channel">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M107.715 32.49C110 41.4 110 60 110 60C110 60 110 78.6 107.715 87.51C106.445 92.435 102.73 96.31 98.025 97.62C89.48 100 60 100 60 100C60 100 30.535 100 21.975 97.62C17.25 96.29 13.54 92.42 12.285 87.51C10 78.6 10 60 10 60C10 60 10 41.4 12.285 32.49C13.555 27.565 17.27 23.69 21.975 22.38C30.535 20 60 20 60 20C60 20 89.48 20 98.025 22.38C102.75 23.71 106.46 27.58 107.715 32.49V32.49ZM50 77.5L80 60L50 42.5V77.5Z" fill="#DD0000" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function Home(): React.ReactNode {
  return (
    <>
      <TabTitle pageTitle={t('home.pageTitle')} />
      {/* <PageHero>
        <ModelWithContainer />
      </PageHero> */}
      <PageHero image="/static/images/voxel-home.png" className="mb-8 md:mb-16" />

      {/* <ColumnHero
        image="/static/images/andy-with-bubbles.png"
        title={t('home.intro.greeting')}
        subtitle={t('home.intro.role')}
        description={t('home.intro.description')}
        buttons={(
          <>
            <MyButton type="primary">{t('home.intro.button1')}</MyButton>
            <MyButton type="secondary">{t('home.intro.button2')}</MyButton>
          </>
        )}
      /> */}
      <Hero
        className="mb-8 md:mb-16"
        image="/static/images/andy-with-bubbles.png"
        title={t('home.intro.greeting')}
        subtitle={t('home.intro.role')}
        description={t('home.intro.description')}
        buttons={(
          <div className="flex gap-x-3">
            <Link href="/about" passHref>
              <MyButton
                type="primary"
              >
                {t('home.intro.button1')}
              </MyButton>
            </Link>
            <Link href="/project" passHref>
              <MyButton type="secondary">{t('home.intro.button2')}</MyButton>
            </Link>
          </div>
        )}
      />

      <div className="container mx-auto mb-8 md:mb-16">
        <Typography variant="h2" as="h1" className="text-center">Working on</Typography>
        <div className="text-center flex flex-row justify-center mb-8">
          <div className="w-6 mr-2"><YouTubeIcon /></div>
          <Typography variant="body">Video: How I build my WFH setups tour 2022</Typography>
        </div>
      </div>
      <div className="container mx-auto mb-8 md:mb-16">
        <LastProjects />
      </div>
      <div className="container mx-auto">
        <YouTubeChannelSection />
      </div>
    </>
  );
}

export default Home;
