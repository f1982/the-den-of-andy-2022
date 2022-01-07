import Link from 'next/link';
import SocialLinks from '../SocialLinks/SocialLinks';
import Logo from '../Logo';

function Copyright() {
  return (
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2020 Tailblocks —
      <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
    </p>
  );
}

function TermsAndConditions() {
  return (
    <ul>
      <li>
        <Link href="/t&c" passHref>
          <button type="button" className="text-gray-500">Terms and Conditions</button>
        </Link>
      </li>
      <li>
        <Link href="/t&c" passHref>
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
        <Logo />
        <Copyright />
        <TermsAndConditions />
        <SocialLinks />
      </div>
    </footer>
  );
}
