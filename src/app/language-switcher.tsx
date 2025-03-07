"use client"

import { usePathname, useRouter } from "next/navigation"

const locales = ["en", "da"]

export function LanguageSwitcher() {
  const pathName = usePathname()
  const router = useRouter()

  const handleLanguageChange = (locale: string) => {
    const currentLocale = pathName.split("/")[1]
    const isCurrentLocaleValid = locales.includes(currentLocale)

    const newPath = isCurrentLocaleValid ? pathName.replace(`/${currentLocale}`, `/${locale}`) : `/${locale}${pathName}`

    router.push(newPath)
  }

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleLanguageChange("en")}
        className="px-2 py-1 rounded hover:bg-secondary transition-colors"
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("da")}
        className="px-2 py-1 rounded hover:bg-secondary transition-colors"
        aria-label="Switch to Danish"
      >
        DA
      </button>
    </div>
  )
}

