import classNames from 'classnames';
import Link from 'next/link';
import SocialLinks from '../SocialLinks/SocialLinks';
import ThemeChanger from './ThemeChanger';

function Copyright() {
  return (
    <div className="mt-12">
      <p className="text-sm sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
        Copyright @2020 andycao.com, design by Andy
      </p>
    </div>

  );
}

function TermsAndConditions() {
  return (
    <div className="mt-3">
      <ul className={classNames(
        'inline-flex',
        'text-sm',
        'justify-center',
        'sm:justify-start',
      )}
      >
        <li className="pr-4">
          <Link href="/t&c" passHref>
            <button type="button" className="text-gray-500">Terms and Conditions</button>
          </Link>
        </li>
        <li>
          <Link href="/privacy" passHref>
            <button type="button" className="text-gray-500">Privacy Policy</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray mt-12">
      <div className="
      container mx-auto
      py-12
      flex items-center :flex-row flex-col"
      >
        <div className="w-full flex flex-row gap-10">
          <div>
            <p>Have a mind that is open to everything and attached to nothing</p>
            <TermsAndConditions />
          </div>
          <div className="flex-1" />
          <div>
            <SocialLinks />
          </div>
        </div>
        <Copyright />
      </div>
      <ThemeChanger />
    </footer>
  );
}
