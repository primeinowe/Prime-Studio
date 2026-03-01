"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Website Próprio",
    category: "Web",
    price: 549.90,
    description: "Sistema completo com parte visual incluida.",
  },
  {
    id: 2,
    name: "Bot Discord Advanced",
    category: "Discord",
    price: 99.90,
    description: "Automação avançada com sistema de tickets e logs.",
  },
  {
    id: 3,
    name: "Dashboard Administrativo",
    category: "Web",
    price: 199.90,
    description: "Painel web com autenticação e controle completo.",
  },
  {
    id: 4,
    name: "Sistema de Inventário",
    category: "FiveM",
    price: 129.90,
    description: "Inventário moderno com drag and drop.",
  },
]

export default function Loja() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("Todos")

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "Todos" || product.category === category

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [search, category])

  return (
    <div className="pt-36 pb-24 px-6 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Loja{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Prime Studio
          </span>
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto">
          Produtos premium para elevar seu servidor e seus sistemas.
        </p>
      </div>

      {/* FILTROS */}
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-16">

        {/* BUSCA */}
        <div className="relative w-full md:w-96">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
            size={18}
          />
          <input
            type="text"
            placeholder="Buscar produto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0F172A] border border-blue-900/40 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* CATEGORIA */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-[#0F172A] border border-blue-900/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
        >
          <option value="Todos">Todas Categorias</option>
          <option value="FiveM">FiveM</option>
          <option value="Discord">Discord</option>
          <option value="Web">Web</option>
        </select>
      </div>

      {/* PRODUTOS */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredProducts.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ rotateX: 4, rotateY: -4 }}
            className="bg-[#0B1120] border border-blue-900/40 p-8 rounded-2xl hover:border-blue-500 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full">
                {product.category}
              </span>

              <span className="text-lg font-bold text-blue-400">
                R$ {product.price.toFixed(2)}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-3">
              {product.name}
            </h3>

            <p className="text-white/60 text-sm mb-8">
              {product.description}
            </p>

            <button
              className="w-full bg-blue-600 hover:bg-blue-500 transition px-4 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
            >
              <ShoppingCart size={18} />
              Adicionar ao Carrinho
            </button>
          </motion.div>
        ))}

        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center text-white/50">
            Nenhum produto encontrado.
          </div>
        )}
      </div>
    </div>
  )
}