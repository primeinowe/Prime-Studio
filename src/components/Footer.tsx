import Container from "./Container"

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-24">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500">
          
          <p>© {new Date().getFullYear()} Prime Studio. Todos os direitos reservados.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Discord
            </a>
            <a href="#" className="hover:text-white transition">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition">
              Contato
            </a>
          </div>

        </div>
      </Container>
    </footer>
  )
}