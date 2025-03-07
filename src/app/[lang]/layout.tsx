import type React from "react"
import Link from "next/link"
import { ThemeToggle } from "../theme-toggle"
import { LanguageSwitcher } from "../language-switcher"

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <>
      <header className="bg-card text-card-foreground border-b border-border p-4">
        <div className="container mx-auto flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href={`/${params.lang}`} className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href={`/${params.lang}/portfolio`} className="hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href={`/${params.lang}/cv`} className="hover:text-primary transition-colors">
                  CV
                </Link>
              </li>
              <li>
                <Link href={`/${params.lang}/contact`} className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="container mx-auto mt-8 px-4">{children}</main>
      <footer className="bg-card text-card-foreground border-t border-border p-4 mt-8">
        <div className="container mx-auto text-center">© 2023 Malgorzata Bilejszys. All rights reserved.</div>
      </footer>
    </>
  )
}

