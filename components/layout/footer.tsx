"use client"

import { Wind, Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Clock } from "lucide-react"
import { siteConfig, navLinks, services } from "@/lib/constants"

export function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/8">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Wind className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-base tracking-tight">Aqsa Aulia AC</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Solusi AC terpercaya untuk rumah dan bisnis Anda. Profesional, bergaransi, dan harga bersaing.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-pink-500/20 flex items-center justify-center text-slate-400 hover:text-pink-400 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-blue-500/20 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-green-500/20 flex items-center justify-center text-slate-400 hover:text-green-400 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">Navigasi</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleClick(href)}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">Layanan</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleClick("#layanan")}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-slate-400">{siteConfig.whatsappDisplay}</p>
                  <p className="text-xs text-slate-500">WhatsApp tersedia</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-400">{siteConfig.email}</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-400">{siteConfig.address}</p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-400">{siteConfig.operationalHours}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. Semua hak dilindungi.
          </p>
          <p className="text-xs text-slate-600">
            Dibuat dengan ❤️ untuk kepercayaan pelanggan
          </p>
        </div>
      </div>
    </footer>
  )
}
