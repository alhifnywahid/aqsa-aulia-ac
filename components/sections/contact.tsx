"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/constants"

const contactItems = [
  {
    icon: Phone,
    title: "WhatsApp / Telepon",
    value: siteConfig.whatsappDisplay,
    action: `https://wa.me/${siteConfig.whatsapp}?text=Halo%2C%20saya%20ingin%20bertanya%20seputar%20layanan%20AC`,
    actionLabel: "Chat Sekarang",
    color: "text-green-500 bg-green-500/10",
  },
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.email,
    action: `mailto:${siteConfig.email}`,
    actionLabel: "Kirim Email",
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    icon: MapPin,
    title: "Alamat",
    value: siteConfig.address,
    action: "https://maps.google.com",
    actionLabel: "Lihat di Maps",
    color: "text-red-500 bg-red-500/10",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    value: siteConfig.operationalHours,
    action: null,
    actionLabel: null,
    color: "text-amber-500 bg-amber-500/10",
  },
]

export function Contact() {
  return (
    <section id="kontak" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-50/80 dark:bg-blue-950/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Hubungi Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Siap Membantu{" "}
            <span className="text-gradient">Kapan Saja</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400">
            Punya pertanyaan atau butuh layanan AC? Jangan ragu untuk menghubungi kami melalui salah satu jalur berikut.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-5">
            {contactItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/25 hover:shadow-lg hover:shadow-blue-500/8 transition-all duration-300 bg-white dark:bg-slate-800/50"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
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
                </div>
              )
            })}
          </div>

          {/* CTA Card */}
          <div className="relative rounded-3xl gradient-brand p-8 sm:p-10 overflow-hidden shadow-2xl shadow-blue-600/30">
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-cyan-400/10 blur-2xl" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Chat Langsung via WhatsApp
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-8">
                Dapatkan respons cepat dari tim kami. Konsultasi gratis, estimasi harga transparan, dan booking servis mudah langsung melalui WhatsApp.
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {[
                  "Respons dalam hitungan menit",
                  "Konsultasi gratis tanpa syarat",
                  "Booking jadwal servis fleksibel",
                  "Estimasi harga langsung di tempat",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2.5 text-sm text-blue-50">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%20Aqsa%20Aulia%20AC%2C%20saya%20ingin%20konsultasi%20mengenai%20AC%20saya`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-2xl bg-white text-primary font-bold text-base shadow-xl hover:bg-blue-50 hover:scale-[1.02] transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Mulai Chat Sekarang
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-center text-blue-200 text-xs mt-4">
                Rata-rata respons dalam &lt; 5 menit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
