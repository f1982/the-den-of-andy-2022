import ElasticPresentation from './ElasticPresentation'
import RoomModel from './RoomModel'
import SuzannaModel from './SuzannaModel'
import React, { Suspense } from 'react'

const PresentedMonkey = () => (
  <ElasticPresentation>
    <Suspense fallback={null}>
      {/* <SuzannaModel /> */}
      <RoomModel />
    </Suspense>
  </ElasticPresentation>
)

export default PresentedMonkey
