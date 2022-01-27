import { t } from 'i18next';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import Headline from '../components/Headline';
import Container from '../components/Layout/container';
import TabTitle from '../components/SiteSEO';
import MoreMoreStories from '../features/Blog/components/MoreMoreStories';
import MoreStories from '../features/Blog/components/MoreStories';
import HeroPost from '../features/Blog/components/PostPreviewHero';
import { getAllPosts } from '../utils/api';
import Post from './post/[slug]';

Modal.setAppElement('#__next');

function Index({ allPosts }) {
  const router = useRouter();

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Modal
        isOpen={!!router.query.slug}
        onRequestClose={() => router.push('/blog')}
        contentLabel="Post modal"
      >
        <div>test</div>
      </Modal>
      <Container>
        <TabTitle pageTitle={t('blog.pageTitle')} />
        <Headline title={t('blog.headline')} />
        {!!heroPost && (
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
        {morePosts.length > 0 && <MoreMoreStories posts={morePosts} />}
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
