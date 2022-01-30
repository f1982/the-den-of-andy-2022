import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import Container from '../../components/Layout/container';
import SiteSEO from '../../components/SiteSEO';
import CloseButton from '../../components/ui/CloseButton';
import BlogPost from '../../features/Blog/BlogPost';
import PostTitle from '../../features/Blog/components/PostTitle';
import { getAllPosts, getPostBySlug } from '../../utils/blog-helper';
import markdownToHtml from '../../utils/markdownToHtml';

Modal.setAppElement('#__next');

const customModalStyles = {
  content: {
    top: '39px',
    bottom: '0',
    left: '0',
    right: 'auto',
  },
  overlay: {
    // background: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // cursor: 'pointer',
  },
};

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
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article className="mb-32">
            <Container>
              <CloseButton />
            </Container>
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
