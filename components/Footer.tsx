'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full px-4 py-8 md:px-16 bg-black border-t border-green-500/20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-green-400">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Henry Security. Todos os direitos reservados.
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/henrysec-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition-colors"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
