'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiLockClosed, HiUser } from 'react-icons/hi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleRegister = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (!name || !email || !password) {
        setError('Todos os campos são obrigatórios.')
      } else {
        console.log('Cadastro simulado com', { name, email, password })
        setError('')
      }
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen flex items-center justify-center bg-black text-white px-4"
    >
      <div className="w-full max-w-md border border-green-400/30 rounded-xl p-8 shadow-lg bg-neutral-900/60 backdrop-blur-lg">
        <h1 className="text-3xl font-bold text-green-400 mb-6 text-center">Criar conta</h1>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-white">Nome</Label>
            <div className="relative">
              <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="pl-10 mt-1 bg-black border-green-400/30 focus:border-green-400 text-white"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-white">E-mail</Label>
            <div className="relative">
              <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="pl-10 mt-1 bg-black border-green-400/30 focus:border-green-400 text-white"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password" className="text-white">Senha</Label>
            <div className="relative">
              <HiLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="pl-10 mt-1 bg-black border-green-400/30 focus:border-green-400 text-white"
              />
            </div>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm"
            >
              {error}
            </motion.p>
          )}

          <Button
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold shadow-green-500/40 shadow-md transition-all"
          >
            {loading ? 'Criando conta...' : 'Criar conta'}
          </Button>
        </div>

        <div className="text-sm text-center text-neutral-400 mt-6">
          Já tem uma conta?{' '}
          <Link href="/login" className="text-green-400 hover:underline">
            Faça login
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
