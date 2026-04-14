"use client"

import { Wind, Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Clock } from "lucide-react"
import { siteConfig } from "@/lib/constants"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { useT } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"
import { fadeInUp, staggerContainer } from "@/lib/motion"

const navSections = [
  { key: "home" as const, href: "#hero" },
  { key: "services" as const, href: "#layanan" },
  { key: "whyUs" as const, href: "#keunggulan" },
  { key: "gallery" as const, href: "#galeri" },
  { key: "testimonials" as const, href: "#testimoni" },
  { key: "contact" as const, href: "#kontak" },
]

const serviceKeys = [
  "serviceAC", "installAC", "relocateAC", "buySellAC", "emergencyAC", "maintenanceAC",
] as const

export function Footer() {
  const t = useT()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const handleClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/5"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-2.5">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center shadow-lg shadow-blue-500/30"
              >
                <Wind className="w-5 h-5 text-white" />
              </motion.div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-base tracking-tight">{siteConfig.name}</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t(translations.footer.brandDesc)}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { href: siteConfig.social.instagram, icon: Instagram, hover: "hover:bg-pink-500/20 hover:text-pink-400" },
                { href: siteConfig.social.facebook, icon: Facebook, hover: "hover:bg-blue-500/20 hover:text-blue-400" },
                { href: `https://wa.me/${siteConfig.whatsapp}`, icon: MessageCircle, hover: "hover:bg-green-500/20 hover:text-green-400" },
              ].map(({ href, icon: Icon, hover }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 transition-all ${hover}`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeInUp} className="space-y-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">{t(translations.footer.navigation)}</h4>
            <ul className="space-y-2.5">
              {navSections.map(({ key, href }) => (
                <li key={href}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    onClick={() => handleClick(href)}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {t(translations.nav[key])}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp} className="space-y-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">{t(translations.footer.servicesTitle)}</h4>
            <ul className="space-y-2.5">
              {serviceKeys.map((key) => (
                <li key={key}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    onClick={() => handleClick("#layanan")}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors text-left"
                  >
                    {t(translations.services[key])}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp} className="space-y-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">{t(translations.footer.contactTitle)}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-slate-400">{siteConfig.whatsappDisplay}</p>
                  <p className="text-xs text-slate-500">{t(translations.footer.waAvailable)}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-400">{siteConfig.email}</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-400">{siteConfig.address}</p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-400">{siteConfig.operationalHours}</p>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6"
        >
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. {t(translations.footer.copyright)}.
          </p>
          <p className="text-xs text-slate-600">
            {t(translations.footer.madeWith)}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
