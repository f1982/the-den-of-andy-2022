import Link from 'next/link';

const MoreStories = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={`list_${post.slug}`} className="cursor-pointer hover:underline">
        <Link as={`/blog/${post.slug}`} href="/blog/[slug]" passHref legacyBehavior>
          {post.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default MoreStories;