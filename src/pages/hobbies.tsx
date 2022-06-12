import { t } from 'i18next';
import Link from 'next/link';
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
      <TabTitle pageTitle={t<string>('hobbies.pageTitle')} />
      <PageHero image="/static/images/equipments.png" />
      <div className="container mx-auto">
        {/* title and intro */}
        <PageTitle title={t<string>('hobbies.headline')} description={t<string>('hobbies.intro')} />
        {/* 3d printing */}
        <ColumnHero
          className="mb-16 md:mb-20"
          image="/static/images/3d-printing-ender-3-v2.png"
          title={t<string>('hobbies.print3d.title')}
          description={t<string>('hobbies.print3d.description')}
          direction="r2l"
          buttons={(
            <div className="flex">
              <Link href="https://www.thingiverse.com/iandycao/" passHref>
                <MyButton type="primary">{t<string>('hobbies.print3d.button1')}</MyButton>
              </Link>
            </div>
          )}
        />
        {/* rc hobby */}
        <Hero
          id="rc-hobby-id"
          className="mb-16 md:mb-20"
          image="/static/images/hobby-rc-cover.png"
          title={t<string>('hobbies.rc.title')}
          description={t<string>('hobbies.rc.description')}
          buttons={(
            <div className="flex gap-x-3">
              <MyButton type="primary">{t<string>('hobbies.rc.button1')}</MyButton>
              <MyButton type="secondary">{t<string>('hobbies.rc.button2')}</MyButton>
            </div>
          )}
        />
        {/* drawing */}
        <ColumnHero
          className="mb-16 md:mb-20"
          image="/static/images/hobby-drawing-cover.png"
          title={t<string>('hobbies.drawing.title')}
          description={t<string>('hobbies.drawing.description')}
          buttons={(
            <div className="flex gap-x-3">
              <MyButton type="primary">{t<string>('hobbies.drawing.button1')}</MyButton>
              <MyButton type="secondary">{t<string>('hobbies.drawing.button2')}</MyButton>
            </div>
          )}
        />
        {/* video editing */}
        <Hero
          className="mb-16 md:mb-20"
          image="/static/images/hobby-cover-video.png"
          title={t<string>('hobbies.video.title')}
          description={t<string>('hobbies.video.description')}
          buttons={(
            <div className="flex gap-x-3">
              <MyButton type="primary">{t<string>('hobbies.video.button1')}</MyButton>
              <MyButton type="secondary">{t<string>('hobbies.video.button2')}</MyButton>
            </div>
          )}
        />
      </div>
    </>
  );
}
