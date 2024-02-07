import PostEffect from '../../../../src/lib/3d/PostEffect'
import WatchModel from './WatchModel'
import { PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

export const ElasticModel = ({ children }) => (
  <Canvas
    dpr={window.devicePixelRatio}
    camera={{ position: [0, 0, 5], fov: 50 }}>
    <color attach="background" args={['#ffcc00']} />
    <ambientLight intensity={0.5} />
    <pointLight position={[-20, 10, 25]} />
    <PresentationControls
      global
      config={{ mass: 2, tension: 500 }}
      snap
      rotation={[0, 0.3, 0]}
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
      {children}
    </PresentationControls>
  </Canvas>
)

const Scene = () => (
  <ElasticModel>
    <WatchModel
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0.25, 0]}
      scale={0.003}
    />
    <PostEffect />
  </ElasticModel>
)

export default Scene
