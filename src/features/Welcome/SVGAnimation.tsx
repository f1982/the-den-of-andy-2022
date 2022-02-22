import React from 'react';
import { motion } from 'framer-motion';

const transition = { duration: 4, yoyo: 100, ease: 'easeInOut' };

export default function SVGAnimation() {
  return (
    <div>
      <svg fill="#ff" viewBox="0 0 60 65" width="400" height="200" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M.879 44.621l10.798-10.798a3 3 0 014.426.2l8.612 10.335a3 3 0 01-.22 4.079L12.871 59.658a3 3 0 01-2.084.842H3a3 3 0 01-3-3V46.743a3 3 0 01.879-2.122zM49.6 59.3l-34.5-46a3 3 0 01-.6-1.8v-8a3 3 0 013-3h10.01a3 3 0 012.39 1.187l32.99 43.51a3 3 0 01.61 1.812V57.5a3 3 0 01-3 3H52a3 3 0 01-2.4-1.2z"
          fill="transparent"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
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
