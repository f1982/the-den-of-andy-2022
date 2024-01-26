import React from 'react';
import { motion } from 'framer-motion';
import styles from './default.module.css';

const transition = { duration: 4, yoyo: 100, ease: 'easeInOut' };

const SVGAnimation = () => (
  <div className="p-4">
    <svg
      viewBox="-2 0 126 120"
      width="80%"
      height="80%"
      className={styles.svgAnimation}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.6478 3.0463C41.1569 -1.16569 47.3043 -0.971486 49.5442 3.39058L68.4865 40.2795L84.4988 6.07988C85.5263 3.88529 87.7257 2.48419 90.1429 2.48419H115.843C118.139 2.48419 120 4.35047 120 6.6531C120 8.95538 118.139 10.822 115.843 10.822H91.4631L73.2909 49.6356L91.3578 84.8201H115.843C118.139 84.8201 120 86.6864 120 88.989C120 91.2913 118.139 93.1579 115.843 93.1579H90.0903C87.7551 93.1579 85.6156 91.8496 84.5466 89.7675L68.8308 59.1615L62.3931 72.9113C60.1642 77.6718 53.4272 77.7145 51.1388 72.9821L42.3288 54.7668L21.8398 88.3786C19.4637 92.2762 13.858 92.3867 11.3313 88.5857L1.0473 73.1155C-0.287087 71.1082 -0.351176 68.5106 0.882751 66.4397L38.6478 3.0463ZM64.0264 49.8055L43.8658 10.5441L8.69301 69.5859L16.4437 81.2452L37.2192 47.1638C39.7913 42.9445 45.9977 43.2471 48.1496 47.6963L56.7185 65.4138L64.0264 49.8055Z"
        fill="white"
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

export default SVGAnimation;
