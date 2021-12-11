import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/container'
import Layout from '../components/layout'

function Index() {

  return (
    <>
      <Layout>
        <Head>
          <title>Andy personal website </title>
        </Head>
        <Container>
          <h1>This is the welcome page of the website</h1>
          <h1>Here should be have a animation here</h1>
          <Link href="/home">Homepage</Link>
        </Container>
      </Layout>
    </>
  )
}

export default Index;