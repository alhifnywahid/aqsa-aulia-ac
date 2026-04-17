import type { MetadataRoute } from "next"

const siteUrl = "https://udaqsaauliaac.com"

/**
 * Auto-generated robots.txt for search engine crawlers.
 * Allows all bots, points to sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
