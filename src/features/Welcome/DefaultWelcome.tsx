import { t } from 'i18next';
import React from 'react';
import MyButton from '../../components/atoms/buttons/Button';
import Typography from '../../components/atoms/typography/Typography';
import SVGAnimation from './SVGAnimation';

interface WelcomeProps {
  title: string;
  subtitle: string;
  label: string;
  link?: string;
}

export default function DefaultWelcome({
  title,
  subtitle,
  label,
  link = '/home',
}: WelcomeProps) {
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
        <Typography variant="h1" as="h1">{title}</Typography>
        <p className="mb-8 leading-relaxed">{subtitle}</p>
        <div className="flex justify-center">
          <MyButton href={link} type="primary">{label}</MyButton>
        </div>
      </div>
    </div>
  );
}
