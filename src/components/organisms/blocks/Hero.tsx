'use client'

import { HeroData } from '@/types'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

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
    duration: 3.0,
  },
}

const Hero: React.FC<HeroData> = ({
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
      'container mx-auto',
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
    <Image
      className={clsx('mx-auto mb-9 w-5/6 md:w-1/2')}
      width={800}
      height={600}
      alt="hero"
      src={image}
    />
    <div className="prose mx-auto w-full max-w-none dark:prose-invert">
      <h2 className="text-center">{title}</h2>
      {subtitle && <h3 className="text-center">{subtitle}</h3>}
      <motion.p variants={itemVariant}>{description}</motion.p>
      <motion.div variants={itemVariant} className="flex justify-center">
        {buttons}
      </motion.div>
    </div>
  </motion.section>
)

export default Hero
