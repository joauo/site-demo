import { SITE_CONFIG } from '../data/siteConfig';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Reveal } from './Reveal';

export function AboutSection() {
  const { about } = SITE_CONFIG;

  return (
    <section id="quem-somos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <ImagePlaceholder
              label="Sua imagem aqui"
              className="aspect-[4/4.3] w-full shadow-[var(--shadow-card)]"
            />
          </Reveal>

          <Reveal className="lg:col-span-7" delayMs={80}>
            <p className="text-sm font-semibold tracking-wide text-[var(--color-accent)]">
              {about.kicker}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-[var(--color-text)] sm:text-4xl">
              {about.title}
            </h2>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
              {about.paragraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="surface-card p-5"
                >
                  <div className="font-display tabular-nums text-3xl font-bold text-[var(--color-accent)]">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-sm font-semibold text-[var(--color-text)]">
                    {stat.label}
                  </div>
                  <div className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
