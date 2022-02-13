import Link from 'next/link';

export default function MoreStories({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={`list_${post.slug}`} className="cursor-pointer hover:underline">
          <Link as={`/blog/${post.slug}`} href="/blog/[slug]" passHref>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
