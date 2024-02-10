import SVGAnimation from './logo-animation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface WelcomeProps {
  title: string
  subtitle: string
  label: string
  link?: string
}

const DefaultWelcome = ({
  title,
  subtitle,
  label,
  link = '/home',
}: WelcomeProps) => (
  <div
    className="
      container mx-auto
      flex
      flex-col
      items-center justify-center
    ">
    <SVGAnimation />
    <div className="prose prose-sm dark:prose-invert text-center mb-9">
      <h1 className="uppercase">{title}</h1>
      <p>{subtitle}</p>
    </div>
    <div className="flex justify-center">
      <Link href={link} locale="en">
        <Button>{label}</Button>
      </Link>
    </div>
  </div>
)

export default DefaultWelcome
