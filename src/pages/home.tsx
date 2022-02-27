import { t } from 'i18next';
import React from 'react';
import HeroHome from '../components/Blocks/HeroHome';
import SelfIntroShort from '../components/Blocks/SelfIntroShort';
import TabTitle from '../components/Metadata/SiteSEO';
import Headline from '../components/Typography/Headline';

function Home(): React.ReactNode {
  return (
    <>
      <TabTitle pageTitle={t('home.pageTitle')} />
      <div className="container mx-auto">
        <Headline title="This is a simple test" />
      </div>
      <HeroHome />
      <div className="container mx-auto">
        <SelfIntroShort />
      </div>
    </>
  );
}

export default Home;
