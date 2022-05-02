import React, { Suspense } from 'react';
import ElasticPresentation from './ElasticPresentation';
import SuzannaModel from './SuzannaModel';

export default function PresentedMonkey() {
  return (
    <ElasticPresentation>
      <Suspense fallback={null}>
        <SuzannaModel />
      </Suspense>
    </ElasticPresentation>
  );
}
