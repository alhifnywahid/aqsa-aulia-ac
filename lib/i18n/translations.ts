export type Locale = "id" | "en"

export const translations = {
  // Navbar - updated for multi-page routing
  nav: {
    home: { id: "Beranda", en: "Home" },
    about: { id: "Tentang Kami", en: "About Us" },
    services: { id: "Layanan", en: "Services" },
    gallery: { id: "Galeri", en: "Gallery" },
    articles: { id: "Artikel", en: "Articles" },
    contact: { id: "Kontak Kami", en: "Contact Us" },
    callUs: { id: "Hubungi Kami", en: "Contact Us" },
    callViaWa: { id: "Hubungi via WhatsApp", en: "Contact via WhatsApp" },
  },

  // Hero
  hero: {
    serving: { id: "Melayani", en: "Serving" },
    serviceArea: { id: "Jabodetabek", en: "Greater Jakarta Area" },
    open6Days: { id: "Buka Setiap Hari", en: "Open Every Day" },
    headline1: { id: "Jual Beli", en: "Buy & Sell" },
    headline2: { id: "AC Bekas", en: "Used AC" },
    headline3: { id: "Harga Terbaik", en: "Best Price" },
    description: {
      id: "Spesialis jual beli AC bekas segala kondisi. Terima AC bekas normal, rusak, hingga mati. Siap datang ke lokasi, bongkar, dan angkut. Satuan, borongan, maupun lelangan.",
      en: "Specialist in buying and selling used AC in any condition. We accept working, broken, or dead units. Ready to come to your location, dismantle, and pick up. Individual, bulk, or auction.",
    },
    ctaWhatsapp: { id: "Jual AC Bekas Anda", en: "Sell Your Used AC" },
    ctaServices: { id: "Lihat Layanan", en: "View Services" },
    badgeWarranty: { id: "Harga Tertinggi", en: "Highest Price" },
    badgeWarrantyDesc: { id: "Penawaran terbaik", en: "Best offer" },
    badgeRating: { id: "Rating 5.0 ⭐", en: "Rating 5.0 ⭐" },
    badgeRatingDesc: { id: "3000+ transaksi", en: "3000+ transactions" },
    scroll: { id: "Scroll", en: "Scroll" },
  },

  // Stats
  stats: {
    customers: { id: "AC Sudah Dibeli", en: "AC Units Purchased" },
    experience: { id: "Tahun Pengalaman", en: "Years Experience" },
    units: { id: "Transaksi Sukses", en: "Successful Deals" },
    satisfaction: { id: "Kepuasan Pelanggan", en: "Customer Satisfaction" },
  },

  // About page
  about: {
    badge: { id: "Tentang Kami", en: "About Us" },
    title1: { id: "Profil", en: "Profile of" },
    title2: { id: "UD AQSA AULIA AC", en: "UD AQSA AULIA AC" },
    description: {
      id: "UD AQSA AULIA AC adalah perusahaan yang bergerak di bidang jual beli AC bekas di wilayah Jabodetabek. Dengan pengalaman lebih dari 7 tahun dan ribuan transaksi sukses, kami berkomitmen memberikan penawaran harga terbaik dan pelayanan profesional.",
      en: "UD AQSA AULIA AC is a company engaged in buying and selling used AC in the Greater Jakarta area. With over 7 years of experience and thousands of successful transactions, we are committed to offering the best prices and professional service.",
    },
    visionTitle: { id: "Visi Kami", en: "Our Vision" },
    visionDesc: {
      id: "Menjadi perusahaan jual beli AC bekas terpercaya dan terbesar di Jabodetabek, dengan mengutamakan kepuasan pelanggan dan harga terbaik di setiap transaksi.",
      en: "To become the most trusted and largest used AC trading company in Greater Jakarta, prioritizing customer satisfaction and the best prices in every transaction.",
    },
    missionTitle: { id: "Misi Kami", en: "Our Mission" },
    missionItems: {
      id: [
        "Memberikan penawaran harga tertinggi dan kompetitif untuk AC bekas",
        "Menyediakan layanan profesional dengan tim yang berpengalaman",
        "Memudahkan proses jual beli AC bekas dengan layanan datang ke lokasi",
        "Menjaga kepercayaan pelanggan melalui transparansi dan kejujuran",
        "Berkontribusi pada pelestarian lingkungan melalui daur ulang AC bekas",
      ],
      en: [
        "Offer the highest and most competitive prices for used AC",
        "Provide professional services with an experienced team",
        "Facilitate the used AC buying and selling process with on-site service",
        "Maintain customer trust through transparency and honesty",
        "Contribute to environmental preservation through used AC recycling",
      ],
    },
    valuesTitle: { id: "Nilai-Nilai Kami", en: "Our Values" },
    values: [
      {
        title: { id: "Kejujuran", en: "Honesty" },
        desc: {
          id: "Kami selalu transparan dalam setiap penawaran harga dan transaksi.",
          en: "We are always transparent in every price offer and transaction.",
        },
      },
      {
        title: { id: "Profesionalisme", en: "Professionalism" },
        desc: {
          id: "Tim kami terlatih dan berpengalaman dalam menangani setiap transaksi.",
          en: "Our team is trained and experienced in handling every transaction.",
        },
      },
      {
        title: { id: "Kepuasan Pelanggan", en: "Customer Satisfaction" },
        desc: {
          id: "Kepuasan pelanggan adalah prioritas utama dalam setiap layanan kami.",
          en: "Customer satisfaction is the top priority in all our services.",
        },
      },
    ],
  },

  // Services Section
  services: {
    badge: { id: "Layanan Kami", en: "Our Services" },
    title1: { id: "Solusi Lengkap", en: "Complete Solution" },
    title2: { id: "AC Bekas Anda", en: "for Your Used AC" },
    description: {
      id: "Dari pembelian AC bekas, pembongkaran di lokasi, hingga penjualan unit berkualitas - semua kami tangani secara profesional.",
      en: "From purchasing used AC, on-site dismantling, to selling quality units - we handle it all professionally.",
    },
    serviceAC: { id: "Terima AC Bekas", en: "Buy Used AC" },
    serviceACDesc: {
      id: "Kami membeli AC bekas segala kondisi - normal, rusak, bahkan mati sekalipun. Harga penawaran terbaik dan pembayaran langsung.",
      en: "We buy used AC in any condition - working, broken, even dead. Best price offer and instant payment.",
    },
    serviceACFeatures: {
      id: [
        "Segala kondisi AC",
        "Harga tinggi",
        "Bayar cash langsung",
        "Semua merk & tipe",
      ],
      en: [
        "Any AC condition",
        "High price",
        "Instant cash payment",
        "All brands & types",
      ],
    },
    installAC: { id: "Bongkar & Angkut", en: "Dismantle & Pickup" },
    installACDesc: {
      id: "Tim profesional kami siap datang ke lokasi untuk membongkar dan mengangkut AC bekas Anda dengan aman dan rapi.",
      en: "Our professional team is ready to come to your location to safely dismantle and pick up your used AC.",
    },
    installACFeatures: {
      id: [
        "Datang ke lokasi",
        "Bongkar aman & rapi",
        "Angkut langsung",
        "Gratis biaya bongkar",
      ],
      en: [
        "Come to location",
        "Safe & neat dismantling",
        "Immediate pickup",
        "Free dismantling fee",
      ],
    },
    relocateAC: { id: "Beli Borongan", en: "Bulk Purchase" },
    relocateACDesc: {
      id: "Menerima AC bekas dalam jumlah banyak dari gedung, kantor, hotel, sekolah, pabrik, dan apartemen. Satuan maupun borongan.",
      en: "Accept used AC in large quantities from buildings, offices, hotels, schools, factories, and apartments. Individual or bulk.",
    },
    relocateACFeatures: {
      id: [
        "Gedung & kantor",
        "Hotel & apartemen",
        "Sekolah & pabrik",
        "Satuan & borongan",
      ],
      en: [
        "Buildings & offices",
        "Hotels & apartments",
        "Schools & factories",
        "Individual & bulk",
      ],
    },
    buySellAC: { id: "Jual AC Bekas", en: "Sell Used AC" },
    buySellACDesc: {
      id: "Tersedia unit AC bekas berkualitas siap pakai dengan harga terjangkau. Semua unit sudah dicek dan dibersihkan.",
      en: "Quality used AC units ready to use at affordable prices. All units have been checked and cleaned.",
    },
    buySellACFeatures: {
      id: [
        "Unit berkualitas",
        "Sudah dicek & bersih",
        "Harga terjangkau",
        "Garansi pemakaian",
      ],
      en: [
        "Quality units",
        "Checked & cleaned",
        "Affordable price",
        "Usage warranty",
      ],
    },
    emergencyAC: { id: "Terima Barang Bekas", en: "Accept Used Goods" },
    emergencyACDesc: {
      id: "Selain AC, kami juga menerima barang bekas lainnya seperti besi tua, tembaga, kuningan, dan barang bekas kantor.",
      en: "Besides AC, we also accept other used goods such as scrap iron, copper, brass, and office equipment.",
    },
    emergencyACFeatures: {
      id: [
        "Besi tua & scrap",
        "Tembaga & kuningan",
        "Barang bekas kantor",
        "Harga kompetitif",
      ],
      en: [
        "Scrap iron",
        "Copper & brass",
        "Office equipment",
        "Competitive price",
      ],
    },
    maintenanceAC: { id: "Konsultasi Gratis", en: "Free Consultation" },
    maintenanceACDesc: {
      id: "Hubungi kami untuk konsultasi gratis dan estimasi harga langsung. Kami siap memberikan penawaran terbaik untuk AC bekas Anda.",
      en: "Contact us for free consultation and instant price estimation. We are ready to give the best offer for your used AC.",
    },
    maintenanceACFeatures: {
      id: [
        "Estimasi harga cepat",
        "Konsultasi via WA",
        "Penawaran terbaik",
        "Respons 24 jam",
      ],
      en: [
        "Quick price estimate",
        "Consultation via WA",
        "Best offer",
        "24hr response",
      ],
    },
    faq: {
      title: {
        id: "Pertanyaan yang Sering Diajukan",
        en: "Frequently Asked Questions",
      },
      items: [
        {
          q: {
            id: "Apakah UD AQSA AULIA AC menerima AC bekas yang sudah rusak?",
            en: "Does UD AQSA AULIA AC accept broken used AC?",
          },
          a: {
            id: "Ya, kami menerima AC bekas dalam segala kondisi - normal, rusak, bahkan mati sekalipun. Kami tetap memberikan harga penawaran terbaik.",
            en: "Yes, we accept used AC in any condition - working, broken, even dead. We still offer the best price.",
          },
        },
        {
          q: {
            id: "Berapa harga beli AC bekas di UD AQSA AULIA AC?",
            en: "What is the purchase price of used AC at UD AQSA AULIA AC?",
          },
          a: {
            id: "Harga beli tergantung kondisi, merk, kapasitas, dan kelengkapan unit AC. Hubungi kami via WhatsApp untuk estimasi harga gratis.",
            en: "Purchase price depends on the condition, brand, capacity, and completeness of the AC unit. Contact us via WhatsApp for a free price estimate.",
          },
        },
        {
          q: {
            id: "Apakah ada biaya bongkar AC?",
            en: "Is there a dismantling fee?",
          },
          a: {
            id: "Tidak, kami menyediakan jasa bongkar AC secara GRATIS untuk setiap transaksi pembelian AC bekas.",
            en: "No, we provide FREE AC dismantling service for every used AC purchase transaction.",
          },
        },
        {
          q: {
            id: "Area mana saja yang dilayani?",
            en: "What areas do you serve?",
          },
          a: {
            id: "Kami melayani seluruh area Jabodetabek - Jakarta, Bogor, Depok, Tangerang, dan Bekasi.",
            en: "We serve the entire Greater Jakarta area - Jakarta, Bogor, Depok, Tangerang, and Bekasi.",
          },
        },
        {
          q: {
            id: "Bagaimana cara menjual AC bekas ke UD AQSA AULIA AC?",
            en: "How do I sell used AC to UD AQSA AULIA AC?",
          },
          a: {
            id: "Cukup hubungi kami via WhatsApp, kirimkan foto AC bekas Anda, kami berikan estimasi harga, lalu tim kami datang ke lokasi untuk survei, bongkar, dan bayar cash langsung.",
            en: "Simply contact us via WhatsApp, send photos of your used AC, we'll give a price estimate, then our team comes to your location to survey, dismantle, and pay cash instantly.",
          },
        },
      ],
    },
  },

  // Why Us Section
  whyUs: {
    badge: { id: "Mengapa Kami?", en: "Why Us?" },
    title1: { id: "Dipercaya Ribuan", en: "Trusted by Thousands" },
    title2: { id: "Pelanggan Kami", en: "of Our Customers" },
    description: {
      id: "Kami berkomitmen memberikan penawaran harga terbaik dan pelayanan profesional untuk setiap transaksi jual beli AC bekas.",
      en: "We are committed to offering the best prices and professional service for every used AC transaction.",
    },
    items: [
      {
        title: { id: "Harga Tertinggi", en: "Highest Price" },
        desc: {
          id: "Kami memberikan penawaran harga tertinggi dan kompetitif untuk AC bekas Anda, dijamin tidak ada yang lebih tinggi.",
          en: "We offer the highest and most competitive price for your used AC, guaranteed no one offers more.",
        },
      },
      {
        title: { id: "Siap Datang ke Lokasi", en: "On-Site Pickup" },
        desc: {
          id: "Tim kami siap datang langsung ke lokasi Anda di seluruh area Jabodetabek untuk survei dan pengambilan.",
          en: "Our team is ready to come directly to your location across the Greater Jakarta area for survey and pickup.",
        },
      },
      {
        title: { id: "Bongkar Gratis", en: "Free Dismantling" },
        desc: {
          id: "Tidak perlu repot! Kami bongkar sendiri AC-nya dari dinding dengan rapi dan tanpa biaya tambahan.",
          en: "No hassle! We dismantle the AC from the wall ourselves neatly and at no extra charge.",
        },
      },
      {
        title: { id: "Bayar Cash Langsung", en: "Instant Cash Payment" },
        desc: {
          id: "Pembayaran dilakukan langsung di tempat secara tunai setelah deal harga. Tidak perlu menunggu transfer.",
          en: "Payment is made instantly on-site in cash after price agreement. No waiting for bank transfers.",
        },
      },
      {
        title: { id: "Satuan & Borongan", en: "Individual & Bulk" },
        desc: {
          id: "Kami melayani pembelian satuan maupun borongan. Proyek renovasi, pindahan, atau lelangan - semua kami tangani.",
          en: "We serve individual and bulk purchases. Renovation projects, relocations, or auctions - we handle them all.",
        },
      },
      {
        title: { id: "Pengalaman 7+ Tahun", en: "7+ Years Experience" },
        desc: {
          id: "Berpengalaman lebih dari 7 tahun di bidang jual beli AC bekas dengan ribuan transaksi sukses.",
          en: "Over 7 years of experience in used AC buying and selling with thousands of successful transactions.",
        },
      },
    ],
    ctaTitle: {
      id: "Punya AC Bekas? Jual ke Kami!",
      en: "Have a Used AC? Sell It to Us!",
    },
    ctaDesc: {
      id: "Hubungi kami sekarang untuk penawaran harga terbaik. Kami siap datang ke lokasi Anda!",
      en: "Contact us now for the best price offer. We're ready to come to your location!",
    },
    ctaButton: { id: "Jual AC Bekas Sekarang", en: "Sell Used AC Now" },
  },

  // Gallery Section
  gallery: {
    badge: { id: "Galeri Kami", en: "Our Gallery" },
    title1: { id: "Dokumentasi", en: "Documentation of" },
    title2: { id: "Transaksi Kami", en: "Our Transactions" },
    description: {
      id: "Berikut sebagian dokumentasi dari transaksi jual beli AC bekas yang telah kami lakukan bersama pelanggan.",
      en: "Here is some documentation of used AC transactions we have completed with our customers.",
    },
    items: [
      {
        label: { id: "Beli AC Bekas Kantor", en: "Buy Office Used AC" },
        category: { id: "Pembelian", en: "Purchase" },
      },
      {
        label: { id: "Bongkar AC Gedung", en: "Building AC Dismantling" },
        category: { id: "Bongkar", en: "Dismantling" },
      },
      {
        label: { id: "AC Bekas Siap Jual", en: "Used AC Ready to Sell" },
        category: { id: "Penjualan", en: "Sale" },
      },
      {
        label: { id: "Angkut AC Borongan", en: "Bulk AC Pickup" },
        category: { id: "Pembelian", en: "Purchase" },
      },
      {
        label: { id: "Beli AC Bekas Hotel", en: "Buy Hotel Used AC" },
        category: { id: "Pembelian", en: "Purchase" },
      },
      {
        label: { id: "Stok AC Bekas Berkualitas", en: "Quality Used AC Stock" },
        category: { id: "Penjualan", en: "Sale" },
      },
    ],
    photoSoon: { id: "Foto segera tersedia", en: "Photo coming soon" },
    bottomNote: {
      id: "Galeri foto akan diperbarui secara berkala. Ingin melihat lebih banyak?",
      en: "Photo gallery will be updated regularly. Want to see more?",
    },
    ctaButton: {
      id: "Lihat Galeri Lengkap via WA",
      en: "See Full Gallery via WA",
    },
  },

  // Testimonials Section
  testimonials: {
    badge: { id: "Testimoni Pelanggan", en: "Customer Testimonials" },
    title1: { id: "Apa Kata", en: "What Our" },
    title2: { id: "Pelanggan Kami", en: "Customers Say" },
    description: {
      id: "Kepercayaan dan kepuasan pelanggan adalah motivasi terbesar kami untuk terus memberikan harga terbaik dan pelayanan profesional.",
      en: "Customer trust and satisfaction is our biggest motivation to keep offering the best prices and professional service.",
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
          id: "Jual 2 unit AC bekas ke UD AQSA AULIA AC. Harganya jauh lebih tinggi dari toko lain. Tim datang langsung, bongkar rapi, dan bayar cash di tempat. Sangat recommended!",
          en: "Sold 2 used AC units to UD AQSA AULIA AC. The price was much higher than other stores. Team came directly, dismantled neatly, and paid cash on-site. Highly recommended!",
        },
        avatar: "BS",
      },
      {
        name: "Dewi Rahayu",
        role: { id: "Manajer Hotel", en: "Hotel Manager" },
        location: { id: "Bekasi", en: "Bekasi" },
        comment: {
          id: "Renovasi hotel butuh jual 20 unit AC sekaligus. UD AQSA AULIA AC beli borongan dengan harga sangat bagus. Proses cepat, bongkar 1 hari selesai. Pelayanan luar biasa!",
          en: "Hotel renovation needed to sell 20 AC units at once. UD AQSA AULIA AC bought them in bulk at a great price. Fast process, dismantling done in 1 day. Outstanding service!",
        },
        avatar: "DR",
      },
      {
        name: "Rendi Pratama",
        role: { id: "Kontraktor", en: "Contractor" },
        location: { id: "Depok", en: "Depok" },
        comment: {
          id: "Sudah berkali-kali jual AC bekas proyek ke UD AQSA AULIA AC. Selalu kasih harga terbaik dan proses-nya profesional. Langganan tetap kami untuk urusan AC bekas!",
          en: "Have sold project AC units to UD AQSA AULIA AC many times. Always gives the best price and professional process. Our go-to partner for used AC!",
        },
        avatar: "RP",
      },
      {
        name: "Siti Maryam",
        role: { id: "Ibu Rumah Tangga", en: "Housewife" },
        location: { id: "Bogor", en: "Bogor" },
        comment: {
          id: "AC di rumah sudah rusak lama. Coba tawarkan ke UD AQSA AULIA AC, ternyata masih mau dibeli! Timnya datang cepat, bongkar sendiri, dan langsung bayar tunai. Terima kasih!",
          en: "The AC at home had been broken for a long time. Offered it to UD AQSA AULIA AC, and they still wanted to buy it! Team came quickly, dismantled it, and paid cash instantly. Thank you!",
        },
        avatar: "SM",
      },
      {
        name: "Andi Wijaya",
        role: { id: "Pemilik Kantor", en: "Office Owner" },
        location: { id: "Tangerang", en: "Tangerang" },
        comment: {
          id: "Kantor pindah dan butuh jual 8 unit AC. UD AQSA AULIA AC survey dulu, kasih harga langsung, deal cepat. Bongkar dan angkut semua dalam sehari. Profesional banget!",
          en: "Office was relocating and needed to sell 8 AC units. UD AQSA AULIA AC surveyed first, gave instant pricing, quick deal. Dismantled and picked up everything in a day. Very professional!",
        },
        avatar: "AW",
      },
      {
        name: "Fitri Handayani",
        role: { id: "Pemilik Kos", en: "Boarding House Owner" },
        location: { id: "Jakarta Timur", en: "East Jakarta" },
        comment: {
          id: "Jual AC bekas kos-kosan ke UD AQSA AULIA AC. Prosesnya mudah, cukup WA kirim foto, langsung dikasih penawaran harga. Harga deal, mereka datang sendiri. Praktis banget!",
          en: "Sold used boarding house AC to UD AQSA AULIA AC. Process was easy, just WhatsApp photos, got instant price offer. Price agreed, they came themselves. So practical!",
        },
        avatar: "FH",
      },
    ],
  },

  // Contact Section
  contact: {
    badge: { id: "Hubungi Kami", en: "Contact Us" },
    title1: { id: "Siap Membeli", en: "Ready to Buy" },
    title2: { id: "AC Bekas Anda", en: "Your Used AC" },
    description: {
      id: "Punya AC bekas yang ingin dijual? Hubungi kami sekarang untuk penawaran harga terbaik. Kami siap datang ke lokasi Anda!",
      en: "Have used AC to sell? Contact us now for the best price offer. We're ready to come to your location!",
    },
    whatsappPhone: { id: "WhatsApp / Telepon", en: "WhatsApp / Phone" },
    email: { id: "Email", en: "Email" },
    address: { id: "Alamat", en: "Address" },
    hours: { id: "Jam Operasional", en: "Operating Hours" },
    chatNow: { id: "Chat Sekarang", en: "Chat Now" },
    sendEmail: { id: "Kirim Email", en: "Send Email" },
    viewMaps: { id: "Lihat di Maps", en: "View on Maps" },
    ctaTitle: {
      id: "Jual AC Bekas via WhatsApp",
      en: "Sell Used AC via WhatsApp",
    },
    ctaDesc: {
      id: "Kirimkan foto dan detail AC bekas Anda untuk mendapatkan penawaran harga terbaik secara instan. Proses mudah dan cepat!",
      en: "Send photos and details of your used AC to get the best instant price offer. Easy and fast process!",
    },
    ctaBenefits: {
      id: [
        "Penawaran harga dalam hitungan menit",
        "Gratis biaya survei & bongkar",
        "Pembayaran cash langsung di tempat",
        "Melayani satuan hingga borongan",
      ],
      en: [
        "Price offer in minutes",
        "Free survey & dismantling fee",
        "Instant cash payment on-site",
        "Serving individual to bulk orders",
      ],
    },
    ctaButton: { id: "Jual AC Bekas Sekarang", en: "Sell Used AC Now" },
    ctaNote: {
      id: "Rata-rata respons dalam < 5 menit",
      en: "Average response in < 5 minutes",
    },
  },

  // Articles page
  articlePage: {
    badge: { id: "Artikel & Tips", en: "Articles & Tips" },
    title1: { id: "Informasi Lengkap", en: "Complete Information" },
    title2: { id: "Jual Beli AC Bekas", en: "Used AC Trading" },
    description: {
      id: "Baca artikel, tips, dan panduan seputar jual beli AC bekas. Dapatkan informasi terbaru dan terpercaya dari UD AQSA AULIA AC.",
      en: "Read articles, tips, and guides about used AC trading. Get the latest and trusted information from UD AQSA AULIA AC.",
    },
    readMore: { id: "Baca Selengkapnya", en: "Read More" },
    readTime: { id: "menit baca", en: "min read" },
    backToArticles: { id: "Kembali ke Artikel", en: "Back to Articles" },
    relatedArticles: { id: "Artikel Terkait", en: "Related Articles" },
    shareArticle: { id: "Bagikan Artikel", en: "Share Article" },
    publishedOn: { id: "Dipublikasikan", en: "Published" },
    updatedOn: { id: "Diperbarui", en: "Updated" },
  },

  // Footer
  footer: {
    brandDesc: {
      id: "Spesialis jual beli AC bekas terpercaya. Siap datang ke lokasi, bongkar, dan bayar cash langsung.",
      en: "Trusted used AC buying and selling specialist. Ready to come to your location, dismantle, and pay cash instantly.",
    },
    navigation: { id: "Navigasi", en: "Navigation" },
    servicesTitle: { id: "Layanan", en: "Services" },
    contactTitle: { id: "Kontak", en: "Contact" },
    articlesTitle: { id: "Artikel Terbaru", en: "Latest Articles" },
    waAvailable: { id: "WhatsApp tersedia", en: "WhatsApp available" },
    copyright: { id: "Semua hak dilindungi", en: "All rights reserved" },
    madeWith: {
      id: "Dibuat dengan ❤️ untuk kepercayaan pelanggan",
      en: "Made with ❤️ for customer trust",
    },
  },

  // Common/shared
  common: {
    learnMore: { id: "Selengkapnya", en: "Learn More" },
    seeAll: { id: "Lihat Semua", en: "See All" },
    home: { id: "Beranda", en: "Home" },
  },
} as const

export type TranslationKey = keyof typeof translations
