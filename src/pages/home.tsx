import { t } from 'i18next';
import React from 'react';
import Hero from '../components/Heros/Hero';
import Container from '../components/Layout/container';
import SelfIntroShort from '../components/Paragraph/SelfIntroShort';
import TabTitle from '../components/SiteSEO';

function Home(): React.ReactNode {
  return (
    <>
      <TabTitle pageTitle={t('home.pageTitle')} />
      <Container>
        <SelfIntroShort />
        <Hero />
      </Container>
    </>
  );
}

export default Home;
