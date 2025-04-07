'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 30)
  })

  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-black/70 border-white/10 shadow-md py-2'
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      {/* Glow bar superior */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-400/30 via-teal-400/20 to-transparent blur-md opacity-70" />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-white tracking-wide">
          Henry<span className="text-green-400">Security</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link href="#features" className="hover:text-white transition">Funcionalidades</Link>
          <Link href="#pricing" className="hover:text-white transition">Planos</Link>
          <Link href="#about" className="hover:text-white transition">Sobre</Link>
          <Link href="#contact" className="hover:text-white transition">Contato</Link>
        </nav>

        {/* Mobile button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/80 px-6 py-4 text-sm text-gray-300 space-y-4"
        >
          <Link href="#features" onClick={() => setOpen(false)} className="block hover:text-white">Funcionalidades</Link>
          <Link href="#pricing" onClick={() => setOpen(false)} className="block hover:text-white">Planos</Link>
          <Link href="#about" onClick={() => setOpen(false)} className="block hover:text-white">Sobre</Link>
          <Link href="#contact" onClick={() => setOpen(false)} className="block hover:text-white">Contato</Link>
        </motion.nav>
      )}
    </motion.header>
  )
}
