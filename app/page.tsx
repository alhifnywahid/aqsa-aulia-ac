import { Hero } from "@/components/sections/hero"
import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo"
import { articles } from "@/lib/articles"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"

export const metadata = generatePageMetadata({
  title:
    "UD AQSA AULIA AC - Jual Beli AC Bekas Terpercaya | Terima AC Bekas Segala Kondisi",
  description:
    "Spesialis jual beli AC bekas Jabodetabek. Terima AC bekas segala kondisi - normal, rusak, mati. Siap datang ke lokasi, bongkar gratis, bayar cash langsung. Harga tertinggi & terpercaya! Specialist used AC buying & selling in Greater Jakarta.",
  path: "",
  keywords: [
    "jual beli AC bekas Jabodetabek",
    "terima AC bekas segala kondisi",
    "beli AC bekas borongan",
    "jual AC bekas harga tinggi",
    "AC bekas Jakarta Bogor Depok Tangerang Bekasi",
    "used AC buy sell Jakarta",
    "second hand air conditioner Indonesia",
  ],
})

function HomeBreadcrumbJsonLd() {
  const data = breadcrumbJsonLd([
    { name: "Beranda", url: "https://udaqsaauliaac.com" },
  ])
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

const galleryPreview = [
  {
    src: "/images/galery/image-1.png",
    alt: "Transaksi pembelian AC bekas kantor",
  },
  {
    src: "/images/galery/image-3.png",
    alt: "Stok AC bekas berkualitas siap dijual",
  },
  {
    src: "/images/galery/image-5.png",
    alt: "Pembelian AC bekas hotel jumlah besar",
  },
  {
    src: "/images/galery/image-7.png",
    alt: "Tim profesional membongkar AC di lokasi",
  },
  { src: "/images/galery/image-11.png", alt: "Gudang penyimpanan AC bekas" },
  {
    src: "/images/galery/image-14.png",
    alt: "AC bekas outdoor unit siap angkut",
  },
  {
    src: "/images/galery/image-16.png",
    alt: "Proses pembongkaran AC di perkantoran",
  },
  {
    src: "/images/galery/image-18.png",
    alt: "AC bekas berkualitas tinggi siap pakai",
  },
]

export default function HomePage() {
  const latestArticles = articles.slice(0, 3)

  return (
    <>
      <HomeBreadcrumbJsonLd />
      <Hero />

      {/* ═══════ LAYANAN UNGGULAN ═══════ */}
      <section className="relative overflow-hidden bg-section-alt py-14">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-32 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/3" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wider text-primary uppercase">
              Layanan Unggulan - Featured Services
            </div>
            <h2 className="mb-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Solusi Lengkap{" "}
              <span className="text-gradient">AC Bekas Anda</span>
            </h2>
            <p className="text-sm text-slate-500 sm:text-base dark:text-slate-400">
              Dari pembelian hingga penjualan unit berkualitas. Complete
              solution for your used AC needs.
            </p>
          </div>

          <div className="mb-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {[
              {
                icon: "🛒",
                title: "Terima AC Bekas",
                titleEn: "Buy Used AC",
                desc: "Segala kondisi, harga tertinggi.",
              },
              {
                icon: "🚚",
                title: "Bongkar & Angkut",
                titleEn: "Dismantle & Pickup",
                desc: "Datang ke lokasi, bongkar gratis.",
              },
              {
                icon: "📦",
                title: "Beli Borongan",
                titleEn: "Bulk Purchase",
                desc: "Gedung, kantor, hotel, pabrik.",
              },
              {
                icon: "🏪",
                title: "Jual AC Bekas",
                titleEn: "Sell Used AC",
                desc: "Unit berkualitas, harga terjangkau.",
              },
              {
                icon: "♻️",
                title: "Terima Barang Bekas",
                titleEn: "Accept Used Goods",
                desc: "Besi tua, tembaga, kuningan.",
              },
              {
                icon: "💬",
                title: "Konsultasi Gratis",
                titleEn: "Free Consultation",
                desc: "Estimasi harga via WhatsApp.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200/60 bg-white p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg dark:border-white/5 dark:bg-slate-800/40"
              >
                <div className="mb-3 text-3xl">{s.icon}</div>
                <h3 className="text-sm font-bold text-slate-900 sm:text-base dark:text-white">
                  {s.title}
                </h3>
                <p className="text-[11px] font-medium text-primary">
                  {s.titleEn}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/layanan"
              className="gradient-brand inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-shadow hover:shadow-blue-500/40"
            >
              Lihat Semua Layanan →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ MENGAPA MEMILIH KAMI ═══════ */}
      <section className="bg-background py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Mengapa Memilih <span className="text-gradient">Kami?</span>
            </h2>
            <p className="text-sm text-slate-500 sm:text-base dark:text-slate-400">
              Dipercaya ribuan pelanggan di Jabodetabek. Trusted by thousands in
              Greater Jakarta.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {[
              {
                icon: "💰",
                title: "Harga Tertinggi",
                titleEn: "Highest Price",
              },
              {
                icon: "🏠",
                title: "Datang ke Lokasi",
                titleEn: "On-Site Service",
              },
              {
                icon: "🔧",
                title: "Bongkar Gratis",
                titleEn: "Free Dismantling",
              },
              { icon: "💵", title: "Bayar Cash", titleEn: "Cash Payment" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-white p-5 text-center transition-shadow hover:shadow-lg sm:p-6 dark:border-white/5 dark:bg-slate-800/30"
              >
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400">{item.titleEn}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/tentang-kami"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              Tentang Kami Selengkapnya →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ GALERI PREVIEW ═══════ */}
      <section className="bg-section-alt py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
                📸 Galeri - Gallery
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
                Dokumentasi <span className="text-gradient">Transaksi</span>
              </h2>
            </div>
            <Link
              href="/galeri"
              className="hidden items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80 sm:inline-flex"
            >
              Lihat Semua <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
            {galleryPreview.map((img, idx) => (
              <Link
                key={idx}
                href="/galeri"
                className="group relative block aspect-[4/3] overflow-hidden rounded-xl border border-slate-200/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:rounded-2xl dark:border-white/5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/galeri"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
            >
              Lihat Semua Galeri <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ ARTIKEL TERBARU ═══════ */}
      <section className="bg-background py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
                📝 Artikel Terbaru - Latest Articles
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
                Tips & <span className="text-gradient">Informasi</span>
              </h2>
            </div>
            <Link
              href="/artikel"
              className="hidden items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80 sm:inline-flex"
            >
              Semua Artikel <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Desktop: 3 vertical cards */}
          <div className="hidden gap-5 sm:grid sm:grid-cols-3">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/artikel/${article.slug}`}
                className="group block overflow-hidden rounded-2xl border border-slate-200/60 bg-white transition-all duration-300 hover:border-primary/30 hover:shadow-xl dark:border-white/5 dark:bg-slate-800/40"
              >
                <div className="relative h-36 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={article.image}
                    alt={article.title.id}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                      {article.category.id}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime.id}</span>
                  </div>
                  <h3 className="mb-2 line-clamp-2 text-base font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-white">
                    {article.title.id}
                  </h3>
                  <p className="line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
                    {article.description.id}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile: horizontal compact cards */}
          <div className="flex flex-col gap-3 sm:hidden">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/artikel/${article.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200/60 bg-white p-3 transition-all duration-300 hover:border-primary/30 hover:shadow-lg dark:border-white/5 dark:bg-slate-800/40"
              >
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={article.image}
                    alt={article.title.id}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-1 text-[10px] text-slate-400">
                    <Clock className="h-2.5 w-2.5" />
                    <span>{article.readTime.id}</span>
                  </div>
                  <h3 className="line-clamp-2 text-sm font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-white">
                    {article.title.id}
                  </h3>
                </div>
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-300" />
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center sm:hidden">
            <Link
              href="/artikel"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
            >
              Semua Artikel <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="bg-section-alt py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="gradient-brand relative overflow-hidden rounded-3xl p-8 text-center shadow-2xl shadow-blue-600/25 sm:p-12">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
            <div className="relative z-10">
              <h2 className="mb-3 font-display text-2xl font-bold text-white sm:text-3xl">
                Punya AC Bekas? Jual ke Kami!
              </h2>
              <p className="mx-auto mb-6 max-w-xl text-sm text-blue-100/80">
                Hubungi kami sekarang untuk penawaran harga terbaik. Kami siap
                datang ke lokasi Anda!
              </p>
              <p className="mx-auto mb-8 text-xs text-blue-200/50">
                Contact us now for the best price. We serve all Greater Jakarta!
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href="https://wa.me/6281937930111?text=Halo%2C%20saya%20ingin%20jual%20AC%20bekas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-primary shadow-xl transition-colors hover:bg-blue-50 sm:w-auto"
                >
                  💬 Jual AC Bekas Sekarang
                </a>
                <Link
                  href="/kontak"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/25 sm:w-auto"
                >
                  📞 Lihat Kontak Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
