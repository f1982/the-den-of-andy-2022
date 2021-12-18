import React from 'react'

interface ItemProp {
  technology: string
}

const TechStackItem = ({ technology }: ItemProp) => {
  return (<div className='text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
    {technology}
    </div>)
}

export { TechStackItem }
