"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

export default function RouteProgress() {
  const pathname = usePathname()

  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      trickleSpeed: 100,
      minimum: 0.08,
    })

    NProgress.start()

    const timer = setTimeout(() => {
      NProgress.done()
    }, 500)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}