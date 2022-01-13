import Head from 'next/head';
import { t } from 'i18next';
import Headline from '../components/Headline';
import Container from '../components/Layout/container';
import { CMS_NAME } from '../config/constants';
import HeroPost from '../features/Blog/components/PostHero';
import MoreStories from '../features/Blog/components/MoreStories';
import { getAllPosts } from '../utils/api';
import TabTitle from '../components/TabTitle';

function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <TabTitle i18nTitle="blog.pageTitle" />
      <Container>
        <Headline title={t('blog.headline')} />
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
}

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
