import React from 'react';

interface MenuItemData {
  link: string;
  label: string;
  icon?: React.ReactElement;
  onClick?: (e: React.MouseEvent, path: string) => void | undefined;
}

interface HeroData {
  title: string;
  subtitle?: string;
  image: string;
  description?: string;
  buttons?: React.ReactNode;
  viewPortOnce?: boolean;
  className?: string;
  id?: string;
}
export type { MenuItemData, HeroData };
