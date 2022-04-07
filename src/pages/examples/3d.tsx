import * as THREE from 'three';
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  BakeShadows, Environment, Html, OrbitControls, PresentationControls, RoundedBox, useGLTF,
} from '@react-three/drei';

useGLTF.preload('/static/models/hShr-watch-v1.glb');

const mesh = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ color: 'red' }));
const group = new THREE.Group();
group.add(mesh);

function Box(props: any) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  useFrame((state) => {
    ref.current.position.y = Math.sin(state.clock.elapsedTime) / 3;
  });
  return (
    <mesh
      ref={ref}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
      onClick={() => setClicked(!clicked)}
      scale={clicked ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      {...props}
    >
      <boxBufferGeometry />
      <meshBasicMaterial color={hovered ? 'hotpink' : 'aquamarine'} />
    </mesh>
  );
}

function Box2(props: any) {
  return <primitive object={group} {...props} onClick={() => console.log('hi')} />;
}

function Plane({ color, ...props }) {
  return (
    // @ts-ignore
    <RoundedBox smoothness={10} radius={0.015} {...props}>
      <meshStandardMaterial color={color} envMapIntensity={0.5} />
    </RoundedBox>
  );
}

function Watch(props) {
  const ref = useRef();
  // @ts-ignore
  const { nodes, materials } = useGLTF('/static/models/hShr-watch-v1.glb');

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
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.Object005_glass_0.geometry} material={materials.glass}>
        {/* <Html
          scale={100}
          rotation={[Math.PI / 2, 0, 0]}
          position={[180, -350, 50]}
          transform
          occlude
        >
          <div className="annotation">
            6.550 $
            {' '}
            <span style={{ fontSize: '1.5em' }}>🥲</span>
          </div>
        </Html> */}
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

export default function App() {
  return (
    <div>
      <div>
        <Canvas style={{ height: '800px' }} shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
          <color attach="background" args={['#a2b9e7']} />
          <ambientLight intensity={0.5} />
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Watch rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.25, 0]} scale={0.003} />
          </PresentationControls>
          <OrbitControls enableZoom={false} />
          <Environment preset="city" />
        </Canvas>
      </div>
      <div>hello</div>
    </div>
  );
}
