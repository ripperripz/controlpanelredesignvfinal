import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Outfit } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Corefinity | Premium Infrastructure',
  description: 'Visceral, cinematic managed hosting control panel.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning className="bg-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
