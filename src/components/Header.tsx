import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { buildWhatsAppHref, SITE_CONFIG } from '../data/siteConfig';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  const whatsappHref = buildWhatsAppHref();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-200 ${
        scrolled
          ? 'border-[var(--color-border)] bg-[var(--color-bg)]/95 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-[var(--color-bg)]/85 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-[74px] max-w-6xl items-center justify-between gap-8 px-5 sm:px-8">
        {/* Zona 1: Espaço discreto para logo */}
        <a
          href="#inicio"
          className="font-display shrink-0 whitespace-nowrap text-xl font-bold tracking-tight text-[var(--color-text)]"
        >
          {SITE_CONFIG.brandLogoText}
        </a>

        {/* Zona 2: Links de navegação */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {SITE_CONFIG.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative shrink-0 whitespace-nowrap py-1 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[var(--color-accent)] after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Ação principal + hambúrguer mobile */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap rounded-[var(--radius-control)] bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-accent-ink)] shadow-sm transition-colors hover:bg-[var(--color-accent-hover)] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>Falar no WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-control)] border border-[var(--color-border-strong)] text-[var(--color-text)] lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-x-0 top-[74px] bottom-0 z-40 flex flex-col justify-between bg-[var(--color-bg)] px-6 py-8 lg:hidden"
        >
          <ul className="flex flex-col divide-y divide-[var(--color-border)]">
            {SITE_CONFIG.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display block py-4 text-xl font-semibold text-[var(--color-text)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[var(--radius-control)] bg-[var(--color-accent)] px-6 py-3 text-base font-semibold text-[var(--color-accent-ink)]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
