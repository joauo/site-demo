import { SITE_CONFIG } from '../data/siteConfig';
import { Reveal } from './Reveal';

export function PartnersStrip() {
  const { partners } = SITE_CONFIG;

  return (
    <section
      aria-label="Parceiros e clientes"
      className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-12 sm:py-14"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-xl font-semibold text-[var(--color-text)] sm:text-2xl">
              {partners.title}
            </h2>
            <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">
              {partners.subtitle}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {partners.logos.map((label, index) => (
              <div
                key={index}
                className="flex h-16 items-center justify-center rounded-[var(--radius-control)] border border-[var(--color-border)] bg-[var(--color-surface-card)] px-4 text-xs font-medium tracking-wide text-[var(--color-text-muted)]"
              >
                {label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
