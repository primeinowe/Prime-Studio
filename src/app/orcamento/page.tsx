"use client"

import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { PageHeader } from "../../components/PageHeader"

export default function Orcamento() {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        "service_jpbr9l7",
        "template_welzomc",
        form.current,
        "4-Euz24uHRogVKVcs"
      )
      .then(
        () => {
          alert("Orçamento enviado com sucesso!")
          form.current?.reset()
        },
        (error) => {
          console.log(error.text)
          alert("Erro ao enviar. Tente novamente.")
        }
      )
  }

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          label="ORÇAMENTO"
          title="Solicite seu projeto"
          description="Preencha as informações abaixo e retornaremos o mais rápido possível."
        />

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-zinc-950 border border-white/10 p-8 rounded-2xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Seu email"
            required
            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <select
            name="tipo"
            required
            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Selecione o tipo de projeto</option>
            <option value="fivem">Script FiveM</option>
            <option value="discord">Bot Discord</option>
            <option value="web">Aplicação Web</option>
          </select>

          <textarea
            name="message"
            rows={5}
            placeholder="Descreva seu projeto"
            required
            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-xl py-3 font-semibold"
          >
            Enviar orçamento
          </button>
        </form>
      </div>
    </section>
  )
}