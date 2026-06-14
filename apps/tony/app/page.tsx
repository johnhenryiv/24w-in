import { Nav, Footer, Button, StampCard, Stamp, CTA } from '@24w/ui';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />

      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--bg)',
          overflow: 'hidden',
          padding: 'var(--space-12)',
        }}
      >
        <Stamp
          text="01"
          category="number"
          opacity="min"
          style={{ top: '10%', right: '5%' }}
        />

        <div style={{ maxWidth: '60ch', textAlign: 'left', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: '0 0 var(--space-3) 0' }}>
            Identity line
          </p>
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

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-8)',
            }}
          >
            {[
              { stamp: '01', title: 'myPKA', context: 'Personal knowledge system', tag: 'PKM' },
              { stamp: '02', title: 'SETT.LIFE', context: 'Movement ecology platform', tag: 'Platform' },
              {
                stamp: '03',
                title: '24W.IN',
                context: 'Multi-property site ecosystem',
                tag: 'System',
              },
              {
                stamp: '04',
                title: 'mySETT.LOG',
                context: 'Movement journaling + analytics',
                tag: 'Web App',
              },
            ].map((item) => (
              <StampCard
                key={item.stamp}
                stamp={item.stamp}
                stampCategory="number"
                title={item.title}
                context={item.context}
                tag={item.tag}
                href={`/work/${item.stamp}`}
              />
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
