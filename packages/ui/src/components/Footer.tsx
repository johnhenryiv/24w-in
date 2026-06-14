/**
 * Footer component
 * Provenance signature + ecosystem links.
 */

interface FooterProps {
  year?: number;
  className?: string;
}

export function Footer({ year = new Date().getFullYear(), className = '' }: FooterProps) {
  return (
    <footer
      className={className}
      style={{
        backgroundColor: 'var(--surface)',
        borderTop: '1px solid var(--divider)',
        padding: 'var(--space-12) var(--space-8)',
        color: 'var(--text-muted)',
        fontSize: 'var(--text-xs)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--content-default)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-8)',
        }}
      >
        <p style={{ margin: 0, lineHeight: 1.65 }}>
          Made with love and care, with music in the air, plus TonYC.
        </p>

        <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
          <a href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            Home
          </a>
          <a href="/philosophy" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            Philosophy
          </a>
          <a href="/ecosystem" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            Ecosystem
          </a>
          <a href="/brand" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            Brand
          </a>
        </div>

        <p style={{ margin: 0, color: 'var(--text-faint)' }}>© {year} 24W.IN</p>
      </div>
    </footer>
  );
}
