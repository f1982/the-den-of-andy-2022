import { NextSeo } from 'next-seo';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import React from 'react';
import CloseButton from '../../components/atoms/buttons/CloseButton';
import BlogPost from '../../features/Blog/BlogPost';
import usePageURL from '../../hooks/usePageURL';
import { BlogPostData } from '../../types/blog';
import { getAllPosts, getPostBySlug } from '../../features/Blog/blog-helper';
import markdownToHtml from '../../utils/markdownToHtml';

interface PostProps {
  post: BlogPostData;
  preview: string;
}

type PostPageType = React.FC<PostProps> & {
  getLayout: (page: React.ReactNode) => React.ReactNode,
}

const Post: PostPageType = ({ post, preview }) => {
  const router = useRouter();
  const pageURL = usePageURL();

  // if the slug is not correct url, it will led user to the 404 page
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
  if (router.isFallback) {
    return (<div>Loading...</div>);
  }

  const handleClose = () => {
    router.push('/blog');
  };

  // Trim spaces at the beginning and end of the keyword
  const parseKeywords = (keywords) => keywords.split(',').map((keyword) => keyword.trim());

  return (
    <>
      <NextSeo
        title={post.title}
        additionalMetaTags={[
          { name: 'keywords', content: post.keywords }, // keywords metadata
        ]}
        openGraph={{
          title: post.title,
          description: post.excerpt,
          url: pageURL,
          type: 'article',
          article: {
            publishedTime: post.date,
            authors: [post.author.name],
            tags: parseKeywords(post.keywords),
          },
          images: [
            {
              url: post.coverImage,
              width: 850,
              height: 650,
              alt: `Photo of ${post.title}`,
            },
          ],
        }}
      />
      {/* TODO: add JSON-LD support, https://jsonld.com/blog-post/ */}
      <div className="flex container mx-auto mt-3">
        <div className="flex-1" />
        <CloseButton onClick={handleClose} />
      </div>
      <article className="mb-32">
        <BlogPost {...post} />
      </article>
    </>
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

/**
 * Get post data by slug
 * @returns
 */
export async function getStaticProps({ params }) {
  const fields = [
    'title',
    'date',
    'excerpt',
    'slug',
    'author',
    'keywords',
    'content',
    'ogImage',
    'coverImage',
  ];
  const post = getPostBySlug(params.slug, fields);
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
export async function getStaticPaths(context) {
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
