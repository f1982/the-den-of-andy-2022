import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import React from 'react';
import CloseButton from '../../components/atoms/buttons/CloseButton';
import SiteSEO from '../../components/molecules/seo/SiteSEO';
import customModalStyles from '../../constants/modelConfig';
import BlogPost from '../../features/Blog/BlogPost';
import { BlogPostData } from '../../types/blog';
import { getAllPosts, getPostBySlug } from '../../utils/blog-helper';
import markdownToHtml from '../../utils/markdownToHtml';

interface PostProps {
  post: BlogPostData;
  preview: string;
}

type PostPageType = React.FC<PostProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode
}

const Post: PostPageType = ({ post, preview }) => {
  const router = useRouter();

  // if the slug is not correct url, it will led user to the 404 page
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const handleClose = () => {
    router.push('/blog');
  };

  return (
    <Modal
      isOpen
      onRequestClose={handleClose}
      style={customModalStyles}
      contentLabel="Post modal"
    >
      <SiteSEO pageTitle={post.title} />
      {/* If the page is not yet generated, this will be displayed */}
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          <div className="flex container mx-auto mt-3">
            <div className="flex-1" />
            <CloseButton onClick={handleClose} />
          </div>
          <article className="mb-32">
            <BlogPost {...post} />
          </article>
        </>
      )}
    </Modal>
  );
};

Post.getLayout = function getLayout(page) {
  return (
    <div>
      {page}
    </div>
  );
};

export default Post;

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
// this is not true
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
