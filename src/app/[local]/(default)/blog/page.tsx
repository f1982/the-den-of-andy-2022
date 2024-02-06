import Typography from '../../../../../src-backup/components/atoms/typography/Typography'
import PageHero from '../../../../../src-backup/components/organisms/blocks/PageHero'
import PageTitle from '../../../../../src-backup/components/organisms/blocks/PageTitle'
import MoreStories from '../../../../../src-backup/features/Blog/MoreStories'
import { getAllPosts } from '../../../../../src-backup/features/Blog/blog-helper'
import MoreMoreStories from '../../../../../src-backup/features/Blog/components/MoreMoreStories'
import { BlogPostData } from '../../../../../src-backup/types/blog'
import { t } from 'i18next'
import React from 'react'

interface BlogProps {
  allPosts: BlogPostData[]
}

const Blog: React.FC<BlogProps> = () => {
  const morePosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ])

  return (
    <>
      {/* <TabTitle pageTitle={t('blog.pageTitle')} /> */}
      <PageHero image="/static/images/page-hero-typewriter.png" />
      <div className="container mx-auto">
        {/* title and intro */}
        <PageTitle title={t('blog.headline')} description={t('blog.intro')} />
        {/* blog posts */}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <Typography variant="h1" as="h1" highlight>
          {t('blog.more')}
        </Typography>
        {morePosts.length > 0 && <MoreMoreStories posts={morePosts} />}
      </div>
    </>
  )
}

export default Blog
