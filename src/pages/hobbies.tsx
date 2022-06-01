import { t } from 'i18next';
import React from 'react';
import MyButton from '../components/atoms/buttons/Button';
import Typography from '../components/atoms/typography/Typography';
import TabTitle from '../components/molecules/seo/SiteSEO';
import ColumnHero from '../components/organisms/blocks/ColumnHero';
import Hero from '../components/organisms/blocks/Hero';
import PageHero from '../components/organisms/blocks/PageHero';
import PageTitle from '../components/organisms/blocks/PageTitle';

export default function About() {
  return (
    <>
      <TabTitle pageTitle={t('hobbies.pageTitle')} />
      <PageHero image="/static/images/equipments.png" />
      <div className="container mx-auto">
        {/* title and intro */}
        <PageTitle title={t('hobbies.headline')} description={t('hobbies.intro')} />
        {/* rc hobby */}
        <Hero
          className="mb-20"
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
        {/* drawing */}
        <ColumnHero
          className="mb-20"
          image="/static/images/hobby-drawing-cover.jpg"
          title={t('hobbies.drawing.title')}
          description={t('hobbies.drawing.description')}
          buttons={(
            <div className="flex gap-x-3">
              <MyButton type="primary">{t('hobbies.drawing.button1')}</MyButton>
              <MyButton type="secondary">{t('hobbies.drawing.button2')}</MyButton>
            </div>
          )}
        />
        {/* video editing */}
        <Hero
          className="mb-20"
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
