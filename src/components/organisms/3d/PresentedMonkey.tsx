import { PresentationControls } from '@react-three/drei';
import {
  Canvas,
} from '@react-three/fiber';
import React, { Suspense } from 'react';
import ElasticPresentation from './ElasticPresentation';
import SuzannaModel from './SuzannaModel';

function ElasticModel({
  children,
}) {
  return (
    <Canvas dpr={2} camera={{ position: [0, 0, 5], fov: 50 }}>
      <color attach="background" args={['#ffcc00']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[-20, 10, 25]} />
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        {children}
      </PresentationControls>
    </Canvas>
  );
}

export default function PresentedMonkey() {
  return (
    <ElasticPresentation>
      <Suspense fallback={null}>
        <SuzannaModel />
      </Suspense>
    </ElasticPresentation>
  );
}
