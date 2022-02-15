import { motion } from 'framer-motion';
import React from 'react';
import ImageComponent from '../ui/Image';

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
}:{
    title?:string,
    image?:string,
    description:string
}) {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full mb-20 mx-auto"
    >
      {!!title && <h2 className="text-lg mb-4 font-medium tracking-tighter">{title}</h2>}
      {!!image && <ImageComponent className="my-6" src={image} alt="andy" width="100%" />}
      <p>{description}</p>
    </motion.div>
  );
}

export default SmallText;
