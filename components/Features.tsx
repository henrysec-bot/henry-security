'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Activity, Radar, LockKeyhole } from 'lucide-react'

const features = [
  {
    icon: <ShieldCheck size={32} className="text-green-400" />,
    title: 'Proteção Ativa',
    description: 'Detecta e neutraliza ameaças em tempo real com monitoramento contínuo.',
  },
  {
    icon: <Activity size={32} className="text-cyan-400" />,
    title: 'Análise de Comportamento',
    description: 'Identifica padrões suspeitos antes que se tornem um problema.',
  },
  {
    icon: <Radar size={32} className="text-blue-400" />,
    title: 'Cobertura Total',
    description: 'Monitoramento completo de endpoints e APIs críticas.',
  },
  {
    icon: <LockKeyhole size={32} className="text-purple-400" />,
    title: 'Criptografia de Alto Nível',
    description: 'Dados protegidos com os mais altos padrões do setor.',
  },
]

export function Features() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Recursos avançados de segurança
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Nossa plataforma oferece funcionalidades inteligentes que protegem suas aplicações com precisão e performance.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900/60 backdrop-blur rounded-xl p-6 border border-gray-800 hover:shadow-xl hover:shadow-green-500/10 transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
