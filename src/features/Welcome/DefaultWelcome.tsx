import { t } from 'i18next';
import React from 'react';
import MyButton from '../../components/Button/Button';

interface WelcomeProps {
  link?: string;
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
          <MyButton href={link} type="primary">{t('welcome.buttonLabel')}</MyButton>
        </div>
      </div>
    </div>
  );
}
