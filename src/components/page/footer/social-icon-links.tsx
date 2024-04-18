import { MenuItemData } from '../header/menu-data'
import Link from 'next/link'

function SocialIconLinks({
  data,
  className,
}: {
  data: MenuItemData[]
  className?: string
}) {
  return (
    <div className="flex flex-row gap-6">
      {data.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          title={item.title}
          className="text-muted-foreground transition-all hover:text-foreground">
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default SocialIconLinks
