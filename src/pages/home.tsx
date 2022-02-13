import { t } from 'i18next';
import React from 'react';
import SelfIntroShort from '../components/Paragraph/SelfIntroShort';
import TabTitle from '../components/SiteSEO';

function Home(): React.ReactNode {
  return (
    <>
      <TabTitle pageTitle={t('home.pageTitle')} />
      <div className="container mx-auto">
        <SelfIntroShort />
        {/* <Hero /> */}
      </div>
    </>
  );
}

export default Home;
