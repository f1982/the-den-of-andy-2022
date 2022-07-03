import React, { Suspense } from 'react';
import ElasticPresentation from './ElasticPresentation';
import SuzannaModel from './SuzannaModel';
import RoomModel from './RoomModel';

export default function PresentedMonkey() {
  return (
    <ElasticPresentation>
      <Suspense fallback={null}>
        {/* <SuzannaModel /> */}
        <RoomModel />
      </Suspense>
    </ElasticPresentation>
  );
}
