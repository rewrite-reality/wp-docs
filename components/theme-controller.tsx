'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { getSectionAccent } from '@/lib/section-colors';

export function ThemeController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const accent = getSectionAccent(pathname);

    if (accent) {
      root.style.setProperty('--primary', accent);
      root.style.setProperty('--color-fd-primary', 'hsl(var(--primary))');
      root.style.setProperty('--ui-color', 'hsl(var(--primary))');
      return;
    }

    root.style.removeProperty('--primary');
    root.style.removeProperty('--color-fd-primary');
    root.style.removeProperty('--ui-color');
  }, [pathname]);

  return null;
}
