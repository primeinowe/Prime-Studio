"use client"

import { useState } from "react"

export default function HeroGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }}
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px] pointer-events-none transition-all duration-300"
        style={{
          left: position.x - 300,
          top: position.y - 300,
        }}
      />
    </div>
  )
}