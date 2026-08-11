import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import GlobalCinematicBackground from '@/components/background/GlobalCinematicBackground';
import JsonLdScript from '@/components/JsonLdScript';
import { generatePageMetadata } from '@/lib/seo';
import {
  getTaxiServiceSchema,
  getOrganizationSchema,
  getWebSiteSchema,
  getBreadcrumbSchema,
  getFAQPageSchema,
} from '@/lib/jsonld';

export const metadata: Metadata = generatePageMetadata({
  path: '/',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchemas = [
    getTaxiServiceSchema(),
    getOrganizationSchema(),
    getWebSiteSchema(),
    getBreadcrumbSchema('/'),
    getFAQPageSchema(),
  ];

  return (
    <html lang="en" className="h-full antialiased dark" suppressHydrationWarning>
      <head>
        <JsonLdScript data={globalSchemas} id="root-global-schemas" />
      </head>
      <body
        className="min-h-full bg-[#0B0B0D] text-[#F8F5EE] font-sans selection:bg-[#D4AF37] selection:text-slate-950 relative"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <GlobalCinematicBackground />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
