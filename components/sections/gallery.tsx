"use client"

import { ImageIcon } from "lucide-react"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { useT } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"
import { siteConfig } from "@/lib/constants"
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion"

const placeholderColors = [
  "from-blue-500/15 to-blue-700/15",
  "from-cyan-500/15 to-blue-600/15",
  "from-indigo-500/15 to-blue-500/15",
  "from-sky-500/15 to-cyan-600/15",
  "from-blue-600/15 to-indigo-600/15",
  "from-cyan-400/15 to-sky-600/15",
]

export function Gallery() {
  const t = useT()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const galleryItems = translations.gallery.items

  return (
    <section id="galeri" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-50/60 dark:bg-blue-950/10 blur-3xl" />
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
            {t(translations.gallery.badge)}
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-display"
          >
            {t(translations.gallery.title1)}{" "}
            <span className="text-gradient">{t(translations.gallery.title2)}</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base text-slate-500 dark:text-slate-400">
            {t(translations.gallery.description)}
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={scaleIn}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${placeholderColors[idx]} border border-slate-200/50 dark:border-white/5 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer`}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-primary/12 flex items-center justify-center"
                >
                  <ImageIcon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {t(item.label)}
                  </p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                    {t(item.category)}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 dark:text-slate-500">
                  {t(translations.gallery.photoSoon)}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-10 text-center"
        >
          <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">
            {t(translations.gallery.bottomNote)}
          </p>
          <motion.a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%2C%20saya%20ingin%20melihat%20portofolio%20lebih%20lengkap`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-brand text-white text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow"
          >
            {t(translations.gallery.ctaButton)}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
