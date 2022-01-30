import { t } from 'i18next';
import Link from 'next/link';
import React from 'react';

interface WelcomeProps {
  link?: React.ReactNode;
}

export default function DefaultWelcome({ link = '/home' }:WelcomeProps) {
  return (
    <div className="
    container mx-auto
    flex
    flex-col
    px-5 py-24
    items-center justify-center
    "
    >

      <div className="
      text-center lg:w-2/3 w-full
      "
      >
        <h1 className="
        title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900
        "
        >
          {t('welcome.greeting')}
        </h1>
        <p className="mb-8 leading-relaxed">
          {t('welcome.description')}
        </p>
        <div className="flex justify-center">
          <Link href="/home" passHref>
            <a className="
              inline-flex
              text-white
              bg-blue-500
              border-0 py-2 px-6
              focus:outline-none
              hover:bg-blue-600
              rounded text-lg
              "
            >
              {t('welcome.buttonLabel')}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
