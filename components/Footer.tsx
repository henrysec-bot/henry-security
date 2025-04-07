'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 w-full bg-black text-white px-6 py-8 mt-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-sm md:text-base text-white/80">
            © {new Date().getFullYear()} Henry Security. Todos os direitos reservados.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-6 text-xl"
        >
          <a href="https://github.com/henrysec-bot" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaGithub className="text-white hover:text-green-400 transition" />
            </motion.div>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaLinkedin className="text-white hover:text-green-400 transition" />
            </motion.div>
          </a>
        </motion.div>

        {/* Idioma (placeholder) */}
        <div className="text-sm text-white/60 hidden md:block">🌐 Português (Brasil)</div>
      </div>

      {/* Botão voltar ao topo */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 bg-green-500 text-black p-3 rounded-full shadow-lg hover:bg-green-400 z-50"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  )
}
