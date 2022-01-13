import { motion } from 'framer-motion';

export default function Headline({ title }:{title:string}) {
  return (
    <section
      className="
    flex-col md:flex-row
    flex items-center md:justify-between mt-16 mb-16 md:mb-12
    "
    >
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="
        text-6xl text-th-accent-medium
        font-as md:text-8xl font-bold
        tracking-tighter leading-tight
        md:pr-8"
      >
        {title}
        .
      </motion.h1>
    </section>
  );
}
