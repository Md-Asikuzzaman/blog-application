import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from '../provider/ReactQueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog Application',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ReactQueryProvider>
        <body suppressHydrationWarning={true} className={inter.className}>
          {children}
        </body>
      </ReactQueryProvider>
    </html>
  );
}
