import { PresentationControls } from '@react-three/drei';
import {
  Canvas,
} from '@react-three/fiber';
import React, { useEffect, useState } from 'react';

export default function ElasticModel({
  children,
}) {
  // const style = getComputedStyle(document.body);
  // const primaryColor = style.getPropertyValue('--primary-medium');
  const [bgColor, setBgColor] = useState('#ff0000');
  useEffect(() => {
    const style = getComputedStyle(document.body);
    const primaryColor = style.getPropertyValue('--primary-medium');
    console.log('primaryColor', primaryColor);
    setBgColor(primaryColor);
  }, []);

  return (
    <Canvas dpr={2} camera={{ position: [0, 0, 5], fov: 50 }}>
      <color attach="background" args={[bgColor]} />
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