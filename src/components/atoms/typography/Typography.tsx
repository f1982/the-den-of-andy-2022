import cn from 'classnames';
import { motion } from 'framer-motion';
import React, { ElementType, HTMLAttributes } from 'react';
import Highlight from './Highlight';
// https://www.aleksandrhovhannisyan.com/blog/dynamic-tag-name-props-in-react/?hmsr=joyk.com&utm_source=joyk.com&utm_medium=referral

// eslint-disable-next-line no-undef
interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

interface TypographyProps extends ComponentProps {
  title: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small';
  as?: any;
  className?: string;
  highlight?: boolean;
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

const basicStyle = 'text-on-background leading-tight';

const asMap = new Map<string, string>([
  ['h1', 'h1'],
  ['h2', 'h2'],
  ['h3', 'h3'],
  ['h4', 'h4'],
  ['body', 'p'],
  ['small', 'p'],
]);

const styleMap = new Map<string, string>([
  ['h1', 'text-[2.85rem] md:text-[2.85rem] font-bold mt-3 mb-3'],
  ['h2', 'text-[1.85rem] md:text-[1.85rem] font-bold mt-3 mb-3'],
  ['h3', 'text-[1.5rem] md:text-[1.5rem] font-bold tracking-tight t mt-3 mb-3'],
  ['h4', 'text-base font-bold t leading-tight mt-2 mb-2'],
  ['body', 'text-base md:text-base t mt-1 mb-1'],
  ['small', 'text-sm t mt-1 mb-1'],
]);

export default function Typography({
  title,
  variant = 'h1',
  as = undefined,
  className,
  highlight = false,
}: TypographyProps) {
  const Component = as || asMap.get(variant);
  const withAnimation = ['h1', 'h2'].includes(variant);
  const getContent = (contentTitle: string) => (
    highlight ? <Highlight>{contentTitle}</Highlight> : contentTitle
  );
  return (
    withAnimation ? (
      <motion.div
        variants={headVariant}
        initial="hidden"
        whileInView="show"
        whileHover="whileHover"
        viewport={{ once: true }}
      >
        <Component className={cn(basicStyle, styleMap.get(variant), className)}>
          {getContent(title)}
        </Component>

      </motion.div>
    ) : (
      <Component
        className={cn(basicStyle, styleMap.get(variant), className)}
      >
        {getContent(title)}
      </Component>
    )
  );
}
