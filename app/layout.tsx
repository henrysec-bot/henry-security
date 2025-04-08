import { Toaster } from 'sonner'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
