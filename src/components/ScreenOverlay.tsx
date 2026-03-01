"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function ScreenOverlay() {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname + "-overlay"}
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
      className="fixed inset-0 bg-[#020617] origin-top z-[100]"
    />
  )
}