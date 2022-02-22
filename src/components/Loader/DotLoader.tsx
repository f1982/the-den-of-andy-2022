import styles from './threedots.module.css';

function DotLoader() {
  return (
    <div aria-busy="true" role="alert" className={styles.ldsEllipsis}>
      <div className="bg-primary-medium" />
      <div className="bg-primary-medium" />
      <div className="bg-primary-medium" />
      <div className="bg-primary-medium" />
    </div>
  );
}

export default DotLoader;
