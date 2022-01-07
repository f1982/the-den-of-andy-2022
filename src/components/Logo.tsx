import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Link href="/" passHref>
        <Image src="/assets/images/logo.png" width={160} height={100} alt="Andy Space" />
      </Link>
    </div>
  );
}
