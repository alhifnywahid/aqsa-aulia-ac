"use client"

import { ImageIcon } from "lucide-react"

const galleryItems = [
  { id: 1, label: "Service AC Split", category: "Service" },
  { id: 2, label: "Pemasangan AC Baru", category: "Instalasi" },
  { id: 3, label: "Bongkar Pasang AC", category: "Bongkar Pasang" },
  { id: 4, label: "Cuci AC Standing", category: "Service" },
  { id: 5, label: "Instalasi Multi Split", category: "Instalasi" },
  { id: 6, label: "AC Inverter Baru", category: "Jual Beli" },
]

const placeholderColors = [
  "from-blue-500/20 to-blue-700/20",
  "from-cyan-500/20 to-blue-600/20",
  "from-indigo-500/20 to-blue-500/20",
  "from-sky-500/20 to-cyan-600/20",
  "from-blue-600/20 to-indigo-600/20",
  "from-cyan-400/20 to-sky-600/20",
]

export function Gallery() {
  return (
    <section id="galeri" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Galeri Portofolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Hasil Kerja{" "}
            <span className="text-gradient">Nyata Kami</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400">
            Setiap pekerjaan dikerjakan dengan teliti dan penuh dedikasi. Berikut sebagian dokumentasi dari pekerjaan kami.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${placeholderColors[idx]} border-2 border-dashed border-blue-200/50 dark:border-blue-700/30 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/15 cursor-pointer`}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {item.label}
                  </p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                    {item.category}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 dark:text-slate-500">
                  Foto segera tersedia
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">
            Galeri foto akan diperbarui secara berkala. Ingin melihat lebih banyak?
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20melihat%20portofolio%20lebih%20lengkap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-brand text-white text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all"
          >
            Lihat Portofolio Lengkap via WA
          </a>
        </div>
      </div>
    </section>
  )
}
