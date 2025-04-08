'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [success, setSuccess] = useState(false)

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirm) {
      alert('As senhas não coincidem!')
      return
    }

    setSuccess(true)
    console.log('Nova senha definida:', password)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-black text-white px-4"
    >
      <div className="w-full max-w-md border border-green-400/30 rounded-xl p-8 shadow-lg bg-neutral-900/60 backdrop-blur-lg">
        <h1 className="text-2xl font-bold text-green-400 mb-4 text-center">
          Redefinir senha
        </h1>

        {!success ? (
          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <Label htmlFor="password">Nova Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="mt-1 bg-black border-green-400/30 focus:border-green-400 text-white"
              />
            </div>
            <div>
              <Label htmlFor="confirm">Confirmar Senha</Label>
              <Input
                id="confirm"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                placeholder="••••••••"
                className="mt-1 bg-black border-green-400/30 focus:border-green-400 text-white"
              />
            </div>
            <Button className="w-full bg-green-500 text-black hover:bg-green-600 transition">
              Redefinir Senha
            </Button>
          </form>
        ) : (
          <p className="text-center text-green-400">
            Senha redefinida com sucesso! 🎉
          </p>
        )}
      </div>
    </motion.div>
  )
}
