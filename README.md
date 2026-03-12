<div align="center">

<img src="logo.png" alt="Aqsa Aulia AC" width="120" />

# Aqsa Aulia AC

**Website landing page modern untuk bisnis jasa Air Conditioner (AC) - service, pasang, bongkar pasang, dan jual beli.**

![Version](https://img.shields.io/badge/Version-0.0.1-blueviolet)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

[Fitur](#fitur-utama) - [Tech Stack](#tech-stack) - [Instalasi](#instalasi) - [Menjalankan Lokal](#menjalankan-lokal) - [Struktur Project](#struktur-project) - [Lisensi](#lisensi)

**Bahasa Indonesia** | [English](README.en.md)

</div>

---

## Tentang Project

Aqsa Aulia AC adalah website landing page profesional yang dirancang untuk bisnis jasa AC. Website ini menampilkan semua layanan yang ditawarkan, keunggulan bisnis, galeri portofolio, testimoni pelanggan, dan informasi kontak lengkap - semua dalam satu halaman yang elegan dan responsif.

Website dibangun dengan tampilan premium bertema biru gelap, animasi halus, dan desain yang dioptimalkan untuk konversi (mendorong pengunjung menghubungi via WhatsApp).

## Fitur Utama

- **Hero Section** - Tampilan full-screen dengan gradient biru, statistik bisnis, dan tombol CTA WhatsApp
- **Layanan** - 6 kartu layanan: Service AC, Pasang Baru, Bongkar Pasang, Jual Beli, Darurat AC, Maintenance Rutin
- **Keunggulan** - Poin nilai tambah bisnis beserta banner CTA
- **Galeri** - Grid portofolio siap diisi foto hasil kerja nyata
- **Testimoni** - Review pelanggan dengan rating bintang dan ringkasan kepuasan
- **Kontak** - Informasi kontak lengkap dan tombol WhatsApp langsung
- **Navbar Responsif** - Sticky navbar dengan active section tracking dan menu mobile
- **Footer Lengkap** - Links navigasi, daftar layanan, dan info kontak
- **SEO-Ready** - Metadata lengkap dalam Bahasa Indonesia
- **Dark Mode** - Dukungan mode gelap bawaan
- **Fully Responsive** - Tampil optimal di semua ukuran layar

## Tech Stack

| Teknologi                                                 | Versi | Keterangan                        |
| --------------------------------------------------------- | ----- | --------------------------------- |
| [Next.js](https://nextjs.org)                             | 16    | Framework React dengan App Router |
| [React](https://react.dev)                                | 19    | Library UI                        |
| [TypeScript](https://typescriptlang.org)                  | 5     | Type safety                       |
| [Tailwind CSS](https://tailwindcss.com)                   | 4     | Styling utility-first             |
| [shadcn/ui](https://ui.shadcn.com)                        | 4     | Komponen UI                       |
| [Lucide React](https://lucide.dev)                        | -     | Ikon                              |
| [next-themes](https://github.com/pacocoursey/next-themes) | -     | Dark mode                         |

## Persyaratan

- Node.js `>= 18.x`
- npm `>= 9.x`

## Instalasi

```bash
# Clone repository
git clone https://github.com/username/aqsa-aulia-ac.git
cd aqsa-aulia-ac

# Install dependensi
npm install
```

## Menjalankan Lokal

```bash
# Mode development (dengan Turbopack)
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

Perintah lainnya:

```bash
npm run build      # Build untuk production
npm run start      # Jalankan versi production
npm run lint       # Cek lint
npm run format     # Format kode dengan Prettier
npm run typecheck  # Cek TypeScript
```

## Konfigurasi

Semua data website (nomor WhatsApp, alamat, layanan, harga, testimoni, dll.) tersentralisasi di satu file:

```
lib/constants.ts
```

Tidak memerlukan file `.env`. Cukup edit `lib/constants.ts` untuk menyesuaikan konten:

```ts
export const siteConfig = {
  name: "Aqsa Aulia AC",
  whatsapp: "6281234567890",   // Ganti dengan nomor WA aktif
  email: "aqsaauliaac@gmail.com",
  address: "Jl. Raya No. 123, Kota Anda",
  // ...
}
```

## Struktur Project

```
aqsa-aulia-ac/
├── app/
│   ├── globals.css           # Tema warna biru + utilitas kustom
│   ├── layout.tsx            # Root layout & metadata SEO
│   └── page.tsx              # Halaman utama (assembles semua section)
├── components/
│   ├── layout/
│   │   ├── navbar.tsx        # Sticky navbar + mobile menu
│   │   └── footer.tsx        # Footer
│   ├── sections/
│   │   ├── hero.tsx          # Hero section
│   │   ├── services.tsx      # Section layanan
│   │   ├── why-us.tsx        # Section keunggulan
│   │   ├── pricing.tsx       # Section harga (nonaktif sementara)
│   │   ├── gallery.tsx       # Galeri portofolio
│   │   ├── testimonials.tsx  # Testimoni pelanggan
│   │   └── contact.tsx       # Kontak & WhatsApp CTA
│   └── ui/
│       └── button.tsx        # Komponen Button (shadcn)
├── lib/
│   ├── constants.ts          # Semua data & konfigurasi konten
│   └── utils.ts              # Utilitas (cn)
├── public/                   # Aset statis (foto, favicon)
├── logo.png                  # Logo project
└── LICENSE
```

## Catatan

- Section **Harga** (`pricing.tsx`) saat ini dinonaktifkan. Aktifkan kembali dengan membuka komentar di `app/page.tsx`.
- Foto di section **Galeri** masih placeholder. Tambahkan foto nyata dengan mengganti konten di `components/sections/gallery.tsx` menggunakan komponen `<Image>` dari Next.js.
- Nomor WhatsApp, alamat, dan data lainnya menggunakan data contoh. Ganti di `lib/constants.ts` sebelum deploy.

---

## Dukungan

Jika project ini bermanfaat, kamu bisa mendukung pengembangan lebih lanjut:

<a href="https://trakteer.id/alhifnywahid" target="_blank"><img src="https://cdn.trakteer.id/images/embed/trbtn-red-1.png" height="40" alt="Trakteer" /></a>&nbsp;<a href="https://saweria.co/alhifnywahid" target="_blank"><img src="https://img.shields.io/badge/-Dukung%20di%20Saweria-FF6600?style=for-the-badge" height="40" alt="Saweria" /></a>

## Komunitas

Gabung dan diskusi bersama pengguna lain:

<a href="https://t.me/gopretstudio" target="_blank"><img src="https://img.shields.io/badge/-@gopretstudio-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" height="40" alt="Telegram" /></a>

## Lisensi

[MIT](LICENSE) - bebas digunakan dan dimodifikasi dengan menyertakan atribusi.
