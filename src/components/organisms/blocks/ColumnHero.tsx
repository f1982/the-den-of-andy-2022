import { HeroData } from '../../../types'
import Typography from '../../atoms/typography/Typography'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import React from 'react'

const containerVariant = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.8,
      type: 'tween',
      staggerChildren: 1.6 // let the child show up by order after a certain delay
    }
  }
}

const itemVariant = {
  hidden: {
    opacity: 0,
    y: -50
  },
  show: {
    opacity: 1,
    y: 0
  },
  transition: {
    type: 'tween',
    duration: 1.6
  }
}

const ColumnHero: React.FC<HeroData & { direction?: 'l2r' | 'r2l' }> = ({
  title,
  subtitle,
  image,
  description,
  buttons,
  viewPortOnce = true,
  direction = 'l2r',
  className
}) => (
  <motion.section
    className={classNames(
      'container mx-auto flex gap-x-16 flex-col items-center',
      direction === 'l2r' ? 'md:flex-row' : 'md:flex-row-reverse',
      className
    )}
    variants={containerVariant}
    initial="hidden"
    whileInView="show"
    viewport={{ once: viewPortOnce }}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      className="object-cover mb-6 md:mb-0 md:w-2/5"
      alt="hero"
      src={image}
    />
    <div className="md:w-3/5 flex flex-col md:items-start items-center ">
      <Typography variant="h2" as="h2">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h4" as="h3" className="mt-[0]">
          {subtitle}
        </Typography>
      )}
      <motion.div variants={itemVariant}>
        <Typography variant="body">{description}</Typography>
      </motion.div>
      <motion.div variants={itemVariant} className="flex flex gap-x-3 mt-6">
        {buttons}
      </motion.div>
    </div>
  </motion.section>
)

export default ColumnHero
