import clsx from 'clsx'

import { MenuItemData } from '../header/menu-data'
import { FooterLinkItem } from './footer-link-item'

export const ExtraLinks = ({ data }: { data: MenuItemData[][] }) => {
  return (
    <>
      <div className={clsx('flex flex-row gap-3')}>
        {data.map((list, i) => (
          <div key={i} className="flex w-full flex-col gap-3">
            {list.map((item) => (
              <FooterLinkItem
                key={item.link}
                label={item.label}
                link={item.link}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
