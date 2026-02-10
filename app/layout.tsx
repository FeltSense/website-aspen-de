import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aspen Dental Clinic',
  description: 'Quality dental care for your whole family in Pearland, TX - where your smile is our priority',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
