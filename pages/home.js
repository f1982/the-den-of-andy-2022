import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'

function Index() {

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with </title>
        </Head>
        <Container>
          <h1>This is the home page</h1>
          <Link href="/blog">Blog</Link> /
          <Link href="/about">About</Link> /
          <Link href="/works">Works</Link>
        </Container>
      </Layout>
    </>
  )
}

export default Index;