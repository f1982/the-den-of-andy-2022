import { Suspense } from 'react'

import { Metadata } from 'next'

import { PageLocaleSlugProp } from '@/types/page'
import { notFound } from 'next/navigation'

import Comments from '@/lib/comment/utteranc-comments'

import Spinner from '@/components/shared/spinner'

import { getPostDetail, getPosts } from '@/features/blog/blog-data'
import BlogPost from '@/features/blog/components/blog-post'
import { getDictionary } from '@/utils/dictionaries'

import { getLocalizedAlternates } from '@/config/i18n'
import { siteMetadata } from '@/config/site-config'

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

  const post = await getPostDetail(slug)
  return {
    ...siteMetadata,
    title: post?.title,
    description: post?.excerpt,
    keywords: post?.keywords,
    alternates: {
      ...getLocalizedAlternates(locale, '/blog/' + post?.slug),
    },
  }
}

const BlogPostDetail = async ({ slug }: { slug: string }) => {
  const post = await getPostDetail(slug)
  if (!post) {
    return notFound()
  }
  return (
    <>
      <BlogPost {...post} />
    </>
  )
}

export default async function Page(
  props: {
    params: Promise<{ slug: string; locale: string }>
  }
) {
  const params = await props.params;
  const dict = await getDictionary(params.locale)
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <BlogPostDetail slug={params.slug} />
      </Suspense>

      <div className="my-24" />

      <Comments labels={dict.blog.comments} />
    </>
  )
}
