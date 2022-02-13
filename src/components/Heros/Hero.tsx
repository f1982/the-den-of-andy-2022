// import Image from 'next/image';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import cn from '../../../i18n/languages/cn';
import Button from '../Button/Button';
import Image from '../ui/Image';

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

const itemVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

function Hero({
  image,
  viewPortOnce = false,
}:{
  image:string,
  viewPortOnce?:boolean
}) {
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
      {/* <motion.figure
        className="lg:w-2/5 md:w-1/2 w-5/6 mb-10 object-cover object-center rounded"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'tween' }}
        viewport={{ once: viewPortOnce }}
      > */}
      <motion.figure
        className="lg:w-2/5 md:w-1/2 w-5/6 mb-10 object-cover object-center rounded"
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
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 1, type: 'tween' }}
        // viewport={{ once: viewPortOnce }}
      >
        <motion.h2
          variants={itemVariant}
          className="
        sm:text-lg text-lg mb-4 font-medium tracking-tighter"
        >
          Microdosing synth tattooed vexillologist
        </motion.h2>
        <motion.p
          variants={itemVariant}
          className="mb-8 leading-relaxed"
        >
          Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled.
          Chambray dreamcatcher trust fund,
          kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
          Pour-over meditation PBR&B pickled ennui celiac mlkshk
          freegan photo booth af fingerstache pitchfork.
        </motion.p>
        <motion.div variants={itemVariant} className="flex justify-center">
          <Button type="primary">Primary</Button>
          <Button type="secondary">Secondary</Button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
