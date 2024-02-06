// this demo is from this article
// https://varun.ca/modular-webgl/
import { Center, Extrude, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'

const extrudeSettings = { steps: 2, depth: 10, bevelEnabled: false }
const SIDE = 10

const Block = (props) => {
  const shape = React.useMemo(() => {
    // eslint-disable-next-line no-underscore-dangle
    const _shape = new THREE.Shape()

    _shape.moveTo(0, 0)
    _shape.lineTo(SIDE, 0)
    _shape.lineTo(SIDE, SIDE * 2)
    _shape.lineTo(0, SIDE * 2)
    _shape.lineTo(0, SIDE * 3)
    _shape.lineTo(-SIDE, SIDE * 3)
    _shape.lineTo(-SIDE, SIDE)
    _shape.lineTo(0, SIDE)

    return _shape
  }, [])

  return (
    <Extrude args={[shape, extrudeSettings]} {...props}>
      <meshPhysicalMaterial
        flatShading
        color="#3E64FF"
        thickness={SIDE}
        roughness={0.4}
        clearcoat={1}
        clearcoatRoughness={1}
        transmission={0.8}
        ior={1.25}
        attenuationTint="#fff"
        attenuationDistance={0}
      />
    </Extrude>
  )
}

const BlockScene = () => (
  <Canvas
    dpr={2}
    style={{ height: '30vh' }}
    camera={{ position: new THREE.Vector3(8, 5, 40) }}
    className="mb-[3rem]">
    <color attach="background" args={['#fff']} />
    <pointLight position={[-20, 10, 25]} />
    <gridHelper
      args={[200, 20, '#4D089A', '#4D089A']}
      position={[0, 0, -10]}
      rotation={[-Math.PI / 2, 0, 0]}
    />
    <Center>
      <Block />
    </Center>
    <OrbitControls enableRotate enableZoom={false} />
  </Canvas>
)

export default BlockScene
