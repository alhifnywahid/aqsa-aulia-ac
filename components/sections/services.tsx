"use client"

import {
  Wrench,
  Settings,
  MoveRight,
  ShoppingCart,
  Zap,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { useT } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"
import { fadeInUp, staggerContainer } from "@/lib/motion"

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Settings,
  MoveRight,
  ShoppingCart,
  Zap,
  CalendarCheck,
}

const serviceKeys = [
  { id: "service", icon: "Wrench", titleKey: "serviceAC", descKey: "serviceACDesc", featKey: "serviceACFeatures", color: "blue" },
  { id: "install", icon: "Settings", titleKey: "installAC", descKey: "installACDesc", featKey: "installACFeatures", color: "cyan" },
  { id: "relocate", icon: "MoveRight", titleKey: "relocateAC", descKey: "relocateACDesc", featKey: "relocateACFeatures", color: "indigo" },
  { id: "buy-sell", icon: "ShoppingCart", titleKey: "buySellAC", descKey: "buySellACDesc", featKey: "buySellACFeatures", color: "sky" },
  { id: "emergency", icon: "Zap", titleKey: "emergencyAC", descKey: "emergencyACDesc", featKey: "emergencyACFeatures", color: "blue" },
  { id: "maintenance", icon: "CalendarCheck", titleKey: "maintenanceAC", descKey: "maintenanceACDesc", featKey: "maintenanceACFeatures", color: "cyan" },
] as const

const colorMap: Record<string, string> = {
  blue: "from-blue-500/10 to-blue-600/5 border-blue-500/15 hover:border-blue-500/40",
  cyan: "from-cyan-500/10 to-cyan-600/5 border-cyan-500/15 hover:border-cyan-500/40",
  indigo: "from-indigo-500/10 to-indigo-600/5 border-indigo-500/15 hover:border-indigo-500/40",
  sky: "from-sky-500/10 to-sky-600/5 border-sky-500/15 hover:border-sky-500/40",
}

const iconColorMap: Record<string, string> = {
  blue: "bg-blue-500/12 text-blue-500",
  cyan: "bg-cyan-500/12 text-cyan-500",
  indigo: "bg-indigo-500/12 text-indigo-500",
  sky: "bg-sky-500/12 text-sky-500",
}

const featureColorMap: Record<string, string> = {
  blue: "text-blue-500",
  cyan: "text-cyan-500",
  indigo: "text-indigo-500",
  sky: "text-sky-500",
}

export function Services() {
  const t = useT()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="layanan" className="bg-section-alt py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-32 top-20 w-72 h-72 rounded-full bg-blue-500/5 dark:bg-blue-500/3 blur-3xl" />
        <div className="absolute -right-32 bottom-20 w-72 h-72 rounded-full bg-cyan-500/5 dark:bg-cyan-500/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wider text-primary uppercase"
          >
            {t(translations.services.badge)}
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white font-display"
          >
            {t(translations.services.title1)}{" "}
            <span className="text-gradient">{t(translations.services.title2)}</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base leading-relaxed text-slate-500 dark:text-slate-400">
            {t(translations.services.description)}
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {serviceKeys.map((service) => {
            const Icon = iconMap[service.icon] ?? Wrench
            const colorClass = colorMap[service.color] ?? colorMap.blue
            const iconClass = iconColorMap[service.color] ?? iconColorMap.blue
            const featureClass = featureColorMap[service.color] ?? featureColorMap.blue
            const svc = translations.services
            const titleText = t(svc[service.titleKey])
            const descText = t(svc[service.descKey])
            const features = t(svc[service.featKey]) as readonly string[]

            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group relative rounded-2xl border bg-gradient-to-br p-6 cursor-default",
                  colorClass,
                  "bg-white dark:bg-slate-800/40"
                )}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className={cn(
                    "mb-5 flex h-12 w-12 items-center justify-center rounded-xl",
                    iconClass
                  )}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  {titleText}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {descText}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm">
                      <CheckCircle2
                        className={cn("h-4 w-4 shrink-0", featureClass)}
                      />
                      <span className="text-slate-600 dark:text-slate-300">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
