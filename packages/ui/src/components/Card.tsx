/**
 * Card primitive
 * Base elevated card container.
 */

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
}

export function Card({ children, className = '', elevated = false }: CardProps) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: 'var(--surface-2)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-8)',
        boxShadow: elevated ? 'var(--shadow-md)' : 'none',
      }}
    >
      {children}
    </div>
  );
}
