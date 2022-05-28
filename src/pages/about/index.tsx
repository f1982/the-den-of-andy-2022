import { t } from 'i18next';
import React from 'react';
import Headline from '../../components/atoms/typography/Headline';
import SmallText from '../../components/organisms/blocks/SmallText';
import TabTitle from '../../components/molecules/seo/SiteSEO';
import Submenu from '../../components/molecules/submenu/Submenu';
import { aboutSubmenu } from '../../constants/menuData';
import PageHero from '../../components/organisms/blocks/PageHero';
import { getAge } from '../../utils/date.utils';
import Typography from '../../components/atoms/typography/Typography';

export default function About() {
  return (
    <>
      <TabTitle pageTitle={t('about.pageTitle')} />
      <PageHero image="/static/images/man-with-beard.png" />

      <div className="container mx-auto">

        <div className="flex flex-col items-center justify-center mb-[3rem]">
          <Typography variant="h1" as="h1" highlight>{t('about.headline')}</Typography>
          <Typography variant="body" as="div" className="inline mb-[3rem]">{t('about.intro')}</Typography>
          <Submenu items={aboutSubmenu} />
        </div>

        <SmallText
          image="/static/images/about-andy-back.jpg"
          title={t('about.whoIsAndyTitle')}
          description={t('about.whoIsAndyDescription')}
        />
        <SmallText
          image="/static/images/about-computer.jpg"
          title={t('about.whatAndyDoTitle')}
          description={t('about.whatAndyDoDescription')}
        />
        <SmallText
          image="/static/images/about-andy-family.jpg"
          title={t('about.familyTitle')}
          description={String(t('about.familyDescription')).replace('$AGE_OF_ZOE$', getAge('2016-06-01').toString())}
        />
      </div>
    </>
  );
}
