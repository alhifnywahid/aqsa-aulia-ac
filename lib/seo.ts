import type { Metadata } from "next"

const siteUrl = "https://udaqsaauliaac.com"
const siteName = "UD. AQSA AULIA AC"

/**
 * Generate page-specific metadata with SEO best practices.
 * Each page should call this with unique title, description, and path.
 */
export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogImage,
  noIndex = false,
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
  ogImage?: string
  noIndex?: boolean
}): Metadata {
  const url = `${siteUrl}${path}`
  const image = ogImage ?? `${siteUrl}/opengraph-image`

  return {
    title,
    description,
    keywords: [
      "jual beli AC bekas",
      "terima AC bekas",
      "AC bekas Jakarta",
      "UD AQSA AULIA AC",
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url,
      siteName,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

/**
 * Generate BreadcrumbList JSON-LD schema.
 */
export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate FAQPage JSON-LD schema.
 */
export function faqJsonLd(
  faqs: { question: string; answer: string }[]
): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate Article JSON-LD schema.
 */
export function articleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  image?: string
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    image: image ?? `${siteUrl}/opengraph-image`,
    author: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
  }
}

/**
 * Generate Organization JSON-LD schema.
 */
export function organizationJsonLd(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-819-3793-0111",
      contactType: "customer service",
      availableLanguage: ["Indonesian", "English"],
    },
    sameAs: [
      "https://instagram.com/aqsaauliaac",
      "https://facebook.com/aqsaauliaac",
    ],
  }
}

/**
 * Generate WebSite JSON-LD with SearchAction.
 */
export function websiteJsonLd(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: ["id", "en"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/artikel?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }
}

/** Site URL constant */
export { siteUrl, siteName }
