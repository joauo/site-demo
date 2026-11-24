import {
  ArrowRight,
  Briefcase,
  Compass,
  Layers,
  LineChart,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { SITE_CONFIG, type ServiceItem } from '../data/siteConfig';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Reveal } from './Reveal';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

const ICON_MAP: Record<ServiceItem['iconName'], typeof Briefcase> = {
  briefcase: Briefcase,
  layers: Layers,
  compass: Compass,
  wrench: Wrench,
  sparkles: Sparkles,
  lineChart: LineChart,
};

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const { services } = SITE_CONFIG;

  return (
    <section
      id="servicos"
      className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wide text-[var(--color-accent)]">
              {services.kicker}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-[var(--color-text)] sm:text-4xl">
              {services.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
              {services.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, idx) => {
            const Icon = ICON_MAP[item.iconName];

            return (
              <Reveal key={item.id} delayMs={idx * 45}>
                <article className="surface-card flex h-full flex-col overflow-hidden p-5">
                  <ImagePlaceholder
                    label="Sua imagem aqui"
                    className="aspect-[16/10] w-full"
                  />

                  <div className="mt-5 flex flex-1 flex-col">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-control)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-xl font-bold text-[var(--color-text)]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {item.description}
                    </p>

                    <div className="mt-auto pt-5">
                      <a
                        href="#contato"
                        onClick={() => onSelectService(item.title)}
                        className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
                      >
                        <span>Saiba mais</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
