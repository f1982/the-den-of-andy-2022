import { t } from 'i18next';
import React from 'react';
import MyButton from '../components/atoms/buttons/Button';
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
        {/* drawing */}
        <ColumnHero
          className="mb-16 md:mb-20"
          image="/static/images/3d-printing-ender-3-v2.png"
          title={t('hobbies.drawing.title')}
          description={t('hobbies.drawing.description')}
          direction="r2l"
          buttons={(
            <div className="flex gap-x-3">
              <MyButton type="primary">{t('hobbies.drawing.button1')}</MyButton>
              <MyButton type="secondary">{t('hobbies.drawing.button2')}</MyButton>
            </div>
          )}
        />
        {/* rc hobby */}
        <Hero
          className="mb-16 md:mb-20"
          image="/static/images/hobby-rc-cover.png"
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
          className="mb-16 md:mb-20"
          image="/static/images/hobby-drawing-cover.png"
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
          className="mb-16 md:mb-20"
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
