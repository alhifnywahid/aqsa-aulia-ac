"use client"

import { ArrowRight, Shield, Star, MessageCircle, ChevronDown } from "lucide-react"
import { siteConfig } from "@/lib/constants"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { useT } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  floatAnimation,
  floatAnimationDelayed,
  pulseGlow,
  scaleIn,
} from "@/lib/motion"

export function Hero() {
  const t = useT()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const statsData = [
    { value: siteConfig.stats.customers, label: t(translations.stats.customers) },
    { value: siteConfig.stats.experience, label: t(translations.stats.experience) },
    { value: siteConfig.stats.units, label: t(translations.stats.units) },
    { value: siteConfig.stats.satisfaction, label: t(translations.stats.satisfaction) },
  ]

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          {...pulseGlow}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 dark:bg-blue-500/10 blur-3xl"
        />
        <motion.div
          {...floatAnimationDelayed}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-400/8 dark:bg-cyan-400/8 blur-3xl"
        />
        <motion.div
          {...pulseGlow}
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-indigo-500/8 dark:bg-indigo-500/8 blur-3xl"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, oklch(0.5 0.05 240) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Floating badges */}
      <motion.div
        {...floatAnimation}
        className="absolute top-28 left-6 lg:left-16 hidden sm:block"
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 1 }}
          className="glass-card-light rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-lg"
        >
          <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center">
            <Shield className="w-4 h-4 text-green-500" />
          </div>
          <div>
            <p className="text-slate-800 dark:text-white text-xs font-semibold">{t(translations.hero.badgeWarranty)}</p>
            <p className="text-slate-500 dark:text-slate-400 text-[10px]">{t(translations.hero.badgeWarrantyDesc)}</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        {...floatAnimationDelayed}
        className="absolute top-36 right-6 lg:right-16 hidden sm:block"
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 1.3 }}
          className="glass-card-light rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-lg"
        >
          <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center">
            <Star className="w-4 h-4 text-yellow-500" />
          </div>
          <div>
            <p className="text-slate-800 dark:text-white text-xs font-semibold">{t(translations.hero.badgeRating)}</p>
            <p className="text-slate-500 dark:text-slate-400 text-[10px]">{t(translations.hero.badgeRatingDesc)}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20"
      >
        {/* Pill badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-blue-500/12 border border-blue-400/20 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
          {t(translations.hero.serving)} {t(translations.hero.serviceArea)}
          <div className="w-px h-3.5 bg-blue-400/30" />
          <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
          {t(translations.hero.open6Days)}
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-[1.08] tracking-tight font-display"
        >
          {t(translations.hero.headline1)}
          <br />
          <span className="relative">
            <span className="text-gradient">{t(translations.hero.headline2)}</span>
          </span>
          <span> {t(translations.hero.headline3)}</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t(translations.hero.description)}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%2C%20saya%20ingin%20konsultasi%20seputar%20AC%20saya`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2.5 px-7 py-4 rounded-2xl gradient-brand text-white font-semibold text-base shadow-2xl shadow-blue-600/40 hover:shadow-blue-600/60 transition-shadow duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            {t(translations.hero.ctaWhatsapp)}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.button
            onClick={() => scrollToSection("#layanan")}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-4 rounded-2xl bg-slate-900/8 dark:bg-white/8 text-slate-800 dark:text-white font-semibold text-base border border-slate-200 dark:border-white/15 hover:bg-slate-900/12 dark:hover:bg-white/15 backdrop-blur-sm transition-colors duration-300"
          >
            {t(translations.hero.ctaServices)}
            <ChevronDown className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass-card-light rounded-2xl p-4 flex flex-col items-center gap-1 cursor-default shadow-md"
            >
              <span className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 text-center">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 dark:text-slate-400">{t(translations.hero.scroll)}</span>
          <ChevronDown className="w-5 h-5 text-slate-500 dark:text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
