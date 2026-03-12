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
import { services } from "@/lib/constants"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Settings,
  MoveRight,
  ShoppingCart,
  Zap,
  CalendarCheck,
}

const colorMap: Record<string, string> = {
  blue: "from-blue-500/15 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40",
  cyan: "from-cyan-500/15 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-500/40",
  indigo:
    "from-indigo-500/15 to-indigo-600/5 border-indigo-500/20 hover:border-indigo-500/40",
  sky: "from-sky-500/15 to-sky-600/5 border-sky-500/20 hover:border-sky-500/40",
}

const iconColorMap: Record<string, string> = {
  blue: "bg-blue-500/15 text-blue-500",
  cyan: "bg-cyan-500/15 text-cyan-500",
  indigo: "bg-indigo-500/15 text-indigo-500",
  sky: "bg-sky-500/15 text-sky-500",
}

const featureColorMap: Record<string, string> = {
  blue: "text-blue-500",
  cyan: "text-cyan-500",
  indigo: "text-indigo-500",
  sky: "text-sky-500",
}

export function Services() {
  return (
    <section id="layanan" className="bg-slate-50 py-24 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
            Layanan Kami
          </div>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Semua Kebutuhan AC{" "}
            <span className="text-gradient">dalam Satu Tempat</span>
          </h2>
          <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">
            Dari pemasangan, perawatan, hingga perbaikan - kami hadir sebagai
            solusi lengkap untuk semua kebutuhan AC Anda.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Wrench
            const colorClass = colorMap[service.color] ?? colorMap.blue
            const iconClass = iconColorMap[service.color] ?? iconColorMap.blue
            const featureClass =
              featureColorMap[service.color] ?? featureColorMap.blue

            return (
              <div
                key={service.id}
                className={cn(
                  "group card-hover relative rounded-2xl border bg-gradient-to-br p-6",
                  colorClass,
                  "bg-white dark:bg-slate-800/60"
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "mb-5 flex h-12 w-12 items-center justify-center rounded-xl",
                    iconClass
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feat) => (
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
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
