import { Suspense } from 'react'

import { Metadata } from 'next'

import { PageLocaleProp, PageSlugProp } from '@/types/page'
import { notFound } from 'next/navigation'

import Comments from '@/lib/comment/utteranc-comments'

import Spinner from '@/components/atoms/spinner'

import { getPostDetail, getPosts } from '@/features/blog/blog-data'
import BlogPost from '@/features/blog/components/blog-post'

import { getLocalPrefix } from '@/config/i18n'
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

export async function generateMetadata({
  params: { locale, slug },
}: PageLocaleProp & PageSlugProp): Promise<Metadata> {
  const post = await getPostDetail(slug)
  return {
    ...siteMetadata,
    title: post?.title,
    description: post?.excerpt,
    keywords: post?.keywords,
    alternates: {
      canonical: getLocalPrefix(locale) + '/blog/' + post?.slug,
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

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string }
}) {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <BlogPostDetail slug={params.slug} />
      </Suspense>

      <div className="my-24" />

      <Comments />
    </>
  )
}
