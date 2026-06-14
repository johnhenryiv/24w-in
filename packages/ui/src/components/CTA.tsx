/**
 * CTA (Call-to-Action) component
 * Composable button container with optional secondary action.
 */

import { ReactNode } from 'react';
import { Button, type ButtonProps } from './Button';

interface CTAProps {
  primary: ButtonProps & { label: string };
  secondary?: (ButtonProps & { label: string }) | null;
  layout?: 'horizontal' | 'vertical' | 'stacked';
  className?: string;
}

export function CTA({
  primary,
  secondary,
  layout = 'horizontal',
  className = '',
}: CTAProps) {
  const { label: primaryLabel, ...primaryProps } = primary;

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    gap: 'var(--space-4)',
    flexDirection:
      layout === 'stacked' || layout === 'vertical' ? 'column' : ('row' as const),
  };

  return (
    <div className={className} style={containerStyle}>
      <Button {...primaryProps}>{primaryLabel}</Button>
      {secondary && (
        <Button {...secondary}>{secondary.label}</Button>
      )}
    </div>
  );
}
