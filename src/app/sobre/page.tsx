"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Users, Rocket, Shield, Zap } from "lucide-react"

export default function Sobre() {
  return (
    <div className="pt-40 pb-24 px-6 relative">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-28">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Sobre a{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Prime Studio
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/70 text-lg max-w-3xl mx-auto"
        >
          Somos uma equipe especializada em desenvolvimento premium para
          FiveM, Discord e Web. Nosso foco é entregar sistemas modernos,
          performáticos e visualmente impactantes.
        </motion.p>
      </section>

      {/* ESTATÍSTICAS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-28">
        {[
          { number: "120+", label: "Projetos Entregues" },
          { number: "50+", label: "Clientes Satisfeitos" },
          { number: "5+", label: "Anos de Experiência" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0F172A] border border-blue-900/40 p-10 rounded-2xl text-center hover:border-blue-500/60 transition"
          >
            <h2 className="text-4xl font-bold text-blue-400 mb-2">
              {item.number}
            </h2>
            <p className="text-white/70">{item.label}</p>
          </motion.div>
        ))}
      </section>

      {/* MISSÃO / VALORES */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-28">
        {[
          {
            icon: Rocket,
            title: "Inovação",
            desc: "Criamos soluções modernas com foco em performance e experiência do usuário.",
          },
          {
            icon: Shield,
            title: "Segurança",
            desc: "Desenvolvimento seguro e estruturado para evitar falhas e vulnerabilidades.",
          },
          {
            icon: Zap,
            title: "Performance",
            desc: "Sistemas rápidos e otimizados para alto desempenho em qualquer ambiente.",
          },
          {
            icon: Users,
            title: "Compromisso",
            desc: "Trabalhamos lado a lado com nossos clientes para atingir o melhor resultado.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#0B1120] border border-blue-900/40 p-8 rounded-2xl hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
          >
            <item.icon className="text-blue-400 mb-4" size={28} />
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* CTA FINAL */}
      <section className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-500/30 p-12 rounded-3xl backdrop-blur-xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            Pronto para elevar seu projeto?
          </h2>

          <p className="text-white/70 mb-8">
            Entre em contato conosco e vamos transformar sua ideia em algo
            profissional e impactante.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/orcamento"
              className="bg-blue-600 px-8 py-3 rounded-xl font-medium hover:bg-blue-500 transition shadow-lg shadow-blue-600/30"
            >
              Solicitar Orçamento
            </Link>

            <a
              href="https://discord.gg/YrhK9vu736"
              target="_blank"
              className="border border-blue-500 px-8 py-3 rounded-xl font-medium hover:bg-blue-600/20 transition"
            >
              Entrar no Discord
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}