'use client'

import { motion } from 'framer-motion'

export function BackgroundGlow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className="fixed inset-0 z-[-1] bg-gradient-to-br from-black via-[#0f0] to-black opacity-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#00ff8866_1px,transparent_1px)] [background-size:30px_30px] opacity-10 animate-pulse" />
    </motion.div>
  )
}
