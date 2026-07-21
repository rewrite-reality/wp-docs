import { getLLMText, source } from '@/lib/source';

export const revalidate = false;

async function staticGET() {
  const scan = source.getPages().map(getLLMText);
  const scanned = await Promise.all(scan);

  return new Response(scanned.join('\n\n'));
}

export const GET = staticGET;
