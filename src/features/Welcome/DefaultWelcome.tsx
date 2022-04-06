import { t } from 'i18next';
import React from 'react';
import MyButton from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import SVGAnimation from './SVGAnimation';

interface WelcomeProps {
  link?: string;
}

export default function DefaultWelcome({ link = '/home' }:WelcomeProps) {
  return (
    <div className="
    container mx-auto
    flex
    flex-col
    items-center justify-center
    "
    >
      <SVGAnimation />
      <div className="text-center">
        <Typography title={t('welcome.greeting')} variant="h1" as="h2" />
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
