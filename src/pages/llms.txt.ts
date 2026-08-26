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
  lines.push(`> ${site.tagline}. Published by ${site.publisher.name}, ${site.publisher.role}. Dragon Copilot is coming to the Australian market; Microsoft has not announced an Australian release date. Dragon Medical One is available in Australia today.`);
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

  lines.push('## Australian clinical software — Dragon status');
  lines.push('');
  const sorted = emrs.map((e: any) => e.data)
    .sort((a: any, b: any) => (a.order - b.order) || a.name.localeCompare(b.name));
  for (const d of sorted) {
    lines.push(`- [${d.name}](${site.domain}/emr/${d.slug}/) (${d.vendor}) — ${d.status === 'available' ? 'Available' : 'Pending confirmation'}: ${d.note}`);
  }
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
