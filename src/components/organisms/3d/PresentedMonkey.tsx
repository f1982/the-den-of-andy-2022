import ElasticPresentation from './ElasticPresentation'
import RoomModel from './RoomModel'
import { Suspense } from 'react'

const PresentedMonkey = () => (
  <ElasticPresentation>
    <Suspense fallback={null}>
      {/* <SuzannaModel /> */}
      <RoomModel />
    </Suspense>
  </ElasticPresentation>
)

export default PresentedMonkey
