import type { Metadata } from "next"
import { Services } from "@/components/sections/services"
import { generatePageMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo"
import Link from "next/link"

export const metadata: Metadata = generatePageMetadata({
  title:
    "Layanan Jual Beli AC Bekas | Terima AC Bekas Segala Kondisi - Services",
  description:
    "Layanan lengkap jual beli AC bekas: terima AC bekas segala kondisi, bongkar & angkut gratis, beli borongan, jual AC bekas berkualitas, terima barang bekas, konsultasi gratis. Complete used AC services in Greater Jakarta.",
  path: "/layanan",
  keywords: [
    "layanan jual beli AC bekas",
    "terima AC bekas segala kondisi",
    "bongkar AC gratis",
    "beli AC borongan",
    "jual AC bekas berkualitas",
    "used AC services Jakarta",
    "AC dismantling service",
    "bulk AC purchase",
  ],
})

function ServiceBreadcrumbJsonLd() {
  const data = breadcrumbJsonLd([
    { name: "Beranda", url: "https://udaqsaauliaac.com" },
    { name: "Layanan", url: "https://udaqsaauliaac.com/layanan" },
  ])
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function ServiceFaqJsonLd() {
  const data = faqJsonLd([
    {
      question: "Apakah UD AQSA AULIA AC menerima AC bekas yang sudah rusak?",
      answer:
        "Ya, kami menerima AC bekas dalam segala kondisi - normal, rusak, bahkan mati sekalipun. Kami tetap memberikan harga penawaran terbaik.",
    },
    {
      question: "Does UD AQSA AULIA AC accept broken used AC?",
      answer:
        "Yes, we accept used AC in any condition - working, broken, even dead. We still offer the best price.",
    },
    {
      question: "Berapa harga beli AC bekas di UD AQSA AULIA AC?",
      answer:
        "Harga beli tergantung kondisi, merk, kapasitas, dan kelengkapan unit AC. Hubungi kami via WhatsApp untuk estimasi harga gratis.",
    },
    {
      question: "Apakah ada biaya bongkar AC?",
      answer:
        "Tidak, kami menyediakan jasa bongkar AC secara GRATIS untuk setiap transaksi pembelian AC bekas.",
    },
    {
      question: "Is there a dismantling fee for used AC?",
      answer:
        "No, we provide FREE AC dismantling service for every used AC purchase transaction.",
    },
    {
      question: "Area mana saja yang dilayani UD AQSA AULIA AC?",
      answer:
        "Kami melayani seluruh area Jabodetabek - Jakarta, Bogor, Depok, Tangerang, dan Bekasi.",
    },
    {
      question: "What areas does UD AQSA AULIA AC serve?",
      answer:
        "We serve the entire Greater Jakarta area - Jakarta, Bogor, Depok, Tangerang, and Bekasi.",
    },
    {
      question: "Bagaimana cara menjual AC bekas ke UD AQSA AULIA AC?",
      answer:
        "Cukup hubungi kami via WhatsApp, kirimkan foto AC bekas Anda, kami berikan estimasi harga, lalu tim kami datang ke lokasi untuk survei, bongkar, dan bayar cash langsung.",
    },
  ])
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function LayananPage() {
  return (
    <>
      <ServiceBreadcrumbJsonLd />
      <ServiceFaqJsonLd />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wider text-primary uppercase">
            Layanan Kami - Our Services
          </div>
          <h1 className="mb-6 font-display text-4xl leading-tight font-extrabold text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Solusi Lengkap <span className="text-gradient">AC Bekas Anda</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Dari pembelian AC bekas, pembongkaran di lokasi, hingga penjualan
            unit berkualitas - semua kami tangani secara profesional.
          </p>
          <p className="mt-3 text-sm text-slate-400 italic dark:text-slate-500">
            From purchasing used AC, on-site dismantling, to selling quality
            units - we handle it all professionally.
          </p>
        </div>
      </section>

      <Services />

      {/* FAQ Section */}
      <section className="bg-background py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              Pertanyaan <span className="text-gradient">Umum (FAQ)</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Frequently Asked Questions - Pertanyaan yang sering ditanyakan
              pelanggan kami.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Apakah UD AQSA AULIA AC menerima AC bekas yang sudah rusak?",
                qEn: "Does UD AQSA AULIA AC accept broken used AC?",
                a: "Ya, kami menerima AC bekas dalam segala kondisi - normal, rusak, bahkan mati sekalipun. Kami tetap memberikan harga penawaran terbaik.",
                aEn: "Yes, we accept used AC in any condition - working, broken, even dead. We still offer the best price.",
              },
              {
                q: "Berapa harga beli AC bekas?",
                qEn: "What is the purchase price of used AC?",
                a: "Harga beli tergantung kondisi, merk, kapasitas, dan kelengkapan unit AC. Hubungi kami via WhatsApp untuk estimasi harga gratis.",
                aEn: "Price depends on condition, brand, capacity, and completeness. Contact us via WhatsApp for a free estimate.",
              },
              {
                q: "Apakah ada biaya bongkar AC?",
                qEn: "Is there a dismantling fee?",
                a: "Tidak! Kami menyediakan jasa bongkar AC secara GRATIS untuk setiap transaksi pembelian AC bekas.",
                aEn: "No! We provide FREE AC dismantling service for every used AC purchase transaction.",
              },
              {
                q: "Area mana saja yang dilayani?",
                qEn: "What areas do you serve?",
                a: "Kami melayani seluruh area Jabodetabek - Jakarta, Bogor, Depok, Tangerang, dan Bekasi.",
                aEn: "We serve the entire Greater Jakarta area - Jakarta, Bogor, Depok, Tangerang, and Bekasi.",
              },
              {
                q: "Bagaimana cara menjual AC bekas ke UD AQSA AULIA AC?",
                qEn: "How do I sell used AC to you?",
                a: "Cukup hubungi kami via WhatsApp, kirimkan foto AC bekas Anda, kami berikan estimasi harga, lalu tim kami datang ke lokasi untuk survei, bongkar, dan bayar cash langsung.",
                aEn: "Simply contact us via WhatsApp, send photos, we give a price estimate, then our team comes to survey, dismantle, and pay cash.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/5 dark:bg-slate-800/30"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {faq.q}
                    </span>
                    <span className="mt-0.5 block text-xs text-slate-400 dark:text-slate-500">
                      {faq.qEn}
                    </span>
                  </div>
                  <span className="ml-4 shrink-0 text-lg text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-slate-100 px-6 pt-4 pb-5 dark:border-white/5">
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {faq.a}
                  </p>
                  <p className="mt-2 text-xs text-slate-400 italic dark:text-slate-500">
                    {faq.aEn}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section-alt py-10">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="gradient-brand relative overflow-hidden rounded-3xl p-10 shadow-2xl shadow-blue-600/25 sm:p-14">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
            <div className="relative z-10">
              <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                Butuh Layanan Kami? Hubungi Sekarang!
              </h2>
              <p className="mb-6 text-sm text-blue-100/80">
                Need our services? Contact us now! - Gratis konsultasi dan
                estimasi harga.
              </p>
              <a
                href="https://wa.me/6281937930111?text=Halo%2C%20saya%20ingin%20menggunakan%20layanan%20AC%20bekas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-primary shadow-xl transition-colors hover:bg-blue-50"
              >
                💬 Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
