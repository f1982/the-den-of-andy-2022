/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
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
      {!!image && <img className="my-6 rounded-2xl w-full mx-auto" src={image} alt={title} />}
      <div className="px-4">{description}</div>
    </motion.div>
  );
}

export default SmallText;
