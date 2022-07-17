import { Suspense } from 'react';
import ElasticPresentation from './ElasticPresentation';
import SuzannaModel from './SuzannaModel';
import RoomModel from './RoomModel';
import WatchModel from './WatchModel';

export default {
  title: 'Experiment/ElasticPresentation',
  component: ElasticPresentation,
};

export const Demos = () => (
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

export const Suzanna = () => (
  <div style={{ width: '100%', height: '600px' }}>
    <ElasticPresentation>
      <Suspense fallback={null}>
        <RoomModel
          rotation={[0, Math.PI, 0]}
          position={[0, -1, 0]}
        />
      </Suspense>
      {/* <MyCube /> */}
    </ElasticPresentation>
  </div>
);