import React from 'react'
import { motion } from 'framer-motion';

const RotatingSVG = () => {
  return (
    <div className='w-6 h-6'>
      <motion.img 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          src="LoadingCircle.png" alt="Loading Circle"
      />
    </div>
  )
}

export default RotatingSVG