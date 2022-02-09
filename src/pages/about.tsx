import { t } from 'i18next';
import React from 'react';
import Headline from '../components/Headline';
import Container from '../components/Layout/container';
import SmallText from '../components/Paragraph/SmallText';
import TabTitle from '../components/SiteSEO';

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
}

export default function About() {
  return (
    <>
      <TabTitle pageTitle={t('about.pageTitle')} />
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
          description={String(t('about.familyDescription')).replace('$AGE_OF_ZOE$', getAge('2016-06-01').toString())}
        />
      </Container>
    </>
  );
}
