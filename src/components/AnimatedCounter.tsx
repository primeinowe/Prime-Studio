"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
}: {
  from?: number
  to: number
  duration?: number
}) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, to, { duration })
    return controls.stop
  }, [count, to, duration])

  return (
    <motion.span>
      {rounded}
    </motion.span>
  )
}