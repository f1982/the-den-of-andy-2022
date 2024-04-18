import FormattedDate from '@/components/atoms/formatted-date'
import clsx from 'clsx'
import Link from 'next/link'

const BlogPostList = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li
        key={post.slug}
        className={clsx(
          'mb-6 flex cursor-pointer flex-col justify-between border-b border-b-border py-3  md:flex-row',
        )}>
        <Link
          as={`/blog/${post.slug}`}
          href={`/blog/${post.slug}`}
          className="no-underline hover:underline"
          passHref
          legacyBehavior>
          {post.title}
        </Link>
        <FormattedDate date={post.date} />
      </li>
    ))}
  </ul>
)

export default BlogPostList
