import { t } from 'i18next';
import Typography from '../../components/atoms/typography/Typography';
import TabTitle from '../../components/molecules/seo/SiteSEO';
import PresentedMonkey from '../../components/organisms/3d/PresentedMonkey';
import PageHero from '../../components/organisms/blocks/PageHero';
import PageTitle from '../../components/organisms/blocks/PageTitle';
import MoreMoreStories from '../../features/Blog/components/MoreMoreStories';
import MoreStories from '../../features/Blog/MoreStories';
import { getAllPosts } from '../../utils/blog-helper';

function Blog({ allPosts }) {
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);
  const morePosts = allPosts;

  return (
    <>
      <TabTitle pageTitle={t<string>('blog.pageTitle')} />
      <PageHero image="/static/images/blog-typewritter.png" />
      <div className="container mx-auto">
        {/* title and intro */}
        <PageTitle title={t<string>('blog.headline')} description={t<string>('blog.intro')} />
        {/* blog posts */}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <Typography variant="h1" as="h1" highlight>{t<string>('blog.more')}</Typography>
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
