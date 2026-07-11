'use client'

import React from 'react'

import clsx from 'clsx'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

import { HeroData } from '../../types'

const containerVariant: Variants = {
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

const itemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 1.6,
    },
  },
}

const ColumnHero: React.FC<HeroData & { direction?: 'l2r' | 'r2l' }> = ({
  title,
  subtitle,
  image,
  description,
  buttons,
  direction = 'l2r',
  className,
  imageAlt = 'Illustration',
}) => (
  <motion.section
    className={clsx(
      'flex flex-col items-center gap-x-16',
      direction === 'l2r' ? 'md:flex-row' : 'md:flex-row-reverse',
      className,
    )}
    variants={containerVariant}
    initial={false}
    animate="show">
    <Image
      className="mb-6 object-cover md:mb-0 md:w-2/5"
      width={500}
      height={300}
      alt={imageAlt}
      src={image}
      sizes="(max-width: 768px) 100vw, 500px"
    />
    <div className="prose-md prose flex flex-col items-center dark:prose-invert md:w-3/5 md:items-start ">
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
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
