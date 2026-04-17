import type { Metadata } from "next"
import { Gallery } from "@/components/sections/gallery"
import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title: "Galeri Foto Transaksi AC Bekas | Dokumentasi Jual Beli - Gallery",
  description:
    "Lihat galeri foto dokumentasi transaksi jual beli AC bekas UD AQSA AULIA AC. Beli AC bekas kantor, bongkar AC gedung, stok AC bekas berkualitas. View our used AC transaction photo gallery.",
  path: "/galeri",
  keywords: [
    "galeri AC bekas",
    "foto transaksi AC bekas",
    "dokumentasi jual beli AC",
    "AC bekas kantor",
    "bongkar AC gedung",
    "used AC gallery",
    "AC transaction photos",
  ],
})

function GaleriBreadcrumbJsonLd() {
  const data = breadcrumbJsonLd([
    { name: "Beranda", url: "https://udaqsaauliaac.com" },
    { name: "Galeri", url: "https://udaqsaauliaac.com/galeri" },
  ])
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function GaleriPage() {
  return (
    <>
      <GaleriBreadcrumbJsonLd />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/3 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wider text-primary uppercase">
            Galeri Kami - Our Gallery
          </div>
          <h1 className="mb-6 font-display text-4xl leading-tight font-extrabold text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Dokumentasi <span className="text-gradient">Transaksi Kami</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Berikut sebagian dokumentasi dari transaksi jual beli AC bekas yang
            telah kami lakukan bersama pelanggan.
          </p>
          <p className="mt-3 text-sm text-slate-400 italic dark:text-slate-500">
            Here is some documentation of used AC transactions we have completed
            with our customers.
          </p>
        </div>
      </section>

      <Gallery />
    </>
  )
}
