"use client"

import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3X3 } from "lucide-react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { useRef, useState, useCallback, useEffect } from "react"
import { useT } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"
import { siteConfig } from "@/lib/constants"
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion"

/** Gallery image data with SEO alt text */
const galleryImages = [
  {
    src: "/images/galery/image-1.png",
    alt: { id: "Transaksi pembelian AC bekas kantor di Jakarta", en: "Office used AC purchase transaction in Jakarta" },
    category: { id: "Pembelian", en: "Purchase" },
  },
  {
    src: "/images/galery/image-2.png",
    alt: { id: "Proses bongkar AC bekas di lokasi pelanggan", en: "Used AC dismantling process at customer location" },
    category: { id: "Bongkar", en: "Dismantling" },
  },
  {
    src: "/images/galery/image-3.png",
    alt: { id: "Stok AC bekas berkualitas siap dijual", en: "Quality used AC stock ready for sale" },
    category: { id: "Stok", en: "Stock" },
  },
  {
    src: "/images/galery/image-4.png",
    alt: { id: "Pengangkutan AC bekas borongan dari gedung", en: "Bulk used AC pickup from building" },
    category: { id: "Pembelian", en: "Purchase" },
  },
  {
    src: "/images/galery/image-5.png",
    alt: { id: "Pembeli AC bekas hotel dalam jumlah besar", en: "Large-scale hotel used AC purchase" },
    category: { id: "Pembelian", en: "Purchase" },
  },
  {
    src: "/images/galery/image-6.png",
    alt: { id: "Unit AC bekas yang sudah dicek dan dibersihkan", en: "Used AC unit that has been checked and cleaned" },
    category: { id: "Stok", en: "Stock" },
  },
  {
    src: "/images/galery/image-7.png",
    alt: { id: "Tim profesional membongkar AC di lokasi", en: "Professional team dismantling AC on-site" },
    category: { id: "Bongkar", en: "Dismantling" },
  },
  {
    src: "/images/galery/image-8.png",
    alt: { id: "AC bekas berbagai merk tersedia", en: "Various brand used AC available" },
    category: { id: "Stok", en: "Stock" },
  },
  {
    src: "/images/galery/image-9.png",
    alt: { id: "Pembayaran cash langsung di tempat pelanggan", en: "Instant cash payment at customer location" },
    category: { id: "Pembelian", en: "Purchase" },
  },
  {
    src: "/images/galery/image-10.png",
    alt: { id: "Bongkar AC bekas apartemen Jabodetabek", en: "Apartment used AC dismantling Greater Jakarta" },
    category: { id: "Bongkar", en: "Dismantling" },
  },
  {
    src: "/images/galery/image-11.png",
    alt: { id: "Gudang penyimpanan AC bekas berkualitas", en: "Quality used AC storage warehouse" },
    category: { id: "Stok", en: "Stock" },
  },
  {
    src: "/images/galery/image-12.png",
    alt: { id: "Pengiriman AC bekas ke pembeli", en: "Used AC delivery to buyer" },
    category: { id: "Penjualan", en: "Sale" },
  },
  {
    src: "/images/galery/image-13.png",
    alt: { id: "Survei AC bekas sebelum pembelian", en: "Used AC survey before purchase" },
    category: { id: "Pembelian", en: "Purchase" },
  },
  {
    src: "/images/galery/image-14.png",
    alt: { id: "AC bekas outdoor unit siap angkut", en: "Used AC outdoor unit ready for pickup" },
    category: { id: "Bongkar", en: "Dismantling" },
  },
  {
    src: "/images/galery/image-15.png",
    alt: { id: "Koleksi AC bekas berbagai kapasitas PK", en: "Used AC collection various PK capacities" },
    category: { id: "Stok", en: "Stock" },
  },
  {
    src: "/images/galery/image-16.png",
    alt: { id: "Proses pembongkaran AC di perkantoran", en: "AC dismantling process in office building" },
    category: { id: "Bongkar", en: "Dismantling" },
  },
  {
    src: "/images/galery/image-17.png",
    alt: { id: "Transaksi jual beli AC bekas dengan pelanggan", en: "Used AC buying and selling transaction with customer" },
    category: { id: "Penjualan", en: "Sale" },
  },
  {
    src: "/images/galery/image-18.png",
    alt: { id: "AC bekas berkualitas tinggi siap pakai", en: "High-quality used AC ready to use" },
    category: { id: "Stok", en: "Stock" },
  },
]

const categories = [
  { key: "all", label: { id: "Semua", en: "All" } },
  { key: "Pembelian", label: { id: "Pembelian", en: "Purchase" } },
  { key: "Bongkar", label: { id: "Bongkar", en: "Dismantling" } },
  { key: "Stok", label: { id: "Stok & Penyimpanan", en: "Stock & Storage" } },
  { key: "Penjualan", label: { id: "Penjualan", en: "Sale" } },
]

export function Gallery() {
  const t = useT()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState(0)

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category.id === activeCategory)

  // Lightbox handlers
  const openLightbox = useCallback((idx: number) => {
    setDirection(0)
    setLightboxIndex(idx)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const goNext = useCallback(() => {
    setDirection(1)
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredImages.length : null
    )
  }, [filteredImages.length])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredImages.length) % filteredImages.length
        : null
    )
  }, [filteredImages.length])

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    window.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [lightboxIndex, closeLightbox, goNext, goPrev])

  // Swipe threshold for drag
  const swipeConfidenceThreshold = 5000
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
    }),
  }

  return (
    <>
      <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-50/60 dark:bg-blue-950/10 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-cyan-400/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4"
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              {t(translations.gallery.badge)}
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-display"
            >
              {t(translations.gallery.title1)}{" "}
              <span className="text-gradient">{t(translations.gallery.title2)}</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base text-slate-500 dark:text-slate-400">
              {t(translations.gallery.description)}
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key)
                  setLightboxIndex(null)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "gradient-brand text-white shadow-md shadow-blue-500/25"
                    : "bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/50"
                }`}
              >
                {t(cat.label)}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, idx) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  onClick={() => openLightbox(idx)}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer border border-slate-200/50 dark:border-white/5 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <Image
                    src={img.src}
                    alt={t(img.alt)}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  {/* Info on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-xs sm:text-sm font-semibold line-clamp-2 mb-1">
                      {t(img.alt)}
                    </p>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] font-medium">
                      {t(img.category)}
                    </span>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="flex items-center gap-6 text-sm text-slate-400 dark:text-slate-500">
              <span className="flex items-center gap-1.5">
                📸 <strong className="text-slate-600 dark:text-slate-300">{galleryImages.length}</strong> foto
              </span>
              <span className="flex items-center gap-1.5">
                ✅ <strong className="text-slate-600 dark:text-slate-300">3000+</strong> transaksi
              </span>
            </div>
            <motion.a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Halo%2C%20saya%20ingin%20melihat%20galeri%20AC%20bekas%20lebih%20lengkap`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-brand text-white text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow"
            >
              {t(translations.gallery.ctaButton)}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.15 }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-5 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium"
            >
              {lightboxIndex + 1} / {filteredImages.length}
            </motion.div>

            {/* Prev button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              className="absolute left-2 sm:left-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Next button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="absolute right-2 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Image container with drag/swipe */}
            <div
              className="relative w-full h-full flex items-center justify-center px-12 sm:px-20 py-16"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={filteredImages[lightboxIndex].src}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.25 },
                    scale: { duration: 0.25 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.8}
                  onDragEnd={(_e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x)
                    if (swipe < -swipeConfidenceThreshold) {
                      goNext()
                    } else if (swipe > swipeConfidenceThreshold) {
                      goPrev()
                    }
                  }}
                  className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
                >
                  <Image
                    src={filteredImages[lightboxIndex].src}
                    alt={t(filteredImages[lightboxIndex].alt)}
                    fill
                    sizes="(max-width: 768px) 95vw, 80vw"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 max-w-lg text-center"
            >
              <p className="text-white text-sm font-medium mb-1">
                {t(filteredImages[lightboxIndex].alt)}
              </p>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-white/70 text-[10px] font-medium">
                {t(filteredImages[lightboxIndex].category)} · {lightboxIndex + 1}/{filteredImages.length}
              </span>
            </motion.div>

            {/* Thumbnail strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-black/40 backdrop-blur-md max-w-[80vw] overflow-x-auto"
            >
              {filteredImages.map((img, idx) => (
                <button
                  key={img.src}
                  onClick={(e) => {
                    e.stopPropagation()
                    setDirection(idx > (lightboxIndex ?? 0) ? 1 : -1)
                    setLightboxIndex(idx)
                  }}
                  className={`relative w-10 h-10 rounded-lg overflow-hidden shrink-0 transition-all duration-200 ${
                    idx === lightboxIndex
                      ? "ring-2 ring-primary scale-110 opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
