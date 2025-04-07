// app/layout.tsx
import './styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white relative overflow-x-hidden">
  {children}
</body>

    </html>
  );
}
