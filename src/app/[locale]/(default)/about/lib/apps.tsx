import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useState } from 'react'

const Apps = ({ rotation }) => (
  <h1
    className="spinMe"
    style={{
      fontFamily: 'sans-serif',
      textAlign: 'center',
      top: 'calc(50vh - 40px)',
      position: 'fixed',
      width: '100vw',
      fontSize: '80px',
      margin: '0',
      color: '#a26ddc',
      transform: `rotate(${rotation}deg)`,
    }}>
    Scroll down..
  </h1>
)

const RotationItem = () => {
  const { scrollYProgress } = useViewportScroll()
  const rotate = useTransform(scrollYProgress, [0.1, 0.2], [0, 360])
  const moveOut = useTransform(scrollYProgress, [0.2, 0.3], [0, 1000])

  return (
    <motion.h1
      style={{
        rotate,
        textAlign: 'center',
        top: 'calc(50vh - 40px)',
        x: moveOut,
        position: 'fixed',
        width: '100vw',
        fontSize: '80px',
      }}>
      This is RotationItem
    </motion.h1>
  )
}

const MoveInItem = () => {
  const { scrollYProgress } = useViewportScroll()
  const moveIn = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5, 0.6],
    [-1000, 0, 0, -1000],
  )

  return (
    <motion.h1
      style={{
        textAlign: 'center',
        top: 'calc(50vh - 40px)',
        x: moveIn,
        position: 'fixed',
        width: '100vw',
        fontSize: '80px',
      }}>
      This is MoveInItem
    </motion.h1>
  )
}

const MyDevices = () => {
  const [isComplete, setIsComplete] = useState(false)
  const { scrollYProgress } = useViewportScroll()
  const rotate = useTransform(scrollYProgress, [0, 0.9], [0, 360])

  return (
    <div
      className="container mx-auto"
      style={{
        // padding: '0',
        backgroundColor: '#dedbde',
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent)',
        // margin: '0',
        backgroundSize: '700px 700px',
        height: '10000px',
      }}>
      <RotationItem />
      <MoveInItem />
    </div>
  )
}

export default MyDevices
