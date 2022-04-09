import { t } from 'i18next';
import React from 'react';
import MyButton from '../../components/atoms/buttons/Button';
import Typography from '../../components/atoms/typography/Typography';
import SVGAnimation from './SVGAnimation';

interface WelcomeProps {
  title:string;
  subtitle:string;
  link?: string;
}

export default function DefaultWelcome({
  title,
  subtitle,
  link = '/home',
}:WelcomeProps) {
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
        <Typography title={title} variant="h1" as="h1" />
        <p className="mb-8 leading-relaxed">{subtitle}</p>
        <div className="flex justify-center">
          <MyButton href={link} type="primary">{t('welcome.buttonLabel')}</MyButton>
        </div>
      </div>
    </div>
  );
}
