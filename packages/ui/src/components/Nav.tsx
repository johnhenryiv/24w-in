/**
 * Nav component
 * Top navigation with wordmark and dark/light toggle.
 */

'use client';

import { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  links?: NavLink[];
  onThemeToggle?: (theme: 'light' | 'dark') => void;
  currentTheme?: 'light' | 'dark';
}

export function Nav({
  links = [
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Now', href: '/now' },
    { label: 'Contact', href: '/contact' },
  ],
  onThemeToggle,
  currentTheme = 'dark',
}: NavProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>(currentTheme);

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    onThemeToggle?.(newTheme);
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'var(--space-6) var(--space-8)',
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--divider)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-lg)',
          fontWeight: 700,
          letterSpacing: '0.02em',
        }}
      >
        24<span style={{ color: 'var(--brand)' }}>W</span>.IN
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-8)', alignItems: 'center' }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: 'var(--text)',
              textDecoration: 'none',
              fontSize: 'var(--text-sm)',
              transition: 'var(--transition-i)',
            }}
          >
            {link.label}
          </a>
        ))}

        <button
          onClick={handleThemeToggle}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text)',
            fontSize: 'var(--text-sm)',
            padding: 'var(--space-2)',
          }}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
    </nav>
  );
}
