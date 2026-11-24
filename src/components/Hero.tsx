import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { ImagePlaceholder } from './ImagePlaceholder';

export function Hero() {
  const { hero } = SITE_CONFIG;

  return (
    <section id="inicio" className="pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="mb-3 text-sm font-semibold tracking-wide text-[var(--color-accent)]">
              {hero.kicker}
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-[var(--color-text)] sm:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-control)] bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-accent-ink)] shadow-sm transition-all hover:bg-[var(--color-accent-hover)]"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#servicos"
                className="inline-flex min-h-[48px] shrink-0 items-center justify-center whitespace-nowrap rounded-[var(--radius-control)] border border-[var(--color-border-strong)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {hero.secondaryCta}
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-text-secondary)]">
              {hero.trustBadges.map((badge) => (
                <div key={badge} className="inline-flex items-center gap-2 font-medium">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-[var(--color-accent)]"
                    aria-hidden="true"
                  />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <ImagePlaceholder
              label="Sua imagem aqui"
              className="aspect-[4/3] w-full shadow-[var(--shadow-card)] lg:aspect-[5/4]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
