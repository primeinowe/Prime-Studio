"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code2, Bot, Globe } from "lucide-react"
import AnimatedCounter from "@/components/AnimatedCounter"
import HeroGlow from "@/components/HeroGlow"
import { translations } from "@/lib/i18n"
import { useLocale } from "@/hooks/useLocale"
import { useCart } from "@/context/CartContext"
import { useState } from "react"
import Toast from "@/components/Toast"

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { locale } = useLocale()
  const { addToCart } = useCart()
  const t = translations[locale]

  const [toast, setToast] = useState(false)

  const services = [
    {
      id: "fivem",
      icon: Code2,
      title: "FiveM Scripts",
      price: 899,
      desc:
        locale === "pt"
          ? "Sistemas exclusivos, otimizados e com interface moderna."
          : "Exclusive, optimized systems with modern interface.",
    },
    {
      id: "discord",
      icon: Bot,
      title: "Discord Bots",
      price: 149,
      desc:
        locale === "pt"
          ? "Automação avançada e integrações inteligentes."
          : "Advanced automation and smart integrations.",
    },
    {
      id: "web",
      icon: Globe,
      title: "Web Apps",
      price: 549,
      desc:
        locale === "pt"
          ? "Painéis administrativos e sistemas web."
          : "Admin panels and web systems.",
    },
  ]

  /* ================= ANIMAÇÃO VOAR PRO CARRINHO ================= */

  const animateToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    const cart = document.getElementById("cart-button")
    if (!cart) return

    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const cartRect = cart.getBoundingClientRect()

    const clone = button.cloneNode(true) as HTMLElement
    clone.style.position = "fixed"
    clone.style.left = rect.left + "px"
    clone.style.top = rect.top + "px"
    clone.style.width = rect.width + "px"
    clone.style.height = rect.height + "px"
    clone.style.zIndex = "9999"
    clone.style.pointerEvents = "none"
    clone.style.transition =
      "all 0.8s cubic-bezier(.65,.05,.36,1)"
    document.body.appendChild(clone)

    setTimeout(() => {
      clone.style.left = cartRect.left + "px"
      clone.style.top = cartRect.top + "px"
      clone.style.transform = "scale(0.2)"
      clone.style.opacity = "0.4"
    }, 10)

    setTimeout(() => {
      document.body.removeChild(clone)
    }, 900)
  }

  const handleAdd = (
    e: React.MouseEvent<HTMLButtonElement>,
    item: any
  ) => {
    animateToCart(e)

    addToCart({
      id: item.id,
      name: item.title,
      price: item.price,
    })

    setToast(true)
    setTimeout(() => setToast(false), 2000)
  }

  return (
    <div className="relative overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="relative pt-44 pb-40 px-6 text-center">
        <HeroGlow />

        <div className="max-w-6xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            {t.heroTitle1}{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              {t.heroTitle2}
            </span>
            <br />
            {t.heroTitle3}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="text-white/60 text-lg max-w-2xl mx-auto mb-10"
          >
            {t.heroDesc}
          </motion.p>

          {/* BOTÕES CORRIGIDOS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
          >
            <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/orcamento"
                className="inline-flex items-center justify-center
                           h-14 px-8
                           bg-blue-600 hover:bg-blue-500
                           text-white font-medium
                           rounded-xl
                           shadow-lg shadow-blue-600/30
                           transition-all duration-300"
              >
                {t.budget}
              </Link>
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              href="https://discord.gg/YrhK9vu736"
              target="_blank"
              className="inline-flex items-center justify-center
                         h-14 px-8
                         border border-blue-500
                         text-blue-400
                         rounded-xl
                         hover:bg-blue-600/20
                         transition-all duration-300"
            >
              {t.discord}
            </motion.a>
          </motion.div>

          {/* CONTADORES */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-500">
                <AnimatedCounter to={120} />+
              </h3>
              <p className="text-white/50 text-sm">
                {locale === "pt" ? "Projetos entregues" : "Delivered projects"}
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-500">
                <AnimatedCounter to={50} />+
              </h3>
              <p className="text-white/50 text-sm">
                {locale === "pt" ? "Clientes satisfeitos" : "Happy clients"}
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-500">
                <AnimatedCounter to={5} />{" "}
                {locale === "pt" ? "anos" : "years"}
              </h3>
              <p className="text-white/50 text-sm">
                {locale === "pt" ? "Experiência" : "Experience"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVIÇOS ================= */}

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            {locale === "pt" ? "Nossos Serviços" : "Our Services"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative bg-[#0F172A] border border-blue-900/40 p-8 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

                <item.icon className="text-blue-400 mb-5 relative z-10" size={32} />

                <h3 className="text-xl font-semibold mb-3 relative z-10">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm mb-6 relative z-10">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between relative z-10">
                  <span className="text-blue-400 font-bold">
                    R$ {item.price}
                  </span>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.08 }}
                    onClick={(e) => handleAdd(e, item)}
                    className="bg-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-500 transition shadow-md shadow-blue-600/30"
                  >
                    {locale === "pt" ? "Adicionar" : "Add"}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {toast && (
        <Toast
          message={
            locale === "pt"
              ? "Produto adicionado ao carrinho!"
              : "Product added to cart!"
          }
        />
      )}

      {/* ================= DIFERENCIAIS ================= */}

<section className="py-28 px-6 bg-[#0B1220]">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl font-bold mb-16">
      {locale === "pt"
        ? "Por que escolher a Prime Studio?"
        : "Why choose Prime Studio?"}
    </h2>

    <div className="grid md:grid-cols-4 gap-10">

      {[
        {
          title: "Alta Performance",
          desc: "Sistemas leves e otimizados.",
        },
        {
          title: "Suporte Rápido",
          desc: "Atendimento direto no Discord.",
        },
        {
          title: "Design Premium",
          desc: "Interfaces modernas e impactantes.",
        },
        {
          title: "Entrega Garantida",
          desc: "Compromisso com prazos.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -8 }}
          className="bg-[#0F172A] border border-blue-900/40 p-8 rounded-2xl"
        >
          <h3 className="text-lg font-semibold mb-3 text-blue-400">
            {item.title}
          </h3>
          <p className="text-white/60 text-sm">{item.desc}</p>
        </motion.div>
      ))}

    </div>
  </div>
</section>

{/* ================= PROCESSO ================= */}

<section className="py-32 px-6 relative overflow-hidden">
  <div className="max-w-6xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-3xl font-bold mb-4">
        {locale === "pt"
          ? "Como Trabalhamos"
          : "How We Work"}
      </h2>

      <p className="text-white/60 max-w-2xl mx-auto">
        {locale === "pt"
          ? "Nosso processo é estruturado para garantir qualidade, performance e entrega dentro do prazo."
          : "Our process is structured to ensure quality, performance and on-time delivery."}
      </p>
    </motion.div>

    {/* Linha vertical central */}
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-600/0 via-blue-600/40 to-blue-600/0" />

      <div className="space-y-20">

        {[
          {
            number: "01",
            title: locale === "pt" ? "Briefing & Planejamento" : "Briefing & Planning",
            desc:
              locale === "pt"
                ? "Entendemos sua necessidade, definimos metas, tecnologias e criamos um plano estratégico detalhado."
                : "We understand your needs, define goals, technologies and create a detailed strategic plan.",
          },
          {
            number: "02",
            title: locale === "pt" ? "Desenvolvimento" : "Development",
            desc:
              locale === "pt"
                ? "Construímos o sistema com foco em performance, organização de código e escalabilidade."
                : "We build the system focusing on performance, clean code structure and scalability.",
          },
          {
            number: "03",
            title: locale === "pt" ? "Testes & Otimização" : "Testing & Optimization",
            desc:
              locale === "pt"
                ? "Realizamos testes rigorosos para garantir estabilidade, segurança e baixo consumo de recursos."
                : "We perform strict testing to ensure stability, security and low resource usage.",
          },
          {
            number: "04",
            title: locale === "pt" ? "Entrega & Suporte" : "Delivery & Support",
            desc:
              locale === "pt"
                ? "Entregamos o projeto pronto para uso e oferecemos suporte técnico contínuo."
                : "We deliver the project ready to use and provide ongoing technical support.",
          },
        ].map((step, i) => {

          const isLeft = i % 2 === 0

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-center"
            >

              {/* Conteúdo */}
              <div
                className={`w-full md:w-1/2 ${
                  isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"
                }`}
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-blue-900/40 p-8 rounded-2xl group overflow-hidden">

                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

                  <span className="relative z-10 text-blue-400 text-sm font-bold tracking-widest">
                    {step.number}
                  </span>

                  <h3 className="relative z-10 text-xl font-semibold mt-3 mb-4">
                    {step.title}
                  </h3>

                  <p className="relative z-10 text-white/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Bolinha central */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full shadow-lg shadow-blue-600/50 border-4 border-[#0B1120]" />
            </motion.div>
          )
        })}
      </div>
    </div>
  </div>
</section>

{/* ================= DEPOIMENTOS PREMIUM ================= */}

<section className="py-32 px-6 relative overflow-hidden">
  <div className="max-w-6xl mx-auto text-center">

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl font-bold mb-6"
    >
      {locale === "pt"
        ? "O que nossos clientes dizem"
        : "What our clients say"}
    </motion.h2>

    <p className="text-white/60 max-w-2xl mx-auto mb-20">
      {locale === "pt"
        ? "Construímos relações de longo prazo entregando qualidade, performance e suporte premium."
        : "We build long-term partnerships delivering quality, performance and premium support."}
    </p>

    <div className="grid md:grid-cols-3 gap-10">

      {[
        {
          name: "Lucas Ferreira",
          role: "Servidor RP",
          rating: 5,
          text:
            "A Prime Studio transformou completamente meu servidor. Performance absurda e suporte rápido. Recomendo 100%.",
        },
        {
          name: "Mariana Costa",
          role: "Gestora de Comunidade",
          rating: 5,
          text:
            "O bot Discord com painel web facilitou toda a administração da comunidade. Sistema extremamente profissional.",
        },
        {
          name: "Rafael Mendes",
          role: "Empreendedor Digital",
          rating: 5,
          text:
            "O site que desenvolveram para meu projeto superou expectativas. Design moderno e carregamento extremamente rápido.",
        },
      ].map((testimonial, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="group relative bg-white/5 backdrop-blur-xl border border-blue-900/40 p-8 rounded-2xl overflow-hidden"
        >
          {/* Glow Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

          {/* Estrelas */}
          <div className="relative z-10 flex justify-center mb-4">
            {"★★★★★".split("").map((star, index) => (
              <span key={index} className="text-yellow-400 text-sm">
                ★
              </span>
            ))}
          </div>

          {/* Texto */}
          <p className="relative z-10 text-white/70 text-sm mb-6 leading-relaxed">
            “{testimonial.text}”
          </p>

          {/* Cliente */}
          <div className="relative z-10 flex items-center justify-center gap-4 mt-6">

            {/* Avatar com iniciais */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold text-sm">
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>

            <div className="text-left">
              <p className="font-semibold text-sm">{testimonial.name}</p>
              <p className="text-white/40 text-xs">{testimonial.role}</p>
            </div>

          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>

{/* ================= TECNOLOGIAS PREMIUM ================= */}

<section className="py-32 px-6 relative overflow-hidden">
  <div className="max-w-6xl mx-auto text-center">

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl font-bold mb-6"
    >
      {locale === "pt"
        ? "Tecnologias que impulsionam nossos projetos"
        : "Technologies powering our projects"}
    </motion.h2>

    <p className="text-white/60 max-w-2xl mx-auto mb-20">
      {locale === "pt"
        ? "Utilizamos ferramentas modernas e de alta performance para garantir escalabilidade, segurança e design premium."
        : "We use modern high-performance tools to ensure scalability, security and premium design."}
    </p>

    <div className="grid md:grid-cols-4 gap-8">

      {[
        {
          name: "Next.js",
          desc: "Framework moderno para aplicações web rápidas e escaláveis.",
        },
        {
          name: "React",
          desc: "Interfaces dinâmicas com experiência fluida.",
        },
        {
          name: "TypeScript",
          desc: "Código seguro e escalável para projetos grandes.",
        },
        {
          name: "Node.js",
          desc: "Backend robusto e altamente performático.",
        },
        {
          name: "Lua",
          desc: "Base dos scripts otimizados para FiveM.",
        },
        {
          name: "MongoDB",
          desc: "Banco de dados flexível e escalável.",
        },
        {
          name: "TailwindCSS",
          desc: "Design moderno com alta produtividade.",
        },
        {
          name: "Discord API",
          desc: "Integrações avançadas e automações inteligentes.",
        },
      ].map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10, scale: 1.03 }}
          className="group relative bg-[#0F172A] border border-blue-900/40 p-8 rounded-2xl overflow-hidden"
        >
          {/* Glow hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

          <h3 className="relative z-10 text-lg font-semibold text-blue-400 mb-3">
            {tech.name}
          </h3>

          <p className="relative z-10 text-white/60 text-sm">
            {tech.desc}
          </p>
        </motion.div>
      ))}

    </div>
  </div>
</section>

{/* ================= FAQ PREMIUM ================= */}

<section className="py-32 px-6 bg-[#0B1220] relative overflow-hidden">
  <div className="max-w-4xl mx-auto">

    <div className="text-center mb-20">
      <h2 className="text-3xl font-bold mb-4">
        {locale === "pt"
          ? "Perguntas Frequentes"
          : "Frequently Asked Questions"}
      </h2>

      <p className="text-white/60 max-w-2xl mx-auto">
        {locale === "pt"
          ? "Tire suas dúvidas sobre nossos serviços, suporte e funcionamento."
          : "Get answers about our services, support and workflow."}
      </p>
    </div>

    <div className="space-y-6">

      {[
        {
          question:
            locale === "pt"
              ? "Vocês oferecem suporte após a entrega?"
              : "Do you provide support after delivery?",
          answer:
            locale === "pt"
              ? "Sim! Oferecemos suporte técnico contínuo via Discord para correções, dúvidas e pequenas melhorias."
              : "Yes! We provide ongoing technical support via Discord for fixes, questions and small improvements.",
        },
        {
          question:
            locale === "pt"
              ? "Quanto tempo leva o desenvolvimento?"
              : "How long does development take?",
          answer:
            locale === "pt"
              ? "O prazo varia conforme a complexidade do projeto, normalmente entre 3 a 15 dias."
              : "Delivery time depends on project complexity, usually between 3 to 15 days.",
        },
        {
          question:
            locale === "pt"
              ? "Os sistemas são otimizados?"
              : "Are the systems optimized?",
          answer:
            locale === "pt"
              ? "Sim. Todos os nossos sistemas são desenvolvidos com foco em performance, baixo consumo e estabilidade."
              : "Yes. All our systems are built focusing on performance, low resource usage and stability.",
        },
        {
          question:
            locale === "pt"
              ? "Vocês fazem projetos exclusivos?"
              : "Do you build exclusive projects?",
          answer:
            locale === "pt"
              ? "Sim, trabalhamos com projetos 100% personalizados conforme sua necessidade."
              : "Yes, we build fully customized solutions tailored to your needs.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white/5 backdrop-blur-xl border border-blue-900/40 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/60"
        >
          <button
            onClick={() =>
              setOpenIndex(openIndex === i ? null : i)
            }
            className="w-full text-left p-6 flex justify-between items-center"
          >
            <span className="font-semibold text-sm md:text-base">
              {item.question}
            </span>

            <span className="text-blue-400 text-xl transition-transform duration-300">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>

          <div
            className={`px-6 transition-all duration-300 overflow-hidden ${
              openIndex === i
                ? "max-h-40 opacity-100 pb-6"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-white/60 text-sm">
              {item.answer}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

    </div>
    
  )
}