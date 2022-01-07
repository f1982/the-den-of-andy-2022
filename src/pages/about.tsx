import { t } from 'i18next';
import React from 'react';
import SmallText from '../components/Paragraph/SmallText';

const getYears = (birthYear: number) => {
  const d = new Date();
  const n = d.getFullYear();
  return n - birthYear;
};

export default function About() {
  return (
    <div>
      <SmallText
        title={t('about.whoIsAndyTitle')}
        description={t('about.whoIsAndyDescription')}
      />
      <SmallText
        title={t('about.whatAndyDoTitle')}
        description={t('about.whatAndyDoDescription')}
      />
      <SmallText
        title={t('about.familyTitle')}
        description={String(t('about.familyDescription')).replace('$AGE_OF_ZOE$', getYears(2016).toString())}
      />
    </div>
  );
}
