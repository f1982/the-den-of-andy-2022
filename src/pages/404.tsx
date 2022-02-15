import { t } from 'i18next';
import React from 'react';
import Headline from '../components/Typography/Headline';
import Container from '../components/Layout/container';
import TabTitle from '../components/SiteSEO';

export default function Custom404() {
  return (
    <>
      <TabTitle pageTitle={t('pageNotFound.pageTitle')} />
      <Container>
        <Headline title={t('pageNotFound.headline')} />
      </Container>
    </>
  );
}
