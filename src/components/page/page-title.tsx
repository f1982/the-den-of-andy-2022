import React from 'react'

import Prose from '@/components/atoms/prose'

interface PageTitleProps {
  title: string
  description: string
}

const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => (
  <Prose>
    <h1 className="text-3xl md:text-4xl">{title}</h1>
    <p>{description}</p>
  </Prose>
)

export default PageTitle
