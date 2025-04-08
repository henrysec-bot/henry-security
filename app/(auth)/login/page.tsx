'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen flex items-center justify-center bg-black text-white px-4"
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
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="mt-1 bg-black border-green-400/30 focus:border-green-400 text-white"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-white">Senha</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 bg-black border-green-400/30 focus:border-green-400 text-white"
            />
          </div>

          <Button
            className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold shadow-green-500/40 shadow-md transition-all"
          >
            Entrar
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full flex items-center justify-center gap-2"
          >
            <FcGoogle size={20} />
            Entrar com Google
          </Button>
        </div>

        <div className="text-sm text-center text-neutral-400 mt-6">
          Não tem uma conta?{' '}
          <Link href="/register" className="text-green-400 hover:underline">
            Crie uma agora
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
