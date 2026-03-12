"use client"

import {
  BadgeCheck,
  Shield,
  Banknote,
  Clock,
  Star,
  Headphones,
} from "lucide-react"
import { whyUs } from "@/lib/constants"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ElementType> = {
  BadgeCheck,
  Shield,
  Banknote,
  Clock,
  Star,
  Headphones,
}

const iconColors = [
  "text-blue-500 bg-blue-500/10",
  "text-cyan-500 bg-cyan-500/10",
  "text-indigo-500 bg-indigo-500/10",
  "text-sky-500 bg-sky-500/10",
  "text-blue-600 bg-blue-600/10",
  "text-cyan-600 bg-cyan-600/10",
]

export function WhyUs() {
  return (
    <section id="keunggulan" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-40 top-20 w-96 h-96 rounded-full bg-blue-100/50 dark:bg-blue-900/10 blur-3xl" />
        <div className="absolute -right-40 bottom-20 w-96 h-96 rounded-full bg-cyan-100/50 dark:bg-cyan-900/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Mengapa Kami?
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Dipercaya Ribuan{" "}
            <span className="text-gradient">Pelanggan Kami</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Kami berkomitmen memberikan layanan AC terbaik dengan standar profesional dan kepuasan pelanggan sebagai prioritas utama.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUs.map((item, idx) => {
            const Icon = iconMap[item.icon] ?? BadgeCheck
            const colorClass = iconColors[idx % iconColors.length]

            return (
              <div
                key={item.title}
                className="group flex flex-col gap-4 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-xl hover:shadow-blue-500/8 transition-all duration-300"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", colorClass)}>
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 rounded-3xl gradient-brand p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-600/30">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Siap Melayani Anda Hari Ini
            </h3>
            <p className="text-blue-100 text-sm">
              Konsultasikan kebutuhan AC Anda secara gratis. Kami siap membantu!
            </p>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis%20seputar%20AC"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-3.5 rounded-2xl bg-white text-primary font-semibold text-sm hover:bg-blue-50 shadow-lg transition-all hover:scale-[1.02]"
          >
            Konsultasi Gratis →
          </a>
        </div>
      </div>
    </section>
  )
}
