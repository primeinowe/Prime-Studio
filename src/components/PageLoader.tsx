"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function PageLoader() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 800)

    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b0f1a]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
            className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}