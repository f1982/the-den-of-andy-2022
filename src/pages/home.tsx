import Head from 'next/head'
import Link from 'next/link';
import React from 'react'

import Hero from '../components/Heros/hero'
import Container from '../components/Layout/container'
import Layout from '../components/Layout/layout';
import SelfIntroShort from '../features/Pragraph/SelfIntroShort'

function Home(): React.ReactNode {

  return (
    <Layout> 
      <Head>
        <title>Andy personal website </title>
      </Head>
      <Container> 
        <SelfIntroShort />
        <Hero />
      </Container> 
    </Layout> 
  )
}

export default Home;