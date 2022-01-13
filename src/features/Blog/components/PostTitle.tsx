import { motion } from 'framer-motion';

export default function PostTitle({ children }) {
  return (
    <motion.h1
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="
        text-6xl
        md:text-7xl
        lg:text-8xl
        font-bold
        tracking-tighter
        leading-tight
        md:leading-none
        max-w-2xl
        mx-auto
        text-center
        md:text-left
      "
      layoutId="post-title"
    >
      {children}
    </motion.h1>
  );
}
