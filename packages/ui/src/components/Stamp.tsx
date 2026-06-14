/**
 * Stamp primitive
 * A single large, faint word/number behind content.
 * 15–25% opacity, bottom-left anchored.
 */

import { CSSProperties } from 'react';

interface StampProps {
  text: string;
  category?: 'number' | 'verb' | 'project' | 'place' | 'name' | 'tool' | 'concept';
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
  const opacityMap: Record<string, number> = {
    min: 0.13,
    max: 0.25,
    custom: opacityValue || 0.19,
  };

  const opacityVal = opacity === 'custom' ? opacityValue || 0.19 : opacityMap[opacity];
  const categoryColorMap: Record<string, string> = {
    number: 'var(--c-number)',
    verb: 'var(--c-verb)',
    project: 'var(--c-project)',
    place: 'var(--c-place)',
    name: 'var(--c-name)',
    tool: 'var(--c-tool)',
    concept: 'var(--c-number)',
  };

  return (
    <div
      className={`stamp ${className}`}
      style={{
        position: 'absolute',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-stamp)',
        lineHeight: 0.8,
        letterSpacing: '-0.02em',
        color: categoryColorMap[category],
        opacity: opacityVal,
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
