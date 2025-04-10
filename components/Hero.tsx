'use client'

import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-24 relative h-[100vh] flex flex-col justify-center items-center text-center px-6">
      {/* Background Parallax Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00ff99]/10 via-[#00c3ff]/10 to-transparent blur-[120px] animate-pulse opacity-40" />
        <div className="absolute top-[30%] left-[10%] w-72 h-72 bg-[#00ff99]/20 rounded-full blur-[100px] animate-pulse delay-500" />
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-[#00c3ff]/20 rounded-full blur-[80px] animate-pulse delay-700" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-md"
      >
        Monitoramento inteligente <br />
        para aplicações modernas
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-6 text-lg md:text-xl max-w-2xl text-gray-300"
      >
        Detecte comportamentos suspeitos em tempo real com tecnologia de ponta.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-10 flex gap-4 flex-wrap justify-center"
      >
        <button className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-md font-semibold shadow-lg transition-all duration-300 flex items-center gap-2">
          <ArrowRight size={18} />
          Começar agora
        </button>
        <button className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-md font-semibold backdrop-blur-md transition-all duration-300 flex items-center gap-2">
          <PlayCircle size={20} />
          Ver demonstração
        </button>
      </motion.div>
    </section>
  )
}
