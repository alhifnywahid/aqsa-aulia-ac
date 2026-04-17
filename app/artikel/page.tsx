import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { articles } from "@/lib/articles"
import { generatePageMetadata, breadcrumbJsonLd } from "@/lib/seo"
import { ArrowRight, Clock, Tag } from "lucide-react"

export const metadata: Metadata = generatePageMetadata({
  title: "Artikel & Tips Jual Beli AC Bekas | Panduan Lengkap - Articles",
  description:
    "Baca artikel, tips, dan panduan seputar jual beli AC bekas dari UD AQSA AULIA AC. Informasi harga AC bekas, cara memilih AC second berkualitas, panduan bongkar AC, dan lebih banyak lagi. Read articles about used AC trading.",
  path: "/artikel",
  keywords: [
    "artikel AC bekas",
    "tips jual AC bekas",
    "panduan beli AC bekas",
    "harga AC bekas terbaru",
    "cara merawat AC bekas",
    "used AC articles",
    "AC buying guide Indonesia",
  ],
})

function ArticleBreadcrumbJsonLd() {
  const data = breadcrumbJsonLd([
    { name: "Beranda", url: "https://udaqsaauliaac.com" },
    { name: "Artikel", url: "https://udaqsaauliaac.com/artikel" },
  ])
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function BlogJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Artikel & Tips Jual Beli AC Bekas - UD AQSA AULIA AC",
    description:
      "Informasi, tips, dan panduan seputar jual beli AC bekas di Jabodetabek. Articles, tips, and guides about used AC trading in Greater Jakarta.",
    url: "https://udaqsaauliaac.com/artikel",
    publisher: {
      "@type": "Organization",
      name: "UD AQSA AULIA AC",
      url: "https://udaqsaauliaac.com",
    },
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title.id,
      description: article.description.id,
      url: `https://udaqsaauliaac.com/artikel/${article.slug}`,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      author: {
        "@type": "Organization",
        name: "UD AQSA AULIA AC",
      },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function ArtikelPage() {
  return (
    <>
      <ArticleBreadcrumbJsonLd />
      <BlogJsonLd />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-indigo-500/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wider text-primary uppercase">
            Artikel & Tips - Articles & Tips
          </div>
          <h1 className="mb-6 font-display text-4xl leading-tight font-extrabold text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Informasi Lengkap{" "}
            <span className="text-gradient">Jual Beli AC Bekas</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Baca artikel, tips, dan panduan seputar jual beli AC bekas. Dapatkan
            informasi terbaru dan terpercaya.
          </p>
          <p className="mt-3 text-sm text-slate-400 italic dark:text-slate-500">
            Read articles, tips, and guides about used AC trading. Get the
            latest and trusted information.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-section-alt py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-blue-500/8 dark:border-white/5 dark:bg-slate-800/40"
              >
                {/* Image header */}
                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={article.image}
                    alt={article.title.id}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                  <div className="absolute right-4 bottom-4 left-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                      <Tag className="h-3 w-3" />
                      {article.category.id}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime.id}
                    </span>
                    <span>·</span>
                    <time dateTime={article.datePublished}>
                      {new Date(article.datePublished).toLocaleDateString(
                        "id-ID",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </time>
                  </div>

                  <h2 className="mb-2 line-clamp-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-white">
                    {article.title.id}
                  </h2>
                  <p className="mb-2 line-clamp-1 text-xs text-slate-400 italic dark:text-slate-500">
                    {article.title.en}
                  </p>
                  <p className="mb-4 line-clamp-3 flex-1 text-sm text-slate-500 dark:text-slate-400">
                    {article.description.id}
                  </p>

                  <Link
                    href={`/artikel/${article.slug}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-display text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
            Punya Pertanyaan Lain?
          </h2>
          <p className="mb-6 text-slate-500 dark:text-slate-400">
            Hubungi kami via WhatsApp untuk konsultasi gratis.{" "}
            <span className="text-sm italic">
              Have more questions? Contact us for free consultation.
            </span>
          </p>
          <a
            href="https://wa.me/6281937930111?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20AC%20bekas"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-brand inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition-shadow hover:shadow-blue-500/40"
          >
            💬 Konsultasi Gratis via WA
          </a>
        </div>
      </section>
    </>
  )
}
