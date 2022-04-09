import { t } from 'i18next';
import React from 'react';
import HeroHome from '../components/organisms/blocks/HeroHome';
import SelfIntroShort from '../components/organisms/blocks/SelfIntroShort';
import TabTitle from '../components/molecules/seo/SiteSEO';

function Home(): React.ReactNode {
  return (
    <>
      <TabTitle pageTitle={t('home.pageTitle')} />
      <HeroHome />
      <div className="container mx-auto">
        <SelfIntroShort />
      </div>
    </>
  );
}

export default Home;
