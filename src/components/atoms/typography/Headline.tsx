import { motion } from 'framer-motion';
import React from 'react';
import Highlight from './Highlight';

const headVariant = {
  hidden: { opacity: 0, x: 60 },
  whileHover: { scale: 1.005 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeInOut',
    },
  },
};

const Headline = ({ title }: { title: string }) => (
  <div
    className="
        flex-col
        flex items-center
        md:flex-row md:justify-between md:mb-12 md:mb-12
        mt-6 mb-6
      "
  >
    <motion.h1
      // initial={{ scale: 0.9, opacity: 0 }}
      // animate={{ scale: 1, opacity: 1 }}
      // transition={{ delay: 0.2 }}
      className="
        text-lg
        relative
        md:text-xl
        font-bold
        tracking-tighter
        leading-tight
        md:pr-8"
    >
      <Highlight>{title}</Highlight>
    </motion.h1>
  </div>
);

const Headline1 = ({ children }: { children: React.ReactNode }) => (
  <motion.h1
    variants={headVariant}
    initial="hidden"
    whileInView="show"
    whileHover="whileHover"
    viewport={{ once: true }}
    className="
        text-lg
        relative
        md:text-xl
        font-bold
        tracking-tighter
        leading-tight
        md:pr-8"
  >
    <Highlight>{children}</Highlight>
  </motion.h1>
);

const Headline2 = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    variants={headVariant}
    initial="hidden"
    whileInView="show"
    whileHover="whileHover"
    viewport={{ once: true }}
    className="
        text-md
        relative
        md:text-lg
        font-bold
        tracking-tighter
        leading-tight
        md:pr-8
        mt-3 mb-3
        "
  >
    <Highlight>{children}</Highlight>
  </motion.h2>
);

export default Headline;
export { Headline1, Headline2 };
