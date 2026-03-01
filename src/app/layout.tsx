import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import PageLoader from "@/components/PageLoader"
import { CartProvider } from "@/context/CartContext"

export const metadata: Metadata = {
  title: {
    default: "Prime Studio",
    template: "%s | Prime Studio",
  },
  description: "Desenvolvimento premium para FiveM, Discord e Web",
  themeColor: "#0b0f1a",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-[#0b0f1a] text-white min-h-screen flex flex-col antialiased">

        <CartProvider>
          <PageLoader />

          <Navbar />

          <main className="flex-1 pt-28">
            {children}
          </main>

          <Footer />
        </CartProvider>

      </body>
    </html>
  )
}