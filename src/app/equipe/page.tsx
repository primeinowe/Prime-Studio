"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import Tilt from "react-parallax-tilt"

const team = [
  {
    name: "Nycolas Inowe",
    role: "Founder & Lead Developer",
    bio: "Especialista em FiveM e arquiteturas escaláveis para sistemas web.",
    skills: ["TypeScript", "JavaScript", "TailwindCSS", "Node.js", "APIs"],
    image: "/avatar1.png",
    github: "#",
    linkedin: "#",
  },
  {
    name: "None",
    role: "Fullstack Developer",
    bio: "Foco em performance, banco de dados e APIs seguras.",
    skills: ["TypeScript", "JavaScript", "TailwindCSS", "Node.js", "APIs"],
    image: "/avatar2.png",
    github: "#",
    linkedin: "#",
  },
  {
    name: "None",
    role: "UI/UX Designer",
    bio: "Responsável por toda experiência visual e identidade premium.",
    skills: ["TypeScript", "JavaScript","Figma", "UX Research", "Branding"],
    image: "/avatar3.png",
    github: "#",
    linkedin: "#",
  },
]

export default function Equipe() {
  return (
    <div className="pt-40 pb-32 px-6">

      {/* HEADER */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Nossa Equipe
        </motion.h1>

        <p className="text-white/60 text-lg">
          Profissionais especializados focados em entregar excelência,
          performance e inovação.
        </p>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-32">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group bg-[#0F172A] border border-blue-900/40 rounded-2xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 p-[3px]">
              <div className="w-full h-full bg-[#0F172A] rounded-full" />
            </div>

            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-blue-400 text-sm mb-4">{member.role}</p>

            <p className="text-white/60 text-sm mb-6">
              {member.bio}
            </p>

            {/* SKILLS */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {member.skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* SOCIAL */}
            <div className="flex justify-center gap-4">
              <a href={member.github} className="hover:text-blue-400 transition">
                <Github size={18} />
              </a>
              <a href={member.linkedin} className="hover:text-blue-400 transition">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CULTURA / DIFERENCIAL */}
      <section className="max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-500/30 p-12 rounded-3xl backdrop-blur-xl">
          <h2 className="text-3xl font-bold mb-6">
            Nossa Cultura
          </h2>

          <p className="text-white/70 leading-relaxed">
            Trabalhamos com foco em qualidade extrema, organização e visão
            estratégica. Cada projeto é tratado como único e desenvolvido
            com atenção aos mínimos detalhes.
          </p>
        </div>
      </section>
    </div>
  )
}