import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import CloseButton from '../../components/atoms/buttons/CloseButton';
import SiteSEO from '../../components/molecules/seo/SiteSEO';
import customModalStyles from '../../constants/modelConfig';
import BlogPost from '../../features/Blog/BlogPost';
import { getAllPosts, getPostBySlug } from '../../utils/blog-helper';
import markdownToHtml from '../../utils/markdownToHtml';

export default function Post({ post, preview }) {
  const router = useRouter();

  // if the slug is not correct url, it will led user to the 404 page
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Modal
      isOpen
      onRequestClose={() => router.push('/blog')}
      style={customModalStyles}
      contentLabel="Post modal"
    >
      <SiteSEO pageTitle={post.title} />
      <div>
        {/* If the page is not yet generated, this will be displayed */}
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
          <article className="mb-32">
            <div className="flex w-full h-100">
              <div className="flex-1" />
              <CloseButton onClick={() => {
                router.back();
              }}
              />
            </div>
            <BlogPost {...post} />
          </article>
        )}
      </div>
    </Modal>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'excerpt',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

// getStaticPaths will define a list of paths to be statically generated
// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
