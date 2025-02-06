import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import React from 'react';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Andreas Gerner',
  description: 'Persönliche Seite von Andreas Gerner',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${openSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
