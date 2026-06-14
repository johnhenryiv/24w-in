import type { Metadata, Viewport } from 'next';
// Canonical design tokens — single source of truth (packages/tokens).
// tokens.css first (surfaces, type scale, theme blocks, font-face),
// then colors_and_type.css (semantic roles + --track-* tracking tokens).
import '@24w/tokens/css';
import '@24w/tokens/css/type';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const SITE_URL = 'https://24w.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '24W.IN — Twenty-four ways in',
    template: '%s | 24W.IN',
  },
  description:
    'Twenty-four ways in. One system. 24W.IN is the brand home for Tony Anderson’s ecosystem — twenty-four entryways into the people, projects, places, tools, and ideas that make up one connected world.',
  applicationName: '24W.IN',
  keywords: ['24W.IN', 'twenty-four ways in', 'ecosystem', 'The Prana Group', 'SETT.LIFE'],
  authors: [{ name: 'Tony Anderson' }],
  creator: 'Tony Anderson',
  robots: 'index, follow',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: '24W.IN',
    title: '24W.IN — Twenty-four ways in',
    description: 'Twenty-four ways in. One system.',
  },
  twitter: {
    card: 'summary_large_image',
    title: '24W.IN — Twenty-four ways in',
    description: 'Twenty-four ways in. One system.',
  },
};

// Organization + WebSite JSON-LD (§9 of Build Prompt v2). The parent entity
// framing ("The Prana Group LLC") is PENDING Tony's decision (Gate-1 #6) —
// kept minimal and flagged so it is trivial to correct.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: '24W.IN',
      description: 'Twenty-four ways in. One system.',
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: '24W.IN',
      url: SITE_URL,
      // PENDING Tony decision (entity framing): parentOrganization left as
      // The Prana Group LLC per current docs; confirm before legal copy ships.
      parentOrganization: {
        '@type': 'Organization',
        name: 'The Prana Group LLC',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/*
          Pre-paint theme sync. Runs before first paint to set data-theme from
          the persisted preference (24w-theme), falling back to the SSR default
          ("dark"). Prevents a flash of the wrong theme and the hydration
          mismatch that would otherwise occur once Nav reconciles to storage.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('24w-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
        <meta charSet="utf-8" />
        {/*
          LCP fix: preload the Bebas Neue display face. The LCP element is the
          oversized Bebas hero headline; without this the font is only
          discovered after CSS parse. Href matches the @font-face src
          re-declared against /fonts in globals.css, so the preload is used.
        */}
        <link
          rel="preload"
          as="font"
          type="font/ttf"
          href="/fonts/BebasNeue-Regular.ttf"
          crossOrigin="anonymous"
        />
        <meta name="color-scheme" content="dark light" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        {children}
      </body>
    </html>
  );
}
