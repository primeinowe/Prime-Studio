"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  label: string
  title: string
  description: string
}

export function PageHeader({
  label,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="text-center mb-20">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm uppercase tracking-widest text-blue-500 font-medium mb-3"
      >
        {label}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-white/60 mt-6 max-w-2xl mx-auto"
      >
        {description}
      </motion.p>
    </div>
  )
}