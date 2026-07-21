import { source } from '@/lib/source';
import { withBasePath } from '@/lib/with-base-path';

export const revalidate = false;

async function staticGET() {
  const lines: string[] = [];
  lines.push('# Documentation');
  lines.push('');
  for (const page of source.getPages()) {
    lines.push(`- [${page.data.title}](${withBasePath(page.url)}): ${page.data.description}`);
  }
  return new Response(lines.join('\n'));
}

export const GET = staticGET;
