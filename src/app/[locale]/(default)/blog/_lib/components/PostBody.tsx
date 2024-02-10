const PostBody = ({ content }) => (
  <div
    className="prose prose-lg mx-auto dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default PostBody
