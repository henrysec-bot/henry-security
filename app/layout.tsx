'use client'

import './styles/globals.css'
import { Toaster } from 'sonner'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const showHeader = !pathname?.startsWith('/login') && !pathname?.startsWith('/register') && !pathname?.startsWith('/forgot-password')

  return (
    <html lang="pt-BR">
      <body className="text-white bg-black">
        <div className="flex flex-col min-h-screen">
          {showHeader && <Header />}
          <main className="flex-1">
            {children}
          </main>
          {showHeader && <Footer />}
        </div>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
