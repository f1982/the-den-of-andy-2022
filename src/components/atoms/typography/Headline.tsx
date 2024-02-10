import Highlight from './Highlight'
import { motion } from 'framer-motion'
import React from 'react'

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
}

const Headline = ({ title }: { title: string }) => (
  <div
    className="
        mb-6
        mt-6 flex
        flex-col items-center md:mb-12 md:mb-12
        md:flex-row md:justify-between
      ">
    <motion.h1
      // initial={{ scale: 0.9, opacity: 0 }}
      // animate={{ scale: 1, opacity: 1 }}
      // transition={{ delay: 0.2 }}
      className="
        relative
        text-lg
        font-bold
        leading-tight
        tracking-tighter
        md:pr-8
        md:text-xl">
      <Highlight>{title}</Highlight>
    </motion.h1>
  </div>
)

const Headline1 = ({ children }: { children: React.ReactNode }) => (
  <motion.h1
    variants={headVariant}
    initial="hidden"
    whileInView="show"
    whileHover="whileHover"
    viewport={{ once: true }}
    className="
        relative
        text-lg
        font-bold
        leading-tight
        tracking-tighter
        md:pr-8
        md:text-xl">
    <Highlight>{children}</Highlight>
  </motion.h1>
)

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
        mb-3
        mt-3
        font-bold
        leading-tight
        tracking-tighter
        md:pr-8 md:text-lg
        ">
    <Highlight>{children}</Highlight>
  </motion.h2>
)

export default Headline
export { Headline1, Headline2 }
