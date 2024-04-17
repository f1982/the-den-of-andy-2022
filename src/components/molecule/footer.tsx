import LocaleSwitcher from '../../i18n/locale-switcher'
import SocialLinks from '../atoms/links/SocialLinks'
import classNames from 'classnames'
import Link from 'next/link'

const Copyright = () => (
  <div className="my-9">
    <p className="text-center text-sm text-muted-foreground">
      Copyright @2020 andycao.com, design by Andy
    </p>
  </div>
)

const TermsAndConditions = () => (
  <div className="mt-3">
    <ul
      className={classNames(
        'text-sm',
        'flex gap-3',
        'justify-center',
        'sm:justify-start',
      )}>
      <li>
        <Link href="/term-and-conditions" passHref legacyBehavior>
          <button type="button">Terms and Conditions</button>
        </Link>
      </li>
      <li>
        <Link href="/privacy-policy" passHref legacyBehavior>
          <button type="button">Privacy Policy</button>
        </Link>
      </li>
      <li>
        <LocaleSwitcher />
      </li>
    </ul>
  </div>
)

const Footer = () => (
  <footer className="mt-12 border-t-[1px] border-border">
    <div className="container py-6">
      <div className="mb-[120px] flex w-full flex-col md:flex-row ">
        <div className="w-full md:w-2/3">
          <p className="mt-0 text-center md:text-left">
            Have a mind that is open to everything and attached to nothing
          </p>
          <TermsAndConditions />
        </div>
        <div className="flex w-full justify-center md:w-1/3 md:justify-end">
          <SocialLinks />
        </div>
      </div>
      <Copyright />
    </div>
  </footer>
)

export default Footer
