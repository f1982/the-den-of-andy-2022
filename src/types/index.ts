import React from 'react';

interface MenuItemData {
  link:string,
  label:string
}

interface HeroData {
  title:string,
  image:string,
  description?:string,
  buttons?:React.ReactNode,
  viewPortOnce?:boolean
}
export type { MenuItemData, HeroData };
