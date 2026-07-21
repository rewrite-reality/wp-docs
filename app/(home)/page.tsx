import Link from 'next/link';

const sections = [
  {
    href: '/docs/getting-started',
    title: 'Getting Started',
    subtitle: 'Быстрый старт',
    description: 'Правильная установка Boilerplate, настройка Git-связей.',
    accent: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
  },
  {
    href: '/docs/core-architecture',
    title: 'Architecture',
    subtitle: 'Архитектура и Ядро',
    description: 'Правило "Святого ядра", Feature Toggles и системные настройки.',
    accent: 'from-sky-500/20 via-sky-500/5 to-transparent',
  },
  {
    href: '/docs/cpt-and-data',
    title: 'Content',
    subtitle: 'Работа с контентом',
    description: 'Narrative CPT (Gutenberg) и Structured CPT (Carbon Fields).',
    accent: 'from-purple-500/20 via-purple-500/5 to-transparent',
  },
  {
    href: '/docs/frontend-and-blocks',
    title: 'Frontend',
    subtitle: 'Визуальный слой',
    description: 'Трехуровневая система CSS токенов, БЭМ и блоки Gutenberg.',
    accent: 'from-amber-500/20 via-amber-500/5 to-transparent',
  },
] as const;

export default function HomePage() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-5xl space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-fd-muted-foreground">Boilerplate Docs</p>
          <h1 className="text-3xl font-semibold md:text-5xl">Выберите раздел</h1>
          <p className="mx-auto max-w-2xl text-fd-muted-foreground">
            Быстрый вход в основные направления базы знаний.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group relative overflow-hidden rounded-2xl border border-fd-border bg-fd-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-fd-primary/40 hover:shadow-xl hover:shadow-black/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="relative space-y-3">
                <p className="text-xs uppercase tracking-[0.15em] text-fd-muted-foreground">{section.title}</p>
                <h2 className="text-2xl font-semibold">{section.subtitle}</h2>
                <p className="text-sm leading-6 text-fd-muted-foreground">{section.description}</p>
                <div className="pt-3 text-sm font-medium text-fd-primary">Открыть раздел</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center text-sm text-fd-muted-foreground">
          Задать вопросы по документации можно в{' '}
          <Link href="https://t.me/zhestzhebne" className="font-medium text-fd-foreground underline decoration-fd-border">
            /telegram
          </Link>
          .
        </div>
      </div>
    </main>
  );
}
