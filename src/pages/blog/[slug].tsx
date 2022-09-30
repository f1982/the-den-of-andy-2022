import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import React from 'react';
import { ArticleJsonLd, DefaultSeoProps, NextSeo } from 'next-seo';
import { BaseMetaTag, HTML5MetaTag, MetaTag } from 'next-seo/lib/types';
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

  const getSEOConfig = () => ({
    description: post.excerpt,
    additionalMetaTags: post.keywords,
  });

  const getAdditionalTags = () => {
    const tags: HTML5MetaTag[] = [
      // keywords tag
      { name: 'keywords', content: post.keywords },
    ];
    return tags;
  };

  return (
    <Modal
      isOpen
      onRequestClose={handleClose}
      style={customModalStyles}
      contentLabel="Post modal"
    >
      <NextSeo
        title={post.title}
        additionalMetaTags={getAdditionalTags()}
        openGraph={{
          title: post.title,
          description: post.excerpt,
          url: 'https://www.example.com/articles/article-title',
          type: 'article',
          article: {
            publishedTime: post.date,
            section: 'Section II',
            authors: [post.author.name],
            tags: post.keywords.split(','),
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

      {/* <ArticleJsonLd
        url="https://example.com/article"
        title="Article headline"
        images={[
          'https://example.com/photos/1x1/photo.jpg',
          'https://example.com/photos/4x3/photo.jpg',
          'https://example.com/photos/16x9/photo.jpg',
        ]}
        datePublished="2015-02-05T08:00:00+08:00"
        dateModified="2015-02-05T09:00:00+08:00"
        authorName={['Jane Blogs', 'Mary Stone']}
        publisherName="Gary Meehan"
        publisherLogo="https://www.example.com/photos/logo.jpg"
        description="This is a mighty good description of this article."
      /> */}

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
    'keywords',
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
