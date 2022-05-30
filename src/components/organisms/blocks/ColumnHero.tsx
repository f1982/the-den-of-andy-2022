// import Image from 'next/image';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { HeroData } from '../../../types';
import Button from '../../atoms/buttons/Button';
import Image from '../../atoms/Image/Image';
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
    x: +200,
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

function ColumnHero({
  title,
  subtitle,
  image,
  description,
  buttons,
  viewPortOnce = false,
}: HeroData) {
  return (
    <motion.section
      className={classNames(
        'container mx-auto flex gap-x-16 mb-[3rem] md:flex-row flex-col items-center',
      )}
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: viewPortOnce }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="object-cover mb-6 md:mb-0 md:w-2/5"
        alt="hero"
        src={image}
      />
      <div className="md:w-3/5 flex flex-col md:items-start md:text-left items-center text-center">
        <Typography variant="h2" as="h2">{title}</Typography>
        {subtitle && <Typography variant="h3">{subtitle}</Typography>}
        <Typography variant="body">{description}</Typography>
        <motion.div
          variants={itemVariant}
          className="flex flex gap-x-3 mt-6"
        >
          {buttons}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ColumnHero;
