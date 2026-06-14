/**
 * Button component
 * Variants: primary (solid magenta), ghost (outline), text
 */

import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    border: 'none',
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    transition: 'var(--transition-i)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    fontSize: 'var(--text-xs)',
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: 'var(--space-2) var(--space-4)' },
    md: { padding: 'var(--space-3) var(--space-6)' },
    lg: { padding: 'var(--space-4) var(--space-8)' },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--brand)',
      // on-accent foreground (light) — white-on-magenta ≈ 4.53:1 clears AA.
      // Was --text-inv (#0e0d0c near-black) = 4.29:1, which failed AA.
      color: 'var(--on-brand)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--text)',
      border: '1px solid var(--border)',
    },
    text: {
      backgroundColor: 'transparent',
      color: 'var(--brand)',
    },
  };

  const style = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  return (
    <button className={className} style={style} {...props}>
      {children}
    </button>
  );
}
