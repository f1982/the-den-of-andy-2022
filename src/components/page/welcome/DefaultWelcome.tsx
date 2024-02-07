import MyButton from '../../atoms/buttons/Button'
import Typography from '../../atoms/typography/Typography'
import SVGAnimation from './SVGAnimation'
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
  link = '/home'
}: WelcomeProps) => (
  <div
    className="
      container mx-auto
      flex
      flex-col
      items-center justify-center
    ">
    <SVGAnimation />
    <div className="text-center">
      <Typography variant="h2" as="h1" className="uppercase">
        {title}
      </Typography>
      <p className="mb-8 leading-relaxed">{subtitle}</p>
      <div className="flex justify-center">
        <Link href={link} locale="en">
          <MyButton type="primary">{label}</MyButton>
        </Link>
      </div>
    </div>
  </div>
)

export default DefaultWelcome
