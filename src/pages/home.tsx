import { t } from 'i18next';
import React from 'react';
import SelfIntroShort from '../components/Blocks/SelfIntroShort';
import TabTitle from '../components/Metadata/SiteSEO';
import Headline from '../components/Typography/Headline';
import Highlight from '../components/Typography/Highlight';

function Home(): React.ReactNode {
  return (
    <>
      <TabTitle pageTitle={t('home.pageTitle')} />
      <div className="container mx-auto">
        <Headline title="This is a simple test" />
        <SelfIntroShort />
        {/* <Hero /> */}

      </div>
    </>
  );
}

export default Home;
