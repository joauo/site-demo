import { BadgePercent, Clock, ShieldCheck, Users } from 'lucide-react';
import { SITE_CONFIG, type DifferentialItem } from '../data/siteConfig';
import { Reveal } from './Reveal';

const ICON_MAP: Record<DifferentialItem['iconName'], typeof Users> = {
  users: Users,
  shieldCheck: ShieldCheck,
  clock: Clock,
  badgePercent: BadgePercent,
};

export function DifferentialsSection() {
  const { differentials } = SITE_CONFIG;

  return (
    <section id="diferenciais" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wide text-[var(--color-accent)]">
              {differentials.kicker}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-[var(--color-text)] sm:text-4xl">
              {differentials.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
              {differentials.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.items.map((item, idx) => {
            const Icon = ICON_MAP[item.iconName];

            return (
              <Reveal key={item.title} delayMs={idx * 60}>
                <article className="surface-card flex h-full flex-col items-start p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-control)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
