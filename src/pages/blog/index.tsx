import { t } from 'i18next';
import Headline from '../../components/atoms/typography/Headline';
import TabTitle from '../../components/molecules/seo/SiteSEO';
import BlockScene from '../../components/organisms/3d/Block';
import Box from '../../components/organisms/3d/Box';
import PresentedMonkey from '../../components/organisms/3d/PresentedMonkey';
import MoreMoreStories from '../../features/Blog/components/MoreMoreStories';
import MoreStories from '../../features/Blog/components/MoreStories';
import PostPreview from '../../features/Blog/PostPreview';
import { getAllPosts } from '../../utils/blog-helper';

function Blog({ allPosts }) {
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);
  const morePosts = allPosts;

  return (
    <>
      {/* show all the blog post list */}
      <TabTitle pageTitle={t('blog.pageTitle')} />
      {/* <BlockScene /> */}
      <div style={{ height: '50vh' }}>

        <PresentedMonkey />
      </div>

      <div className="container mx-auto">
        <Headline title={t('blog.headline')} />
        {/* {!!heroPost && (
        <PostPreview
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        )} */}

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
