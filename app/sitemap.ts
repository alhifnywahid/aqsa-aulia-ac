import type { MetadataRoute } from "next"
import { getAllArticleSlugs } from "@/lib/articles"

const siteUrl = "https://udaqsaauliaac.com"

/**
 * Auto-generated sitemap for Google Search Console.
 * Includes all pages and article URLs for maximum SEO coverage.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const articleSlugs = getAllArticleSlugs()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/tentang-kami`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/layanan`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/galeri`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/artikel`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${siteUrl}/artikel/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...articlePages]
}
