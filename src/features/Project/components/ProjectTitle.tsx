import { motion } from 'framer-motion';

export default function ProjectTitle({ id, title }:{id: string, title:string}) {
  return (
    <motion.h1
      className="
      text-6xl
      md:text-5xl
      lg:text-7xl
      font-bold
      tracking-tighter
      leading-tight
      md:leading-none
      mx-auto
      text-center
      md:text-left
      "
      layoutId={`project-title-${id}`}
    >
      {title}
    </motion.h1>
  );
}