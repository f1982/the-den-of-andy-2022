// import Image from 'next/image';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';
import Button from '../Button/Button';
import Image from '../Image/Image';
import { Headline2 } from '../Typography/Headline';
import { HeroData } from '../../types';

const containerVariant = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      type: 'tween',
      staggerChildren: 0.6, // let the child show up by order after a certain delay
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
  image,
  description,
  buttons,
  viewPortOnce = false,
}:HeroData) {
  return (
    <motion.section
      className={classNames(
        'container mx-auto',
        'flex',
        'px-5',
        'py-24',
        'items-center justify-center flex-col',
      )}
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: viewPortOnce }}
    >
      <motion.figure
        className="
        lg:w-2/5 md:w-1/2 w-5/6 mb-10
        object-cover object-center rounded"
      >
        <Image
          alt="hero"
          src={image}
          width={450}
          height={320}
        />
      </motion.figure>
      <div
        className="text-center lg:w-3/4 w-full"
      >
        <Headline2>{title}</Headline2>
        <motion.p
          variants={itemVariant}
          className="mb-8 leading-relaxed"
        >
          {description}
        </motion.p>
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
