'use client'

/* eslint-disable @next/next/no-img-element */
import ImageComponent from '../../atoms/Image/Image'
import Typography from '../../atoms/typography/Typography'
import { motion } from 'framer-motion'
import React from 'react'

const containerVariant = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: 'tween',
      staggerChildren: 0.5, // let the child show up by order after a certain delay
    },
  },
}

interface SmallTextProps {
  title?: string
  image?: string
  description: string
}

const SmallText: React.FC<SmallTextProps> = ({ description, title, image }) => (
  <motion.div
    variants={containerVariant}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mx-auto mb-20 flex w-full flex-col items-center justify-center">
    {!!title && <Typography variant="h2">{title}</Typography>}
    {!!image && (
      <ImageComponent
        className="mb-4 w-full rounded-2xl"
        src={image}
        alt={title}
      />
    )}
    <Typography variant="body">{description}</Typography>
  </motion.div>
)

export default SmallText
