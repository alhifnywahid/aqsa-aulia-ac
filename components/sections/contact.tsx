"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/constants"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { useT } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from "@/lib/motion"

export function Contact() {
  const t = useT()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactItems = [
    {
      icon: Phone,
      title: t(translations.contact.whatsappPhone),
      value: siteConfig.whatsappDisplay,
      action: `https://wa.me/${siteConfig.whatsapp}?text=Halo%2C%20saya%20ingin%20bertanya%20seputar%20layanan%20AC`,
      actionLabel: t(translations.contact.chatNow),
      color: "text-green-500 bg-green-500/10",
    },
    {
      icon: Mail,
      title: t(translations.contact.email),
      value: siteConfig.email,
      action: `mailto:${siteConfig.email}`,
      actionLabel: t(translations.contact.sendEmail),
      color: "text-blue-500 bg-blue-500/10",
    },
    {
      icon: MapPin,
      title: t(translations.contact.address),
      value: siteConfig.address,
      action: "https://maps.google.com",
      actionLabel: t(translations.contact.viewMaps),
      color: "text-red-500 bg-red-500/10",
    },
    {
      icon: Clock,
      title: t(translations.contact.hours),
      value: siteConfig.operationalHours,
      action: null,
      actionLabel: null,
      color: "text-amber-500 bg-amber-500/10",
    },
  ]

  const benefits = t(translations.contact.ctaBenefits) as readonly string[]

  return (
    <section id="kontak" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-50/60 dark:bg-blue-950/10 blur-3xl" />
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
            {t(translations.contact.badge)}
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-display"
          >
            {t(translations.contact.title1)}{" "}
            <span className="text-gradient">{t(translations.contact.title2)}</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-base text-slate-500 dark:text-slate-400">
            {t(translations.contact.description)}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-5"
          >
            {contactItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInLeft}
                  whileHover={{ x: 4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-primary/20 hover:shadow-lg hover:shadow-blue-500/8 transition-all duration-300 bg-white dark:bg-slate-800/30 cursor-default"
                >
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      {item.title}
                    </p>
                    <p className="text-base font-semibold text-slate-900 dark:text-white break-words">
                      {item.value}
                    </p>
                    {item.action && (
                      <a
                        href={item.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium mt-1.5 transition-colors"
                      >
                        {item.actionLabel}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Card */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative rounded-3xl gradient-brand p-8 sm:p-10 overflow-hidden shadow-2xl shadow-blue-600/25"
          >
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-cyan-400/10 blur-2xl" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6"
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {t(translations.contact.ctaTitle)}
              </h3>
              <p className="text-blue-100/80 text-sm leading-relaxed mb-8">
                {t(translations.contact.ctaDesc)}
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, idx) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
                    className="flex items-center gap-2.5 text-sm text-blue-50"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%20Aqsa%20Aulia%20AC%2C%20saya%20ingin%20konsultasi%20mengenai%20AC%20saya`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-2xl bg-white text-primary font-bold text-base shadow-xl hover:bg-blue-50 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                {t(translations.contact.ctaButton)}
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <p className="text-center text-blue-200/70 text-xs mt-4">
                {t(translations.contact.ctaNote)}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
