// this demo is from this article
// https://varun.ca/modular-webgl/
import { Center, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const extrudeSettings = { steps: 2, depth: 10, bevelEnabled: false }
const SIDE = 10

const Nucleus = (props) => {
  const mesh = useRef()

  // rotate the box
  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.01
    mesh.current.rotation.x += 0.01
    // console.log('mesh.current', mesh.current.geometry.attributes.normal.array);
  })

  const loader = new THREE.TextureLoader()
  const texturenucleus = loader.load('https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg')
  /*  Nucleus  */
  texturenucleus.anisotropy = 16
  const icosahedronGeometry = new THREE.IcosahedronGeometry(30, 10)
  const lambertMaterial = new THREE.MeshPhongMaterial({ map: texturenucleus })
  // nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
  // scene.add(nucleus);

  return (
    <mesh {...props} ref={mesh}>
      <icosahedronBufferGeometry attach="geometry" args={[20, 10]} />
      {/* <meshNormalMaterial attach="material" /> */}
      {/* <lambertMaterial args={[texturenucleus]} /> */}
    </mesh>

    //   <mesh scale={active ? [2, 2, 2] : [1, 1, 1]} onClick={handleClick}>
    //  <icosahedronBufferGeometry attach="geometry" args={[1, 0]} />
    //  <meshNormalMaterial attach="material" />
    // </mesh>
  )
}

const NucleusScene = () => (
  <Canvas
    dpr={2}
    style={{ height: '30vh' }}
    camera={{ position: new THREE.Vector3(8, 5, 40) }}>
    <color attach="background" args={['#06092c']} />
    <pointLight position={[-20, 10, 25]} />
    <gridHelper
      args={[100, 20, '#4D089A', '#4D089A']}
      position={[0, 0, -10]}
      rotation={[-Math.PI / 2, 0, 0]}
    />
    <Center>
      <Nucleus />
    </Center>
    <OrbitControls enableRotate enableZoom />
  </Canvas>
)

export default NucleusScene
