import { User } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { Reveal } from './Reveal';

export function TestimonialsSection() {
  const { testimonials } = SITE_CONFIG;

  return (
    <section id="depoimentos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wide text-[var(--color-accent)]">
              {testimonials.kicker}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-[var(--color-text)] sm:text-4xl">
              {testimonials.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
              {testimonials.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.items.map((item, idx) => (
            <Reveal key={idx} delayMs={idx * 65}>
              <article className="surface-card flex h-full flex-col justify-between p-7">
                <blockquote className="text-base leading-relaxed text-[var(--color-text)]">
                  {item.quote}
                </blockquote>

                <footer className="mt-6 flex items-center gap-3.5 border-t border-[var(--color-border)] pt-5">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-placeholder)] text-[var(--color-text-muted)]"
                  >
                    <User className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-text)]">
                      {item.author}
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)]">
                      {item.role}
                    </div>
                  </div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
