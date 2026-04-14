"use client"

import { Star, Quote } from "lucide-react"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { useT } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-amber-400 fill-amber-400" : "text-slate-300 dark:text-slate-600"}`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const t = useT()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimoni" className="py-24 bg-section-alt relative overflow-hidden" ref={ref}>
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-blue-100/50 dark:bg-blue-900/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-cyan-100/50 dark:bg-cyan-900/5 blur-3xl" />
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
            {t(translations.testimonials.badge)}
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-display"
          >
            {t(translations.testimonials.title1)}{" "}
            <span className="text-gradient">{t(translations.testimonials.title2)}</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base text-slate-500 dark:text-slate-400">
            {t(translations.testimonials.description)}
          </motion.p>
        </motion.div>

        {/* Overall rating banner */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-white/5 max-w-lg mx-auto shadow-sm"
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-slate-900 dark:text-white">5.0</div>
            <div className="flex items-center gap-0.5 justify-center mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-1">{t(translations.testimonials.avgRating)}</p>
          </div>
          <div className="h-px w-full sm:h-12 sm:w-px bg-slate-200 dark:bg-white/5" />
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 dark:text-white">2000+</div>
            <p className="text-xs text-slate-400 mt-1">{t(translations.testimonials.totalReviews)}</p>
          </div>
          <div className="h-px w-full sm:h-12 sm:w-px bg-slate-200 dark:bg-white/5" />
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 dark:text-white">98%</div>
            <p className="text-xs text-slate-400 mt-1">{t(translations.testimonials.happyCustomers)}</p>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {translations.testimonials.items.map((tItem, idx) => (
            <motion.div
              key={tItem.name}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-white/5 hover:border-primary/20 hover:shadow-xl hover:shadow-blue-500/8 transition-shadow duration-300 cursor-default"
            >
              {/* Quote icon */}
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                <Quote className="w-7 h-7 text-primary/25" />
              </motion.div>

              {/* Comment */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 italic">
                &ldquo;{t(tItem.comment)}&rdquo;
              </p>

              {/* Rating */}
              <StarRating rating={5} />

              {/* User */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-white/5">
                <img
                  src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURIComponent(tItem.name)}`}
                  alt={tItem.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full bg-blue-50 dark:bg-slate-700 shrink-0 ring-2 ring-primary/15"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{tItem.name}</p>
                  <p className="text-xs text-slate-400">
                    {t(tItem.role)} · {t(tItem.location)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
