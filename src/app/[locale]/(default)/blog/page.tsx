import PageRows from '@/components/atoms/page-rows'
import PageTitle from '@/components/organisms/blocks/PageTitle'
import PageHero from '@/components/page/hero-image'
import BlogPosCards from '@/features/blog/components/blog-post-cards'
import BlogPostList from '@/features/blog/components/blog-post-list'
import { getAllPosts } from '@/features/blog/utils/blog-helper'
import { BlogPostData } from '@/types/blog'
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
      <div className="container">
        <PageTitle title={t('headline')} description={t('intro')} />
        {morePosts.length > 0 && <BlogPosCards posts={morePosts} />}
        <h2 className="mb-6 text-3xl font-bold">{t('more')}</h2>
        {morePosts.length > 0 && <BlogPostList posts={morePosts} />}
      </div>
    </PageRows>
  )
}

export default Blog
