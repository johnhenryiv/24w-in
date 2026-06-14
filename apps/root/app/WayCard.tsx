/**
 * WayCard — one entryway in the 24-card manifesto field.
 *
 * Composes the design-system Stamp primitive (the brand atom) with a category
 * chip and the bottom-left content anchor (stamp Rule 03). It is NOT a
 * reinvention of StampCard — it extends the same grammar with the category
 * chip + private/placeholder states the root field needs. One accent per
 * surface: the chip and stamp both read the SAME category token (Rule 05).
 *
 * Server component — no interactivity, renders on the server.
 */

import { Stamp } from '@24w/ui';
import { STAMP_CATEGORY, type Way } from './ways';

const CATEGORY_ACCENT: Record<string, string> = {
  number: 'var(--c-number)',
  name: 'var(--c-name)',
  project: 'var(--c-project)',
  place: 'var(--c-place)',
  tool: 'var(--c-tool)',
};

export function WayCard({ way }: { way: Way }) {
  const stampCategory = STAMP_CATEGORY[way.category];
  const accent = CATEGORY_ACCENT[stampCategory];
  const isPrivate = way.status === 'private';
  const isPlaceholder = way.status === 'placeholder';

  const card = (
    <article
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        height: '100%',
        minHeight: way.span === 'tall' ? '340px' : '240px',
        padding: 'var(--space-8)',
        backgroundColor: 'var(--surface-2)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        // Placeholders read faded; private reads sealed. Both stay legible (AA).
        opacity: isPlaceholder ? 0.72 : 1,
      }}
    >
      {/* The stamp number bleeds the top-right edge (Rules 01/06): largest
          element on the surface, faint category-dim tint. */}
      <Stamp
        text={way.n}
        category={stampCategory}
        opacity="min"
        style={{ top: '-8%', right: '-4%', fontSize: 'clamp(5rem, 16vw, 11rem)' }}
      />

      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Category chip — one accent per surface, same token as the stamp. */}
        <span
          style={{
            display: 'inline-block',
            marginBottom: 'var(--space-4)',
            padding: 'var(--space-1) var(--space-3)',
            fontSize: 'var(--text-xs)',
            fontFamily: 'var(--font-body)',
            textTransform: 'uppercase',
            letterSpacing: 'var(--track-label, 0.16em)',
            color: accent,
            border: `1px solid ${accent}`,
            borderRadius: 'var(--radius-full)',
          }}
        >
          {isPrivate ? 'private' : way.category}
        </span>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-xl)',
            margin: 0,
            color: 'var(--text)',
          }}
        >
          {way.title}
        </h3>

        {way.description && (
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--text-muted)',
              marginTop: 'var(--space-3)',
              marginBottom: 0,
              maxWidth: '40ch',
            }}
          >
            {way.description}
          </p>
        )}
      </div>
    </article>
  );

  // Real entries with an entryway link wrap in an anchor; everything else is
  // static (placeholders/private are not navigable yet).
  if (way.href && way.status === 'real') {
    return (
      <a
        href={way.href}
        style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
        aria-label={`${way.title} — ${way.category}`}
      >
        {card}
      </a>
    );
  }

  return card;
}
