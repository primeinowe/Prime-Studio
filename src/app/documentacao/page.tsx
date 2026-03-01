"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, LifeBuoy } from "lucide-react"

const products = [
  {
    name: "Sistema Bancário",
    category: "FiveM",
    sections: [
      {
        title: "Instalação",
        content:
          "Coloque a pasta na resources e adicione no server.cfg.",
        code: `ensure banco_system`,
      },
      {
        title: "Configuração",
        content:
          "Edite o config.lua para alterar taxas e permissões.",
        code: `Config.Tax = 5`,
      },
    ],
  },
  {
    name: "Bot Discord Premium",
    category: "Discord",
    sections: [
      {
        title: "Instalação",
        content:
          "Adicione o token no arquivo .env e inicie com node index.js.",
        code: `DISCORD_TOKEN=seu_token_aqui`,
      },
      {
        title: "Permissões",
        content:
          "Garanta que o bot possua permissões de administrador.",
      },
    ],
  },
  {
    name: "Dashboard Web",
    category: "Web",
    sections: [
      {
        title: "Deploy",
        content:
          "Faça deploy na Vercel ou servidor próprio.",
      },
      {
        title: "Variáveis de Ambiente",
        content:
          "Configure as variáveis no .env.local.",
        code: `NEXT_PUBLIC_API_URL=https://api.seusite.com`,
      },
    ],
  },
]

export default function Documentacao() {
  const [search, setSearch] = useState("")
  const [selectedProduct, setSelectedProduct] = useState("Todos")

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        selectedProduct === "Todos"
          ? true
          : product.name === selectedProduct
      )
      .map((product) => ({
        ...product,
        sections: product.sections.filter(
          (section) =>
            section.title.toLowerCase().includes(search.toLowerCase()) ||
            section.content.toLowerCase().includes(search.toLowerCase())
        ),
      }))
  }, [search, selectedProduct])

  return (
    <div className="pt-36 pb-24 px-6 max-w-7xl mx-auto">

      {/* HERO */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Documentação{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Prime Studio
          </span>
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto">
          Explore guias organizados por produto e encontre
          rapidamente o que precisa.
        </p>
      </div>

      {/* BARRA SUPERIOR */}
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-16">

        {/* BUSCA */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
          <input
            type="text"
            placeholder="Buscar na documentação..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0F172A] border border-blue-900/40 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* FILTRO POR PRODUTO */}
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="bg-[#0F172A] border border-blue-900/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
        >
          <option value="Todos">Todos os Produtos</option>
          {products.map((product) => (
            <option key={product.name} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>

        {/* BOTÃO SUPORTE */}
        <a
          href="https://discord.gg/YrhK9vu736"
          target="_blank"
          className="bg-blue-600 hover:bg-blue-500 transition-all px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
        >
          <LifeBuoy size={18} />
          Suporte no Discord
        </a>
      </div>

      {/* PRODUTOS */}
      <div className="space-y-20">

        {filteredProducts.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {product.sections.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-blue-400 mb-8">
                  {product.name}
                </h2>

                <div className="space-y-12">
                  {product.sections.map((section) => (
                    <div
                      key={section.title}
                      className="bg-[#0B1120] border border-blue-900/40 p-8 rounded-2xl hover:border-blue-500 transition"
                    >
                      <h3 className="text-xl font-semibold mb-4 text-blue-300">
                        {section.title}
                      </h3>

                      <p className="text-white/70 mb-6">
                        {section.content}
                      </p>

                      {section.code && (
                        <div className="bg-black/50 border border-blue-900/40 rounded-xl p-4 text-sm font-mono text-blue-300">
                          <pre>{section.code}</pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        ))}

        {filteredProducts.every(
          (product) => product.sections.length === 0
        ) && (
          <div className="text-center text-white/50 mt-20">
            Nenhum resultado encontrado.
          </div>
        )}
      </div>
    </div>
  )
}