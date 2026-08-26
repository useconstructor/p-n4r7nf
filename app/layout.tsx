import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maison Aurum',
  description: 'Luxury jewelry boutique website for Maison Aurum featuring handcrafted 18k gold and certified diamond pieces, with exclusive collections and appointment-based personalized service.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900" style={{ backgroundColor: '#0A0A0A' }}>
        {children}
      </body>
    </html>
  );
}
