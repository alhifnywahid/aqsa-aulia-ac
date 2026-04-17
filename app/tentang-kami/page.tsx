import type { Metadata } from "next"
import { WhyUs } from "@/components/sections/why-us"
import { Testimonials } from "@/components/sections/testimonials"
import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title:
    "Tentang Kami - Profil UD AQSA AULIA AC | Spesialis Jual Beli AC Bekas Terpercaya",
  description:
    "Kenali UD AQSA AULIA AC - spesialis jual beli AC bekas terpercaya di Jabodetabek dengan pengalaman 7+ tahun dan 3000+ transaksi sukses. About us - trusted used AC specialist in Greater Jakarta. Harga tertinggi, bongkar gratis, bayar cash langsung.",
  path: "/tentang-kami",
  keywords: [
    "tentang UD AQSA AULIA AC",
    "profil perusahaan AC bekas",
    "jual beli AC bekas terpercaya",
    "about us used AC company Jakarta",
    "AC bekas Jabodetabek terpercaya",
    "pengalaman jual beli AC bekas",
  ],
})

function AboutBreadcrumbJsonLd() {
  const data = breadcrumbJsonLd([
    { name: "Beranda", url: "https://udaqsaauliaac.com" },
    { name: "Tentang Kami", url: "https://udaqsaauliaac.com/tentang-kami" },
  ])
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UD AQSA AULIA AC",
    url: "https://udaqsaauliaac.com",
    logo: "https://udaqsaauliaac.com/images/logo.png",
    description:
      "Spesialis jual beli AC bekas terpercaya di Jabodetabek. Specialist in buying and selling used AC in Greater Jakarta.",
    foundingDate: "2018",
    areaServed: [
      { "@type": "City", name: "Jakarta" },
      { "@type": "City", name: "Bogor" },
      { "@type": "City", name: "Depok" },
      { "@type": "City", name: "Tangerang" },
      { "@type": "City", name: "Bekasi" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-819-3793-0111",
      contactType: "customer service",
      availableLanguage: ["Indonesian", "English"],
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function AboutPage() {
  return (
    <>
      <AboutBreadcrumbJsonLd />
      <OrganizationJsonLd />

      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/3 h-60 w-60 rounded-full bg-cyan-400/6 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wider text-primary uppercase">
            Tentang Kami - About Us
          </div>
          <h1 className="mb-6 font-display text-4xl leading-tight font-extrabold text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Profil <span className="text-gradient">UD AQSA AULIA AC</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Spesialis jual beli AC bekas terpercaya di Jabodetabek dengan
            pengalaman lebih dari 7 tahun dan ribuan transaksi sukses.
          </p>
          <p className="mt-3 text-sm text-slate-400 italic dark:text-slate-500">
            Trusted used AC buying and selling specialist in Greater Jakarta
            with over 7 years of experience and thousands of successful
            transactions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              {
                value: "3000+",
                label: "AC Sudah Dibeli",
                labelEn: "AC Units Purchased",
              },
              {
                value: "7+",
                label: "Tahun Pengalaman",
                labelEn: "Years Experience",
              },
              {
                value: "15K+",
                label: "Transaksi Sukses",
                labelEn: "Successful Deals",
              },
              {
                value: "99%",
                label: "Kepuasan Pelanggan",
                labelEn: "Satisfaction Rate",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card-light rounded-2xl p-5 text-center shadow-md"
              >
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500">
                  {stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-section-alt py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Company Story */}
            <div>
              <h2 className="mb-6 font-display text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
                Tentang Perusahaan Kami
              </h2>
              <div className="prose prose-slate dark:prose-invert">
                <p className="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
                  <strong>UD AQSA AULIA AC</strong> adalah perusahaan yang
                  bergerak di bidang jual beli AC bekas di wilayah Jabodetabek.
                  Dengan pengalaman lebih dari 7 tahun dan ribuan transaksi
                  sukses, kami berkomitmen memberikan penawaran harga terbaik
                  dan pelayanan profesional.
                </p>
                <p className="mb-6 text-sm text-slate-400 italic dark:text-slate-500">
                  UD AQSA AULIA AC is a company engaged in buying and selling
                  used AC units throughout the Greater Jakarta area. With over 7
                  years of experience and thousands of successful transactions,
                  we are committed to offering the best prices and professional
                  service.
                </p>
                <p className="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
                  Kami melayani pembelian AC bekas dalam segala kondisi - mulai
                  dari yang masih berfungsi normal, rusak ringan, hingga mati
                  total. Semua merk dan tipe AC kami terima, baik satuan maupun
                  borongan.
                </p>
                <p className="text-sm text-slate-400 italic dark:text-slate-500">
                  We accept used AC in any condition - from fully functional,
                  slightly damaged, to completely dead units. We accept all
                  brands and types, individually or in bulk.
                </p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 dark:border-white/5 dark:bg-slate-800/30">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Visi Kami - Our Vision
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Menjadi perusahaan jual beli AC bekas terpercaya dan terbesar
                  di Jabodetabek, dengan mengutamakan kepuasan pelanggan dan
                  harga terbaik.
                </p>
                <p className="mt-2 text-xs text-slate-400 italic dark:text-slate-500">
                  To become the most trusted and largest used AC trading company
                  in Greater Jakarta, prioritizing customer satisfaction and the
                  best prices.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-6 dark:border-white/5 dark:bg-slate-800/30">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Misi Kami - Our Mission
                </h3>
                <ul className="space-y-2">
                  {[
                    {
                      id: "Memberikan penawaran harga tertinggi dan kompetitif",
                      en: "Offer the highest competitive prices",
                    },
                    {
                      id: "Layanan profesional dengan tim berpengalaman",
                      en: "Professional service with experienced team",
                    },
                    {
                      id: "Memudahkan proses dengan layanan datang ke lokasi",
                      en: "Simplify with on-site service",
                    },
                    {
                      id: "Transparansi dan kejujuran dalam setiap transaksi",
                      en: "Transparency and honesty in every deal",
                    },
                    {
                      id: "Berkontribusi pada pelestarian lingkungan",
                      en: "Contribute to environmental preservation",
                    },
                  ].map((item) => (
                    <li key={item.id} className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary">✓</span>
                      <div>
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          {item.id}
                        </span>
                        <span className="ml-1 text-xs text-slate-400 dark:text-slate-500">
                          - {item.en}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Nilai-Nilai <span className="text-gradient">Kami</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Our core values that drive every transaction - Nilai inti yang
              mendorong setiap transaksi kami.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: "🤝",
                title: "Kejujuran",
                titleEn: "Honesty",
                desc: "Transparan dalam setiap penawaran harga.",
                descEn: "Transparent in every price offer.",
              },
              {
                icon: "⭐",
                title: "Profesionalisme",
                titleEn: "Professionalism",
                desc: "Tim terlatih dan berpengalaman.",
                descEn: "Trained and experienced team.",
              },
              {
                icon: "❤️",
                title: "Kepuasan Pelanggan",
                titleEn: "Customer Satisfaction",
                desc: "Prioritas utama di setiap layanan.",
                descEn: "Top priority in all services.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-100 bg-white p-8 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-xl dark:border-white/5 dark:bg-slate-800/30"
              >
                <div className="mb-4 text-4xl">{value.icon}</div>
                <h3 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="mb-3 text-xs font-medium text-primary">
                  {value.titleEn}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {value.desc}
                </p>
                <p className="mt-1 text-xs text-slate-400 italic dark:text-slate-500">
                  {value.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <Testimonials />
    </>
  )
}
