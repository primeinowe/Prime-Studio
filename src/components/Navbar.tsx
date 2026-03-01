"use client"

import { useState } from "react"
import CartDrawer from "./CartDrawer"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useLocale } from "@/hooks/useLocale"
import { translations } from "@/lib/i18n"

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false)

  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <>
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0B1120]/80 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition"
          >
            Prime Studio
          </Link>

          {/* Navegação */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

            <Link
              href="/sobre"
              className="relative group transition"
            >
              {locale === "pt" ? "Sobre" : "About"}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/equipe"
              className="relative group transition"
            >
              {locale === "pt" ? "Equipe" : "Team"}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

            <span className="opacity-50 cursor-not-allowed">
  Loja 
</span>

           <Link href="/documentacao" className="hover:text-blue-400 transition">
  Documentação
</Link>
          </nav>

          {/* Direita */}
          <div className="flex items-center gap-4">

            {/* Toggle idioma */}
            <button
              onClick={toggleLocale}
              className="text-xs px-3 py-1 rounded-full border border-blue-500/40 hover:bg-blue-500/10 transition"
            >
              {locale === "pt" ? "EN" : "PT"}
            </button>

            {/* Carrinho */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative bg-blue-600 w-11 h-11 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/40 hover:shadow-blue-500/60 hover:scale-105"
            >
              <ShoppingCart size={18} />

              {/* Badge */}
              <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>

          </div>
        </div>
      </header>

      <Link
  href="/cliente"
  className="relative group transition"
>
  Área do Cliente
  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
</Link>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}