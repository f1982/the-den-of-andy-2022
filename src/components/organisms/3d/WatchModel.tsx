import { Html, useGLTF } from '@react-three/drei';
import { GroupProps, MeshProps, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import THREE from 'three';
import { GLTF } from 'three-stdlib/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Object006_watch_0: THREE.Mesh;
  };
  materials: {
    watch: THREE.Material;
  };
};

export default function WatchModel(rest: GroupProps) {
  const file = 'https://raw.githubusercontent.com/f1982/planet-of-images/main/img/hShr-watch-v1.glb';
  useGLTF.preload(file);
  const ref = useRef<MeshProps>();

  const { nodes, materials } = useGLTF(file) as GLTFResult;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <group ref={ref} {...rest} dispose={null}>
      <mesh>
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