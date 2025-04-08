'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Autenticação será implementada futuramente
    console.log({ email, password })
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow-neon"
      >
        <h1 className="text-2xl font-bold mb-6 text-neon-green text-center">Entrar no Henry Security</h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neon-green"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Senha</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neon-green"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded bg-neon-green text-black font-semibold hover:bg-green-400 transition-colors"
          >
            Entrar
          </button>
        </form>

        <div className="my-4 text-center text-sm text-neutral-500">ou</div>

        <button
          className="w-full flex items-center justify-center gap-2 py-2 border border-neutral-700 rounded hover:bg-neutral-800 transition"
          onClick={() => alert('Google login ainda será integrado')}
        >
          <FaGoogle /> Entrar com Google
        </button>

        <p className="mt-4 text-sm text-center text-neutral-500">
          Ainda não tem conta?{' '}
          <Link href="/register" className="text-neon-green hover:underline">
            Criar conta
          </Link>
        </p>
      </motion.div>
    </main>
  )
}
