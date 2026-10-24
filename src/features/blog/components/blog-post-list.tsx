import React from 'react'

import clsx from 'clsx'
import { StickyNote } from 'lucide-react'
import Link from 'next/link'

import { postPath } from '../blog-data'
import { BlogPostData } from '../blog-types'

const BlogPostList: React.FC<{ posts: BlogPostData[]; locale: string }> = ({
  posts,
  locale,
}) => (
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
            href={postPath(post.slug, locale)}
            className="no-underline hover:underline">
            <span>{post.title}</span>
          </Link>
          <span>{post.date}</span>
        </div>
      </li>
    ))}
  </ul>
)

export default BlogPostList
