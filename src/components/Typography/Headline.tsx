import { motion } from 'framer-motion';
import Highlight from './Highlight';

export default function Headline({ title }:{title:string}) {
  return (
    <div
      className="
        flex-col
        flex items-center
        md:flex-row md:justify-between md:mb-6 md:mb-6
        mt-2 mb-2
      "
    >
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="
        text-xl
        relative
        md:text-2xl
        font-bold
        tracking-tighter
        leading-tight
        md:pr-8"
      >
        <Highlight>
          {title}
        </Highlight>
      </motion.h1>
    </div>
  );
}
