"use client"

import { motion } from "framer-motion"

export default function ClientePage() {
  const purchases = [
    {
      id: "fivem",
      name: "FiveM Scripts",
      version: "v1.2.4",
      license: "PRIME-1X93-AK20",
      date: "02/02/2026",
    },
  ]

  return (
    <div className="space-y-8">

      {purchases.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0F172A] border border-blue-900/40 p-8 rounded-2xl"
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-blue-400">
                {item.name}
              </h2>
              <p className="text-white/50 text-sm">
                Comprado em {item.date}
              </p>
            </div>

            <span className="text-sm bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">
              {item.version}
            </span>
          </div>

          <div className="mb-6">
            <p className="text-white/60 text-sm mb-2">
              Licença:
            </p>
            <div className="bg-black/40 border border-blue-900/40 px-4 py-3 rounded-lg font-mono text-sm">
              {item.license}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-500 transition shadow-md shadow-blue-600/30">
              Baixar Arquivo
            </button>

            <a
              href="https://discord.gg/YrhK9vu736"
              target="_blank"
              className="border border-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600/20 transition"
            >
              Suporte
            </a>
          </div>
        </motion.div>
      ))}

    </div>
  )
}