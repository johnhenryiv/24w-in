import type { Metadata, Viewport } from 'next';
import './tokens.css';
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
        <meta charSet="utf-8" />
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
