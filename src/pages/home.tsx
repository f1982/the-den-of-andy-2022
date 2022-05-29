import { t } from 'i18next';
import React from 'react';
import MyButton from '../components/atoms/buttons/Button';
import Typography from '../components/atoms/typography/Typography';
import TabTitle from '../components/molecules/seo/SiteSEO';
import ModelWithContainer from '../components/organisms/3d/RoomModel';
import ColumnHero from '../components/organisms/blocks/ColumnHero';
import PageHero from '../components/organisms/blocks/PageHero';
import HighlightProjectItem from '../features/Project/HighlightProjectItem';

function Home(): React.ReactNode {
  return (
    <>
      <TabTitle pageTitle={t('home.pageTitle')} />
      <PageHero>
        <ModelWithContainer />
      </PageHero>
      <ColumnHero
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
      />
      <div className="container mx-auto mt-20">
        <Typography variant="h2" as="h1">Latest Projects</Typography>
        <div className="flex flex-col" style={{ rowGap: '2rem', marginTop: '2rem' }}>
          <HighlightProjectItem
            id="114"
            title="Bluetooth Auto Blinder System"
            cover="https://raw.githubusercontent.com/f1982/planet-of-images/main/img/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg"
            type="test"
            platform="iOS, web, Android, Other"
          />
          <HighlightProjectItem
            id="115"
            title="Bluetooth Auto Blinder System"
            cover="https://raw.githubusercontent.com/f1982/planet-of-images/main/img/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg"
            type="test"
            platform="iOS"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <Typography variant="h2" as="h1">Video</Typography>
      </div>
    </>
  );
}

export default Home;
