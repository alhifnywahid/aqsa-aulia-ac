"use client"

import { ThemeProvider } from "@/components/providers/theme-provider"
import { LanguageProvider } from "@/lib/i18n/context"

/**
 * Client-side providers wrapper.
 * Combines ThemeProvider and LanguageProvider so that
 * the root layout can remain a Server Component for SSR.
 */
export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}
