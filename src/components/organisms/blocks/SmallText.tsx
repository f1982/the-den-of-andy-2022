'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
  title: string
  image: string
  description: string
}

const SmallText: React.FC<SmallTextProps> = ({ description, title, image }) => (
  <motion.div
    variants={containerVariant}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="mx-auto mb-20 flex w-full flex-col items-center justify-center">
    {!!title && <h2 className="mb-6 text-lg font-semibold">{title}</h2>}
    <Image
      className="mb-4 w-full rounded-2xl"
      src={image}
      alt={title}
      width={800}
      height={600}
    />
    <p>{description}</p>
  </motion.div>
)

export default SmallText
