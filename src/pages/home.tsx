import { t } from 'i18next';
import React from 'react';
import SelfIntroShort from '../components/Blocks/SelfIntroShort';
import TabTitle from '../components/Metadata/SiteSEO';
import Highlight from '../components/Typography/Highlight';

function Home(): React.ReactNode {
  return (
    <>
      <TabTitle pageTitle={t('home.pageTitle')} />
      <div>
        <h1>
          This is a
          <Highlight>simple test</Highlight>
        </h1>

      </div>
      <div className="container mx-auto">
        <SelfIntroShort />
        {/* <Hero /> */}

      </div>
    </>
  );
}

export default Home;
