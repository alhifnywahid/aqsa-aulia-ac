"use client"

import { CheckCircle2, Star } from "lucide-react"
import { pricingPackages, siteConfig } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Pricing() {
  return (
    <section id="harga" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Harga Layanan
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Harga Transparan,{" "}
            <span className="text-gradient">Tanpa Biaya Tersembunyi</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400">
            Estimasi harga diberikan di awal sebelum pekerjaan dimulai. Hubungi kami untuk harga spesifik sesuai kondisi AC Anda.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                "relative rounded-2xl flex flex-col transition-all duration-300",
                pkg.popular
                  ? "gradient-brand shadow-2xl shadow-blue-600/30 scale-[1.02] sm:scale-[1.04]"
                  : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/30 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              )}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400 text-amber-900 text-xs font-bold shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Paling Populer
                  </div>
                </div>
              )}

              <div className="p-7 flex flex-col gap-6 flex-1">
                {/* Top */}
                <div>
                  <h3
                    className={cn(
                      "text-lg font-bold mb-1",
                      pkg.popular ? "text-white" : "text-slate-900 dark:text-white"
                    )}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={cn(
                      "text-sm",
                      pkg.popular ? "text-blue-100" : "text-slate-500 dark:text-slate-400"
                    )}
                  >
                    {pkg.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1.5">
                  <span
                    className={cn(
                      "text-xs font-medium",
                      pkg.popular ? "text-blue-200" : "text-slate-400"
                    )}
                  >
                    Mulai
                  </span>
                  <span
                    className={cn(
                      "text-4xl font-bold",
                      pkg.popular ? "text-white" : "text-slate-900 dark:text-white"
                    )}
                  >
                    Rp {pkg.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm mb-1",
                      pkg.popular ? "text-blue-200" : "text-slate-400"
                    )}
                  >
                    {pkg.unit}
                  </span>
                </div>

                {/* Divider */}
                <hr
                  className={cn(
                    pkg.popular ? "border-white/20" : "border-slate-100 dark:border-slate-700"
                  )}
                />

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5">
                      <CheckCircle2
                        className={cn(
                          "w-4 h-4 shrink-0",
                          pkg.popular ? "text-blue-200" : "text-primary"
                        )}
                      />
                      <span
                        className={cn(
                          "text-sm",
                          pkg.popular ? "text-blue-50" : "text-slate-600 dark:text-slate-300"
                        )}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%2C%20saya%20ingin%20pesan%20paket%20${encodeURIComponent(pkg.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]",
                    pkg.popular
                      ? "bg-white text-primary hover:bg-blue-50 shadow-lg"
                      : "gradient-brand text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/40"
                  )}
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-slate-400 dark:text-slate-500 mt-10">
          * Harga dapat berbeda tergantung kondisi, merek, dan kapasitas AC. Hubungi kami untuk survei gratis.
        </p>
      </div>
    </section>
  )
}
