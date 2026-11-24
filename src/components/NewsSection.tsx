import { useEffect, useState } from 'react';
import { ArrowRight, Calendar, X } from 'lucide-react';
import { SITE_CONFIG, type ArticleItem } from '../data/siteConfig';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Reveal } from './Reveal';

export function NewsSection() {
  const { news } = SITE_CONFIG;
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedArticle) {
        setSelectedArticle(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedArticle]);

  return (
    <section id="novidades" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wide text-[var(--color-accent)]">
              {news.kicker}
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-[var(--color-text)] sm:text-4xl">
              {news.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
              {news.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {news.items.map((article, idx) => (
            <Reveal key={article.id} delayMs={idx * 65}>
              <article className="surface-card flex h-full flex-col overflow-hidden p-5">
                <ImagePlaceholder
                  label="Sua imagem aqui"
                  className="aspect-[16/10] w-full"
                />

                <div className="mt-5 flex flex-1 flex-col">
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-muted)]">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-display mt-2.5 text-xl font-bold text-[var(--color-text)]">
                    {article.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto pt-5">
                    <button
                      type="button"
                      onClick={() => setSelectedArticle(article)}
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
                    >
                      <span>Ler conteúdo</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal leve de leitura para o artigo selecionado */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          onClick={() => setSelectedArticle(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface-card)] p-6 shadow-xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-medium text-[var(--color-text-muted)]">
                  {selectedArticle.date}
                </div>
                <h3
                  id="article-modal-title"
                  className="font-display mt-1 text-2xl font-bold text-[var(--color-text)]"
                >
                  {selectedArticle.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label="Fechar artigo"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-control)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <ImagePlaceholder
              label="Sua imagem aqui"
              className="mt-5 aspect-[16/9] w-full"
            />

            <p className="mt-5 text-base leading-relaxed text-[var(--color-text-secondary)]">
              {selectedArticle.fullText}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
