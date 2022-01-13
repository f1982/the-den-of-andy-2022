import React from 'react';
import Hero from '../components/Heros/Hero';
import Container from '../components/Layout/container';
import SelfIntroShort from '../components/Paragraph/SelfIntroShort';
import TabTitle from '../components/TabTitle';

function Home(): React.ReactNode {
  return (
    <>
      <TabTitle i18nTitle="home.pageTitle" />
      <Container>
        <SelfIntroShort />
        <Hero />
      </Container>
    </>
  );
}

export default Home;
