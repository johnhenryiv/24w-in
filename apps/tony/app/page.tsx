import { Nav, Footer, Button, StampCard, Stamp } from '@24w/ui';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />

      {/* Hero Section — content anchored bottom-left (stamp Rule 03);
          the 01 stamp bleeds the top-right edge as the largest element
          (Rules 01/06). Not centered. */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          backgroundColor: 'var(--bg)',
          overflow: 'hidden',
          padding: 'var(--space-12)',
        }}
      >
        {/* Stamp bleeds off the top-right: a negative offset clips the glyph
            past the viewport edge so it reads as the largest element. */}
        <Stamp
          text="01"
          category="number"
          opacity="min"
          style={{ top: '-6%', right: '-4%', fontSize: 'clamp(8rem, 38vw, 28rem)' }}
        />

        <div style={{ maxWidth: '60ch', textAlign: 'left', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'var(--text-hero)', margin: '0 0 var(--space-4) 0' }}>
            TOE.KNEE.SEE
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-muted)', margin: '0 0 var(--space-8) 0' }}>
            Web developer. Systems builder. Twenty-four ways in.
          </p>
          <Button variant="primary" size="lg">
            See the work →
          </Button>
        </div>
      </section>

      {/* Selected Work Section */}
      <section
        style={{
          backgroundColor: 'var(--surface)',
          padding: 'var(--space-20) var(--space-8)',
        }}
      >
        <div style={{ maxWidth: 'var(--content-wide)', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-12)' }}>
            Selected Work
          </h2>

          {/* Bento, not a symmetric auto-fit grid (§11 rule 6 — vary the
              layout). The featured card spans both columns. */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'var(--space-8)',
            }}
          >
            {[
              { stamp: '01', title: 'myPKA', context: 'Personal knowledge system', tag: 'PKM', featured: true },
              { stamp: '02', title: 'SETT.LIFE', context: 'Movement ecology platform', tag: 'Platform', featured: false },
              {
                stamp: '03',
                title: '24W.IN',
                context: 'Multi-property site ecosystem',
                tag: 'System',
                featured: false,
              },
              {
                stamp: '04',
                title: 'mySETT.LOG',
                context: 'Movement journaling + analytics',
                tag: 'Web App',
                featured: false,
              },
            ].map((item) => (
              <div
                key={item.stamp}
                style={item.featured ? { gridColumn: 'span 2' } : undefined}
              >
                <StampCard
                  stamp={item.stamp}
                  stampCategory="number"
                  title={item.title}
                  context={item.context}
                  tag={item.tag}
                  href={`/work/${item.stamp}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: 'var(--space-20) var(--space-8)',
        }}
      >
        <div style={{ maxWidth: 'var(--content-default)', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-12)' }}>
            Method
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-12)',
              alignItems: 'start',
            }}
          >
            <div>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Build the foundation once so every surface is fast, accessible, and on-brand by default.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              {[
                'Server-first by default',
                'Token-driven components',
                'Performance budgets as gates',
                'RLS-first security',
                'Dark + light from day one',
                'Scroll reveals with fallback',
              ].map((principle) => (
                <div
                  key={principle}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)',
                  }}
                >
                  <span style={{ color: 'var(--brand)', fontWeight: 700 }}>→</span>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text)' }}>
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section
        style={{
          backgroundColor: 'var(--surface)',
          padding: 'var(--space-16) var(--space-8)',
        }}
      >
        <div style={{ maxWidth: 'var(--content-default)', margin: '0 auto' }}>
          <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)' }}>Tools</h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--space-6)' }}>
            {[
              { category: 'PKM', tools: ['Obsidian', 'Claude Code'] },
              { category: 'Dev', tools: ['Next.js', 'Supabase', 'Vercel'] },
              { category: 'AI', tools: ['Claude', 'GPT-4o'] },
              { category: 'Ops', tools: ['Cloudflare', 'Cal.com', 'Tally'] },
            ].map((group) => (
              <div key={group.category}>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', margin: '0 0 var(--space-2) 0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {group.category}
                </p>
                {group.tools.map((tool) => (
                  <p key={tool} style={{ fontSize: 'var(--text-sm)', margin: 'var(--space-1) 0', color: 'var(--text)' }}>
                    {tool}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Now Section */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: 'var(--space-16) var(--space-8)',
        }}
      >
        <div style={{ maxWidth: 'var(--content-default)', margin: '0 auto' }}>
          <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-8)' }}>Now</h3>
          <div
            style={{
              backgroundColor: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-8)',
            }}
          >
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
              Building the 24W.IN ecosystem — the foundation for ten surfaces. Hyper-focused on tokens, components, performance gates, and security-first design.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        style={{
          backgroundColor: 'var(--surface)',
          padding: 'var(--space-16) var(--space-8)',
        }}
      >
        <div style={{ maxWidth: 'var(--content-default)', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-8)' }}>
            Let's work together
          </h2>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-4)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Button variant="primary" size="lg">
              Book a call
            </Button>
            <Button variant="ghost" size="lg">
              Send a message
            </Button>
          </div>
          <p style={{ marginTop: 'var(--space-6)', color: 'var(--text-muted)' }}>
            tonyc.anderson@gmail.com
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
