import { t } from 'i18next';
import Typography from '../../components/atoms/typography/Typography';
import TabTitle from '../../components/molecules/seo/SiteSEO';
import PresentedMonkey from '../../components/organisms/3d/PresentedMonkey';
import MoreMoreStories from '../../features/Blog/components/MoreMoreStories';
import MoreStories from '../../features/Blog/components/MoreStories';
import { getAllPosts } from '../../utils/blog-helper';

function Blog({ allPosts }) {
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);
  const morePosts = allPosts;

  return (
    <>
      {/* show all the blog post list */}
      <TabTitle pageTitle={t('blog.pageTitle')} />
      <div style={{ height: '50vh' }}>
        <PresentedMonkey />
      </div>

      <div className="container mx-auto">
        <Typography variant="h1" as="h1" highlight title={t('blog.headline')} />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <h2 className="mb-8 md:text-lg font-bold tracking-tighter leading-tight">
          More List
        </h2>
        {morePosts.length > 0 && <MoreMoreStories posts={morePosts} />}
      </div>
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
