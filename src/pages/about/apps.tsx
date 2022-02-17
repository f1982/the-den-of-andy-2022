import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useState } from 'react';

function MyComponent({ rotation }) {
  return (
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
      }}
    >
      Scroll down..
    </h1>
  );
}

function MyDevices() {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [0, 0.9], [0, 360]);

  return (
    <div
      className="container"
      style={{
        padding: '0',
        backgroundColor: '#dedbde',
        backgroundImage:
    'linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent)',
        margin: '0',
        backgroundSize: '700px 700px',
        height: '1000000px',
      }}
    >
      <motion.h1 style={{
        rotate,
        textAlign: 'center',
        top: 'calc(50vh - 40px)',
        position: 'fixed',
        width: '100vw',
        fontSize: '80px',
      }}
      >
        This is the title
      </motion.h1>
    </div>
  );
}

export default MyDevices;
