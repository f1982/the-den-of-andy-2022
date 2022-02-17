import { t } from 'i18next';
import React from 'react';
import MyButton from '../components/Button/Button';
import DotLoader from '../components/Loader/DotLoader';
import TabTitle from '../components/Metadata/SiteSEO';
import Headline from '../components/Typography/Headline';

export default function Custom404() {
  return (
    <>
      <TabTitle pageTitle={t('pageNotFound.pageTitle')} />
      <div className="container mx-auto px-5">
        <Headline title={t('pageNotFound.headline')} />
        <DotLoader />
        <MyButton href="/" type="primary">{t('pageNotFound.backButtonLabel')}</MyButton>
      </div>
    </>
  );
}
