import { MessageCircle } from 'lucide-react';
import { buildWhatsAppHref } from '../data/siteConfig';

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-accent-ink)] shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)]"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
