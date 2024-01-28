import { motion } from 'framer-motion'
import React from 'react'

function withTransition(OriginalComponent) {
  return (
    <div>
      <OriginalComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default withTransition
