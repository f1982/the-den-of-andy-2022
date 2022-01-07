import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import CloseButton from '../../components/ui/CloseButton';
import { CMS_NAME } from '../../config/constants';
import BlogPost from '../../features/Blog/BlogPost';
import PostTitle from '../../features/Blog/components/post-title';
import { getAllPosts, getPostBySlug } from '../../utils/api';
import markdownToHtml from '../../utils/markdownToHtml';
import Container from '../../components/Layout/container';

export default function Post({ post, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <article className="mb-32">
          <Head>
            <title>
              {post.title}
              {' '}
              | Next.js Blog Example with
              {CMS_NAME}
            </title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>
          <Container>
            <CloseButton />
          </Container>
          <BlogPost {...post} />

        </article>
      )}
    </div>
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
