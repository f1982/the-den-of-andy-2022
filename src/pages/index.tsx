import Link from 'next/link';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../next-seo';
import SiteSEO from '../components/SiteSEO';
import DefaultWelcome from '../features/Welcome/DefaultWelcome';
import DebugInfo from '../utils/DebugInfo';
import { GoogleAds } from '../utils/SiteAds';

function Index() {
  const { t } = useTranslation();

  return (
    <>
      <SiteSEO {...SEO} pageTitle={t('welcome.pageTitle')} />
      <div>
        <DefaultWelcome
          greeting={t('greeting')}
          link={(
            <Link href="/home" passHref>
              <a className="
              inline-flex
              text-white
              bg-blue-500
              border-0 py-2 px-6
              focus:outline-none
              hover:bg-blue-600
              rounded text-lg
              "
              >
                Go
              </a>
            </Link>
          )}
        />
        <DebugInfo />
        <GoogleAds />
      </div>
    </>
  );
}

export default Index;
