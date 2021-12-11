import Link from 'next/link';
import React from 'react'
import Layout from '../components/layout';
import Head from 'next/head'
import Container from '../components/container'

function Home(): React.ReactNode {

  return (
    <Layout> 
      <Head>
        <title>Andy personal website </title>
      </Head>
      <Container> 
        <h1>test</h1>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>  
         <Link href="/works">Works</Link> 
          <Link href="/hobbies">Hobbies</Link>
        <Link href="/about">About</Link>
      </Container> 
    </Layout> 
  )
}

export default Home;