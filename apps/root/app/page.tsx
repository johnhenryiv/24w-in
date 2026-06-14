import { Nav, Footer, Button, Stamp } from '@24w/ui';
import { WAYS } from './ways';
import { WayCard } from './WayCard';

// Root-site nav links (the brand site, not tony's personal site).
const ROOT_LINKS = [
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Ecosystem', href: '/ecosystem' },
];

// Bento span → grid placement. A VARIED field, never a symmetric grid
// (stamp non-negotiable #6). `wide` spans two columns; `tall` spans two rows.
function spanStyle(span?: 'wide' | 'tall'): React.CSSProperties | undefined {
  if (span === 'wide') return { gridColumn: 'span 2' };
  if (span === 'tall') return { gridRow: 'span 2' };
  return undefined;
}

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav links={ROOT_LINKS} />

      <main id="main">
        {/* Hero — content anchored bottom-left (Rule 03); the "24" stamp bleeds
            the top-right edge as the largest element (Rules 01/06). */}
        <section
          style={{
            position: 'relative',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            backgroundColor: 'var(--bg)',
            overflow: 'hidden',
            padding: 'var(--space-12)',
          }}
        >
          <Stamp
            text="24"
            category="number"
            opacity="min"
            style={{ top: '-8%', right: '-3%', fontSize: 'clamp(10rem, 44vw, 34rem)' }}
          />

          <div style={{ maxWidth: '60ch', position: 'relative', zIndex: 1 }}>
            <p
              style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--brand)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 'var(--track-eyebrow, 0.20em)',
                margin: '0 0 var(--space-5) 0',
              }}
            >
              24W.IN
            </p>
            <h1 style={{ fontSize: 'var(--text-hero)', margin: '0 0 var(--space-4) 0' }}>
              Twenty-four ways in
            </h1>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-muted)',
                margin: '0 0 var(--space-8) 0',
                maxWidth: '48ch',
              }}
            >
              One system. Twenty-four entryways into the people, projects, places,
              tools, and ideas that make up one connected world. Pick a door.
            </p>
            <Button variant="primary" size="lg">
              Read the philosophy →
            </Button>
          </div>
        </section>

        {/* The 24-card manifesto field — a VARIED bento, never symmetric. */}
        <section
          style={{
            backgroundColor: 'var(--surface)',
            padding: 'var(--space-20) var(--space-8)',
          }}
        >
          <div style={{ maxWidth: 'var(--content-wide)', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)' }}>
              The 24 ways in
            </h2>
            <p
              style={{
                fontSize: 'var(--text-base)',
                color: 'var(--text-muted)',
                maxWidth: '60ch',
                marginBottom: 'var(--space-12)',
              }}
            >
              Each card is one way into the ecosystem. Some doors are open, some
              are being built, and some are kept private — twenty-four in all.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridAutoRows: 'minmax(240px, auto)',
                gridAutoFlow: 'dense',
                gap: 'var(--space-6)',
              }}
            >
              {WAYS.map((way) => (
                <div key={way.n} style={spanStyle(way.span)}>
                  <WayCard way={way} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
