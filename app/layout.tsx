import './styles/globals.css'
import { Toaster } from 'sonner'
import Header from '@/components/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">
        <Header />
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
