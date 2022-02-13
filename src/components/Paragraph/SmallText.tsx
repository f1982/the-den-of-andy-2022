import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import React from 'react';
import ImageComponent from '../ui/Image';

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
    <InView threshold={0.25}>
      {({ inView, ref, entry }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="w-full mb-20 mx-auto"
        >
          {!!title && <h2 className="text-lg mb-4 font-medium tracking-tighter">{title}</h2>}
          {!!image && <ImageComponent className="my-6" src={image} alt="andy" width="100%" />}
          <p>{description}</p>
        </motion.div>
      )}
    </InView>
  );
}

export default SmallText;
