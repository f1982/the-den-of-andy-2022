import React from 'react';
import { t } from 'i18next';
import Hero from '../components/Heros/Hero';
import ColumnHero from '../components/Heros/ColumnHero';
import Headline from '../components/Headline';
import Container from '../components/Layout/container';
import TabTitle from '../components/TabTitle';

export default function About() {
  return (
    <>
      <TabTitle i18nTitle="hobbies.pageTitle" />
      <Container>
        <Headline title={t('hobbies.headline')} />
        <Hero />
        <ColumnHero />
        <Hero />
      </Container>
    </>

  );
}
