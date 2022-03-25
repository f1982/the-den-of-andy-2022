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

export default function Typography(
  { title, variant = 'h1' }:
  { title:string, variant:'h1'|'h2'|'h3'|'h4'},
) {
  return (
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
      <Highlight>
        {title}
      </Highlight>
    </motion.h2>
  );
}
