import c from "@/site.config"

// Semua data bisnis diambil dari site.config.ts
// Edit file site.config.ts untuk mengubah informasi bisnis.
export const siteConfig = {
  name: c.businessName,
  tagline: c.tagline,
  description: c.description,
  whatsapp: c.whatsapp,
  whatsappDisplay: c.whatsappDisplay,
  email: c.email,
  address: c.address,
  operationalHours: c.operationalHours,
  social: {
    instagram: c.instagram,
    facebook: c.facebook,
  },
}

export const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Layanan", href: "#layanan" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Harga", href: "#harga" },
  { label: "Galeri", href: "#galeri" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
]

export const services = [
  {
    id: "service",
    icon: "Wrench",
    title: "Service AC",
    description:
      "Cuci bersih, isi freon, perbaikan kebocoran, dan tune-up AC agar performa optimal kembali.",
    features: [
      "Cuci & bersih filter",
      "Isi ulang freon",
      "Cek kebocoran",
      "Tune-up lengkap",
    ],
    color: "blue",
  },
  {
    id: "install",
    icon: "Settings",
    title: "Pasang AC Baru",
    description:
      "Instalasi AC baru dengan pemasangan rapih, kabel terorganisir, dan uji coba menyeluruh.",
    features: [
      "Survey lokasi gratis",
      "Instalasi profesional",
      "Kabel rapi & aman",
      "Uji coba & garansi",
    ],
    color: "cyan",
  },
  {
    id: "relocate",
    icon: "MoveRight",
    title: "Bongkar Pasang",
    description:
      "Pindahkan AC Anda ke lokasi baru dengan aman tanpa merusak unit maupun dinding.",
    features: [
      "Bongkar hati-hati",
      "Pindah lokasi baru",
      "Pasang ulang rapi",
      "Uji fungsi ulang",
    ],
    color: "indigo",
  },
  {
    id: "buy-sell",
    icon: "ShoppingCart",
    title: "Jual Beli AC",
    description:
      "Tersedia AC baru dan unit bekas berkualitas. Kami juga menerima AC bekas dengan harga terbaik.",
    features: [
      "AC baru & second",
      "Garansi unit",
      "Harga nego",
      "Antar & pasang",
    ],
    color: "sky",
  },
  {
    id: "emergency",
    icon: "Zap",
    title: "Darurat AC",
    description:
      "AC mendadak mati atau bocor? Tim kami siap melayani kunjungan darurat dengan respons cepat.",
    features: [
      "Respons cepat",
      "Diagnosa akurat",
      "Perbaikan hari ini",
      "Tersedia 7 hari",
    ],
    color: "blue",
  },
  {
    id: "maintenance",
    icon: "CalendarCheck",
    title: "Maintenance Rutin",
    description:
      "Paket perawatan berkala untuk menjaga AC tetap bersih, efisien, dan tahan lama sepanjang tahun.",
    features: [
      "Jadwal teratur",
      "Cuci & cek rutin",
      "Laporan kondisi",
      "Harga paket hemat",
    ],
    color: "cyan",
  },
]

export const whyUs = [
  {
    icon: "BadgeCheck",
    title: "Teknisi Berpengalaman",
    description:
      "Tim kami terdiri dari teknisi terlatih dan berpengalaman lebih dari 5 tahun di bidang AC.",
  },
  {
    icon: "Shield",
    title: "Bergaransi Resmi",
    description:
      "Setiap pekerjaan kami berikan garansi, sehingga Anda tenang dan tidak perlu khawatir.",
  },
  {
    icon: "Banknote",
    title: "Harga Transparan",
    description:
      "Tidak ada biaya tersembunyi. Estimasi harga diberikan di awal sebelum pekerjaan dimulai.",
  },
  {
    icon: "Clock",
    title: "Tepat Waktu",
    description:
      "Kami menghargai waktu Anda. Teknisi hadir sesuai jadwal yang telah disepakati.",
  },
  {
    icon: "Star",
    title: "Kepuasan Pelanggan",
    description:
      "Ribuan pelanggan telah mempercayakan kebutuhan AC mereka kepada kami.",
  },
  {
    icon: "Headphones",
    title: "Konsultasi Gratis",
    description:
      "Hubungi kami kapan saja untuk konsultasi gratis seputar kebutuhan AC Anda.",
  },
]

export const pricingPackages = [
  {
    name: "Cuci AC",
    price: "75.000",
    unit: "/ unit",
    description: "Cuci filter dan bersihkan unit AC Anda",
    features: [
      "Cuci filter indoor",
      "Bersihkan evaporator",
      "Cek kondisi freon",
      "Test fungsi AC",
    ],
    popular: false,
    color: "default",
  },
  {
    name: "Service Lengkap",
    price: "150.000",
    unit: "/ unit",
    description: "Perawatan menyeluruh untuk AC optimal",
    features: [
      "Cuci indoor & outdoor",
      "Isi freon R32/R410",
      "Cek & perbaiki kebocoran",
      "Bersihkan kapasitor",
      "Garansi 30 hari",
    ],
    popular: true,
    color: "primary",
  },
  {
    name: "Pasang Baru",
    price: "300.000",
    unit: "/ unit",
    description: "Instalasi AC baru termasuk material standar",
    features: [
      "Pasang bracket & unit",
      "Pipa 2 meter standar",
      "Kabel power & instalasi",
      "Braket outdoor",
      "Garansi 90 hari",
    ],
    popular: false,
    color: "default",
  },
]

export const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pemilik Rumah",
    location: "Jakarta Selatan",
    rating: 5,
    comment:
      "Teknisi datang tepat waktu dan sangat profesional. AC saya yang sudah lama tidak dingin sekarang kembali seperti baru. Harga juga sesuai dengan yang dijanjikan, tidak ada tambahan biaya!",
    avatar: "BS",
  },
  {
    name: "Dewi Rahayu",
    role: "Manajer Toko",
    location: "Bekasi",
    rating: 5,
    comment:
      "Kami service 6 unit AC toko sekaligus. Hasilnya memuaskan, pekerjaan cepat dan bersih. Pasti akan gunakan jasa Aqsa Aulia AC lagi untuk perawatan rutin.",
    avatar: "DR",
  },
  {
    name: "Rendi Pratama",
    role: "Kontraktor",
    location: "Depok",
    rating: 5,
    comment:
      "Sudah berkali-kali menggunakan jasa pasang AC dari Aqsa Aulia untuk proyek saya. Kerjanya rapih, cepat, dan harga bersaing. Sangat direkomendasikan!",
    avatar: "RP",
  },
  {
    name: "Siti Maryam",
    role: "Ibu Rumah Tangga",
    location: "Bogor",
    rating: 5,
    comment:
      "AC kamar anak tiba-tiba bocor malam-malam. Langsung hubungi Aqsa Aulia AC dan teknisi datang cepat. Masalah selesai dalam 1 jam. Luar biasa responsif!",
    avatar: "SM",
  },
  {
    name: "Andi Wijaya",
    role: "Pemilik Kafe",
    location: "Tangerang",
    rating: 5,
    comment:
      "Butuh pasang 4 unit AC di kafe baru saya. Tim Aqsa Aulia datang survey dulu, kasih rekomendasi terbaik, dan hasilnya sempurna. Pelanggan kafe jadi nyaman!",
    avatar: "AW",
  },
  {
    name: "Fitri Handayani",
    role: "Pegawai Kantoran",
    location: "Jakarta Timur",
    rating: 5,
    comment:
      "Harga service-nya terjangkau dan teknisinya ramah serta bisa menjelaskan masalah AC dengan bahasa yang mudah dimengerti. Puas dengan hasilnya!",
    avatar: "FH",
  },
]

export const stats = [
  { value: c.stats.customers, label: "Pelanggan Puas" },
  { value: c.stats.experience, label: "Tahun Pengalaman" },
  { value: c.stats.units, label: "Unit AC Ditangani" },
  { value: c.stats.satisfaction, label: "Tingkat Kepuasan" },
]
