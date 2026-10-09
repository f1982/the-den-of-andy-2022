import React from 'react'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface SmallTextProps {
  title: string
  image: string | StaticImport
  description: string
}

const SmallText: React.FC<SmallTextProps> = ({ description, title, image }) => (
  <div className="mx-auto mb-20 flex w-full animate-reveal flex-col items-center justify-center">
    {!!title && <h2 className="mb-6 text-lg font-semibold">{title}</h2>}
    <Image
      className="mb-4 w-full rounded-2xl"
      src={image}
      alt={title}
      width={800}
      height={600}
      sizes="(max-width: 900px) 100vw, 868px"
    />
    <p>{description}</p>
  </div>
)

export default SmallText
