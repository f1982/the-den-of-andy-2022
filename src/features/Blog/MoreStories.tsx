import PostPreview from './PostPreview';

// md:gap-x-16
// md:gap-y-16

export default function MoreStories({ posts }) {
  return (
    <section>

      <div className="
      grid grid-cols-1
      md:grid-cols-2
      gap-x-16
      gap-y-16
      mb-16"
      >
        {/* <div className="flex flex-wrap mb-3"> */}
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}