import Prose from '@/components/atoms/prose'
import React from 'react'

interface PageTitleProps {
  title: string
  description: string
  className?: string
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  description,
  className,
}) => (
  <Prose>
    <h1>{title}</h1>
    <p>{description}</p>
  </Prose>
)

export default PageTitle
