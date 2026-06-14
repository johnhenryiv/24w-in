/**
 * Stamp primitive
 * A single large word/number set faint *behind* the content — the brand atom.
 * The color is a precomputed 15–25% `--c-*-dim` tint (spec §4.1/§7), so the
 * surface shows through at full element opacity. Stamps anchor in the tl/tr/br
 * corners and bleed an edge; the content (never the stamp) lives bottom-left.
 */

import { CSSProperties } from 'react';

interface StampProps {
  text: string;
  category?: 'number' | 'verb' | 'project' | 'place' | 'name' | 'tool' | 'concept';
  /**
   * `min`/`max` select the precomputed `--c-*-dim` tint (the in-range 15–25%
   * path). `custom` is an escape hatch that applies an explicit element
   * `opacity` multiplier on top of the dim tint.
   */
  opacity?: 'min' | 'max' | 'custom';
  opacityValue?: number;
  className?: string;
  ariaHidden?: boolean;
  style?: CSSProperties;
}

export function Stamp({
  text,
  category = 'number',
  opacity = 'min',
  opacityValue,
  className = '',
  ariaHidden = true,
  style = {},
}: StampProps) {
  // Map category → the precomputed dim tint (already 15–25% in dark,
  // 12–14% in light). The tint carries the transparency, NOT element opacity.
  const dimTintMap: Record<string, string> = {
    number: 'var(--c-number-dim)',
    verb: 'var(--c-verb-dim)',
    project: 'var(--c-project-dim)',
    place: 'var(--c-place-dim)',
    name: 'var(--c-name-dim)',
    tool: 'var(--c-tool-dim)',
    concept: 'var(--c-number-dim)',
  };

  // Element opacity is only used by the `custom` escape hatch.
  const customOpacity =
    opacity === 'custom' ? (opacityValue ?? 0.19) : undefined;

  return (
    <div
      className={`stamp ${className}`}
      style={{
        position: 'absolute',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-stamp)',
        lineHeight: 0.8,
        letterSpacing: 'var(--track-tight, -0.02em)',
        color: dimTintMap[category],
        ...(customOpacity !== undefined ? { opacity: customOpacity } : {}),
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0,
        ...style,
      }}
      aria-hidden={ariaHidden}
    >
      {text.toUpperCase()}
    </div>
  );
}
