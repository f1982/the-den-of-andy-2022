import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../next-seo';
import SiteSEO from '../components/Metadata/SiteSEO';
import AlertBar from '../components/Alert/AlertBar';
import DefaultWelcome from '../features/Welcome/DefaultWelcome';
import DebugInfo from '../features/Debug/DebugInfo';

function Index() {
  const { t } = useTranslation();

  return (
    <>
      <SiteSEO {...SEO} pageTitle={t('welcome.pageTitle')} />
      <AlertBar preview />
      <div className="h-screen flex flex-col justify-center items-center">
        <DefaultWelcome />
        <DebugInfo />
      </div>
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <div>
      {page}
    </div>
  );
};
export default Index;
