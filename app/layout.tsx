'use client'

import './styles/globals.css'
import { Toaster } from 'sonner'
import Header from '@/components/Header'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const showHeader = !pathname?.startsWith('/login') && !pathname?.startsWith('/register') && !pathname?.startsWith('/forgot-password')

  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">
        {showHeader && <Header />}
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
