import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

const SOCIAL_ICONS = {
  Instagram,
  LinkedIn: Linkedin,
  Facebook,
  YouTube: Youtube,
} as const;

export function Footer() {
  const { footer } = SITE_CONFIG;

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] pt-14 pb-24 sm:pb-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-[var(--color-border)] pb-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a
              href="#inicio"
              className="font-display inline-block text-xl font-bold text-[var(--color-text)]"
            >
              {SITE_CONFIG.brandLogoText}
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {footer.shortDescription}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {footer.socialLinks.map((social) => {
                const Icon = SOCIAL_ICONS[social.name as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={`${social.name} de ${SITE_CONFIG.companyName}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-control)] border border-[var(--color-border)] bg-[var(--color-surface-card)] text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-bold text-[var(--color-text)]">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-7 text-xs text-[var(--color-text-muted)] sm:flex-row sm:items-center">
          <p>
            © {SITE_CONFIG.year} {SITE_CONFIG.companyName}. Todos os direitos reservados.
          </p>
          <p>{SITE_CONFIG.city}</p>
        </div>
      </div>
    </footer>
  );
}
