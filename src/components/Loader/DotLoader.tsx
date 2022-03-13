import styles from './threedots.module.css';

function DotLoader({ color = 'primary' }:{color?:'primary'|'secondary'}) {
  const dotColor = `bg-${color}-medium`;
  return (
    <div aria-busy="true" role="alert" className={styles.ldsEllipsis}>
      <div className={dotColor} />
      <div className={dotColor} />
      <div className={dotColor} />
      <div className={dotColor} />
    </div>
  );
}

export default DotLoader;
