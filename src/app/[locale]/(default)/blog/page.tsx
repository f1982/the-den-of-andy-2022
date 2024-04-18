import PageRows from '@/components/atoms/page-rows'
import PageHero from '@/components/page/hero-image'
import PageTitle from '@/components/page/page-title'
import { BlogPostData } from '@/features/blog/blog-data'
import BlogPosCards from '@/features/blog/components/blog-post-cards'
import BlogPostList from '@/features/blog/components/blog-post-list'
import { getAllPosts } from '@/features/blog/utils/blog-helper'
import { useTranslations } from 'next-intl'
import React from 'react'

interface BlogProps {
  allPosts: BlogPostData[]
}

const Blog: React.FC<BlogProps> = () => {
  const t = useTranslations('blog')
  const morePosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return (
    <PageRows withMargin>
      <PageHero image="/static/images/page-hero-typewriter.png" />

      <div className="mx-6">
        <div className="container">
          <PageTitle title={t('headline')} description={t('intro')} />
        </div>
        {morePosts.length > 0 && <BlogPosCards posts={morePosts} />}
      </div>
      <div className="container">
        <h2 className="mb-6 text-3xl font-bold">{t('more')}</h2>
        {morePosts.length > 0 && <BlogPostList posts={morePosts} />}
      </div>
    </PageRows>
  )
}

export default Blog
