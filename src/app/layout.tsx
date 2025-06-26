import './globals.css';
import Link from 'next/link';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>
        <header className="flex flex-row sm:flex-row items-center justify-between p-4 m-2 rounded bg-white shadow-sm">
          
          {/* Título */}
          <p id="title-header" className="text-xl font-bold text-gray-800 mt-2 sm:mt-0">
            Isaac Andrade
          </p>

          {/* Navegação */}
          <nav className="w-full flex flex-row justify-end sm:justify-start sm:w-auto gap-2 sm:gap-5 text-sm text-gray-700">
            <DarkModeToggle />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
