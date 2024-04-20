import PageRows from '@/components/atoms/page-rows'
import PageHero from '@/components/page/hero-image'
import PageTitle from '@/components/page/page-title'
import BlogPosCards from '@/features/blog/components/blog-post-cards'
import BlogPostList from '@/features/blog/components/blog-post-list'
import { getAllPosts } from '@/features/blog/utils/blog-helper'
import { useTranslations } from 'next-intl'
import React from 'react'

const Blog: React.FC = () => {
  const t = useTranslations('blog')

  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return (
    <PageRows withMargin>
      <PageHero image="/static/images/Working_in_a_laboratory--5ec7b8ba01d0360014d4e576.png" />
      <div>
        <div className="container">
          <PageTitle title={t('headline')} description={t('intro')} />
        </div>

        <div className="mx-4">
          {posts.length > 0 && <BlogPosCards posts={posts} />}
        </div>
      </div>

      <div className="container">
        <h2 className="mb-6 text-3xl font-bold">{t('more')}</h2>
        {posts.length > 0 && <BlogPostList posts={posts} />}
      </div>
    </PageRows>
  )
}

export default Blog
