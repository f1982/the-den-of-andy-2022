'use client'

import React from 'react'

import { HeroData } from '@/types'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariant = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      type: 'liner',
      staggerChildren: 0.6, // let the child show up by order after a certain delay
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
    type: 'liner',
    // duration: 1.3,
  },
}

const SandwichHero: React.FC<HeroData> = ({
  title,
  subtitle,
  image,
  description,
  buttons,
  viewPortOnce = true,
  className,
  id,
}) => (
  <motion.section
    className={clsx(
      'flex',
      'items-center',
      'justify-center',
      'flex-col',
      className,
    )}
    variants={containerVariant}
    initial="hidden"
    whileInView="show"
    viewport={{ once: viewPortOnce }}
    id={id}>
    <motion.div
      className={clsx('mx-auto mb-6 w-4/5 md:max-w-80')}
      variants={itemVariant}>
      <Image width={800} height={600} alt="hero" src={image} />
    </motion.div>
    <div className="prose-md prose mx-auto w-full max-w-none dark:prose-invert">
      <motion.h2 variants={itemVariant} className="text-center">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.h4 variants={itemVariant} className="text-center">
          {subtitle}
        </motion.h4>
      )}
      <motion.p variants={itemVariant}>{description}</motion.p>
      <motion.div variants={itemVariant} className="flex justify-center">
        {buttons}
      </motion.div>
    </div>
  </motion.section>
)

export default SandwichHero
