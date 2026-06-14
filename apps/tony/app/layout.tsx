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

export const metadata: Metadata = {
  title: {
    default: 'Tony — 24W.IN',
    template: '%s | 24W.IN',
  },
  description: 'Tony — web developer, systems builder, twenty-four ways in.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tony.24w.in',
    siteName: '24W.IN — Tony',
    title: 'Tony — 24W.IN',
    description: 'Web developer, systems builder, twenty-four ways in.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@tonyc',
  },
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
          oversized Bebas hero headline (TOE.KNEE.SEE); without this the font
          is only discovered after CSS parse. Href matches the @font-face src
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
        <link rel="canonical" href="https://tony.24w.in" />
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        {children}
      </body>
    </html>
  );
}
