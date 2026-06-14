import type { Metadata } from 'next';
import { Nav, Footer, Button, Stamp } from '@24w/ui';

export const metadata: Metadata = {
  title: 'Philosophy',
  description:
    'Twenty-four ways in. The brand philosophy of 24W.IN — one system, twenty-four entryways, built within deliberate constraint.',
  alternates: { canonical: 'https://24w.in/philosophy' },
};

const ROOT_LINKS = [
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Ecosystem', href: '/ecosystem' },
];

/**
 * PLACEHOLDER COPY — pending Tony/Penn realignment + sign-off.
 *
 * Source: PKM/Documents/24w-in-manifesto.md (in-vault, Notion-imported). That
 * manifesto currently frames 24W as "cap active elements at 24" (a constraint
 * system). Tony ratified the PUBLIC meaning as "twenty-four ways in"
 * (Build Prompt v2 §13). The prose below LEADS with that framing while the
 * underlying "constraint" idea survives as a mechanic.
 *
 * TWO BLOCKERS before this ships:
 *   1. The in-vault manifesto text needs a Penn/Silas content pass (WS-002) to
 *      realign "cap at 24" -> "24 ways in".
 *   2. Publishing ANY private-vault manifesto text to the public site needs
 *      Tony's EXPLICIT sign-off. Until then this is placeholder, not final.
 */
const PARAGRAPHS = [
  'Twenty-four ways in. One system. At the heart of 24W.IN is a simple but deliberate idea: a world is easier to enter when it has named doors. Twenty-four of them.',
  'The number is not arbitrary. There is a limit to how much any one person can hold in view at once — projects, systems, ideas, people. Through experience that working number settled at twenty-four. What began as a personal constraint became a way of building.',
  'So 24W.IN is not an endless feed or an open-ended platform. It is a bounded field of twenty-four entryways — each one a person, a project, a place, a tool, or an idea. Every entryway stands on its own, and every entryway is also a smaller copy of the whole.',
  'The constraint is the point. By holding the system to twenty-four, there is room for clarity, for focus, for the slow work of doing a few things well. The limit does not narrow what is possible — it makes the possible legible.',
  'From the writing to the ventures to the tools beneath them, the principle holds: reduce the noise, sharpen the focus, and keep the whole human-centered. Pick a door. Each one leads back to the same system.',
  '24W.IN is not just a name. It is a way of working — and a way in.',
];

export default function Philosophy() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav links={ROOT_LINKS} />

      <main id="main">
        {/* Hero — stamp "WAYS" bleeds the edge; content bottom-left. */}
        <section
          style={{
            position: 'relative',
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            backgroundColor: 'var(--bg)',
            overflow: 'hidden',
            padding: 'var(--space-12)',
          }}
        >
          <Stamp
            text="WAYS"
            category="number"
            opacity="min"
            style={{ bottom: '-12%', right: '-3%', fontSize: 'clamp(6rem, 26vw, 20rem)' }}
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
              Philosophy
            </p>
            <h1 style={{ fontSize: 'var(--text-hero)', margin: 0 }}>Twenty-four ways in</h1>
          </div>
        </section>

        {/* Editorial flag — VISIBLE in the build so reviewers see the gate.
            Not final copy; remove once Tony signs off and Penn realigns. */}
        <section style={{ backgroundColor: 'var(--bg)', padding: '0 var(--space-8)' }}>
          <div style={{ maxWidth: 'var(--content-default)', margin: '0 auto' }}>
            <aside
              role="note"
              style={{
                backgroundColor: 'var(--surface-2)',
                border: '1px solid var(--brand)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)',
                color: 'var(--text-muted)',
                fontSize: 'var(--text-sm)',
                lineHeight: 1.65,
              }}
            >
              <strong style={{ color: 'var(--text)' }}>Placeholder copy — not yet approved.</strong>{' '}
              This text is a draft that re-frames the in-vault manifesto toward
              “twenty-four ways in.” Publishing any private-vault manifesto text
              to the public site needs Tony’s explicit sign-off, and the source
              manifesto still needs a Penn/Silas realignment pass. Treat as
              pending.
            </aside>
          </div>
        </section>

        {/* Long-form body — Atkinson a11y track, sentence case, left-aligned. */}
        <section
          style={{
            backgroundColor: 'var(--bg)',
            padding: 'var(--space-16) var(--space-8) var(--space-20)',
          }}
        >
          <article
            style={{
              maxWidth: '68ch',
              margin: '0 auto',
              fontFamily: 'var(--font-body-a11y)',
            }}
          >
            {PARAGRAPHS.map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: i === 0 ? 'var(--text-lg)' : 'var(--text-base)',
                  color: i === 0 ? 'var(--text)' : 'var(--text-muted)',
                  lineHeight: 1.8,
                  marginBottom: 'var(--space-8)',
                  textWrap: 'pretty',
                }}
              >
                {para}
              </p>
            ))}

            <div style={{ marginTop: 'var(--space-12)' }}>
              <Button variant="ghost" size="md">
                <a href="/ecosystem" style={{ color: 'inherit', textDecoration: 'none' }}>
                  See the ecosystem →
                </a>
              </Button>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
