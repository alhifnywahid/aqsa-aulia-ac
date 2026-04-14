export type Locale = "id" | "en"

export const translations = {
  // Navbar
  nav: {
    home: { id: "Beranda", en: "Home" },
    services: { id: "Layanan", en: "Services" },
    whyUs: { id: "Keunggulan", en: "Why Us" },
    pricing: { id: "Harga", en: "Pricing" },
    gallery: { id: "Galeri", en: "Gallery" },
    testimonials: { id: "Testimoni", en: "Testimonials" },
    contact: { id: "Kontak", en: "Contact" },
    callUs: { id: "Hubungi Kami", en: "Contact Us" },
    callViaWa: { id: "Hubungi via WhatsApp", en: "Contact via WhatsApp" },
  },

  // Hero
  hero: {
    serving: { id: "Melayani", en: "Serving" },
    serviceArea: { id: "Seluruh Area Kota", en: "All City Areas" },
    open6Days: { id: "Buka 6 Hari Seminggu", en: "Open 6 Days a Week" },
    headline1: { id: "Spesialis AC", en: "AC Specialist" },
    headline2: { id: "Terpercaya", en: "Trusted" },
    headline3: { id: "& Profesional", en: "& Professional" },
    description: {
      id: "Jasa service, pemasangan, bongkar pasang, dan jual beli AC terpercaya. Melayani dengan profesional, bergaransi, dan harga bersaing.",
      en: "Trusted AC service, installation, relocation, and buy-sell. Serving professionally with warranty and competitive pricing.",
    },
    ctaWhatsapp: { id: "Chat WhatsApp Sekarang", en: "Chat WhatsApp Now" },
    ctaServices: { id: "Lihat Layanan", en: "View Services" },
    badgeWarranty: { id: "Bergaransi Resmi", en: "Official Warranty" },
    badgeWarrantyDesc: { id: "Setiap pekerjaan", en: "Every job" },
    badgeRating: { id: "Rating 5.0 ⭐", en: "Rating 5.0 ⭐" },
    badgeRatingDesc: { id: "2000+ pelanggan", en: "2000+ customers" },
    scroll: { id: "Scroll", en: "Scroll" },
  },

  // Stats
  stats: {
    customers: { id: "Pelanggan Puas", en: "Happy Customers" },
    experience: { id: "Tahun Pengalaman", en: "Years Experience" },
    units: { id: "Unit AC Ditangani", en: "AC Units Handled" },
    satisfaction: { id: "Tingkat Kepuasan", en: "Satisfaction Rate" },
  },

  // Services Section
  services: {
    badge: { id: "Layanan Kami", en: "Our Services" },
    title1: { id: "Semua Kebutuhan AC", en: "All AC Needs" },
    title2: { id: "dalam Satu Tempat", en: "in One Place" },
    description: {
      id: "Dari pemasangan, perawatan, hingga perbaikan - kami hadir sebagai solusi lengkap untuk semua kebutuhan AC Anda.",
      en: "From installation, maintenance, to repairs - we are your complete solution for all AC needs.",
    },
    // Service items
    serviceAC: { id: "Service AC", en: "AC Service" },
    serviceACDesc: {
      id: "Cuci bersih, isi freon, perbaikan kebocoran, dan tune-up AC agar performa optimal kembali.",
      en: "Clean wash, freon refill, leak repair, and AC tune-up for optimal performance.",
    },
    serviceACFeatures: {
      id: ["Cuci & bersih filter", "Isi ulang freon", "Cek kebocoran", "Tune-up lengkap"],
      en: ["Filter cleaning", "Freon refill", "Leak check", "Complete tune-up"],
    },
    installAC: { id: "Pasang AC Baru", en: "New AC Installation" },
    installACDesc: {
      id: "Instalasi AC baru dengan pemasangan rapih, kabel terorganisir, dan uji coba menyeluruh.",
      en: "New AC installation with neat setup, organized cables, and thorough testing.",
    },
    installACFeatures: {
      id: ["Survey lokasi gratis", "Instalasi profesional", "Kabel rapi & aman", "Uji coba & garansi"],
      en: ["Free site survey", "Professional installation", "Neat & safe cables", "Testing & warranty"],
    },
    relocateAC: { id: "Bongkar Pasang", en: "Relocate AC" },
    relocateACDesc: {
      id: "Pindahkan AC Anda ke lokasi baru dengan aman tanpa merusak unit maupun dinding.",
      en: "Move your AC to a new location safely without damaging the unit or walls.",
    },
    relocateACFeatures: {
      id: ["Bongkar hati-hati", "Pindah lokasi baru", "Pasang ulang rapi", "Uji fungsi ulang"],
      en: ["Careful removal", "New location move", "Neat reinstallation", "Function retest"],
    },
    buySellAC: { id: "Jual Beli AC", en: "Buy & Sell AC" },
    buySellACDesc: {
      id: "Tersedia AC baru dan unit bekas berkualitas. Kami juga menerima AC bekas dengan harga terbaik.",
      en: "New and quality used AC units available. We also buy used AC at the best price.",
    },
    buySellACFeatures: {
      id: ["AC baru & second", "Garansi unit", "Harga nego", "Antar & pasang"],
      en: ["New & used AC", "Unit warranty", "Negotiable price", "Delivery & install"],
    },
    emergencyAC: { id: "Darurat AC", en: "Emergency AC" },
    emergencyACDesc: {
      id: "AC mendadak mati atau bocor? Tim kami siap melayani kunjungan darurat dengan respons cepat.",
      en: "AC suddenly off or leaking? Our team is ready for emergency visits with fast response.",
    },
    emergencyACFeatures: {
      id: ["Respons cepat", "Diagnosa akurat", "Perbaikan hari ini", "Tersedia 7 hari"],
      en: ["Fast response", "Accurate diagnosis", "Same-day repair", "Available 7 days"],
    },
    maintenanceAC: { id: "Maintenance Rutin", en: "Regular Maintenance" },
    maintenanceACDesc: {
      id: "Paket perawatan berkala untuk menjaga AC tetap bersih, efisien, dan tahan lama sepanjang tahun.",
      en: "Regular maintenance packages to keep your AC clean, efficient, and long-lasting all year.",
    },
    maintenanceACFeatures: {
      id: ["Jadwal teratur", "Cuci & cek rutin", "Laporan kondisi", "Harga paket hemat"],
      en: ["Regular schedule", "Routine cleaning & check", "Condition report", "Affordable package"],
    },
  },

  // Why Us Section
  whyUs: {
    badge: { id: "Mengapa Kami?", en: "Why Us?" },
    title1: { id: "Dipercaya Ribuan", en: "Trusted by Thousands" },
    title2: { id: "Pelanggan Kami", en: "of Our Customers" },
    description: {
      id: "Kami berkomitmen memberikan layanan AC terbaik dengan standar profesional dan kepuasan pelanggan sebagai prioritas utama.",
      en: "We are committed to providing the best AC services with professional standards and customer satisfaction as our top priority.",
    },
    items: [
      {
        title: { id: "Teknisi Berpengalaman", en: "Experienced Technicians" },
        desc: {
          id: "Tim kami terdiri dari teknisi terlatih dan berpengalaman lebih dari 5 tahun di bidang AC.",
          en: "Our team consists of trained technicians with over 5 years of experience in AC.",
        },
      },
      {
        title: { id: "Bergaransi Resmi", en: "Official Warranty" },
        desc: {
          id: "Setiap pekerjaan kami berikan garansi, sehingga Anda tenang dan tidak perlu khawatir.",
          en: "Every job comes with a warranty, so you can rest easy and worry-free.",
        },
      },
      {
        title: { id: "Harga Transparan", en: "Transparent Pricing" },
        desc: {
          id: "Tidak ada biaya tersembunyi. Estimasi harga diberikan di awal sebelum pekerjaan dimulai.",
          en: "No hidden fees. Price estimates are given upfront before work begins.",
        },
      },
      {
        title: { id: "Tepat Waktu", en: "On Time" },
        desc: {
          id: "Kami menghargai waktu Anda. Teknisi hadir sesuai jadwal yang telah disepakati.",
          en: "We value your time. Technicians arrive on schedule as agreed.",
        },
      },
      {
        title: { id: "Kepuasan Pelanggan", en: "Customer Satisfaction" },
        desc: {
          id: "Ribuan pelanggan telah mempercayakan kebutuhan AC mereka kepada kami.",
          en: "Thousands of customers have entrusted their AC needs to us.",
        },
      },
      {
        title: { id: "Konsultasi Gratis", en: "Free Consultation" },
        desc: {
          id: "Hubungi kami kapan saja untuk konsultasi gratis seputar kebutuhan AC Anda.",
          en: "Contact us anytime for free consultation about your AC needs.",
        },
      },
    ],
    ctaTitle: { id: "Siap Melayani Anda Hari Ini", en: "Ready to Serve You Today" },
    ctaDesc: {
      id: "Konsultasikan kebutuhan AC Anda secara gratis. Kami siap membantu!",
      en: "Consult your AC needs for free. We're ready to help!",
    },
    ctaButton: { id: "Konsultasi Gratis", en: "Free Consultation" },
  },

  // Gallery Section
  gallery: {
    badge: { id: "Galeri Portofolio", en: "Portfolio Gallery" },
    title1: { id: "Hasil Kerja", en: "Our Real" },
    title2: { id: "Nyata Kami", en: "Work Results" },
    description: {
      id: "Setiap pekerjaan dikerjakan dengan teliti dan penuh dedikasi. Berikut sebagian dokumentasi dari pekerjaan kami.",
      en: "Every job is done with care and dedication. Here is some documentation of our work.",
    },
    items: [
      { label: { id: "Service AC Split", en: "Split AC Service" }, category: { id: "Service", en: "Service" } },
      { label: { id: "Pemasangan AC Baru", en: "New AC Installation" }, category: { id: "Instalasi", en: "Installation" } },
      { label: { id: "Bongkar Pasang AC", en: "AC Relocation" }, category: { id: "Bongkar Pasang", en: "Relocation" } },
      { label: { id: "Cuci AC Standing", en: "Standing AC Clean" }, category: { id: "Service", en: "Service" } },
      { label: { id: "Instalasi Multi Split", en: "Multi Split Install" }, category: { id: "Instalasi", en: "Installation" } },
      { label: { id: "AC Inverter Baru", en: "New Inverter AC" }, category: { id: "Jual Beli", en: "Buy & Sell" } },
    ],
    photoSoon: { id: "Foto segera tersedia", en: "Photo coming soon" },
    bottomNote: {
      id: "Galeri foto akan diperbarui secara berkala. Ingin melihat lebih banyak?",
      en: "Photo gallery will be updated regularly. Want to see more?",
    },
    ctaButton: { id: "Lihat Portofolio Lengkap via WA", en: "See Full Portfolio via WA" },
  },

  // Testimonials Section
  testimonials: {
    badge: { id: "Testimoni Pelanggan", en: "Customer Testimonials" },
    title1: { id: "Apa Kata", en: "What Our" },
    title2: { id: "Pelanggan Kami", en: "Customers Say" },
    description: {
      id: "Kepercayaan dan kepuasan pelanggan adalah motivasi terbesar kami untuk terus memberikan layanan terbaik.",
      en: "Customer trust and satisfaction is our biggest motivation to continuously provide the best service.",
    },
    avgRating: { id: "Rating rata-rata", en: "Average rating" },
    totalReviews: { id: "Total Ulasan", en: "Total Reviews" },
    happyCustomers: { id: "Pelanggan Puas", en: "Happy Customers" },
    items: [
      {
        name: "Budi Santoso",
        role: { id: "Pemilik Rumah", en: "Homeowner" },
        location: { id: "Jakarta Selatan", en: "South Jakarta" },
        comment: {
          id: "Teknisi datang tepat waktu dan sangat profesional. AC saya yang sudah lama tidak dingin sekarang kembali seperti baru. Harga juga sesuai dengan yang dijanjikan, tidak ada tambahan biaya!",
          en: "Technicians arrived on time and were very professional. My AC that hadn't been cold for a long time is now like new. The price was as promised, no extra fees!",
        },
        avatar: "BS",
      },
      {
        name: "Dewi Rahayu",
        role: { id: "Manajer Toko", en: "Store Manager" },
        location: { id: "Bekasi", en: "Bekasi" },
        comment: {
          id: "Kami service 6 unit AC toko sekaligus. Hasilnya memuaskan, pekerjaan cepat dan bersih. Pasti akan gunakan jasa Aqsa Aulia AC lagi untuk perawatan rutin.",
          en: "We serviced 6 store AC units at once. The results were satisfying, work was fast and clean. Will definitely use Aqsa Aulia AC again for routine maintenance.",
        },
        avatar: "DR",
      },
      {
        name: "Rendi Pratama",
        role: { id: "Kontraktor", en: "Contractor" },
        location: { id: "Depok", en: "Depok" },
        comment: {
          id: "Sudah berkali-kali menggunakan jasa pasang AC dari Aqsa Aulia untuk proyek saya. Kerjanya rapih, cepat, dan harga bersaing. Sangat direkomendasikan!",
          en: "I've used Aqsa Aulia's AC installation service multiple times for my projects. Their work is neat, fast, and competitively priced. Highly recommended!",
        },
        avatar: "RP",
      },
      {
        name: "Siti Maryam",
        role: { id: "Ibu Rumah Tangga", en: "Housewife" },
        location: { id: "Bogor", en: "Bogor" },
        comment: {
          id: "AC kamar anak tiba-tiba bocor malam-malam. Langsung hubungi Aqsa Aulia AC dan teknisi datang cepat. Masalah selesai dalam 1 jam. Luar biasa responsif!",
          en: "The kids' room AC suddenly leaked at night. Called Aqsa Aulia AC right away and the technician came quickly. Problem solved in 1 hour. Incredibly responsive!",
        },
        avatar: "SM",
      },
      {
        name: "Andi Wijaya",
        role: { id: "Pemilik Kafe", en: "Cafe Owner" },
        location: { id: "Tangerang", en: "Tangerang" },
        comment: {
          id: "Butuh pasang 4 unit AC di kafe baru saya. Tim Aqsa Aulia datang survey dulu, kasih rekomendasi terbaik, dan hasilnya sempurna. Pelanggan kafe jadi nyaman!",
          en: "Needed to install 4 AC units in my new cafe. Aqsa Aulia team came for a survey first, gave the best recommendation, and the result was perfect. Cafe customers are now comfortable!",
        },
        avatar: "AW",
      },
      {
        name: "Fitri Handayani",
        role: { id: "Pegawai Kantoran", en: "Office Worker" },
        location: { id: "Jakarta Timur", en: "East Jakarta" },
        comment: {
          id: "Harga service-nya terjangkau dan teknisinya ramah serta bisa menjelaskan masalah AC dengan bahasa yang mudah dimengerti. Puas dengan hasilnya!",
          en: "The service price is affordable and the technician is friendly and can explain AC problems in easy-to-understand language. Satisfied with the results!",
        },
        avatar: "FH",
      },
    ],
  },

  // Contact Section
  contact: {
    badge: { id: "Hubungi Kami", en: "Contact Us" },
    title1: { id: "Siap Membantu", en: "Ready to Help" },
    title2: { id: "Kapan Saja", en: "Anytime" },
    description: {
      id: "Punya pertanyaan atau butuh layanan AC? Jangan ragu untuk menghubungi kami melalui salah satu jalur berikut.",
      en: "Have questions or need AC service? Don't hesitate to contact us through any of the following channels.",
    },
    whatsappPhone: { id: "WhatsApp / Telepon", en: "WhatsApp / Phone" },
    email: { id: "Email", en: "Email" },
    address: { id: "Alamat", en: "Address" },
    hours: { id: "Jam Operasional", en: "Operating Hours" },
    chatNow: { id: "Chat Sekarang", en: "Chat Now" },
    sendEmail: { id: "Kirim Email", en: "Send Email" },
    viewMaps: { id: "Lihat di Maps", en: "View on Maps" },
    ctaTitle: { id: "Chat Langsung via WhatsApp", en: "Chat Directly via WhatsApp" },
    ctaDesc: {
      id: "Dapatkan respons cepat dari tim kami. Konsultasi gratis, estimasi harga transparan, dan booking servis mudah langsung melalui WhatsApp.",
      en: "Get fast response from our team. Free consultation, transparent price estimation, and easy service booking directly via WhatsApp.",
    },
    ctaBenefits: {
      id: [
        "Respons dalam hitungan menit",
        "Konsultasi gratis tanpa syarat",
        "Booking jadwal servis fleksibel",
        "Estimasi harga langsung di tempat",
      ],
      en: [
        "Response in minutes",
        "Free consultation, no strings attached",
        "Flexible service scheduling",
        "On-the-spot price estimation",
      ],
    },
    ctaButton: { id: "Mulai Chat Sekarang", en: "Start Chat Now" },
    ctaNote: {
      id: "Rata-rata respons dalam < 5 menit",
      en: "Average response in < 5 minutes",
    },
  },

  // Footer
  footer: {
    brandDesc: {
      id: "Solusi AC terpercaya untuk rumah dan bisnis Anda. Profesional, bergaransi, dan harga bersaing.",
      en: "Trusted AC solution for your home and business. Professional, warranted, and competitive pricing.",
    },
    navigation: { id: "Navigasi", en: "Navigation" },
    servicesTitle: { id: "Layanan", en: "Services" },
    contactTitle: { id: "Kontak", en: "Contact" },
    waAvailable: { id: "WhatsApp tersedia", en: "WhatsApp available" },
    copyright: { id: "Semua hak dilindungi", en: "All rights reserved" },
    madeWith: {
      id: "Dibuat dengan ❤️ untuk kepercayaan pelanggan",
      en: "Made with ❤️ for customer trust",
    },
  },
} as const

export type TranslationKey = keyof typeof translations
