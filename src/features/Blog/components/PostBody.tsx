import styles from './markdown.module.css';

function PostBody({ content }) {
  return (
    <div className="container mx-auto">
      <div
        className={styles.markdown}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default PostBody;
