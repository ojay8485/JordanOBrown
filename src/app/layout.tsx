import type { Metadata } from 'next';
import { Inter, Xanh_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const xanhMono = Xanh_Mono({
  subsets: ['latin'],
  variable: '--font-xanh-mono',
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jordan Brown — Frontend Software Engineer',
  description:
    'Frontend Software Engineer building cinematic user interfaces, high-performance web applications, and AI-enabled digital experiences.',
  openGraph: {
    title: 'Jordan Brown — Frontend Software Engineer',
    description: 'Building cinematic user interfaces, high-performance web applications, and AI-enabled digital experiences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jordan Brown — Frontend Software Engineer',
    description: 'Building cinematic user interfaces, high-performance web applications, and AI-enabled digital experiences.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${xanhMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
