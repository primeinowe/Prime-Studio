"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 120, 0],
          y: [0, 80, -80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-250px] right-[-250px] w-[800px] h-[800px] bg-blue-800/20 rounded-full blur-[200px]"
      />
    </div>
  )
}