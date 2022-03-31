import { motion } from 'framer-motion';
import React, {
  ComponentType, HTMLAttributes, ElementType,
} from 'react';
import Highlight from './Highlight';

// https://www.aleksandrhovhannisyan.com/blog/dynamic-tag-name-props-in-react/?hmsr=joyk.com&utm_source=joyk.com&utm_medium=referral

// eslint-disable-next-line no-undef
interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

interface TypographyProps extends ComponentProps {
  title:string;
  variant:'h1'|'h2'|'h3'|'h4';
  as: any;
}

// animation configuration
const headVariant = {
  hidden: { opacity: 0, x: 60 },
  whileHover: { scale: 1.005 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeInOut',
    },
  },
};

const fontMap = new Map<string, string>([
  ['h1', 'text-md relative md:text-lg font-bold tracking-relax leading-tight mt-3 mb-3'],
  ['h2', 'text-md relative md:text-lg font-bold tracking-tighter leading-tight mt-3 mb-3'],
]);

export default function Typography({
  title,
  variant = 'h1',
  as = null,
}:TypographyProps) {
  const Component = as ?? 'div';
  return (
    <motion.div
      variants={headVariant}
      initial="hidden"
      whileInView="show"
      whileHover="whileHover"
      viewport={{ once: true }}
      className={fontMap.get(variant)}
    >
      <Component>
        <Highlight>
          {title}
        </Highlight>
      </Component>

    </motion.div>
  );
}
