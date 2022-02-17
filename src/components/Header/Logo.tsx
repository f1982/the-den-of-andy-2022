/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from '../Image/Image';

export default function Logo() {
  return (
    <div className="flex title-font font-medium mb-4 md:mb-0">
      <Link href="/" passHref>
        <a>
          <Image
            src="/static/images/logo-new.png"
            width={160}
            height={100}
            withLoader={false}
            alt="andy space"
          />
          {/* <NextImage
            src={LogoImage}
            alt="andy space"
          /> */}
        </a>
      </Link>
    </div>
  );
}
