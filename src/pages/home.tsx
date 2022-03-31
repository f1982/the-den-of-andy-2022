import { t } from 'i18next';
import React from 'react';
import HeroHome from '../components/Blocks/HeroHome';
import SelfIntroShort from '../components/Blocks/SelfIntroShort';
import TabTitle from '../components/Metadata/SiteSEO';

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
