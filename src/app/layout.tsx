import type { Metadata } from 'next';
import { montserrat } from '@/app/ui/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shawn Kost - My Portfolio',
  description:
    'My name is Shawn Kost, and I am a front-end developer. Since a young age I have had a love for anything that involves computers and technology. I began with...'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
