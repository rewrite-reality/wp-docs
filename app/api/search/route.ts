import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

const { staticGET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'russian',
});

export const GET = staticGET;

export const generateStaticParams = () => [];
