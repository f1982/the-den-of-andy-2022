import Head from 'next/head';
import React from 'react';
import Hero from '../components/Heros/Hero';
import Container from '../components/Layout/container';
import SelfIntroShort from '../components/Paragraph/SelfIntroShort';
import withTransition from '../hooks/withTransition';

function Home(): React.ReactNode {
  return (
    <>
      <Head>
        <title>Andy personal website </title>
      </Head>
      <Container>
        <SelfIntroShort />
        <Hero />
      </Container>
    </>
  );
}

// export default withTransition(Home);
export default Home;
