import Link from 'next/link';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../next-seo';
import SiteSEO from '../components/SiteSEO';
import DefaultWelcome from '../features/Welcome/DefaultWelcome';
import DebugInfo from '../utils/DebugInfo';
import AlertBar from '../components/ui/AlertBar';

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

export default Index;
