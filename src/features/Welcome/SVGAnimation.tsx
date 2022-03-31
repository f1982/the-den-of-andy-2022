import React from 'react';
import { motion } from 'framer-motion';
import styles from './default.module.css';

const transition = { duration: 4, yoyo: 100, ease: 'easeInOut' };

export default function SVGAnimation() {
  return (
    <div className="p-6">
      <svg
        viewBox="0 0 120 120"
        width="180"
        height="180"
        className={styles.svgAnimation}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60 113.955C89.7984 113.955 113.955 89.7984 113.955 60C113.955 30.2017 89.7984 6.04534 60 6.04534C30.2017 6.04534 6.04534 30.2017 6.04534 60C6.04534 89.7984 30.2017 113.955 60 113.955ZM60 120C93.1372 120 120 93.1372 120 60C120 26.8629 93.1372 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1372 26.8629 120 60 120Z"
          fill="gray"
          strokeWidth="1"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.5041 23.2896C40.4582 20.0465 45.2126 20.2052 46.9461 23.5714L64.0435 56.7721L78.5372 25.9042C79.3343 24.207 81.0403 23.1234 82.9149 23.1234H105.944C107.614 23.1234 108.967 24.4767 108.967 26.1461C108.967 27.8155 107.614 29.1688 105.944 29.1688H83.683L67.5368 63.5559L83.6062 94.7607H102.771C104.44 94.7607 105.793 96.114 105.793 97.7834C105.793 99.4528 104.44 100.806 102.771 100.806H82.869C81.0578 100.806 79.3987 99.7941 78.5692 98.1839L64.2938 70.4627L58.1544 83.5375C56.4258 87.2194 51.2005 87.2524 49.4253 83.5929L41.3151 66.8717L22.84 98.526C21.1242 101.466 16.989 101.76 14.8739 99.0934L9.69169 92.5593C9.4779 92.2897 9.29346 91.998 9.14154 91.6894L4.97932 83.2307C4.25267 81.7539 4.32691 80.0089 5.17631 78.5994L38.5041 23.2896ZM60.8005 63.6789L42.5635 28.2657L10.695 81.1539L14.5086 88.9043L18.5108 93.9503L37.237 61.8665C39.1872 58.5249 44.0767 58.7127 45.7651 62.1939L53.7592 78.6753L60.8005 63.6789Z"
          fill="gray"
          strokeWidth="1"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
        />
      </svg>
      <motion.div
        className="box"
        initial={{ offsetDistance: '0%', scale: 2.5 }}
        animate={{ offsetDistance: '100%', scale: 1 }}
        transition={transition}
      />
    </div>
  );
}
