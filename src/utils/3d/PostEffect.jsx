import { Effects as EffectsComposer } from '@react-three/drei'
import { extend, useThree } from '@react-three/fiber'
import React, { useMemo } from 'react'
import * as THREE from 'three'
import { UnrealBloomPass } from 'three-stdlib'

extend({ UnrealBloomPass })

const PostEffect = () => {
  const { size, scene, camera } = useThree()
  const aspect = useMemo(
    () => new THREE.Vector2(size.width, size.height),
    [size]
  )

  return (
    <EffectsComposer
      multisamping={8}
      renderIndex={1}
      disableGamma
      disableRenderPass>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      {/* <unrealBloomPass attachArray="passes" args={[aspect, 0.4, 1, 0]} /> */}
    </EffectsComposer>
  )
}
export default PostEffect
