import { Suspense } from 'react';
import ElasticPresentation from './ElasticPresentation';
import SuzannaModel from './SuzannaModel';
import RoomModel from './RoomModel';
import WatchModel from './WatchModel';

export default {
  title: 'Experiment/ElasticPresentation',
  component: ElasticPresentation,
};

export function Demos() {
  return (
    <div style={{ height: '600px' }}>
      <ElasticPresentation>
        <WatchModel
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.25, 0]}
          scale={0.003}
        />
      </ElasticPresentation>
    </div>
  );
}

export function Suzanna() {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <ElasticPresentation>
        <Suspense fallback={null}>
          <RoomModel />
        </Suspense>
        {/* <MyCube /> */}
      </ElasticPresentation>
    </div>
  );
}