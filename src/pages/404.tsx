import { t } from 'i18next';
import React from 'react';
import MyButton from '../components/Button/Button';
import DotLoader from '../components/Loader/DotLoader';
import TabTitle from '../components/Metadata/SiteSEO';
import Headline from '../components/Typography/Headline';

function Custom404() {
  return (
    <>
      <TabTitle pageTitle={t('pageNotFound.pageTitle')} />
      <div className="flex-row border-4 justify-center items-center  justify-items-center content-center">
        <Headline title={t('pageNotFound.headline')} />
        <DotLoader />
        <DotLoader />
        <div>
          <MyButton href="/" type="primary">{t('pageNotFound.backButtonLabel')}</MyButton>
        </div>
      </div>
    </>
  );
}

Custom404.getLayout = function getLayout(page) {
  return (
    <div className="grid place-items-center h-screen">
      {page}
    </div>
  );
};

export default Custom404;
