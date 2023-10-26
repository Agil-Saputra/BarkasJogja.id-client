// Next
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// Components
import Header from '../components/general/header';
import NavigationBar from '../components/general/navigationBar';
// Styles
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Barkasjogja.com Jual Beli Barang Bekas Jogja | 2023',
  description: 'Jual Beli Barang Bekas Yogyakarta',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className + ' justify-between p-2 container relative'}
      >
        <Header />
        <main className="pb-16 bg-base main-padding pt-4 min-h-[100dvh]">
          <div className='mb-8'>
		  {children}
		  </div>
        </main>
        <NavigationBar />
      </body>
    </html>
  );
}
