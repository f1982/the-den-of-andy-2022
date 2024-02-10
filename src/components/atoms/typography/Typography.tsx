import Highlight from './Highlight'
import cn from 'classnames'
import React, {
  ElementType,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react'

// https://www.aleksandrhovhannisyan.com/blog/dynamic-tag-name-props-in-react/?hmsr=joyk.com&utm_source=joyk.com&utm_medium=referral

// eslint-disable-next-line no-undef
interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType
}

interface TypographyProps extends ComponentProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-bold' | 'small'
  as?: any
  className?: string
  style?: React.CSSProperties
  highlight?: boolean
}

// animation configuration
const transition = {
  duration: 0.3,
  type: 'tween',
  ease: 'easeInOut',
}

const headVariant = {
  hidden: { opacity: 0, x: 60, transition },
  whileHover: { y: 3, transition },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition,
  },
}

const basicStyle = 'text-on-background'

const asMap = new Map<string, string>([
  ['h1', 'h1'],
  ['h2', 'h2'],
  ['h3', 'h3'],
  ['h4', 'h4'],
  ['body', 'p'],
  ['body-bold', 'p'],
  ['small', 'p'],
])

const styleMap = new Map<string, string>([
  ['h1', 'text-[2.85rem] md:text-[2.85rem] font-bold mt-3 mb-3 tracking-tight'],
  ['h2', 'text-[1.5rem] md:text-[1.85rem] font-bold mt-3 mb-3 tracking-tight'],
  [
    'h3',
    'text-[1.35rem] md:text-[1.5rem] font-bold tracking-tight t mt-3 mb-3',
  ],
  ['h4', 'text-base font-bold t leading-tight mt-2 mb-2 tracking-tight'],
  ['body', 'text-base md:text-base t mt-1 mb-1 tracking-tight leading-6'],
  [
    'body-bold',
    'text-base md:text-base font-bold t mt-1 mb-1 tracking-tight leading-6',
  ],
  ['small', 'text-sm t mt-1 mb-1'],
])

const Typography: React.FC<PropsWithChildren<TypographyProps>> = ({
  variant = 'h1',
  as = undefined,
  className,
  highlight = false,
  style,
  children,
}) => {
  const Component = as || asMap.get(variant)
  // const withAnimation = ['h1', 'h2'].includes(variant);
  const getContent = (contentTitle: ReactNode) =>
    highlight ? <Highlight>{contentTitle}</Highlight> : contentTitle
  return (
    <Component
      className={cn(basicStyle, styleMap.get(variant), className)}
      style={style}>
      {getContent(children)}
    </Component>
  )
}

export default Typography
