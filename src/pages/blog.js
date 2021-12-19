import Head from 'next/head';
import Intro from '../components/intro';
import Container from '../components/Layout/container';
import { CMS_NAME } from '../config/constants';
import HeroPost from '../features/Blog/components/hero-post';
import MoreStories from '../features/Blog/components/more-stories';
import { getAllPosts } from '../utils/api';

const Index = function ({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Head>
        <title>
          Next.js Blog Example with
          {' '}
          {CMS_NAME}
        </title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}

      </Container>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
