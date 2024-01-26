import { HeroData } from '../../../types'
import Typography from '../../atoms/typography/Typography'
import cn from 'classnames'
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
    duration: 3.0
  }
}

const Hero: React.FC<HeroData> = ({
  title,
  subtitle,
  image,
  description,
  buttons,
  viewPortOnce = true,
  className,
  id
}) => (
  <motion.section
    className={cn(
      'container mx-auto',
      'flex',
      'items-center',
      'justify-center',
      'flex-col',
      className
    )}
    variants={containerVariant}
    initial="hidden"
    whileInView="show"
    viewport={{ once: viewPortOnce }}
    id={id}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img className={cn('mx-auto w-2/3 md:w-2/5')} alt="hero" src={image} />
    <div className="lg:w-3/4 w-full">
      <Typography variant="h2" as="h2" className="text-center">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h3" className="font-thin text-center">
          {subtitle}
        </Typography>
      )}
      <motion.div variants={itemVariant} className="mb-8">
        <Typography variant="body" className="text-left">
          {description}
        </Typography>
      </motion.div>
      <motion.div variants={itemVariant} className="flex justify-center">
        {buttons}
      </motion.div>
    </div>
  </motion.section>
)

export default Hero
