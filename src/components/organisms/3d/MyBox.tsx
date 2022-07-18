import { useRef } from 'react';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';
import resolveConfig from 'tailwindcss/resolveConfig';
import PostEffect from '../../../utils/3d/PostEffect';
import tailwindConfig from '../../../../tailwind.config';

export const MyCube = (props) => {
  const mesh = useRef<MeshProps>();

  const fullConfig = resolveConfig(tailwindConfig);
  const primaryColor = fullConfig.theme.colors.primary.dark;
  // console.log('primaryColor', primaryColor);

  // rotate the box
  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.01;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#ffcc00" />
    </mesh>
  );
};

const MyBox = () => {
  const fullConfig = resolveConfig(tailwindConfig);
  return (
    <Canvas dpr={2} style={{ height: '600px' }}>
      {/* <color attach="background" args={[fullConfig.theme.colors.primary.dark]} /> */}

      {/* <ambientLight /> */}
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-20, 10, 25]} />

      <MyCube position={[0, 0, 0]} />
      <PostEffect />
    </Canvas>
  );
};

export default MyBox;