import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--destructive)/0.15),_transparent_55%)]" />
      
      <div className="relative z-10 space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl">404</h1>
          <p className="text-xl font-medium text-fd-muted-foreground sm:text-2xl">
            Страница не найдена
          </p>
        </div>
        
        <p className="text-fd-muted-foreground">
          Возможно, вы перешли по устаревшей ссылке или опечатались в адресе.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground shadow-lg shadow-fd-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-fd-primary/30"
          >
            <Home className="size-4" />
            На главную
          </Link>
          
          <Link
            href="/docs/getting-started/installation"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-fd-border bg-fd-card px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <ArrowLeft className="size-4" />
            К документации
          </Link>
        </div>
      </div>
    </main>
  );
}
