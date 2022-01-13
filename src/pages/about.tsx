import { t } from 'i18next';
import React from 'react';
import Headline from '../components/Headline';
import Container from '../components/Layout/container';
import SmallText from '../components/Paragraph/SmallText';
import TabTitle from '../components/TabTitle';

const getYears = (birthYear: number) => {
  const d = new Date();
  const n = d.getFullYear();
  return n - birthYear;
};

export default function About() {
  return (
    <>
      <TabTitle i18nTitle="about.pageTitle" />
      <Container>
        <Headline title={t('about.headline')} />

        <SmallText
          image="/static/images/about-andy-back.jpg"
          title={t('about.whoIsAndyTitle')}
          description={t('about.whoIsAndyDescription')}
        />
        <SmallText
          title={t('about.whatAndyDoTitle')}
          description={t('about.whatAndyDoDescription')}
        />
        <SmallText
          title={t('about.familyTitle')}
          description={String(t('about.familyDescription')).replace('$AGE_OF_ZOE$', getYears(2016).toString())}
        />
      </Container>
    </>
  );
}
