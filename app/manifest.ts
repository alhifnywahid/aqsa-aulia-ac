import type { MetadataRoute } from "next"

/**
 * Web App Manifest for PWA support.
 * Makes the site installable on mobile devices and
 * gives it a native app-like appearance.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UD AQSA AULIA AC - Jual Beli AC Bekas",
    short_name: "UD AQSA AULIA AC",
    description:
      "Spesialis jual beli AC bekas segala kondisi. Terima AC bekas normal, rusak, hingga mati. Siap datang ke lokasi, bongkar gratis, bayar cash langsung.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a1628",
    theme_color: "#1e40af",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
