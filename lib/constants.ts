import config from "@/site.config"

/**
 * Centralized site configuration derived from `site.config.ts`.
 * Used across components for business contact info, branding, and social links.
 *
 * @see {@link file://site.config.ts} - Edit that file to change business information.
 */
export const siteConfig = {
  name: config.businessName,
  tagline: config.tagline,
  description: config.description,
  whatsapp: config.whatsapp,
  whatsappDisplay: config.whatsappDisplay,
  email: config.email,
  address: config.address,
  operationalHours: config.operationalHours,
  stats: config.stats,
  social: {
    instagram: config.instagram,
    facebook: config.facebook,
  },
} as const
