"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  isScrolled?: boolean
  className?: string
}

export function ThemeToggle({ isScrolled = true, className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className={cn("w-9 h-9 rounded-xl", className)} />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative w-9 h-9 rounded-xl flex items-center justify-center transition-colors",
        isScrolled
          ? "bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20"
          : "bg-slate-200/60 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20",
        className
      )}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Sun className={cn("w-4 h-4", isScrolled ? "text-yellow-500" : "text-yellow-300")} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Moon className={cn("w-4 h-4", isScrolled ? "text-slate-700" : "text-slate-600")} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
