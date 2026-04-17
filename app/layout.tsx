import type { Metadata } from "next"
import Script from "next/script"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ClientProviders } from "@/components/providers/client-providers"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/constants"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontDisplay = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
})

const siteUrl = "https://udaqsaauliaac.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // Core
  title: {
    default: "UD AQSA AULIA AC - Jual Beli AC Bekas Terpercaya | Terima AC Bekas Segala Kondisi",
    template: "%s | UD AQSA AULIA AC",
  },
  description:
    "Spesialis jual beli AC bekas Jabodetabek. Terima AC bekas segala kondisi, siap datang ke lokasi, bongkar gratis, bayar cash langsung. Harga tertinggi & terpercaya!",
  keywords: [
    "jual beli AC bekas",
    "terima AC bekas",
    "beli AC bekas",
    "jual AC bekas",
    "AC bekas Jakarta",
    "AC bekas Bekasi",
    "AC bekas Depok",
    "AC bekas Bogor",
    "AC bekas Tangerang",
    "beli AC bekas borongan",
    "terima AC bekas kantor",
    "jual AC bekas harga tinggi",
    "bongkar AC bekas",
    "AC second murah",
    "terima AC bekas mati",
    "terima AC bekas rusak",
    "UD AQSA AULIA AC",
    "used AC Jakarta",
    "buy used AC Indonesia",
    "sell used AC Jakarta",
    "second hand air conditioner",
  ],

  // Crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },

  // OpenGraph
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: siteConfig.name,
    title: "UD AQSA AULIA AC - Spesialis Jual Beli AC Bekas Terpercaya",
    description:
      "Terima AC bekas segala kondisi. Siap datang ke lokasi, bongkar gratis, bayar cash langsung. Melayani Jabodetabek.",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "UD AQSA AULIA AC - Jual Beli AC Bekas Terpercaya",
    description:
      "Spesialis terima & jual beli AC bekas segala kondisi. Harga tertinggi, bongkar gratis, bayar cash langsung.",
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

/**
 * JSON-LD structured data for LocalBusiness schema.
 * Optimized for "jual beli AC bekas" keyword targeting.
 */
function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    telephone: siteConfig.whatsappDisplay,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID",
    },
    areaServed: [
      { "@type": "City", name: "Jakarta" },
      { "@type": "City", name: "Bogor" },
      { "@type": "City", name: "Depok" },
      { "@type": "City", name: "Tangerang" },
      { "@type": "City", name: "Bekasi" },
    ],
    openingHours: "Mo-Su 08:00-22:00",
    priceRange: "$$",
    image: `${siteUrl}/opengraph-image`,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ].filter(Boolean),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3000",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Jual Beli AC Bekas",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Terima AC Bekas Segala Kondisi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bongkar & Angkut AC ke Lokasi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beli AC Bekas Borongan & Lelangan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jual AC Bekas Berkualitas" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Terima Barang Bekas (Besi, Tembaga)" } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

/**
 * WebSite JSON-LD for sitelinks search box.
 */
function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    inLanguage: ["id", "en"],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, fontDisplay.variable)}
    >
      <head>
        <JsonLd />
        <WebSiteJsonLd />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E2J1SPZ8EM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-E2J1SPZ8EM');
        `}
      </Script>
      <body>
        <ClientProviders>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
