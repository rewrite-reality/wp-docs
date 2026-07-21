import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { getSectionAccentCss } from '@/lib/section-colors';
import type { ReactNode } from 'react';
import type { SidebarTab } from 'fumadocs-ui/utils/get-sidebar-tabs';

function getTabColor(url: string): string | undefined {
  return getSectionAccentCss(url);
}

function renderTabIcon(icon: ReactNode, color?: string): ReactNode {
  if (!icon) return icon;

  return (
    <div
      className="size-full [&_svg]:size-full"
      style={{
        color,
      }}
    >
      {icon}
    </div>
  );
}

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      sidebar={{
        tabs: {
          transform(option: SidebarTab) {
            const color = getTabColor(option.url);

            return {
              ...option,
              icon: renderTabIcon(option.icon, color),
            };
          },
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
