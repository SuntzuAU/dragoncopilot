import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import site from '../site.config.json';

/** llms.txt — a plain-text map of the site for language models.
 *  Generated from the content collections so it can never drift. */
export const GET: APIRoute = async () => {
  const docs = (await getCollection('docs', (e: any) => !e.data.draft))
    .sort((a: any, b: any) => a.data.order - b.data.order);
  const emrs = await getCollection('emr');

  const lines: string[] = [];
  lines.push(`# ${site.siteName}`);
  lines.push('');
  lines.push(`> ${site.tagline}. Published by ${site.publisher.name}, ${site.publisher.role}. Every factual claim carries a verification date and a primary source.`);
  lines.push('');
  lines.push(site.affiliationNotice);
  lines.push('');

  for (const hub of site.hubs) {
    const pages = docs.filter((d: any) => d.data.hub === hub.slug);
    if (!pages.length) continue;
    lines.push(`## ${hub.title}`);
    lines.push('');
    for (const p of pages) {
      lines.push(`- [${p.data.question}](${site.domain}/${p.slug}/): ${p.data.answer} (verified ${p.data.verified})`);
    }
    lines.push('');
  }

  lines.push('## Australian EMR integration status');
  lines.push('');
  for (const e of emrs) {
    const d: any = e.data;
    lines.push(`- [${d.name}](${site.domain}/emr/${d.slug}/): Dragon Copilot ${d.dragonCopilot.status}; Dragon Medical One ${d.dragonMedicalOne.status}; evidence ${d.dragonCopilot.grade}; verified ${d.verified}`);
  }
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
