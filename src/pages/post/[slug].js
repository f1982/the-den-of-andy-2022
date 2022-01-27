import { useEffect } from 'react';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import CloseButton from '../../components/ui/CloseButton';
import { CMS_NAME } from '../../config/constants';
import BlogPost from '../../features/Blog/BlogPost';
import PostTitle from '../../features/Blog/components/PostTitle';
import { getAllPosts, getPostBySlug } from '../../utils/api';
import markdownToHtml from '../../utils/markdownToHtml';
import Container from '../../components/Layout/container';
import SiteSEO from '../../components/SiteSEO';

Modal.setAppElement('#__next');

// Modal.defaultStyles.overlay.backgroundColor = 'black';

const customStyles = {
  content: {
    top: '38px',
    left: '0',
    right: 'auto',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.5)',
  },
};

export default function Post({ post, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Modal
      isOpen
      onRequestClose={() => router.push('/blog')}
      style={customStyles}
      contentLabel="Post modal"
    >
      <SiteSEO pageTitle={post.title} />
      <div>
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
