import { motion } from 'framer-motion';
import React, {
  ComponentType, HTMLAttributes, ElementType,
} from 'react';
import cn from 'classnames';
import Highlight from './Highlight';
// https://www.aleksandrhovhannisyan.com/blog/dynamic-tag-name-props-in-react/?hmsr=joyk.com&utm_source=joyk.com&utm_medium=referral

// eslint-disable-next-line no-undef
interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

interface TypographyProps extends ComponentProps {
  title:string;
  variant:'h1'|'h2'|'h3'|'h4'|'body'|'small';
  as?: any;
  className?:string;
}

// animation configuration
const transition = {
  duration: 0.3,
  type: 'tween',
  ease: 'easeInOut',
};

const headVariant = {
  hidden: { opacity: 0, x: 60, transition },
  whileHover: { y: 3, transition },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition,
  },
};

const fontMap = new Map<string, string>([
  ['h1', 'text-xl md:text-2xl font-bold text-on-background leading-tight mt-3 mb-3'],
  ['h2', 'text-lg md:text-xl font-bold  text-on-background mt-3 mb-3'],
  ['h3', 'text-md md:text-lg font-bold tracking-tight text-on-background mt-3 mb-3'],
  ['h4', 'text-base md:text-md font-bold text-on-background leading-tight mt-2 mb-2'],
  ['body', 'text-base md:text-base text-on-background mt-1 mb-1'],
  ['small', 'text-sm text-on-background mt-1 mb-1'],
]);

export default function Typography({
  title,
  variant = 'h1',
  as = null,
  className,
}:TypographyProps) {
  const Component = as ?? 'div';
  return (
    ['h1', 'h2'].includes(variant) ? (
      <motion.div
        variants={headVariant}
        initial="hidden"
        whileInView="show"
        whileHover="whileHover"
        viewport={{ once: true }}
        className={cn(fontMap.get(variant), className)}
      >
        <Component>
          <Highlight>{title}</Highlight>
        </Component>

      </motion.div>
    ) : (
      <Component
        className={cn(fontMap.get(variant), className)}
      >
        {title}
      </Component>
    )
  );
}
