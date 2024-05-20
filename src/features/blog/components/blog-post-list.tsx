import React from 'react'

import clsx from 'clsx'
import { StickyNote } from 'lucide-react'
import Link from 'next/link'

import { BLOG_PATH } from '@/config/menu-data'

import { BlogPostData } from '../blog-types'

const BlogPostList: React.FC<{ posts: BlogPostData[] }> = ({ posts }) => (
  <ul className="flex flex-col gap-6">
    {posts.map((post) => (
      <li
        key={post.slug}
        className={clsx(
          'flex cursor-pointer flex-row justify-start gap-3 border-b border-b-border py-3',
        )}>
        <StickyNote className="fill-muted stroke-muted-foreground" />
        <div className="flex flex-1 flex-col justify-between md:flex-row">
          <Link
            href={`${BLOG_PATH}/${post.slug}`}
            className="no-underline hover:underline"
            passHref
            legacyBehavior>
            <span>{post.title}</span>
          </Link>
          <span>{post.date}</span>
        </div>
      </li>
    ))}
  </ul>
)

export default BlogPostList
