import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { articles, getAllArticleSlugs, getArticleBySlug } from "@/lib/articles"
import {
  generatePageMetadata,
  breadcrumbJsonLd,
  articleJsonLd,
} from "@/lib/seo"
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react"

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

/**
 * Generate static paths for all articles (SSG).
 */
export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }))
}

/**
 * Generate unique metadata per article for SEO.
 */
export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  return generatePageMetadata({
    title: `${article.title.id} - ${article.title.en}`,
    description: `${article.description.id} ${article.description.en}`,
    path: `/artikel/${article.slug}`,
    keywords: article.keywords,
  })
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const breadcrumb = breadcrumbJsonLd([
    { name: "Beranda", url: "https://udaqsaauliaac.com" },
    { name: "Artikel", url: "https://udaqsaauliaac.com/artikel" },
    {
      name: article.title.id,
      url: `https://udaqsaauliaac.com/artikel/${article.slug}`,
    },
  ])

  const articleSchema = articleJsonLd({
    title: article.title.id,
    description: article.description.id,
    url: `https://udaqsaauliaac.com/artikel/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
  })

  // Get related articles (exclude current)
  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3)

  // Simple markdown-like rendering for headings and paragraphs
  const renderContent = (content: string) => {
    const lines = content.split("\n")
    const elements: React.ReactNode[] = []
    let currentList: string[] = []
    let listKey = 0

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul
            key={`list-${listKey++}`}
            className="mb-4 list-inside list-disc space-y-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
          >
            {currentList.map((item, i) => (
              <li
                key={i}
                dangerouslySetInnerHTML={{
                  __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            ))}
          </ul>
        )
        currentList = []
      }
    }

    lines.forEach((line, idx) => {
      const trimmed = line.trim()

      if (trimmed.startsWith("### ")) {
        flushList()
        elements.push(
          <h3
            key={idx}
            className="mt-8 mb-3 text-lg font-bold text-slate-900 dark:text-white"
          >
            {trimmed.replace("### ", "")}
          </h3>
        )
      } else if (trimmed.startsWith("## ")) {
        flushList()
        elements.push(
          <h2
            key={idx}
            className="mt-10 mb-4 font-display text-xl font-bold text-slate-900 sm:text-2xl dark:text-white"
          >
            {trimmed.replace("## ", "")}
          </h2>
        )
      } else if (/^\d+\.\s/.test(trimmed)) {
        flushList()
        const content = trimmed.replace(/^\d+\.\s/, "")
        elements.push(
          <div key={idx} className="mb-2 flex gap-3">
            <span className="mt-0.5 shrink-0 text-sm font-bold text-primary">
              {trimmed.match(/^\d+/)?.[0]}.
            </span>
            <p
              className="text-sm leading-relaxed text-slate-600 dark:text-slate-300"
              dangerouslySetInnerHTML={{
                __html: content.replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong class="text-slate-900 dark:text-white">$1</strong>'
                ),
              }}
            />
          </div>
        )
      } else if (trimmed.startsWith("- ")) {
        currentList.push(trimmed.replace("- ", ""))
      } else if (/^\|/.test(trimmed)) {
        flushList()
        // Table row - collect all table rows
        if (trimmed.includes("---")) return // skip separator
        const cells = trimmed
          .split("|")
          .filter(Boolean)
          .map((c) => c.trim())
        const isHeader = idx > 0 && lines[idx + 1]?.trim().includes("---")
        if (isHeader) {
          elements.push(
            <div key={idx} className="mt-4 mb-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    {cells.map((cell, i) => (
                      <th
                        key={i}
                        className="border border-slate-200 bg-primary/5 px-4 py-2 text-left font-semibold text-slate-900 dark:border-white/10 dark:text-white"
                      >
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>
          )
        } else {
          elements.push(
            <div key={idx} className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    {cells.map((cell, i) => (
                      <td
                        key={i}
                        className="border border-slate-200 px-4 py-2 text-slate-600 dark:border-white/10 dark:text-slate-300"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )
        }
      } else if (trimmed === "") {
        flushList()
      } else {
        flushList()
        elements.push(
          <p
            key={idx}
            className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
            dangerouslySetInnerHTML={{
              __html: trimmed.replace(
                /\*\*(.*?)\*\*/g,
                '<strong class="text-slate-900 dark:text-white">$1</strong>'
              ),
            }}
          />
        )
      }
    })
    flushList()
    return elements
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden pt-32 pb-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/artikel"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Artikel
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              <Tag className="h-3 w-3" />
              {article.category.id}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <Clock className="h-3 w-3" />
              {article.readTime.id}
            </span>
          </div>

          <h1 className="mb-4 font-display text-3xl leading-tight font-extrabold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            {article.title.id}
          </h1>
          <p className="mb-6 text-sm text-slate-400 italic dark:text-slate-500">
            {article.title.en}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              Dipublikasikan:{" "}
              {new Date(article.datePublished).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              Diperbarui:{" "}
              {new Date(article.dateModified).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Indonesian content */}
          <div className="mb-16">{renderContent(article.content.id)}</div>

          {/* English content */}
          <div className="border-t border-slate-200 pt-12 dark:border-white/5">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              🇬🇧 English Version
            </div>
            <div className="opacity-80">
              {renderContent(article.content.en)}
            </div>
          </div>

          {/* CTA */}
          <div className="gradient-brand relative mt-16 overflow-hidden rounded-2xl p-8 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="relative z-10">
              <h3 className="mb-3 text-xl font-bold text-white">
                Butuh Bantuan? Hubungi Kami!
              </h3>
              <p className="mb-5 text-sm text-blue-100/80">
                Need help? Contact us now for free consultation!
              </p>
              <a
                href="https://wa.me/6281937930111?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20AC%20bekas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary shadow-lg transition-colors hover:bg-blue-50"
              >
                💬 Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-section-alt py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 font-display text-2xl font-bold text-slate-900 dark:text-white">
              Artikel Terkait -{" "}
              <span className="text-lg font-normal text-slate-400">
                Related Articles
              </span>
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/artikel/${related.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200/60 bg-white p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl dark:border-white/5 dark:bg-slate-800/40"
                >
                  <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                    {related.category.id}
                  </span>
                  <h3 className="mb-2 line-clamp-2 text-sm font-bold text-slate-900 transition-colors group-hover:text-primary dark:text-white">
                    {related.title.id}
                  </h3>
                  <p className="mb-3 line-clamp-2 flex-1 text-xs text-slate-500 dark:text-slate-400">
                    {related.description.id}
                  </p>
                  <span className="flex items-center gap-1 text-xs font-semibold text-primary">
                    Baca <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
