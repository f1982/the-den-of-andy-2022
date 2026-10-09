import { Metadata } from 'next'

import { PageLocaleSlugProp } from '@/types/page'
import { notFound } from 'next/navigation'

import Comments from '@/lib/comment/utteranc-comments'

import { getDictionary } from '@/utils/dictionaries'
import { fillTemplate } from '@/utils/fill-template'
import { localizedPath } from '@/utils/locale-path'
import { getPageMetadata } from '@/utils/metadata-utils'
import {
  getJsonLdArticle,
  getJsonLdBreadcrumb,
} from '@/utils/schema-json-utils'
import SchemaJsonLd from '@/utils/schema-jsonld'

import { getPostDetail, getPosts } from '@/features/blog/blog-data'
import BlogPost from '@/features/blog/components/blog-post'
import {
  NotebookPostCopy,
  formatPostDate,
  getReadMinutes,
} from '@/features/blog/notebook-data'

import { BLOG_PATH } from '@/config/menu-data'
import { siteSettings, siteUrl } from '@/config/site-config'

// Only serve slugs known at build time; any other slug returns a clean 404
// instead of being rendered dynamically (avoids soft-404s in Search Console).
export const dynamicParams = false

export async function generateStaticParams() {
  return getPosts().map((item) => ({ slug: item.slug }))
}

export async function generateMetadata(
  props: PageLocaleSlugProp,
): Promise<Metadata> {
  const params = await props.params

  const { locale, slug } = params

  const post = getPostDetail(slug, locale)
  if (!post) {
    return {
      title: 'Article not found',
      robots: { index: false, follow: false },
    }
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

export default async function Page(props: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const params = await props.params
  const dict = await getDictionary(params.locale)
  const post = getPostDetail(params.slug, params.locale)
  if (!post) return notFound()

  const copy = (dict.den.blog.posts as Record<string, NotebookPostCopy>)[
    post.slug
  ]
  const categoryKey = copy?.categories?.[0]
  const categoryLabel = categoryKey
    ? ((dict.den.blog.categories as Record<string, string>)[categoryKey] ??
      categoryKey)
    : undefined

  const articleUrl = `${siteUrl}${localizedPath(params.locale, `/blog/${post.slug}`)}`
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
          {
            name: dict.common.menu.home,
            url: `${siteUrl}${localizedPath(params.locale)}`,
          },
          {
            name: dict.blog.headline,
            url: `${siteUrl}${localizedPath(params.locale, '/blog')}`,
          },
          { name: post.title, url: articleUrl },
        ])}
      />
      <BlogPost
        post={post}
        kicker={[
          categoryLabel,
          formatPostDate(post.date, params.locale, true),
          fillTemplate(dict.den.common.minutesRead, {
            n: getReadMinutes(post.content),
          }),
        ]
          .filter(Boolean)
          .join(' · ')}
        caption={copy?.caption}
        backHref={localizedPath(params.locale, BLOG_PATH)}
        backLabel={dict.den.blog.post.back}
      />

      <div className="pt-20 pb-24 desk:pt-28 desk:pb-32">
        <Comments labels={dict.blog.comments} />
      </div>
    </>
  )
}
