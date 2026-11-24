import { ArrowRight, MessageCircle } from 'lucide-react';
import { buildWhatsAppHref, SITE_CONFIG } from '../data/siteConfig';
import { Reveal } from './Reveal';

export function CtaBanner() {
  const { ctaBanner } = SITE_CONFIG;
  const whatsappHref = buildWhatsAppHref();

  return (
    <section className="bg-[var(--color-accent)] py-16 text-[var(--color-accent-ink)] sm:py-20">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-[1.2] tracking-tight sm:text-4xl">
            {ctaBanner.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {ctaBanner.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-control)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-accent)] shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-white/95"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>{ctaBanner.whatsappLabel}</span>
            </a>

            <a
              href="#contato"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-control)] border border-white/45 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <span>{ctaBanner.quoteLabel}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
