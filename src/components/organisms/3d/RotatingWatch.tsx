import { Html, PresentationControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

function Watch({ file, ...rest }) {
  useGLTF.preload(file);
  const ref = useRef();
  // @ts-ignore
  const { nodes, materials } = useGLTF(file);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // @ts-ignore
    ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
    // @ts-ignore
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    // @ts-ignore
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    // @ts-ignore
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });
  return (
    <group ref={ref} {...rest} dispose={null}>
      <mesh geometry={nodes.Object005_glass_0.geometry} material={materials.glass}>
        <Html
          scale={100}
          rotation={[Math.PI / 2, 0, 0]}
          position={[180, -350, 50]}
          transform
          occlude
        >
          <div className="annotation">
            6.550 $
            <span style={{ fontSize: '1.5em' }}>🥲</span>
          </div>
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object006_watch_0.geometry}
        material={materials.watch}
      />
    </group>
  );
}

export default function RotatingWatch({ modelFile }:{modelFile:string}) {
  return (
    <Canvas dpr={window.devicePixelRatio} camera={{ position: [0, 0, 4], fov: 50 }}>
      <color attach="background" args={['#a2b9e7']} />
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
        <Watch
          file={modelFile}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.25, 0]}
          scale={0.003}
        />
      </PresentationControls>
    </Canvas>
  );
}
