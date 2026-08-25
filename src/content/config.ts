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
    hub: z.enum(['product', 'australia', 'compliance', 'evidence']),
    /** Date the claims on this page were last checked against source. */
    verified: z.string(),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    /** Additional Q&A pairs rendered as answer blocks and emitted as FAQPage schema. */
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z.array(z.number()).default([]),
    related: z.array(z.string()).default([]),
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
    dragonCopilot: z.object({
      status: integrationStatus,
      ambient: integrationStatus,
      dictation: integrationStatus,
      note: z.string(),
      grade: evidenceGrade,
      sources: z.array(z.number()).default([])
    }),
    dragonMedicalOne: z.object({
      status: integrationStatus,
      note: z.string(),
      grade: evidenceGrade,
      sources: z.array(z.number()).default([])
    }),
    verified: z.string()
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

export const collections = { docs, emr, institution };
export type { };
