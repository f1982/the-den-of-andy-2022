import { motion } from 'framer-motion';
import React from 'react';
import ImageComponent from '../../atoms/Image/Image';
import { Headline2 } from '../../atoms/typography/Headline';
import Typography from '../../atoms/typography/Typography';

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
};

function SmallText({
  description,
  title,
  image,
}: {
  title?: string,
  image?: string,
  description: string
}) {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full mb-20 mx-auto flex flex-col items-center justify-center"
    >
      {!!title && <div><Typography variant="h2">{title}</Typography></div>}
      {!!image && <ImageComponent className="my-6 rounded-2xl mx-auto" src={image} alt="andy" width="100%" />}
      <p>{description}</p>
    </motion.div>
  );
}

export default SmallText;
