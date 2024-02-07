'use client'

/* eslint-disable @next/next/no-img-element */
import ImageComponent from '../../../../src-backup/components/atoms/Image/Image'
import Typography from '../../../../src-backup/components/atoms/typography/Typography'
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
      staggerChildren: 0.5 // let the child show up by order after a certain delay
    }
  }
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
    className="w-full mb-20 mx-auto flex flex-col items-center justify-center">
    {!!title && <Typography variant="h2">{title}</Typography>}
    {!!image && (
      <ImageComponent
        className="mb-4 rounded-2xl w-full"
        src={image}
        alt={title}
      />
    )}
    <Typography variant="body">{description}</Typography>
  </motion.div>
)

export default SmallText
