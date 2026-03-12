"use client"

import { useState, useEffect } from "react"
import { Menu, X, Wind, Phone } from "lucide-react"
import { navLinks, siteConfig } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

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

    navLinks.forEach(({ href }) => {
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg shadow-blue-900/10 border-b border-blue-100 dark:border-blue-900/30"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
              <Wind className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={cn(
                  "font-bold text-base tracking-tight transition-colors",
                  isScrolled
                    ? "text-slate-900 dark:text-white"
                    : "text-white"
                )}
              >
                Aqsa Aulia AC
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  activeSection === href.replace("#", "")
                    ? isScrolled
                      ? "text-primary bg-primary/10"
                      : "text-white bg-white/15"
                    : isScrolled
                      ? "text-slate-600 hover:text-primary hover:bg-primary/8 dark:text-slate-300 dark:hover:text-primary"
                      : "text-blue-100 hover:text-white hover:bg-white/12"
                )}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%2C%20saya%20ingin%20konsultasi%20mengenai%20AC`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
                isScrolled
                  ? "gradient-brand text-white shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02]"
                  : "bg-white/15 text-white border border-white/25 hover:bg-white/25 backdrop-blur-sm"
              )}
            >
              <Phone className="w-4 h-4" />
              Hubungi Kami
            </a>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled
                  ? "text-slate-700 hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
                  : "text-white hover:bg-white/15"
              )}
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white dark:bg-slate-900 border-t border-blue-100 dark:border-blue-900/30 px-4 py-4 space-y-1">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all",
                activeSection === href.replace("#", "")
                  ? "text-primary bg-primary/10 font-semibold"
                  : "text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/8"
              )}
            >
              {label}
            </button>
          ))}
          <div className="pt-2">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%2C%20saya%20ingin%20konsultasi%20mengenai%20AC`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl gradient-brand text-white text-sm font-semibold shadow-md shadow-blue-500/25"
            >
              <Phone className="w-4 h-4" />
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
