import { Suspense } from 'react'

import { notFound } from 'next/navigation'

import Comments from '@/lib/comment/utteranc-comments'

import Spinner from '@/components/atoms/spinner'

import { getPostDetail, getPosts } from '@/features/blog/blog-data'
import { BlogPostData } from '@/features/blog/blog-types'
import BlogPost from '@/features/blog/components/blog-post'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map((item) => {
    return {
      slug: item!.slug,
    }
  })
  return slugs
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
