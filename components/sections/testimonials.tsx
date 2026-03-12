"use client"

import { Star, Quote } from "lucide-react"
import { testimonials } from "@/lib/constants"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-amber-400 fill-amber-400" : "text-slate-300"}`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-blue-100/60 dark:bg-blue-900/8 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-cyan-100/60 dark:bg-cyan-900/8 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Testimoni Pelanggan
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Apa Kata{" "}
            <span className="text-gradient">Pelanggan Kami</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400">
            Kepercayaan dan kepuasan pelanggan adalah motivasi terbesar kami untuk terus memberikan layanan terbaik.
          </p>
        </div>

        {/* Overall rating banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 max-w-lg mx-auto shadow-sm">
          <div className="text-center">
            <div className="text-5xl font-bold text-slate-900 dark:text-white">5.0</div>
            <div className="flex items-center gap-0.5 justify-center mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-1">Rating rata-rata</p>
          </div>
          <div className="h-px w-full sm:h-12 sm:w-px bg-slate-200 dark:bg-slate-700" />
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 dark:text-white">2000+</div>
            <p className="text-xs text-slate-400 mt-1">Total Ulasan</p>
          </div>
          <div className="h-px w-full sm:h-12 sm:w-px bg-slate-200 dark:bg-slate-700" />
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 dark:text-white">98%</div>
            <p className="text-xs text-slate-400 mt-1">Pelanggan Puas</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/25 hover:shadow-xl hover:shadow-blue-500/8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <Quote className="w-7 h-7 text-primary/30" />

              {/* Comment */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 italic">
                &ldquo;{t.comment}&rdquo;
              </p>

              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* User */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-700">
                <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
