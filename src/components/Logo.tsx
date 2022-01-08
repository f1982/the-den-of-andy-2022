/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
// import LOGO from '../assets/logo.png';
import Image from './ui/Image';

// const myLoader = ({ src, width, quality }) => src;

export default function Logo() {
  return (
    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Link href="/" passHref>
        <a>
          {/* <Image
            // loader={myLoader}
            src={LOGO}
            width={160}
            height={100}
            alt="Andy Space"
          /> */}
          {/* <img src="/static/images/about-computer.jpg" alt="andy space" /> */}
          <Image
            src="/static/images/logo.png"
            width={160}
            height={100}
            alt="andy space"
          />
        </a>
      </Link>
    </div>
  );
}
