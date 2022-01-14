import Link from 'next/link';
import classNames from 'classnames';
import SocialLinks from './SocialLinks/SocialLinks';
import ThemeChanger from './ThemeChanger';

function Copyright() {
  return (
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
      Copyright @2020 andycao.com, design by Andy
    </p>
  );
}

function TermsAndConditions() {
  return (
    <ul className={classNames(
      'inline-flex',
      'text-sm',
      'sm:ml-auto',
      'sm:mt-0',
      'mt-4',
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
  );
}

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Copyright />
        <TermsAndConditions />
        <SocialLinks />
      </div>
      <ThemeChanger />
    </footer>
  );
}
