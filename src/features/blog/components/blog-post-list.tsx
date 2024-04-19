import FormattedDate from '@/components/atoms/formatted-date'
import clsx from 'clsx'
import { StickyNote } from 'lucide-react'
import Link from 'next/link'

const BlogPostList = ({ posts }) => (
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
            as={`/blog/${post.slug}`}
            href={`/blog/${post.slug}`}
            className="no-underline hover:underline"
            passHref
            legacyBehavior>
            <span>{post.title}</span>
          </Link>
          <FormattedDate date={post.date} />
        </div>
      </li>
    ))}
  </ul>
)

export default BlogPostList
