/**
 * StampCard
 * A card with a stamp in one corner and content anchored bottom-left.
 */

import { ReactNode } from 'react';
import { Stamp } from './Stamp';

interface StampCardProps {
  stamp: string;
  stampCategory?: 'number' | 'verb' | 'project' | 'place' | 'name' | 'tool' | 'concept';
  title: string;
  context?: string;
  children?: ReactNode;
  tag?: string;
  href?: string;
  className?: string;
}

export function StampCard({
  stamp,
  stampCategory = 'number',
  title,
  context,
  children,
  tag,
  href,
  className = '',
}: StampCardProps) {
  const content = (
    <div
      className={`stamp-card ${className}`}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 'var(--space-8)',
        minHeight: '240px',
        backgroundColor: 'var(--surface-2)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
      }}
    >
      <Stamp text={stamp} category={stampCategory} opacity="min" />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', margin: 0 }}>
          {title}
        </h3>
        {context && (
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--text-muted)',
              marginTop: 'var(--space-3)',
              marginBottom: 0,
            }}
          >
            {context}
          </p>
        )}
        {tag && (
          <span
            style={{
              display: 'inline-block',
              marginTop: 'var(--space-4)',
              padding: 'var(--space-2) var(--space-4)',
              fontSize: 'var(--text-xs)',
              backgroundColor: 'var(--surface-3)',
              color: 'var(--text-muted)',
              borderRadius: 'var(--radius-full)',
            }}
          >
            {tag}
          </span>
        )}
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
        {content}
      </a>
    );
  }

  return content;
}
