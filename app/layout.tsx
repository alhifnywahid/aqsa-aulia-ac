import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { LanguageProvider } from "@/lib/i18n/context"
import { cn } from "@/lib/utils"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontDisplay = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Aqsa Aulia AC - Spesialis Service, Pasang & Jual Beli AC Terpercaya",
  description:
    "Jasa service AC, pemasangan AC baru, bongkar pasang, dan jual beli AC terpercaya. Teknisi profesional, bergaransi, harga transparan. Hubungi sekarang!",
  keywords: [
    "service AC",
    "pasang AC",
    "jual beli AC",
    "bongkar pasang AC",
    "cuci AC",
    "isi freon",
    "Aqsa Aulia AC",
    "teknisi AC",
  ],
  openGraph: {
    title: "Aqsa Aulia AC - Spesialis Service & Pasang AC",
    description:
      "Solusi AC terpercaya untuk rumah & bisnis. Teknisi berpengalaman, bergaransi, harga bersaing.",
    type: "website",
    locale: "id_ID",
  },
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
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
