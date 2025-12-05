import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Business TechPoint - Systems & Operations Community for Business Owners',
  description: 'Join a community that helps business owners, professionals, and teams build organised, automated, and scalable businesses. Practical learning, guided implementation, and expert support.',
  keywords: 'business systems, operations management, business automation, workflow optimization, business scaling, operations community, systems consulting',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>{children}</body>
    </html>
  );
}
