import { Suspense } from 'react'

import { Metadata } from 'next'

import { PageLocaleSlugProp } from '@/types/page'
import { notFound } from 'next/navigation'

import Comments from '@/lib/comment/utteranc-comments'

import Spinner from '@/components/shared/spinner'

import { getPostDetail, getPosts } from '@/features/blog/blog-data'
import BlogPost from '@/features/blog/components/blog-post'
import { getDictionary } from '@/utils/dictionaries'
import { getPageMetadata } from '@/utils/metadata-utils'
import SchemaJsonLd from '@/utils/schema-jsonld'
import {
  getJsonLdArticle,
  getJsonLdBreadcrumb,
} from '@/utils/schema-json-utils'

import { siteSettings, siteUrl } from '@/config/site-config'

// Only serve slugs known at build time; any other slug returns a clean 404
// instead of being rendered dynamically (avoids soft-404s in Search Console).
export const dynamicParams = false

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map((item) => {
    return {
      slug: item!.slug,
    }
  })
  return slugs
}

export async function generateMetadata(props: PageLocaleSlugProp): Promise<Metadata> {
  const params = await props.params;

  const {
    locale,
    slug
  } = params;

  const post = await getPostDetail(slug, locale)
  if (!post) {
    return { title: 'Article not found', robots: { index: false, follow: false } }
  }

  const description = post.excerpt
  const image = post.coverImage
  return {
    ...getPageMetadata({
      locale,
      path: `/blog/${post.slug}`,
      title: `${post.title} | ${siteSettings.name}`,
      description,
      keywords: post.keywords,
      image,
      type: 'article',
      publishedTime: post.date,
    }),
  }
}

export default async function Page(
  props: {
    params: Promise<{ slug: string; locale: string }>
  }
) {
  const params = await props.params;
  const dict = await getDictionary(params.locale)
  const post = await getPostDetail(params.slug, params.locale)
  if (!post) return notFound()

  const articleUrl = `${siteUrl}/${params.locale}/blog/${post.slug}`
  return (
    <>
      <SchemaJsonLd
        jsonLd={getJsonLdArticle(siteSettings, {
          url: articleUrl,
          title: post.title,
          description: post.excerpt,
          image: post.coverImage,
          datePublished: post.date,
          author: post.author.name,
          locale: params.locale,
        })}
      />
      <SchemaJsonLd
        jsonLd={getJsonLdBreadcrumb([
          { name: dict.common.menu.home, url: `${siteUrl}/${params.locale}` },
          { name: dict.blog.headline, url: `${siteUrl}/${params.locale}/blog` },
          { name: post.title, url: articleUrl },
        ])}
      />
      <Suspense fallback={<Spinner />}>
        <BlogPost {...post} />
      </Suspense>

      <div className="my-24" />

      <Comments labels={dict.blog.comments} />
    </>
  )
}
