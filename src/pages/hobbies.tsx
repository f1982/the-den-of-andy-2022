import { t } from 'i18next';
import React from 'react';
import Headline from '../components/Typography/Headline';
import ColumnHero from '../components/Blocks/ColumnHero';
import Hero from '../components/Blocks/Hero';
import TabTitle from '../components/Metadata/SiteSEO';
import MyButton from '../components/Button/Button';

export default function About() {
  return (
    <>
      <TabTitle pageTitle={t('hobbies.pageTitle')} />
      <div className="container mx-auto">
        <Headline title={t('hobbies.headline')} />
        <Hero
          image="/static/images/hobby-rc-cover.jpg"
          title={t('hobbies.rc.title')}
          description={t('hobbies.rc.description')}
          buttons={(
            <div className="flex gap-x-3">
              <MyButton type="primary">{t('hobbies.rc.button1')}</MyButton>
              <MyButton type="secondary">{t('hobbies.rc.button2')}</MyButton>
            </div>
          )}
        />
        <ColumnHero />
        <Hero
          image="/static/images/hobby-cover-video.png"
          title={t('hobbies.video.title')}
          description={t('hobbies.video.description')}
          buttons={(
            <div className="flex gap-x-3">
              <MyButton type="primary">{t('hobbies.video.button1')}</MyButton>
              <MyButton type="secondary">{t('hobbies.video.button2')}</MyButton>
            </div>
          )}
        />
      </div>
    </>

  );
}
