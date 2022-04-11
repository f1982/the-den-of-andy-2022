import { useRef } from 'react';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';
import PostEffect from './PostEffect';

function Box(props) {
  const mesh = useRef<MeshProps>();
  // rotate the box
  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.01;
    // mesh.current.rotation.x += 0.01;
    mesh.current.rotation.z += 0.01;
  });
  // draw the box
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#FFAE00" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas dpr={2} style={{ height: '50vh', backgroundColor: '#ffcc00' }}>
      {/* <color attach="background" args={['#999999']} /> */}

      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
      <PostEffect />
    </Canvas>
  );
}
