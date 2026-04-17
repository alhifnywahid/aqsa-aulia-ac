import type { Metadata } from "next"
import { Contact } from "@/components/sections/contact"
import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata({
  title:
    "Hubungi Kami - Kontak UD AQSA AULIA AC | Jual Beli AC Bekas - Contact Us",
  description:
    "Hubungi UD AQSA AULIA AC untuk jual beli AC bekas di Jabodetabek. WhatsApp, email, dan alamat lengkap. Respons cepat, konsultasi gratis! Contact us for used AC trading in Greater Jakarta. Quick response, free consultation!",
  path: "/kontak",
  keywords: [
    "kontak UD AQSA AULIA AC",
    "hubungi jual beli AC bekas",
    "WhatsApp AC bekas Jakarta",
    "alamat UD AQSA AULIA AC",
    "contact used AC Jakarta",
    "WhatsApp used AC dealer",
  ],
})

function KontakBreadcrumbJsonLd() {
  const data = breadcrumbJsonLd([
    { name: "Beranda", url: "https://udaqsaauliaac.com" },
    { name: "Kontak Kami", url: "https://udaqsaauliaac.com/kontak" },
  ])
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function ContactPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontak UD AQSA AULIA AC - Contact Us",
    description:
      "Hubungi UD AQSA AULIA AC untuk jual beli AC bekas Jabodetabek. Contact us for used AC trading in Greater Jakarta.",
    url: "https://udaqsaauliaac.com/kontak",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "UD. AQSA AULIA AC",
      telephone: "+62-819-3793-0111",
      email: "admin@udaqsaauliaac.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jabodetabek, Indonesia",
        addressLocality: "Jakarta",
        addressRegion: "DKI Jakarta",
        addressCountry: "ID",
      },
      openingHours: "Mo-Su 08:00-22:00",
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function KontakPage() {
  return (
    <>
      <KontakBreadcrumbJsonLd />
      <ContactPageJsonLd />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wider text-primary uppercase">
            Kontak Kami - Contact Us
          </div>
          <h1 className="mb-6 font-display text-4xl leading-tight font-extrabold text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Siap Membeli <span className="text-gradient">AC Bekas Anda</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Punya AC bekas yang ingin dijual? Hubungi kami sekarang untuk
            penawaran harga terbaik. Kami siap datang ke lokasi Anda!
          </p>
          <p className="mt-3 text-sm text-slate-400 italic dark:text-slate-500">
            Have used AC to sell? Contact us now for the best price. We&apos;re
            ready to come to your location!
          </p>
        </div>
      </section>

      <Contact />
    </>
  )
}
