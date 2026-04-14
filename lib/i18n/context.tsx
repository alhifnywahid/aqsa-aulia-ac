"use client"

import { createContext, useContext, useState, useEffect, useCallback } from "react"
import type { Locale } from "./translations"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "id",
  setLocale: () => {},
})

/**
 * Language provider that persists the selected locale to localStorage.
 * Wraps the app to enable i18n via the `useT()` hook.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("locale") as Locale | null
    if (saved === "id" || saved === "en") {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
    document.documentElement.lang = newLocale
  }, [])

  // Prevent hydration mismatch by returning default locale until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ locale: "id", setLocale }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

/** Access current locale and setter */
export function useLanguage() {
  return useContext(LanguageContext)
}

/**
 * Translation helper hook.
 *
 * @example
 * ```tsx
 * const t = useT()
 * return <h1>{t(translations.hero.headline1)}</h1>
 * ```
 */
export function useT() {
  const { locale } = useLanguage()
  return function t<T extends Record<Locale, string | readonly string[]>>(
    entry: T
  ): T[Locale] {
    return entry[locale]
  }
}
