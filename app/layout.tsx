import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ViseBuzz - AI-Powered Ad Creation',
  description: 'Create engaging ads with the power of AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}