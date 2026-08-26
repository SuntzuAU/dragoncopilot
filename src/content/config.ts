import { defineCollection, z } from 'astro:content';

/** Evidence grading, carried from the source research register. */
const evidenceGrade = z.enum(['very-high', 'high', 'medium', 'low', 'unverified']);

/** Integration reality. The distinction that matters commercially: a native
 *  integration is built and supported; compatibility just means dictation works
 *  into a text field. Never conflate the two on a page. */
const integrationStatus = z.enum([
  'native',        // vendor-built, supported integration
  'compatible',    // dictation works via supported edit controls, no native build
  'announced',     // publicly announced, not confirmed in production
  'partner',       // available through a partner/embed programme
  'none',          // no public evidence of support
  'unknown'        // not yet researched
]);

const citation = z.object({
  id: z.number(),
  title: z.string(),
  publisher: z.string(),
  url: z.string().url(),
  type: z.string(),
  grade: evidenceGrade,
  accessed: z.string()
});

/** Reference pages. Every page is an answer to a question. */
const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    /** The H1. Must be phrased as the question a searcher actually asks. */
    question: z.string(),
    /** 40-55 words. The extractable answer. This is what gets cited. */
    answer: z.string(),
    metaDescription: z.string().max(160),
    hub: z.enum(['product', 'dragon-medical-one', 'compliance']),
    /** Date the claims on this page were last checked against source. */
    verified: z.string(),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    /** Additional Q&A pairs rendered as answer blocks and emitted as FAQPage schema. */
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z.array(z.number()).default([]),
    related: z.array(z.string()).default([]),
    /** Network interlink rules: 1-3 internal, 1-2 external per page.
     *  Every body hyperlink MUST also appear here — see .claude/INTERLINK-RULES.md. */
    internalLinks: z.array(z.object({ to: z.string(), anchor: z.string() })).default([]),
    externalLinks: z.array(z.object({ to: z.string(), anchor: z.string(), url: z.string() })).default([]),
    order: z.number().default(100),
    draft: z.boolean().default(false)
  })
});

/** Australian EMR / practice management systems. One record, two outputs:
 *  the per-system page and the comparison matrix. Update once. */
const emr = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    vendor: z.string(),
    slug: z.string(),
    aliases: z.array(z.string()).default([]),
    segment: z.array(z.enum(['general-practice', 'specialist', 'allied-health', 'hospital', 'day-surgery'])),
    hosting: z.enum(['cloud', 'on-premise', 'hybrid', 'unknown']),
    marketNote: z.string(),
    /** Simple two-state status shown to readers. 'available' = Dragon works with this
     *  system today and there is a documented basis for saying so. 'pending' = we have
     *  not confirmed it and will not guess. */
    status: z.enum(['available', 'pending']),
    /** What Dragon does with this system, in plain language. */
    note: z.string(),
    /** Lower sorts first. Confirmed systems lead the table. */
    order: z.number().default(100),
    sources: z.array(z.number()).default([])
  })
});

/** Government health departments and hospital networks — the enterprise layer. */
const institution = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    type: z.enum(['state-health', 'federal', 'private-network', 'not-for-profit-network', 'lhd', 'university-hospital']),
    jurisdiction: z.string(),
    scale: z.string(),
    emrPlatforms: z.array(z.string()).default([]),
    procurementRoute: z.string(),
    speechFootprint: z.object({
      note: z.string(),
      grade: evidenceGrade,
      sources: z.array(z.number()).default([])
    }),
    verified: z.string()
  })
});

/** Network-standard article collection. Same shape as the other VRA gateway
 *  repos so update-link-usage.js and the image workflows keep working. */
const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    context: z.enum(['medical','legal','descriptive','brand','action','comparison','generic']).default('medical'),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    breakImage1: z.string().optional(),
    breakImage1Alt: z.string().optional(),
    breakImage2: z.string().optional(),
    breakImage2Alt: z.string().optional(),
    internalLinks: z.array(z.object({ to: z.string(), anchor: z.string() })).default([]),
    externalLinks: z.array(z.object({ to: z.string(), anchor: z.string(), url: z.string() })).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { docs, emr, institution, news };

