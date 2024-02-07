'use client'

import SocialLinks from '../../../src-backup/components/atoms/links/SocialLinks'
import LocaleSwitcher from '../../lib/lang/locale-switcher'
import ThemeChanger from './theme-switch/ThemeChanger'
import classNames from 'classnames'
import Link from 'next/link'

const Copyright = () => (
  <div className="mt-9">
    <p className="text-sm text-center">
      Copyright @2020 andycao.com, design by Andy
    </p>
  </div>
)

const TermsAndConditions = () => (
  <div className="mt-3">
    <ul
      className={classNames(
        'text-sm',
        'flex',
        'justify-center',
        'sm:justify-start'
      )}>
      <li className="pr-4">
        <Link href="/term-and-conditions" passHref legacyBehavior>
          <button type="button">Terms and Conditions</button>
        </Link>
      </li>
      <li>
        <Link href="/privacy-policy" passHref legacyBehavior>
          <button type="button">Privacy Policy</button>
        </Link>
      </li>
    </ul>
  </div>
)

const Footer = () => (
  <footer className="border-t-[1px] border-border mt-12">
    <div className="container mx-auto py-12">
      <div className="w-full flex md:flex-row flex-col ">
        <div className="md:w-2/3 w-full">
          <p className="md:text-left text-center mt-0">
            Have a mind that is open to everything and attached to nothing
          </p>
          <TermsAndConditions />
          <LocaleSwitcher />
        </div>
        <div className="w-full md:w-1/3 flex md:justify-end justify-center">
          <SocialLinks />
        </div>
      </div>
      <Copyright />
    </div>
    {/* <ThemeChanger /> */}
  </footer>
)

export default Footer
