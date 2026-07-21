import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import { ThemeController } from '@/components/theme-controller';
import type { Metadata } from 'next';
import { withBasePath } from '@/lib/with-base-path';

const inter = Inter({
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ options: { type: 'static', api: withBasePath('/api/search') } }}>
          <ThemeController />
          {children}
        </RootProvider>
      </body>
    </html>

  );
}
