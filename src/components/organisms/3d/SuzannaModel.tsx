/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib/loaders/GLTFLoader';
import { MeshProps, useFrame } from 'react-three-fiber';

type GLTFResult = GLTF & {
  nodes: {
    Suzanne: THREE.Mesh;
  };
  materials: {};
};

const file = 'https://raw.githubusercontent.com/f1982/planet-of-images/main/img/suzanna.gltf';

const Model = (props) => {
  const ref = useRef<MeshProps>();
  const { nodes, materials } = useGLTF(file) as GLTFResult;

  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime();
  //   ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
  //   ref.current.rotation.y = Math.sin(t / 4) / 8;
  //   ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
  //   ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  // });

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        name="Suzanne"
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        material={nodes.Suzanne.material}
        position={[0, 0.19, -0.04]}
      />
    </group>
  );
};
useGLTF.preload(file);

export default Model;
