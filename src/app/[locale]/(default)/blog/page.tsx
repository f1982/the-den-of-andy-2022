import React, { Suspense } from 'react'

import { useTranslations } from 'next-intl'

import PageRows from '@/components/atoms/page-rows'
import Spinner from '@/components/atoms/spinner'
import PageHero from '@/components/page/hero-image'
import PageTitle from '@/components/page/page-title'

import { getAllPosts } from '@/features/blog/blog-data'
import BlogPosCards from '@/features/blog/components/blog-post-cards'
import BlogPostList from '@/features/blog/components/blog-post-list'

async function PostCards() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return (
    <>
      {posts.length > 0 ? (
        <BlogPosCards posts={posts} />
      ) : (
        <div className="text-center">No posts yet</div>
      )}
    </>
  )
}
async function PostList() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return (
    <>
      {posts.length > 0 ? (
        <BlogPostList posts={posts} />
      ) : (
        <div className="text-center">No posts yet</div>
      )}
    </>
  )
}

const Blog: React.FC = () => {
  const t = useTranslations('blog')
  return (
    <PageRows withMargin>
      <PageHero image="/static/images/Working_in_a_laboratory--5ec7b8ba01d0360014d4e576.png" />
      <div>
        <div className="container">
          <PageTitle title={t('headline')} description={t('intro')} />
        </div>

        <div className="mx-4">
          <Suspense fallback={<Spinner />}>
            <PostCards />
          </Suspense>
        </div>
      </div>

      <div className="container">
        <h2 className="mb-6 text-3xl font-bold">{t('more')}</h2>
        <Suspense fallback={<Spinner />}>
          <PostList />
        </Suspense>
      </div>
    </PageRows>
  )
}

export default Blog
