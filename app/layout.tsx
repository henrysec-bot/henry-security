import './globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import Header from '@/components/Header' // ou Navbar, dependendo do nome

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Henry Security',
  description: 'Monitoramento inteligente de aplicações web',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
