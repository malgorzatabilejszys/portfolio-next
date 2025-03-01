import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Malgorzata Bilejszys Portfolio',
  description: 'Web developer portfolio showcasing my projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto">
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/product" className="hover:text-gray-300">Product</Link></li>
              <li><Link href="/cv" className="hover:text-gray-300">CV</Link></li>
              <li><Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto mt-8 px-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            © 2023 Malgorzata Bilejszys. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}