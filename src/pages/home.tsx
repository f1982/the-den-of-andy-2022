import { t } from 'i18next';
import React from 'react';
import MyButton from '../components/atoms/buttons/Button';
import TabTitle from '../components/molecules/seo/SiteSEO';
import { Suzanna } from '../components/organisms/3d/RotatingWatch.stories';
import ColumnHero from '../components/organisms/blocks/ColumnHero';
import PageHero from '../components/organisms/blocks/PageHero';
import SelfIntroShort from '../components/organisms/blocks/SelfIntroShort';
import HighlightProjectItem from '../features/Project/HighlightProjectItem';

function Home(): React.ReactNode {
  return (
    <>
      <TabTitle pageTitle={t('home.pageTitle')} />
      <PageHero>
        <Suzanna />
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
      <div className="container mx-auto">

        <HighlightProjectItem
          id="114"
          title="Bluetooth Auto Blinder System"
          cover="https://raw.githubusercontent.com/f1982/planet-of-images/main/img/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg"
          type="test"
          platform="iOS"
        />
      </div>
      <div className="container mx-auto">
        <SelfIntroShort />
      </div>
    </>
  );
}

export default Home;
