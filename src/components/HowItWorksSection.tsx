import { SITE_CONFIG } from '../data/siteConfig';
import { Reveal } from './Reveal';

export function HowItWorksSection() {
  const { howItWorks } = SITE_CONFIG;

  return (
    <section
      id="como-funciona"
      className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wide text-[var(--color-accent)]">
              {howItWorks.kicker}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-[var(--color-text)] sm:text-4xl">
              {howItWorks.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
              {howItWorks.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14">
          {/* Linha conectando os passos no desktop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-7 right-[16%] left-[16%] hidden h-[2px] bg-[var(--color-border-strong)] lg:block"
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {howItWorks.steps.map((step, idx) => (
              <Reveal key={step.number} delayMs={idx * 70}>
                <article className="surface-card relative flex h-full flex-col items-center p-7 text-center">
                  <span className="font-display tabular-nums relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)] text-xl font-bold text-[var(--color-accent-ink)] shadow-sm">
                    {step.number}
                  </span>
                  <h3 className="font-display mt-5 text-xl font-bold text-[var(--color-text)]">
                    {step.number}. {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
