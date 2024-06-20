'use client'

import React from 'react'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { HeroData } from '../../types'

const containerVariant = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.8,
      type: 'tween',
      staggerChildren: 1.6, // let the child show up by order after a certain delay
    },
  },
}

const itemVariant = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
  transition: {
    type: 'tween',
    duration: 1.6,
  },
}

const ColumnHero: React.FC<HeroData & { direction?: 'l2r' | 'r2l' }> = ({
  title,
  subtitle,
  image,
  description,
  buttons,
  viewPortOnce = true,
  direction = 'l2r',
  className,
}) => (
  <motion.section
    className={clsx(
      'flex flex-col items-center gap-x-16',
      direction === 'l2r' ? 'md:flex-row' : 'md:flex-row-reverse',
      className,
    )}
    variants={containerVariant}
    initial="hidden"
    whileInView="show"
    viewport={{ once: viewPortOnce }}>
    <Image
      className="mb-6 object-cover md:mb-0 md:w-2/5"
      width={500}
      height={300}
      alt="hero"
      src={image}
    />
    <div className="prose-md prose flex flex-col items-center dark:prose-invert md:w-3/5 md:items-start ">
      <h2>{title}</h2>
      {subtitle && <h4>{subtitle}</h4>}
      <motion.div variants={itemVariant}>
        <p>{description}</p>
      </motion.div>
      <motion.div variants={itemVariant} className="mt-6 flex gap-x-3">
        {buttons}
      </motion.div>
    </div>
  </motion.section>
)

export default ColumnHero
