'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-black/30 backdrop-blur-md">
      {/* Glow animado no topo do footer */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-400/40 via-teal-500/20 to-transparent blur-sm opacity-70" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-400"
      >
        {/* Marca */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Henry Security</h3>
          <p className="mb-4 text-gray-500">Monitoramento inteligente de aplicações com tecnologia de ponta.</p>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Linkedin size={18} />
            </a>
            <a href="mailto:contato@henrysecurity.com" className="hover:text-white transition">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Produtos */}
        <div>
          <h4 className="text-white font-semibold mb-3">Produto</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Dashboard</a></li>
            <li><a href="#" className="hover:text-white transition">Planos</a></li>
            <li><a href="#" className="hover:text-white transition">Integrações</a></li>
            <li><a href="#" className="hover:text-white transition">Segurança</a></li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="text-white font-semibold mb-3">Empresa</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Sobre nós</a></li>
            <li><a href="#" className="hover:text-white transition">Carreiras</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Contato</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-white transition">Cookies</a></li>
          </ul>
        </div>
      </motion.div>

      {/* Rodapé final */}
      <div className="border-t border-white/10 text-center py-6 text-xs text-gray-500">
        © {new Date().getFullYear()} Henry Security. Todos os direitos reservados.
      </div>
    </footer>
  )
}
