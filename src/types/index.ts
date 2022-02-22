import React from 'react';

interface MenuItemData {
  link:string,
  label:string,
  icon?: React.ReactElement,
}

interface HeroData {
  title:string,
  image:string,
  description?:string,
  buttons?:React.ReactNode,
  viewPortOnce?:boolean
}
export type { MenuItemData, HeroData };
