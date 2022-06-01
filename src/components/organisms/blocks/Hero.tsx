import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import { HeroData } from '../../../types';
import Typography from '../../atoms/typography/Typography';

const containerVariant = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: 'tween',
      staggerChildren: 1.0, // let the child show up by order after a certain delay
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
  },
  transition: {
    type: 'tween',
    duration: 2.6,
  },
};

function Hero({
  title,
  subtitle,
  image,
  description,
  buttons,
  viewPortOnce = false,
  className,
}: HeroData) {
  return (
    <motion.section
      className={classNames(
        'container mx-auto',
        'flex',
        'items-center justify-center flex-col',
        className,
      )}
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: viewPortOnce }}
    >
      <motion.figure
        className="
         md:w-2/5 mb-10
        object-cover object-center rounded"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="object-cover w-full"
          alt="hero"
          src={image}
        />
      </motion.figure>
      <div
        className="text-center lg:w-3/4 w-full"
      >
        <Typography variant="h2" as="h2">{title}</Typography>
        {subtitle && <Typography variant="h3" className="font-thin">{subtitle}</Typography>}
        <motion.div
          variants={itemVariant}
          className="mb-8"
        >
          <Typography variant="body">{description}</Typography>
        </motion.div>
        <motion.div
          variants={itemVariant}
          className="flex justify-center"
        >
          {buttons}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
