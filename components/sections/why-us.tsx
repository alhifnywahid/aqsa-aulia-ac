"use client"

import {
  BadgeCheck,
  Shield,
  Banknote,
  Clock,
  Star,
  Headphones,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/constants"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { useT } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion"

const icons = [BadgeCheck, Shield, Banknote, Clock, Star, Headphones]

const iconColors = [
  "text-blue-500 bg-blue-500/10",
  "text-cyan-500 bg-cyan-500/10",
  "text-indigo-500 bg-indigo-500/10",
  "text-sky-500 bg-sky-500/10",
  "text-blue-600 bg-blue-600/10",
  "text-cyan-600 bg-cyan-600/10",
]

export function WhyUs() {
  const t = useT()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="keunggulan" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-40 top-20 w-96 h-96 rounded-full bg-blue-100/40 dark:bg-blue-900/8 blur-3xl" />
        <div className="absolute -right-40 bottom-20 w-96 h-96 rounded-full bg-cyan-100/40 dark:bg-cyan-900/8 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4"
          >
            {t(translations.whyUs.badge)}
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-display"
          >
            {t(translations.whyUs.title1)}{" "}
            <span className="text-gradient">{t(translations.whyUs.title2)}</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            {t(translations.whyUs.description)}
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {translations.whyUs.items.map((item, idx) => {
            const Icon = icons[idx]
            const colorClass = iconColors[idx % iconColors.length]

            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col gap-4 p-6 rounded-2xl border border-slate-100 dark:border-white/5 bg-white dark:bg-slate-800/30 hover:border-primary/25 hover:shadow-xl hover:shadow-blue-500/8 transition-shadow duration-300 cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.15 }}
                  className={cn("w-14 h-14 rounded-2xl flex items-center justify-center", colorClass)}
                >
                  <Icon className="w-7 h-7" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {t(item.title)}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {t(item.desc)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom banner */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 rounded-3xl gradient-brand p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-600/25"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {t(translations.whyUs.ctaTitle)}
            </h3>
            <p className="text-blue-100/80 text-sm">
              {t(translations.whyUs.ctaDesc)}
            </p>
          </div>
          <motion.a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis%20seputar%20AC`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0 px-7 py-3.5 rounded-2xl bg-white text-primary font-semibold text-sm hover:bg-blue-50 shadow-lg transition-colors"
          >
            {t(translations.whyUs.ctaButton)} →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
