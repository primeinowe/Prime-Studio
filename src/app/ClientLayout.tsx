"use client"

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"
import ScreenOverlay from "@/components/ScreenOverlay"
import RouteProgress from "@/components/RouteProgress"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <>
      <Navbar />
      <RouteProgress />

      <AnimatePresence mode="wait">
        <ScreenOverlay key={pathname + "overlay"} />
        <PageTransition key={pathname}>
          <main className="pt-28 min-h-screen">
            {children}
          </main>
        </PageTransition>
      </AnimatePresence>

      <Footer />
    </>
  )
}