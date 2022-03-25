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
      <AlertBar preview>test</AlertBar>
      <div className="h-screen flex flex-col justify-center items-center">
        <DefaultWelcome />
      </div>
      <DebugInfo />
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
