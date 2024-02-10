const PostBody = ({ content }) => (
  <div
    className="prose prose-lg dark:prose-invert mx-auto"
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default PostBody
