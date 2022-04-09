import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../next-seo';
import SiteSEO from '../components/molecules/seo/SiteSEO';
import DebugInfo from '../features/Debug/DebugInfo';
import DefaultWelcome from '../features/Welcome/DefaultWelcome';

function Index() {
  const { t } = useTranslation();

  return (
    <>
      <SiteSEO {...SEO} pageTitle={t('welcome.pageTitle')} />
      <div className="h-screen flex flex-col justify-center items-center">
        <DefaultWelcome
          title={t('welcome.greeting')}
          subtitle={t('welcome.description')}
          link="/home"
        />
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
