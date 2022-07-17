import React from 'react';
import styles from './threedots.module.css';

interface DotLoaderProps {
  color?: 'primary' | 'secondary'
}

const DotLoader: React.FC<DotLoaderProps> = ({
  color = 'primary',
}) => {
  const dotColor = `bg-${color}-medium`;
  return (
    <div aria-busy="true" role="alert" className={styles.ldsEllipsis}>
      <div className={dotColor} />
      <div className={dotColor} />
      <div className={dotColor} />
      <div className={dotColor} />
    </div>
  );
};

export default DotLoader;
