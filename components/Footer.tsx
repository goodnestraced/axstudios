// components/Footer.tsx
import Link from 'next/link'
import { Github, Twitter, DiscIcon, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AX STUDIOS</h3>
            <p className="text-gray-400 text-sm">
              Desarrollo tecnológico y comunidad digital.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#home" className="hover:text-white transition">Inicio</Link></li>
              <li><Link href="#about" className="hover:text-white transition">About</Link></li>
              <li><Link href="#projects" className="hover:text-white transition">Proyectos</Link></li>
              <li><Link href="#services" className="hover:text-white transition">Servicios</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/docs/tos" className="hover:text-white transition">Términos de Servicio</Link></li>
              <li><Link href="/docs/privacy" className="hover:text-white transition">Política de Privacidad</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Redes</h4>
            <div className="flex space-x-4">
              <a href="https://discord.gg/axstudios" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <DiscIcon size={20} />
              </a>
              <a href="https://github.com/axstudios" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/axstudios" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@axstudios.com" className="text-gray-400 hover:text-white transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AX STUDIOS. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}