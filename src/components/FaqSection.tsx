import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { Reveal } from './Reveal';

export function FaqSection() {
  const { faq } = SITE_CONFIG;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="duvidas"
      className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="text-sm font-semibold tracking-wide text-[var(--color-accent)]">
              {faq.kicker}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-[var(--color-text)] sm:text-4xl">
              {faq.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
              {faq.subtitle}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7" delayMs={70}>
            <div className="divide-y divide-[var(--color-border)] rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface-card)] px-6 shadow-[var(--shadow-card)]">
              {faq.items.map((item, idx) => {
                const isOpen = openIndex === idx;
                const panelId = `faq-panel-${idx}`;
                const triggerId = `faq-trigger-${idx}`;

                return (
                  <div key={idx}>
                    <button
                      type="button"
                      id={triggerId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="flex min-h-[60px] w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[var(--color-accent)] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      className={`grid transition-all duration-200 ${
                        isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
