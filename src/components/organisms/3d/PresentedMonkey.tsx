import React, { Suspense } from 'react';
import ElasticPresentation from './ElasticPresentation';
import SuzannaModel from './SuzannaModel';
import RoomModel from './RoomModel';

const PresentedMonkey = () => (
  <ElasticPresentation>
    <Suspense fallback={null}>
      {/* <SuzannaModel /> */}
      <RoomModel />
    </Suspense>
  </ElasticPresentation>
);

export default PresentedMonkey;