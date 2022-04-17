import { t } from 'i18next';
import React from 'react';
import HeroHome from '../components/organisms/blocks/HeroHome';
import SelfIntroShort from '../components/organisms/blocks/SelfIntroShort';
import TabTitle from '../components/molecules/seo/SiteSEO';
import RotatingWatch from '../components/organisms/3d/RotatingWatch';
import Box from '../components/organisms/3d/Box';

function Home(): React.ReactNode {
  return (
    <>
      <TabTitle pageTitle={t('home.pageTitle')} />
      <Box />
      <HeroHome />
      {/* <RotatingWatch modelFile="https://raw.githubusercontent.com/f1982/planet-of-images/main/img/hShr-watch-v1.glb" /> */}

      <div className="container mx-auto">
        <SelfIntroShort />
      </div>
    </>
  );
}

export default Home;
