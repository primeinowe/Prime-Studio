"use client"

import { motion, AnimatePresence } from "framer-motion"

export default function Toast({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
      className="fixed top-24 right-6 bg-[#0F172A] border border-blue-500/40 px-6 py-3 rounded-xl shadow-lg shadow-blue-600/20 backdrop-blur-xl z-[9999]"
    >
      <span className="text-sm text-white">{message}</span>
    </motion.div>
  )
}