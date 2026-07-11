'use client'

import React from 'react'

import { HeroData } from '@/types'
import clsx from 'clsx'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

const containerVariant: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      type: 'tween',
      staggerChildren: 0.6, // let the child show up by order after a certain delay
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
      // duration: 1.3,
    },
  },
}

const SandwichHero: React.FC<HeroData> = ({
  title,
  subtitle,
  image,
  description,
  buttons,
  className,
  id,
  imageAlt = 'Illustration',
  headingLevel = 2,
}) => {
  const Heading = headingLevel === 1 ? motion.h1 : motion.h2

  return (
    <motion.section
      className={clsx(
        'flex',
        'items-center',
        'justify-center',
        'flex-col',
        className,
      )}
      variants={containerVariant}
      initial={false}
      animate="show"
      id={id}>
      <motion.div
        className={clsx('mx-auto mb-6 w-4/5 md:max-w-80')}
        variants={itemVariant}>
        <Image
          width={800}
          height={600}
          alt={imageAlt}
          src={image}
          sizes="(max-width: 768px) 80vw, 320px"
        />
      </motion.div>
      <div className="prose-md prose mx-auto flex w-full max-w-none flex-col gap-6 dark:prose-invert">
        <Heading variants={itemVariant} className="text-center">
          {title}
        </Heading>
        {subtitle && (
          <motion.h3 variants={itemVariant} className="text-center">
            {subtitle}
          </motion.h3>
        )}
        <motion.p variants={itemVariant}>{description}</motion.p>
        <motion.div variants={itemVariant} className="flex justify-center">
          {buttons}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default SandwichHero
