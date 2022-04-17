import React from 'react';

interface MenuItemData {
  link:string,
  label:string,
  icon?: React.ReactElement,
  onClick?: (e:React.MouseEvent, path:string)=>void
}

interface HeroData {
  title:string,
  image:string,
  description?:string,
  buttons?:React.ReactNode,
  viewPortOnce?:boolean
}
export type { MenuItemData, HeroData };
