import Typography from '../../../../components/atoms/typography/Typography'
import PageTitle from '../../../../components/organisms/blocks/PageTitle'
import PageHero from '../../../../components/page/hero-image'
import { BlogPostData } from '../../../../types/blog'
import MoreStories from '../../../../features/blog/components/MoreStories'
import { getAllPosts } from '../../../../features/blog/utils/blog-helper'
import MoreMoreStories from '../../../../features/blog/components/MoreMoreStories'
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
    <>
      {/* <TabTitle pageTitle={t('pageTitle')} /> */}
      <PageHero image="/static/images/page-hero-typewriter.png" />
      <div className="container mx-auto">
        {/* title and intro */}
        <PageTitle title={t('headline')} description={t('intro')} />
        {/* blog posts */}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <Typography variant="h1" as="h1" highlight>
          {t('more')}
        </Typography>
        {morePosts.length > 0 && <MoreMoreStories posts={morePosts} />}
      </div>
    </>
  )
}

export default Blog
