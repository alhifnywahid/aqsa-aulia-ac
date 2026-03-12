"use client"

import { ArrowRight, Shield, Star, MessageCircle, ChevronDown } from "lucide-react"
import { siteConfig, stats } from "@/lib/constants"
import config from "@/site.config"

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-400/8 blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-indigo-500/8 blur-3xl animate-pulse-slow" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, oklch(0.8 0.05 240) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/50 to-transparent" />
      </div>

      {/* Floating badges */}
      <div className="absolute top-28 left-6 lg:left-16 animate-float hidden sm:block">
        <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center">
            <Shield className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <p className="text-white text-xs font-semibold">Bergaransi Resmi</p>
            <p className="text-slate-400 text-[10px]">Setiap pekerjaan</p>
          </div>
        </div>
      </div>

      <div className="absolute top-36 right-6 lg:right-16 animate-float-delayed hidden sm:block">
        <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center">
            <Star className="w-4 h-4 text-yellow-400" />
          </div>
          <div>
            <p className="text-white text-xs font-semibold">Rating 5.0 ⭐</p>
            <p className="text-slate-400 text-[10px]">2000+ pelanggan</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Melayani {config.serviceArea}
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Buka 6 Hari Seminggu
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
          Spesialis AC
          <br />
          <span className="relative">
            <span className="text-gradient">Terpercaya</span>
          </span>
          <span className="text-white"> & Profesional</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {siteConfig.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%2C%20saya%20ingin%20konsultasi%20seputar%20AC%20saya`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-7 py-4 rounded-2xl gradient-brand text-white font-semibold text-base shadow-2xl shadow-blue-600/40 hover:shadow-blue-600/60 hover:scale-[1.03] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Chat WhatsApp Sekarang
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={() => scrollToSection("#layanan")}
            className="flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/10 text-white font-semibold text-base border border-white/20 hover:bg-white/18 backdrop-blur-sm transition-all duration-200"
          >
            Lihat Layanan
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-4 flex flex-col items-center gap-1"
            >
              <span className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</span>
              <span className="text-xs text-slate-400 text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-400">Scroll</span>
        <ChevronDown className="w-5 h-5 text-slate-400" />
      </div>
    </section>
  )
}
