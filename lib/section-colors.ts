export const SECTION_COLORS = {
  military: '214 100% 83.1%',
  communications: '360 100% 83.1%',
} as const;

export function getSectionAccent(pathname: string): string | null {
  if (pathname.startsWith('/docs/military')) return SECTION_COLORS.military;
  if (pathname.startsWith('/docs/communications')) return SECTION_COLORS.communications;
  return null;
}

export function getSectionAccentCss(pathname: string): string | undefined {
  const accent = getSectionAccent(pathname);
  if (!accent) return undefined;
  return `hsl(${accent})`;
}
