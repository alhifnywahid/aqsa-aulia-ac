"use client"

import { useState, useEffect } from "react"
import { Menu, X, Wind, Phone } from "lucide-react"
import { siteConfig } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "motion/react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LanguageSelect } from "@/components/ui/language-toggle"
import { useT } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"
import { navSlideDown } from "@/lib/motion"

const navSections = [
  { key: "home" as const, href: "#hero" },
  { key: "services" as const, href: "#layanan" },
  { key: "whyUs" as const, href: "#keunggulan" },
  { key: "gallery" as const, href: "#galeri" },
  { key: "testimonials" as const, href: "#testimoni" },
  { key: "contact" as const, href: "#kontak" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const t = useT()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    navSections.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      variants={navSlideDown}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-blue-900/5 dark:shadow-blue-900/20 border-b border-slate-200/50 dark:border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center shadow-lg shadow-blue-600/40 ring-1 ring-blue-500/20">
              <Wind className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={cn(
                  "font-bold text-base tracking-tight transition-colors duration-300",
                  isScrolled
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-800 dark:text-white"
                )}
              >
                {siteConfig.name}
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navSections.map(({ key, href }) => (
              <motion.button
                key={href}
                onClick={() => handleNavClick(href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                  activeSection === href.replace("#", "")
                    ? isScrolled
                      ? "text-primary bg-primary/10 dark:bg-primary/15"
                      : "text-blue-600 dark:text-white bg-blue-500/10 dark:bg-white/15"
                    : isScrolled
                      ? "text-slate-600 hover:text-primary hover:bg-primary/8 dark:text-slate-300 dark:hover:text-primary"
                      : "text-slate-700 dark:text-blue-100 hover:text-blue-600 dark:hover:text-white hover:bg-blue-500/8 dark:hover:bg-white/12"
                )}
              >
                {t(translations.nav[key])}
              </motion.button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <LanguageSelect isScrolled={isScrolled} />
            <ThemeToggle isScrolled={isScrolled} />

            <motion.a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%2C%20saya%20ingin%20konsultasi%20mengenai%20AC`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
                isScrolled
                  ? "gradient-brand text-white shadow-md shadow-blue-500/25 hover:shadow-blue-500/40"
                  : "bg-blue-500/10 dark:bg-white/12 text-blue-700 dark:text-white border border-blue-500/20 dark:border-white/20 hover:bg-blue-500/15 dark:hover:bg-white/20 backdrop-blur-sm"
              )}
            >
              <Phone className="w-4 h-4" />
              {t(translations.nav.callUs)}
            </motion.a>

            <motion.button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              whileTap={{ scale: 0.9 }}
              className={cn(
                "lg:hidden p-2 rounded-xl transition-colors",
                isScrolled
                  ? "text-slate-700 hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
                  : "text-slate-700 dark:text-white hover:bg-slate-900/8 dark:hover:bg-white/15"
              )}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden"
          >
            <motion.div
              className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-white/5 px-4 py-4 space-y-1"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
              }}
            >
              {navSections.map(({ key, href }) => (
                <motion.button
                  key={href}
                  variants={{
                    closed: { opacity: 0, x: -20 },
                    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                  }}
                  onClick={() => handleNavClick(href)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all",
                    activeSection === href.replace("#", "")
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/8"
                  )}
                >
                  {t(translations.nav[key])}
                </motion.button>
              ))}
              <motion.div
                className="pt-2"
                variants={{
                  closed: { opacity: 0, y: 10 },
                  open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                }}
              >
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%2C%20saya%20ingin%20konsultasi%20mengenai%20AC`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl gradient-brand text-white text-sm font-semibold shadow-md shadow-blue-500/25"
                >
                  <Phone className="w-4 h-4" />
                  {t(translations.nav.callViaWa)}
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
