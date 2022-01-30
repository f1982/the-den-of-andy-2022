import { t } from 'i18next';
import { useRouter } from 'next/router';
import Headline from '../../components/Headline';
import Container from '../../components/Layout/container';
import TabTitle from '../../components/SiteSEO';
import MoreMoreStories from '../../features/Blog/components/MoreMoreStories';
import MoreStories from '../../features/Blog/components/MoreStories';
import HeroPost from '../../features/Blog/components/PostPreviewHero';
import { getAllPosts } from '../../utils/blog-helper';

function Blog({ allPosts }) {
  const router = useRouter();

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      {/* show all the blog post list */}
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

export default Blog;

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
