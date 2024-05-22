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

/**
 * Get post data by slug
 * @returns
 */
async function getPost(slug: string): Promise<BlogPostData | null> {
  const post = await getPostDetail(slug)
  if (!post) {
    return null
  }
  return post
}
const BlogPostDetail = async ({ slug }: { slug: string }) => {
  const post = await getPost(slug)
  if (!post) {
    return notFound()
  }
  return (
    <>
      <BlogPost {...post} />
      <Comments />
    </>
  )
}

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="container mx-auto mt-3 flex">
        <div className="flex-1" />
      </div>
      <Suspense fallback={<Spinner />}>
        <BlogPostDetail slug={params.slug} />
      </Suspense>

      <Comments />
    </>
  )
}
