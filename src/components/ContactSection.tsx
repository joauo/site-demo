import { useEffect, useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { buildWhatsAppHref, SITE_CONFIG } from '../data/siteConfig';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Reveal } from './Reveal';

interface ContactSectionProps {
  selectedService: string;
}

export function ContactSection({ selectedService }: ContactSectionProps) {
  const { contact } = SITE_CONFIG;

  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  useEffect(() => {
    if (selectedService) {
      setMessage(`Olá! Gostaria de solicitar um orçamento para ${selectedService}.`);
      setSubmittedMessage('');
    }
  }, [selectedService]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedName = name.trim();
    const digits = whatsapp.replace(/\D/g, '');
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      setError('Por favor, informe seu nome completo ou como prefere ser chamado.');
      return;
    }

    if (digits.length < 10) {
      setError('Informe um número de WhatsApp válido com DDD.');
      return;
    }

    if (!trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
      setError('Informe um endereço de e-mail válido.');
      return;
    }

    if (trimmedMessage.length < 5) {
      setError('Escreva uma breve mensagem explicando o que você precisa.');
      return;
    }

    const compiled = [
      `Olá! Meu nome é ${trimmedName}.`,
      `WhatsApp: ${whatsapp.trim()}`,
      `E-mail: ${trimmedEmail}`,
      `Mensagem: ${trimmedMessage}`,
    ].join('\n');

    setSubmittedMessage(compiled);
  };

  return (
    <section
      id="contato"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wide text-[var(--color-accent)]">
              Contato
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-[1.2] tracking-tight text-[var(--color-text)] sm:text-4xl">
              Fale com {SITE_CONFIG.companyName}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
              Envie sua mensagem pelo formulário ou utilize um dos canais diretos abaixo.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Formulário */}
          <Reveal className="lg:col-span-7">
            <div className="surface-card p-6 sm:p-8">
              {submittedMessage ? (
                <div className="space-y-5" aria-live="polite">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display text-xl font-bold text-[var(--color-text)]">
                        Mensagem pronta para envio
                      </h3>
                      <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                        Sua solicitação foi registrada. Se preferir retorno imediato, envie também pelo WhatsApp.
                      </p>
                    </div>
                  </div>

                  <pre className="whitespace-pre-wrap rounded-[var(--radius-control)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 font-sans text-sm text-[var(--color-text-secondary)]">
                    {submittedMessage}
                  </pre>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={buildWhatsAppHref(submittedMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[var(--radius-control)] bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-accent-ink)] hover:bg-[var(--color-accent-hover)]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>Enviar pelo WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedMessage('')}
                      className="inline-flex min-h-[46px] items-center justify-center rounded-[var(--radius-control)] border border-[var(--color-border-strong)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-accent)]"
                    >
                      Editar mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-sm font-semibold text-[var(--color-text)]"
                    >
                      Nome
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome completo"
                      required
                      className="min-h-[46px] w-full rounded-[var(--radius-control)] border border-[var(--color-border-strong)] bg-white px-4 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-whatsapp"
                        className="mb-1.5 block text-sm font-semibold text-[var(--color-text)]"
                      >
                        WhatsApp
                      </label>
                      <input
                        id="contact-whatsapp"
                        type="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="(00) 00000-0000"
                        required
                        className="min-h-[46px] w-full rounded-[var(--radius-control)] border border-[var(--color-border-strong)] bg-white px-4 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-sm font-semibold text-[var(--color-text)]"
                      >
                        E-mail
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seuemail@exemplo.com"
                        required
                        className="min-h-[46px] w-full rounded-[var(--radius-control)] border border-[var(--color-border-strong)] bg-white px-4 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-sm font-semibold text-[var(--color-text)]"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Descreva brevemente o serviço que procura ou tire sua dúvida."
                      required
                      className="w-full rounded-[var(--radius-control)] border border-[var(--color-border-strong)] bg-white px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
                    />
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 rounded-[var(--radius-control)] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[var(--radius-control)] bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-accent-ink)] shadow-sm transition-colors hover:bg-[var(--color-accent-hover)]"
                  >
                    Enviar mensagem
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Dados de contato & bloco neutro do mapa */}
          <Reveal className="space-y-6 lg:col-span-5" delayMs={80}>
            <div className="surface-card space-y-5 p-6 sm:p-7">
              <div className="flex items-start gap-3.5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-control)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-xs font-semibold text-[var(--color-text-muted)]">
                    Endereço
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-[var(--color-text)]">
                    {contact.address} · {SITE_CONFIG.city}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-control)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-xs font-semibold text-[var(--color-text-muted)]">
                    Telefone / WhatsApp
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-[var(--color-text)]">
                    {contact.phoneDisplay}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-control)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-xs font-semibold text-[var(--color-text-muted)]">
                    E-mail
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-[var(--color-text)]">
                    {contact.email}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-control)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-xs font-semibold text-[var(--color-text-muted)]">
                    Horário de atendimento
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-[var(--color-text)]">
                    {contact.hours}
                  </div>
                </div>
              </div>
            </div>

            <ImagePlaceholder
              label="Mapa aqui"
              variant="map"
              className="aspect-[16/9] w-full shadow-[var(--shadow-card)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
