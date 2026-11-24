import { Image as ImageIcon, MapPin } from 'lucide-react';

interface ImagePlaceholderProps {
  label?: string;
  variant?: 'image' | 'map';
  className?: string;
}

export function ImagePlaceholder({
  label = 'Sua imagem aqui',
  variant = 'image',
  className = '',
}: ImagePlaceholderProps) {
  const Icon = variant === 'map' ? MapPin : ImageIcon;

  return (
    <div
      role="img"
      aria-label={label}
      className={`flex flex-col items-center justify-center gap-2.5 rounded-[var(--radius-card)] border border-[var(--color-placeholder-border)] bg-[var(--color-placeholder)] p-6 text-center text-[var(--color-text-muted)] ${className}`}
    >
      <Icon className="h-6 w-6 stroke-[1.6]" aria-hidden="true" />
      <span className="text-sm font-medium tracking-tight">{label}</span>
    </div>
  );
}
