import type { Metadata } from 'next';
import { Nav, Footer, Stamp } from '@24w/ui';

export const metadata: Metadata = {
  title: 'Ecosystem',
  description:
    'The 24W.IN ecosystem map — how tony, 24w.in, notes, app, sett, and lab relate under one parent entity.',
  alternates: { canonical: 'https://24w.in/ecosystem' },
};

const ROOT_LINKS = [
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Ecosystem', href: '/ecosystem' },
];

// The subdomain map. `live` reflects current build status, not deploy status
// (nothing here is deployed). category drives the one-accent-per-card token.
interface Node {
  mark: string;
  domain: string;
  role: string;
  category: 'person' | 'project' | 'tool' | 'concept';
  status: 'built' | 'planned' | 'later';
  href?: string;
}

const NODES: Node[] = [
  {
    mark: 'tony',
    domain: 'tony.24w.in',
    role: 'Personal site — the founder/operator presence. The proving slice (D1).',
    category: 'person',
    status: 'built',
    href: 'https://tony.24w.in',
  },
  {
    mark: '24W.IN',
    domain: '24w.in',
    role: 'Root brand site — the 24 ways in, the philosophy, this map.',
    category: 'concept',
    status: 'built',
  },
  {
    mark: 'notes',
    domain: 'notes.24w.in',
    role: 'Public writing. Reads from a public-only source, never the private vault.',
    category: 'project',
    status: 'planned',
  },
  {
    mark: 'app',
    domain: 'app.24w.in',
    role: 'The interactive app — auth + data. Purpose pending Tony’s decision.',
    category: 'tool',
    status: 'planned',
  },
  {
    mark: 'sett',
    domain: 'sett.24w.in',
    role: 'SETT.LIFE — movement-ecology platform. A later ecosystem phase.',
    category: 'project',
    status: 'later',
    href: 'https://sett.24w.in',
  },
  {
    mark: 'lab',
    domain: 'lab.24w.in',
    role: 'The lab — experiments and builds (mySETT.LOG lineage). A later phase.',
    category: 'project',
    status: 'later',
  },
];

const CATEGORY_ACCENT: Record<Node['category'], string> = {
  person: 'var(--c-name)',
  project: 'var(--c-project)',
  tool: 'var(--c-tool)',
  concept: 'var(--c-number)',
};

const STATUS_LABEL: Record<Node['status'], string> = {
  built: 'built',
  planned: 'planned',
  later: 'later phase',
};

export default function Ecosystem() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav links={ROOT_LINKS} />

      <main id="main">
        {/* Hero */}
        <section
          style={{
            position: 'relative',
            minHeight: '55vh',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            backgroundColor: 'var(--bg)',
            overflow: 'hidden',
            padding: 'var(--space-12)',
          }}
        >
          <Stamp
            text="MAP"
            category="number"
            opacity="min"
            style={{ top: '-6%', right: '-3%', fontSize: 'clamp(7rem, 30vw, 22rem)' }}
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
              Ecosystem
            </p>
            <h1 style={{ fontSize: 'var(--text-hero)', margin: '0 0 var(--space-4) 0' }}>
              One system, many doors
            </h1>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-muted)',
                margin: 0,
                maxWidth: '52ch',
              }}
            >
              The subdomains of 24W.IN and how they relate under one parent entity.
            </p>
          </div>
        </section>

        {/* Parent entity — flagged as pending Tony's decision. */}
        <section style={{ backgroundColor: 'var(--surface)', padding: 'var(--space-16) var(--space-8)' }}>
          <div style={{ maxWidth: 'var(--content-default)', margin: '0 auto' }}>
            <div
              style={{
                position: 'relative',
                backgroundColor: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-10)',
                overflow: 'hidden',
              }}
            >
              <Stamp
                text="TPG"
                category="number"
                opacity="min"
                style={{ top: '-18%', right: '-2%', fontSize: 'clamp(5rem, 18vw, 12rem)' }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: 'var(--track-label, 0.16em)',
                    margin: '0 0 var(--space-3) 0',
                  }}
                >
                  Parent entity
                </p>
                <h2 style={{ fontSize: 'var(--text-2xl)', margin: '0 0 var(--space-4) 0' }}>
                  The Prana Group
                </h2>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', maxWidth: '60ch' }}>
                  The entity the ecosystem lives under.{' '}
                  <span style={{ color: 'var(--brand)' }}>
                    Entity framing pending — LLC vs. nonprofit / Detroit is Tony’s
                    decision (Gate-1 #6).
                  </span>{' '}
                  Shown as “The Prana Group LLC” per current docs.
                </p>
              </div>
            </div>

            {/* The hierarchy connector — a simple downward relation, no table. */}
            <div
              aria-hidden="true"
              style={{
                width: '2px',
                height: 'var(--space-12)',
                backgroundColor: 'var(--divider)',
                margin: 'var(--space-2) auto',
              }}
            />

            {/* Subdomain field — varied two-col, never a symmetric icon grid. */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--space-6)',
              }}
            >
              {NODES.map((node) => {
                const accent = CATEGORY_ACCENT[node.category];
                return (
                  <article
                    key={node.domain}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-start',
                      minHeight: '200px',
                      padding: 'var(--space-8)',
                      backgroundColor: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-xl)',
                      overflow: 'hidden',
                    }}
                  >
                    <Stamp
                      text={node.mark}
                      category={node.category === 'concept' ? 'number' : node.category === 'person' ? 'name' : node.category}
                      opacity="min"
                      style={{ top: '-10%', right: '-3%', fontSize: 'clamp(3rem, 12vw, 7rem)' }}
                    />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <span
                        style={{
                          display: 'inline-block',
                          marginBottom: 'var(--space-4)',
                          padding: 'var(--space-1) var(--space-3)',
                          fontSize: 'var(--text-xs)',
                          textTransform: 'uppercase',
                          letterSpacing: 'var(--track-label, 0.16em)',
                          color: accent,
                          border: `1px solid ${accent}`,
                          borderRadius: 'var(--radius-full)',
                        }}
                      >
                        {STATUS_LABEL[node.status]}
                      </span>
                      {/* Domain wordmark in DM Sans — lowercase is load-bearing
                          (never Bebas on a lowercase subdomain mark). */}
                      <h3
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontWeight: 700,
                          textTransform: 'none',
                          letterSpacing: 'normal',
                          fontSize: 'var(--text-lg)',
                          margin: 0,
                          color: 'var(--text)',
                        }}
                      >
                        {node.domain}
                      </h3>
                      <p
                        style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--text-muted)',
                          marginTop: 'var(--space-3)',
                          maxWidth: '38ch',
                        }}
                      >
                        {node.role}
                      </p>
                      {node.href && (
                        <p style={{ marginTop: 'var(--space-4)' }}>
                          <a
                            href={node.href}
                            style={{ fontSize: 'var(--text-sm)', color: accent }}
                          >
                            Visit →
                          </a>
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
