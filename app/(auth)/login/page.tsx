'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FcGoogle } from 'react-icons/fc'
import { HiMail, HiLockClosed } from 'react-icons/hi'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async () => {
    setError('')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (!email || !password) {
        setError('Preencha todos os campos.')
      } else {
        console.log('Login simulado com', { email, password })
      }
    }, 1500)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="pt-24 md:pt-0 min-h-screen flex items-center justify-center bg-black text-white px-4"
    >
      <div className="w-full max-w-md border border-green-400/30 rounded-xl p-8 shadow-lg bg-neutral-900/60 backdrop-blur-lg">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-green-400 mb-6 text-center"
        >
          Acesse sua conta
        </motion.h1>

        <div className="space-y-4">
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
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold shadow-green-500/40 shadow-md transition-all"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>

          <Button variant="outline" size="lg" className="w-full flex items-center justify-center gap-2">
            <FcGoogle size={20} />
            Entrar com Google
          </Button>
        </div>

        <div className="text-sm text-center text-neutral-400 mt-4">
          <Link href="/forgot-password" className="text-green-400 hover:underline">
            Esqueceu sua senha?
          </Link>
        </div>

        <div className="text-sm text-center text-neutral-400 mt-6">
          Não tem uma conta?{' '}
          <Link href="/register" className="text-green-400 hover:underline">
            Crie uma agora
          </Link>
        </div>
      </div>
    </motion.section> // ← Fechamento correto da section
  )
}
