/**
 * Nav component
 * Top navigation with wordmark and dark/light toggle.
 */

'use client';

import { useEffect, useState } from 'react';

const THEME_STORAGE_KEY = '24w-theme';

type Theme = 'light' | 'dark';

function isTheme(value: string | null | undefined): value is Theme {
  return value === 'light' || value === 'dark';
}

interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  links?: NavLink[];
  onThemeToggle?: (theme: Theme) => void;
  currentTheme?: Theme;
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
  const [theme, setTheme] = useState<Theme>(currentTheme);

  // After hydration, sync the button's state from the actual DOM/localStorage.
  // The pre-paint inline script in <head> is the source of truth for what the
  // user is actually looking at; reconcile to it so the icon never lies.
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem(THEME_STORAGE_KEY) : null;
    const domTheme = document.documentElement.dataset.theme;
    const actual: Theme = isTheme(stored) ? stored : isTheme(domTheme) ? domTheme : 'dark';
    setTheme(actual);
  }, []);

  const handleThemeToggle = () => {
    // Read current theme from the DOM (the rendered source of truth),
    // default to 'dark' when unset.
    const domTheme = document.documentElement.dataset.theme;
    const current: Theme = isTheme(domTheme) ? domTheme : 'dark';
    const newTheme: Theme = current === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // localStorage can throw in private/blocked contexts — theme still applies for the session.
    }

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
